import React from 'react'

const Userinfo = ({data,coloumn}) => {

  return (
    <div >
  

    <div className={"users"}>
      <table>
        <thead>
        <tr>
        {coloumn.map((ele,i)=> <th key={i}>{ele.heading}</th>)}
        </tr>
        </thead>
        <tbody>
    
     {data.map((ele,i)=><tr key={i}><td><img src={ele.picture.medium} alt="userpicture"/></td><td>{ele.name.title} {ele.name.first}{ele.name.last}</td><td>{ele.email}</td><td>{ele.gender}</td><td>{ele.dob.age}</td></tr>)}
        </tbody>
      </table> 
</div>
    </div>
  )
}

export default Userinfo