// import React from "react";
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import '../src/App.css'
// import { Image } from "react-bootstrap";

// const Login = (props) => {

//     const {email, setEmail, password, setPassword, handleLogin, handleSignUp, hasAccount, setHasAccount, emailError, passwordError } = props;

//   return (   
//     <section className='login'>

           
//         <div className='loginContainer'>
//                     {/* <label>Username</label>
//                     <input required type='text' autoFocus />
//                     <p ></p>  */}
//                     <h2>LogDashT</h2>
//                     <label>Email</label>
//                     <input required type='text' autoFocus value={email} onChange = {(e) => setEmail(e.target.value)} /><br/>
//                     <p className='errorMsg'>{emailError}</p> 
//                     <label>password</label>
//                     <input required type='password' autoFocus  value={password} onChange = {(e) => setPassword(e.target.value)} /><br/>
//                     <p className="errorMsg">{passwordError}</p> 

//                 <div className="btnContainer">

//                     {hasAccount ? (
//                         <>
//                             <button type="submit" onClick={handleLogin}>Sign in</button>
//                             <p>Don't have an account ? <span onClick={() => setHasAccount (!hasAccount) }>Sign up</span></p>
//                         </>

//                     ) : (
//                         <>
//                             <button type="submit" onClick={handleSignUp}>Sign up</button>
//                             <p>Have an acount ? <span onClick={() => setHasAccount (!hasAccount) }>Sing in</span></p>
//                         </>
//                                                                 )}
//                 </div>
            
//         </div>
//     </section>



//   )

// }

// export default Login


import React from "react";

import '../src/App.css'


