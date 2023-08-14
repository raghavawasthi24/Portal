import React from 'react'
import entryVideo from "../../assets/Csi Animation.gif"
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const LandingPage = () => {
    const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/test')
    }, 10000)
  }, [])
  return (
    <div ><img src={entryVideo} alt='entryvideo' style={{height:"60vh",margin:"20vh auto "}}/></div>
  )
}

export default LandingPage