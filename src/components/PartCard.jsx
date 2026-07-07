function PartCard(props) {
  return (
    <div className="part-card">
      <div className="part-image">
        {props.icon}
      </div>

      <div className="part-info">
        <h3>{props.name}</h3>
        <p>{props.description}</p>

        <div className="part-detail">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default PartCard;