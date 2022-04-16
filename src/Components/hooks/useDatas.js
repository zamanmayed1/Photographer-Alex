import { useEffect, useState } from "react"

const useDatas = () =>{
          const [services, setSevices] = useState([])
          useEffect(()=>{
                    fetch('Servicesdata.json')
                    .then(res =>res.json())
                    .then(data => setSevices(data))
          },[])
          
          return [services]

}

export default useDatas