import React ,{useState, useEffect} from 'react'
import './App.css';
import Login from './Login';
import Hero from './hero';
import 'firebase/auth'
import auth from './fireb';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
// import { ErrorFactory } from '@firebase/util';

function App() {
  
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState('flase');
  const clearInputs = () => {
    setEmail('');
    setPassword('');

  }
  const cleanErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {
    cleanErrors("");
      signInWithEmailAndPassword(auth, email, password)
        .catch(err => {
          console.log(err)
          // switch(err.code){
          //   case "auth/Invalid-email":
          //   case "auth/User-Disabled":
          //   case "auth/User-Not-found":
          //     setEmailError(err.message);
          //     break;
          //   case "auth/Wrong-password":
          //     setPasswordError(err.message);
          //     break;
          // }

          if (err.code == "auth/invalid-email") {
            setEmailError('INVALID EMAIL');
            
            setEmail('');
            
           
          }
          else if (err.code=="auth/email-Disabled"){
              setEmailError('INVALID Email');
              setEmail('');
            

          }else if (err.code=="auth/user-not-found"){
            setEmailError('USER NOT FOUND');
            setEmail('');
         

        }else if (err.code=="auth/wrong-password"){
          setPasswordError('WRONG PASSWORD');
          setPassword('');
        

      }else if (err.code=="auth/internal-error"){
        setPasswordError('INVALID PASSWORD');
        setPassword('');
        
      }else{
        setEmailError('ERROR');
        setPasswordError('ERROR ');
        setEmail('');
        setPassword('')
      }
    
        })
  }

  const handleSignUp = () => {
    cleanErrors("");
    createUserWithEmailAndPassword(auth, email, password)
    .catch(err => {
      console.log(err)

if (err.code == "auth/internal-error") {
  setEmailError('IS NOT FORM OF AN EMAIL');
  setPasswordError('INVALID PASSWORD');
  setEmail('');
  setPassword('');
}
else if (err.code=="auth/invalid-email"){ 
    setEmailError('INVALID EMAIL');
    setPasswordError('INVALID PASSWORD');
    setEmail('');
    setPassword('');
}
else if(err.code=='auth/weak-password'){
  setPasswordError('PLEAZ TRY A STRONG PASSWORD SHOULD BE  AT LEAST 6 CHARACTERS');
  setPassword('')
}else if (err.code=="auth/email-already-in-use") {
  setEmailError('EMAIL ALREADY USED ');
  setEmail('');
}else{
  setEmailError('ERROR');
  setPasswordError('ERROR ');
  setEmail('');
  setPassword('')
}






    })
  }
  const handleLogOut = () => {
      signOut(auth);
  }
  const authListneer = () => {
      onAuthStateChanged(auth, (user) => {
        if(user){
          clearInputs("");
          setUser(user); 
        }else
        setUser('');
      });

  }
  useEffect(() => {
    authListneer();
  }, [])

  return (
    <div className="App">
      {user ?(
           <Hero handleLogOut={ handleLogOut}/>
      ) : (

        <Login email={email} 
        setEmail={setEmail}
        password={password}
        setPassword = {setPassword}
        handleLogin = {handleLogin}
        handleSignUp = {handleSignUp} 
        hasAccount = {hasAccount}
        setHasAccount = {setHasAccount}
        emailError = {emailError}
        passwordError ={ passwordError }
        />
       
       
         
         
      )}
      
    </div>
  );
}

export default App;

