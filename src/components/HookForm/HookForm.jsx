import useInputState from "../../hooks/useInputState";

export default function HookForm() {
    // const [name, handleNameChange] = useInputState('roy')

    const emailState = useInputState('roy@gmail.com')
    console.log();


    const handleSubmit=e=>{
        e.preventDefault();
        // console.log(name);
        console.log(emailState.value);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        {/* <input value={name} onChange={handleNameChange} className="border" type="text" name="name" /> */}
        <input   className="border" type="text" name="name" />
        <br />
        <input {...emailState} className="border" type="text" name="email" />
        <br />
        <input className="border" type="password" name="password" />
        <br />
        <input  type="submit" value="Submit" />
      </form>
    </div>
  )
}
