export default function SimpleForm() {
  const handleSubmit = (e) => {
    e.preventDefault(); //procur lagbe
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.phone.value);
  };
  return (
    <div className="bg-black">
      <form onSubmit={handleSubmit}>
        <input className="border" type="text" name="name" />
        <br />
        <input className="border" type="text" name="email" />
        <br />
        <input className="border" type="text" name="phone" />
        <br />
        <input className="text-white" type="submit" value="Submit" />
      </form>
    </div>
  );
}
