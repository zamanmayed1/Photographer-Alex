import { useEffect, useState } from "react"

const useDatas = () =>{
          const [services, setSevices] = useState([])
          const [reviews, setReviews] = useState([])
          useEffect(()=>{
                    fetch('Servicesdata.json')
                    .then(res =>res.json())
                    .then(data => setSevices(data))
          },[])
          useEffect(()=>{
                    fetch('review.json')
                    .then(res =>res.json())
                    .then(data => setReviews(data))
          },[])
          
          return [services , reviews]

}

export default useDatas