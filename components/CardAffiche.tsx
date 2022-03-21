import Image from 'next/image'
export default function CardAffiche(props) {
  return <div className="shadow-lg p-3 mb-5 bg-dark rounded "><div className="card h-100 justify-content-center text-white bg-dark mb-3" >
  <div className="row g-0 text-white bg-dark mb-3">
      <div className="col-md-4">
      <img src={props.image} className="img-fluid rounded-start" alt="test" style={{maxHeight:"310px"}}/>
    </div>
    <div className="col-md-8">
      <div className="card-body ">
        <h4 className="card-text" >{props.text}</h4>
      </div>
    </div>
  </div>
  </div>
    </div>

}
