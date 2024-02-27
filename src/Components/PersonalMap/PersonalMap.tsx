

import React, { useEffect, useState } from 'react'
import "./PersonalMap.scss"
import { FC } from 'react'
import { PersonType } from './typesPerson'
import fetchData from '../../AxiosRequest/AxiosReques'



const PersonalMap: FC <PersonType> = ({className}) => {
  const [mapData,setMapData] = useState<object>()
  // useEffect(() => {
  //   console.log(mapData)
  // }, [mapData])
 

  // 'https://jsonplaceholder.typicode.com/posts'
  // const makingMap = () => {
  //   fetch("./sourses/gptMap.json")
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  // }
  // makingMap()
  useEffect(() => {
    fetchData("https://jsonplaceholder.typicode.com/posts")
    .then(data => setMapData(data))
  }, [])


  return (
    <div className={className}>
        {/* <div>{makingMap}</div> */}
        <div className='resizer'></div>
    </div>
  )
}

export default PersonalMap
