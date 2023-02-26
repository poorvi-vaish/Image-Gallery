import { useEffect, useState } from "react";
import Card from "./card";
import { getPhotos } from "../api/getPhotos";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { searchPhotos } from "../api/searchPhotos";
import Modal from './modal';
import { ImageType } from "../types";


const Gallery = () => {
  const [data, setData] = useState<ImageType[]>();
  const [search, setSearch] = useState<string>("");
  const [image, setImage] = useState<ImageType>({} as ImageType);

  const [modal, setModal] = useState<boolean>(false);
  const [id, setId] = useState<string>("");

  const openModal = (img_id:string) => {
    setModal(true);
    setId(img_id);
    const res= data?.find((item) => item.id === img_id);
    setImage(res as ImageType);

  };

  const closeModal = () => {
    setModal(false);
  };

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const getImages = async () => {
    const res = await getPhotos();
    setData(res);
  };

  useEffect(() => {
    if(search.length>= 2){
      const searchImages = async () => {
        const res = await searchPhotos(search);
        setData(res.results);
      };
      searchImages();
    }
    else{
      getImages();
    }
  }, [search]);

  return (
    <div className={modal? "overflow-hidden fixed w-full":""}>
      <div className="h-[50vh] w-full bg-cover bg-hero-pattern flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold p-2 text-white">
          Download high quality image by creators
        </h2>
        <input
          type="text"
          placeholder="Search here"
          className="input w-full max-w-xl relative"
          onChange={handleSearch}
        />
      </div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }} className="p-2" >
        <Masonry gutter="1rem">
          {data?.map((item) => (
            <Card
            key={item.id}
              id={item.id}
              url={item.urls.small}
              name={item.user.name}
              username={item.user.username}
              profile_image={item.user.profile_image.small}
              alt_description={item.alt_description}
              likes={item.likes}
              openModal={openModal}
            />
            
          ))}
        </Masonry>
      </ResponsiveMasonry>
      {modal && <Modal id ={id} closeModal={closeModal} image ={image} />}
    </div>
  );
};
export default Gallery;
