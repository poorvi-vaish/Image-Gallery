const Modal = ({ id, closeModal, image }: any) => {
  return (
    <>
      <div className="fixed flex items-center justify-center w-screen h-screen backdrop-blur-sm  bottom-auto z-10 top-0">
        <div className="modal-box relative">
          <label
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={() => closeModal()}
          >
            ✕
          </label>
          <img
            src={image?.urls.small}
            alt={image?.alt_description}
            className="w-full object-cover"
          />
          <div className="flex justify-between p-3">
            <div className="flex justify-evenly text-sm items-center">
              <img
                className="rounded-full w-12 h-12 p-1"
                src={`${image?.user.profile_image.medium}`}
                alt={`${image?.alt_description}`}
              />
              <p className="p-1">
                <strong>{image?.user.name}</strong>
                <br />
                <span className="text-slate-600">@{image?.user.username}</span>
              </p>
            </div>
            <div className="flex flex-col items-center p-1">
              {image?.user.instagram_username && (
            <div className="flex items-center">
              <img src="/assets/insta.png" alt="insta" className="w-6 h-6" />
              <p className="text-slate-600">/{image?.user.instagram_username}</p>
            </div>
          )}
          {image?.user.twitter_username && (
            <div className="flex items-center">
            <img src="https://img.icons8.com/ios/50/null/twitter--v1.png" alt="twitter" className="w-6 h-6"/>
              <p className="text-slate-600">/{image?.user.twitter_username}</p>
            </div>
          )}
            </div>
            <div className="flex justify-evenly items-center">
              <img className="w-6 h-6" src="/assets/like.png" alt="like" />
              <p>{image?.likes}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
