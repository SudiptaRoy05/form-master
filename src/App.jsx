import './App.css'
import ReUsableForm from './components/ReUseableFOrm/ReUsableForm'
// import HookedForm from './components/HookForm/HookedForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StatefullForm from './components/StatefullForm/StatefullForm'

function App() {

  const handleSignUpSubmit =e=>{
    console.log('sign up data');
}

const handleUpdateProfile =e=>{
  console.log('update profile');
}
  
  return (
    <>
     {/* <SimpleForm></SimpleForm> */}
     {/* <StatefullForm></StatefullForm> */}
     {/* <RefForm></RefForm> */}
     {/* <HookForm></HookForm> */}
     {/* <HookedForm></HookedForm> */}
     <ReUsableForm formTitle={'Signup'} handleSubmit={handleSignUpSubmit}>
      <div>
        <h2>sign up</h2>
        <p>please signup r8 now</p>
      </div>
     </ReUsableForm>
     <ReUsableForm formTitle={'ProfileUpdate'} submitBtnText='Update' handleSubmit={handleUpdateProfile}>
      <h3>update profile</h3>
      <p>always wpdate your profile</p>
     </ReUsableForm>
    </>
  )
}

export default App
