import { useState } from 'react'

/* eslint-disable react/prop-types */
const Accordian = ({heading,body}) => {

    const [show,setShow] = useState(false)    

    const handleClick = (e) => {
        e.preventDefault()
        setShow(!show)
    }

  return (
    <div className="faq-box">
            <div className={`faq-headings ${show ? '': 'rounded'}`} onClick={(e)=>handleClick(e)}>
                <i className={`fa-solid ${show ? 'fa-minus':'fa-plus'}`}></i>
                <p>{heading}</p>
            </div>
            <div className={`faq-body ${show ? 'showAnswer' : 'hideAnswer'} `}>
                <p>{body}</p>
            </div>
          </div>
  )
}

export default Accordian