const Thumbnail = (props: any) => {
  return (
    <div className="thumbnail">
      <img src={props.image} alt={props.title} />
      <div className="caption">
        <h3>{props.title}</h3>
      </div>
    </div>
  );
};

export default Thumbnail;