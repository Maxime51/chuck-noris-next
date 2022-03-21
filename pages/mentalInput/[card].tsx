import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CardAfficheInput from "../../components/CardAfficheInput";
import Custom404 from "../404";
import { questionData } from "../dataQuestion";


export default function Card() {
  const router = useRouter()
  const numberOfPages: any = router.query.card;
  const [affiche, setAffiche] = useState(<></>);
  const [click, setClick] = useState(false);

  useEffect(() => {
    if (numberOfPages !== undefined && numberOfPages <= questionData.length && !isNaN(numberOfPages)) {
      setAffiche(<CardAfficheInput page={parseInt(numberOfPages)}question={questionData[parseInt(numberOfPages)-1].question} reponse={questionData[parseInt(numberOfPages)-1].reponse} image={questionData[parseInt(numberOfPages)-1].image}/>);
    } else {
      setAffiche(<Custom404 />)
    }
  }, [numberOfPages])


  return <div>
    {affiche}
  </div>
}
