import React, {useState} from 'react'

const Form = () => {
  
const [firstname, setFirstName] = useState("John")
const [lastname, setLastName] = useState("Smith")
const [email, setEmail] = useState("johnsmith@johnsmith.com")
const [password, setPassword] = useState("password")
const [confirmpassword, setConfirmPassword] = useState("password")


const handleFirstName = (event) => {
  setFirstName(event.target.value)
}

  const handleLastName = (event) => {
    setLastName(event.target.value)
}

 
const handleEmail = (event) => {
  setEmail(event.target.value)
}
  
  
const handlePassword = (event) => {
  setPassword(event.target.value)
}
  

  
const handleConfirmPassword = (event) => {
  setConfirmPassword(event.target.value)
}
  


  
  
   return (
    <div>
    <div className="row">
<form action="" className="col-md-4 mx-auto">
<div className="form-group">
  <label htmlFor="firstname">First Name</label>
  <input type="text" name="firstname"className="form-control" id='firstname' onChange={handleFirstName}/>
</div>

<div className="form-group">
  <label htmlFor="lastname">Last Name</label>
  <input type="text" name="lastname" className="form-control" id='lastname' onChange={handleLastName} />
</div>

<div className="form-group">
  <label htmlFor="email">Email</label>
  <input type="email" name="email" className="form-control" id='email' onChange={handleEmail}  />
</div>

<div className="form-group">
  <label htmlFor="password">Password</label>
  <input type="password" name="password" className="form-control" id='password' onChange={handlePassword} />
</div>

<div className="form-group">
  <label htmlFor="confirmpassword">Confirm Password</label>
  <input type="password" name="confirmpassword" className="form-control" id='confirmpassword' onChange={handleConfirmPassword} />
</div>

</form>


    
    
    
    
    
    
    </div>
    
    </div>
  )
   }


export default Form