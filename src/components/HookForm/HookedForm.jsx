import useInput2State from "../../hooks/useInput2State";

export default function HookedForm() {
  //   const [name, handleChange] = useInput2State("");
  //   const [email, handleEmailChange] = useInput2State("");
  //   const [pass, handlePassChange] = useInput2State("");

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(`${name} || ${email} || ${pass}`);
  //   };


  
const emailState = useInput2State("s@r.gmail.com");
console.log(emailState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailState.value);
};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input
          value={name}
          onChange={handleChange}
          className="border"
          type="text"
          name="name"
        />
        <br />
        <input
          value={email}
          onChange={handleEmailChange}
          className="border"
          type="email"
          name="email"
        />
        <br />
        <input
          value={pass}
          onChange={handlePassChange}
          className="border"
          type="password"
          name="password"
        />
        <br />
        <input type="submit" value="Submit" /> */}

        <br />
        <br />
        <br />
        <br />
        <input className="border" type="text" name="name" />
        <br />
        <input {...emailState} className="border" type="email" name="email" />
        <br />
        <input className="border" type="password" name="password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
