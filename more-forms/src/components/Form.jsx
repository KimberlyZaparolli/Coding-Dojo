import React, {useState} from 'react'

const Form = () => {
  
const[user, setUser] = useState({

firstname:"",
lastname:"",
email:"",
password:"",
confirmpassword:""
})

const changeHandler= (e) => {
  setUser({
    ...user,
    [e.target.name]: e.target.value
  })
}


  
  
   return (
    <div>
    <div className="row">
<form action="" className="col-md-4 mx-auto">
<div className="form-group">

  <label htmlFor="firstname">First Name</label>
  <input type="text" name="firstname"className="form-control" id='firstname' onChange={changeHandler} />
  {user.firstname.length <2? <p style={{color: 'red'}} >First Name must be more than 2 characters</p>: null }
</div>

<div className="form-group">
  <label htmlFor="lastname">Last Name</label>
  <input type="text" name="lastname" className="form-control" id='lastname' onChange={changeHandler}   />
  {user.lastname.length <2? <p style={{color: 'red'}} >Last Name must be more than 2 characters</p>: null }
</div>

<div className="form-group">
  <label htmlFor="email">Email</label>
  <input type="email" name="email" className="form-control" id='email' onChange={changeHandler}  />
  {user.email.length <2? <p style={{color: 'red'}} >Email must be more than 2 characters</p>: null }
</div>

<div className="form-group">
  <label htmlFor="password">Password</label>
  <input type="password" name="password" className="form-control" id='password' onChange={changeHandler}  />
  {user.password.length <8? <p style={{color: 'red'}} >Password must be more than 8 characters</p>: null }
</div>

<div className="form-group">
  <label htmlFor="confirmpassword">Confirm Password</label>
  <input type="password" name="confirmpassword" className="form-control" id='confirmpassword' onChange={changeHandler}  />
  {user.confirmpassword.length <8? <p style={{color: 'red'}} >Passwords must match</p>: null }
</div>

</form>


    
    
    
    
    
    
    </div>
    
    </div>
  )
   }


export default Form