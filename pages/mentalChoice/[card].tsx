import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CardAfficheChoice from "../../components/CardAfficheChoice";
import Custom404 from "../404";
import { questionData } from "../../dataQuestion.js";


export default function Card() {
  const router = useRouter()
  const numberOfPages: any = router.query.card;
  const [affiche, setAffiche] = useState(<></>);


  useEffect(() => {
    if (numberOfPages !== undefined && numberOfPages <= questionData.length && !isNaN(numberOfPages)) {
      const arrayResponse = [questionData[parseInt(numberOfPages)-1].reponse,questionData[parseInt(numberOfPages)-1].response2,questionData[parseInt(numberOfPages)-1].response3]
      setAffiche(<CardAfficheChoice page={parseInt(numberOfPages)} question={questionData[parseInt(numberOfPages) - 1].question} arrayReponse={arrayResponse} reponse={questionData[parseInt(numberOfPages)-1].reponse} image={questionData[parseInt(numberOfPages)-1].image}/>);
    } else {
      setAffiche(<Custom404 />)
    }
  }, [numberOfPages])


  return <div>
    {affiche}
  </div>
}