const Login = (props) => {

    const {email, setEmail, password, setPassword, handleLogin, handleSignUp, hasAccount, setHasAccount, emailError, passwordError } = props;

  return (   
    
    <section className='login'>

           
        <div className='loginContainer'>
        <div className="sv">
            <svg width="320" height="104.51238575862989" viewBox="0 0 320 104.51238575862989"
             className="css-1j8o68f"><defs id="SvgjsDefs1854"></defs><g id="SvgjsG1855" featurekey="symbolFeature-0"
              transform="matrix(1.017294045338785,0,0,1.017294045338785,-0.8138354303044687,1.4181078371115667)"
               fill="#0092ca"><path xmlns="http://www.w3.org/2000/svg" d="M83.8,70.1c0,1-0.8,1.8-1.8,1.8H60.4c-0.6,
               1.7-2.2,3-4.1,3H43.6c-1.9,0-3.5-1.2-4.1-3H17.9c-1,0-1.8-0.8-1.8-1.8  s0.8-1.8,1.8-1.8h23.2c1,0,1.8,0.8,
               1.8,1.8v0.4c0,0.4,0.3,0.8,0.8,0.8h12.7c0.4,0,0.8-0.3,0.8-0.8v-0.4c0-1,0.8-1.8,1.8-1.8h23.2  C83.1,68.3,
               83.8,69.1,83.8,70.1z M99.1,70.1v4.7c0,4.9-4,8.9-8.9,8.9H9.7c-4.9,0-8.9-4-8.9-8.9v-4.7c0-1,0.8-1.8,
               1.8-1.8h5.5V22.1  c0-3.2,2.6-5.8,5.8-5.8h72c3.1,0,5.7,2.4,6,5.6c0,0.1,0,0.1,0,0.2v46.2h5.5C98.4,
               68.3,99.1,69.1,99.1,70.1z M95.6,71.8h-5.5  c-1,0-1.8-0.8-1.8-1.8V22.2c-0.2-1.4-1.3-2.4-2.5-2.4h-72c-1.3,
               0-2.3,1-2.3,2.3v47.9c0,1-0.8,1.8-1.8,1.8H4.4v3c0,3,2.4,5.4,5.4,5.4  h80.5c3,0,5.4-2.4,5.4-5.4V71.8z M39.8,
               60.5c1,0,1.8-0.8,1.8-1.8v-2.4c0-4.7,3.8-8.5,8.5-8.5s8.5,3.8,8.5,8.5v2.4  c0,1,0.8,1.8,1.8,1.8s1.8-0.8,
               1.8-1.8v-2.4c0-6.6-5.4-12-12-12s-12,5.4-12,12v2.4C38,59.7,38.8,60.5,39.8,60.5z M42.6,36  c0-4.1,3.3-7.4,
               7.4-7.4s7.4,3.3,7.4,7.4s-3.3,7.4-7.4,7.4S42.6,40.1,42.6,36z M46.1,36c0,2.1,1.7,3.9,3.9,3.9s3.9-1.7,3.9-3.9  s-1.7-3.9-3.9-3.9S46.1,33.9,46.1,36z"></path></g><g id="SvgjsG1856" featurekey="nameFeature-0" transform="matrix(3.6390102498474053,0,0,3.6390102498474053,120.00000043380382,-41.484715460088175)" fill="#eeeeee"><path d="M1.16 11.399999999999999 c7.88 0 14.28 6.4 14.28 14.28 s-6.4 14.32 -14.28 14.32 l-1.16 0 l0 -28.6 l1.16 0 z M1.16 38.8 c7.24 0 13.12 -5.88 13.12 -13.12 s-5.88 -13.12 -13.12 -13.12 l0 26.24 z M27.24 28.64 l1.16 0 l0 11.36 l-1.16 0 l0 -2.24 c-1.04 1.36 -2.68 2.24 -4.52 2.24 c-3.16 0 -5.68 -2.56 -5.68 -5.68 c0 -3.16 2.52 -5.68 5.68 -5.68 c1.84 0 3.48 0.84 4.52 2.2 l0 -2.2 z M22.72 38.8 c2.48 0 4.52 -2 4.52 -4.48 c0 -2.52 -2.04 -4.52 -4.52 -4.52 s-4.52 2 -4.52 4.52 c0 2.48 2.04 4.48 4.52 4.48 z M31.92 40.12 l0 -1.16 c1.08 0 1.92 -0.84 1.92 -1.92 c0 -1.16 -0.88 -2 -1.84 -2.92 c-1 -0.96 -2 -1.92 -2 -3.28 c0 -1.32 1.04 -2.36 2.36 -2.36 l0 1.16 c-0.68 0 -1.2 0.52 -1.2 1.2 c0 0.88 0.8 1.64 1.64 2.44 c1.04 1 2.2 2.12 2.2 3.76 c0 1.72 -1.36 3.08 -3.08 3.08 z M47.96 34.32 l0 5.68 l-1.16 0 l0 -5.68 c0 -2.52 -2.04 -4.52 -4.52 -4.52 s-4.52 2 -4.52 4.52 l0 5.68 l-1.16 0 l0 -28.6 l1.16 0 l0 19.44 c1.04 -1.36 2.68 -2.2 4.52 -2.2 c3.12 0 5.68 2.52 5.68 5.68 z M54.96 11.399999999999999 l0 1.16 l-4.08 0 l0 27.44 l-1.16 0 l0 -27.44 l-4.16 0 l0 -1.16 l9.4 0 z"></path></g></svg> 
                
            
            </div>                  
            <h2 className="mt-6 text-center text-xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div className="w-full max-w-md space-y-8">
    <div>

      <p className="mt-2 text-center text-sm text-gray-600">
        
        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Get your acces to Dashbord</a>
      </p>
    </div>
    
      <input type="hidden" name="remember" value="true"/>
      <div className="-space-y-px rounded-md shadow-sm">
        <div>
        
          <label htmlFor="email-address" className="sr-only">Email address</label>
          <input type='email' autoFocus value={email} onChange = {(e) => setEmail(e.target.value)}  id="email-address" name="email"   className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address"/>
          <p className='errorMsg'>{emailError}</p> 
        </div>
        <div>
 
          <label htmlFor="password" className="sr-only">Password</label>
          <input autoFocus  value={password} onChange = {(e) => setPassword(e.target.value)}  id="password" name="password" type="password"   className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password"/>
          <p className="errorMsg">{passwordError}</p> 
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
        </div>

        <div className="text-sm">
          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
        </div>
      </div>
      {hasAccount ? (
        <>
      
        <button onClick={handleLogin} type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Sign in</button>
          <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
          <p className="mt-2 text-center text-sm text-gray-600">Don't have an account ? <span className="font-medium text-indigo-600 hover:text-indigo-500" onClick={() => setHasAccount (!hasAccount) }>Sign up</span></p>

        </>
        ) :( 
        <>   
          <button onClick={handleSignUp} type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Sign up</button>
          <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
          <p className="mt-2 text-center text-sm text-gray-600">Have an acount ? <span className="font-medium text-indigo-600 hover:text-indigo-500" onClick={() => setHasAccount (!hasAccount) }>Sing in</span></p>
        </> 
            
          
       
       
    
      )}
  
   
  </div>
</div>
    
        </div>
    </section>




   


  )

}

export default Login




