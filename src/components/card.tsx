

const Card = (props: any) => {

   
  return (
    <div className={`bg-base-100 shadow-xl rounded-md border-slate-300`} onClick= {()=> props.openModal(props.id)}>

      <figure>
        <img
          src={`${props.url}`}
          alt={`${props.alt_description}`}
          className="object-fit w-full cursor-pointer"
        />
    
      </figure>
      <div className="flex justify-between p-2">
        <div className="flex justify-evenly text-sm items-center">
          <img
            className="rounded-full w-12 h-12 p-1"
            src={`${props.profile_image}`}
            alt={`${props.name}`}
          />
          <p className="p-1">
            <strong>{props.name}</strong>
            <br />
            <span className="text-slate-600">@{props.username}</span>
          </p>
          </div>
          <div className="flex justify-between items-center">
          <img className="w-6 h-6" src="/assets/like.png" alt="like" />
          <p>{props.likes}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
