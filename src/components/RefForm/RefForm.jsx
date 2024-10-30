import { useEffect, useRef } from "react";

export default function RefForm() {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    useEffect(()=>{
        nameRef.current.focus();
    },[])

    const handleSubmit =e=>{
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input ref={nameRef} className="border" type="text" name="name" />
        <br />
        <input ref={emailRef} defaultValue={'example@gmail.com'} className="border" type="text" name="email" />
        <br />
        <input ref={passwordRef} className="border" type="password" name="password" />
        <br />
        <input  type="submit" value="Submit" />
      </form>
    </div>
  )
}
