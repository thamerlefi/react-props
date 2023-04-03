import React from 'react'
import PropTypes from 'prop-types'

export default function Profile(props) {
  return (
    <div style={{width:'100%', display:'flex',justifyContent:'space-between'}}>
      <div className='flex-column' style={{background:'#145eb3', width:'40%'}}>
        {props.children}  
        <h2 style={{background:'#1fa9d3', padding:'5px 15px', borderRadius:20}}>{props.fullName}</h2>
        <h3>{props.profession}</h3>
      </div>
      <div className='flex-column' style={{background:'#1fa9d3' ,width:'60%', gap:'40px',padding:70}}>
        <h1><i style={{textDecoration:'underline', color:'yellow'}}>BIO:</i></h1>
        <p style={{fontSize:'18px'}}>{props.bio}</p>
        <button className='button' onClick={()=>props.handle(props.fullName)}>Alert me</button>
      </div>
    </div>
  )
}
//----------------------------- propTypes
Profile.propTypes={
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  handleName: PropTypes.func,
}
//----------------------------- default props
Profile.defaultProps = {
  fullName: 'Guest',
  bio: 'No bio provided',
  profession: 'Unknown',
};