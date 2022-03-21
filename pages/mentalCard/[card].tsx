import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CardAffiche from "../../components/CardAffiche";
import Layout from "../../components/Layout";
import Custom404 from "../404";
import { questionData } from "../../dataQuestion.js";


export default function Card() {
  const router = useRouter()
  const numberOfPages: any = router.query.card;
  const [affiche, setAffiche] = useState(<></>);
  const [click, setClick] = useState(false);
  const [card, setCard] = useState(<></>);

  useEffect(() => {
    if (numberOfPages !== undefined && numberOfPages <= questionData.length && !isNaN(numberOfPages)) {
      setAffiche(<CardAffiche text={questionData[parseInt(numberOfPages)-1].question} image={questionData[parseInt(numberOfPages)-1].image}/>);
    } else {
      setAffiche(<Custom404 />)
    }
  },[numberOfPages])

  useEffect(() => {
    if (numberOfPages !== undefined && numberOfPages <= questionData.length && !isNaN(numberOfPages)) {
      if (click) {
        setAffiche(<CardAffiche text={questionData[parseInt(numberOfPages) - 1].reponse} image={questionData[parseInt(numberOfPages) - 1].image} />);
      } else {
        setAffiche(<CardAffiche text={questionData[parseInt(numberOfPages) - 1].question} image={questionData[parseInt(numberOfPages) - 1].image} />);
      }
    }
  }, [click])

  return <Layout>
    <div onClick={() => { setClick(!click) }}>
    {affiche}
    </div>
    </Layout>
}
