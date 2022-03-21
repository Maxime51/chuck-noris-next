export default function CardAffiche(props) {
  return <div className="container" style={{ width: "20rem",marginTop:"200px" }}>
    <div className="card">
      <div className="card-header">
        Question
          </div>
          <img src={props.image}></img>
        <div className="card-body">
        <h5 className="card-title">{props.text}</h5>
      </div>
      </div>
    </div>
}
