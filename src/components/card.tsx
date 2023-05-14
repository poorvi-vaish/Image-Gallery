const Card = (props: any) => {
  return (
    <div
      className={`bg-base-100 shadow-xl rounded-md border-slate-300`}
      onClick={() => props.openModal(props.id)}
    >
      <figure>
        <img
          src={`${props.url}`}
          alt={`${props.name}.png`}
          className="object-fit w-full cursor-pointer"
        />
      </figure>
      <div className="flex flex-col p-2">
        <div className="flex p-1 items-center">
          <p>IMdb Ratings {props.rating}</p>
        </div>
        <div className="flex justify-evenly text-sm items-center">
          <p className="p-1">
            <strong>{props.name}</strong>
            <br />
            <span className="text-slate-600">{props.description}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
