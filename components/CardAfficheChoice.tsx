import { redirect } from "next/dist/server/api-utils";
import router from "next/router";
import { useState } from "react";
import GoodResponse from "./GoodResponse";
import Layout from "./Layout";
import NotGoodResponse from "./NotGoodResponse";

export default function CardAfficheChoice(props) {
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
      <div className="card h-100 justify-content-center" style={{marginTop:"200px"}}>
      <div className="row g-0">
          <div className="col-md-4">
          <img src={props.image} className="img-fluid rounded-start" alt=""/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Question :</h5>
              <p className="card-text">{props.question}</p>
              <form onSubmit={validResponse}>
                {props.arrayReponse.map((element) => {
                return (
                  <div className="form-check" key={element}>
                  <input className="form-check-input" type="radio" onClick={() => setResponseInput(`${element}`)} name="flexRadioDefault" id="flexRadioDefault1" />
                  <label className="form-check-label" >
                    {element}
                  </label>
                </div>);
               })}
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
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
