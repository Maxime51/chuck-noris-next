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
    return <Layout><div className="container" style={{ width: "20rem", marginTop: "200px" }}>
      <div className="card">
        <div className="card-header">
          Question
        </div>
        <img src={props.image}/>
        <div className="card-body">
          <div className="form-group">
            <h5 className="card-title">{props.question}</h5>
            <input type="text" onChange={(event) => setResponseInput(event.target.value)} className="form-control" id="response" aria-describedby="response" placeholder="Your Response" />
          </div>
          <button onClick={validResponse} type="submit" className="btn btn-primary">Submit</button>
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
