import { useState } from "react";

export default function StatefullForm() {
    const [name, setName] =useState('')
    const [email, setEmail] = useState(null);
    const [password, setPassord] =useState(null)
    const [error, setError] =useState('')
    
    const handleSubmit =e=>{
        e.preventDefault();
        if(password.length < 6){
            setError('password should be 6 or more')
        }else{
            setError('');
            console.log(name, email, password);
        }
        
    }
    const handleChangeName=e=>{
        // console.log(e.target.value);
        setName(e.target.value);
    }
    const handleEmailChange =e=>{
        setEmail(e.target.value);
        // console.log(e.target.value);
        // console.log(email);
    }
    

    const handlePassInpchange =e=>{
        // console.log(e.target.value);
        setPassord(e.target.value);

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input onChange={handleChangeName} value={name} className="border" type="text" name="name" />
        <br />
        <input onChange={handleEmailChange} className="border" type="email" name="email" />
        <br />
        <input onChange={handlePassInpchange} required className="border" type="password" name="password" />
        <br />
        <input className="" type="submit" value="Submit" />
        {
            error && <p>{error}</p>
        }
      </form>
    </div>
  )
}
