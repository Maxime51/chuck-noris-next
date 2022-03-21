import { redirect } from "next/dist/server/api-utils";
import router from "next/router";
import { useState } from "react";
import GoodResponse from "./GoodResponse";
import Layout from "./Layout";
import NotGoodResponse from "./NotGoodResponse";

export default function CardAfficheInput(props) {
  const [responseInput, setResponseInput] = useState("");
  const [show, setshow] = useState(0);

  function validResponse() {
    if (responseInput === props.reponse) {
      setshow(1);
    } else {
      setshow(2);
    }
  }
    function handleClick() {
    router.push(`/mentalChoice/${props.page + 1}`)
    setshow(0);
  }

  if (show === 0) {
    return <Layout>
      <div className="shadow-lg p-3 mb-5 bg-dark rounded">
      <div className="card h-100 justify-content-center text-white bg-dark mb-3" >
      <div className="row g-0">
          <div className="col-md-4">
          <img src={props.image} className="img-fluid rounded-start" alt="" style={{maxHeight:"310px"}}/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Question :</h5>
              <h4 className="card-text">{props.question}</h4>
              <input type="text" onChange={(event) => setResponseInput(event.target.value)} className="form-control" id="response" aria-describedby="response" placeholder="Your Response" />
              </div>
              <br></br>

            <button onClick={validResponse} type="submit" className="btn btn-primary">Submit</button>
        </div>
      </div>
        </div>
      </div>
    </Layout>
  } else if (show === 1) {
    return <Layout><div onClick={handleClick}><GoodResponse /></div></Layout>
  }else if (show === 2) {
    return <Layout><div onClick={()=>{setshow(0)}}><NotGoodResponse /></div></Layout>
  }
}
