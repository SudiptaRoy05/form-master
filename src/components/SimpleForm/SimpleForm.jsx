export default function SimpleForm() {
  const handleSubmit = (e) => {
    e.preventDefault(); //procur lagbe
    console.log(e.target.name.value);
    console.log(e.target.email.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className="border" type="text" name="name" />
        <br />
        <input className="border" type="text" name="email" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
