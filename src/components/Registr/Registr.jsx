import React, { useEffect, useRef, useState } from 'react';
import '../../App.css';

function Registr() {
  const [emailValue, setEmailValue] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showError, setShowError] = useState(false)

  const [emailFocused, setEmailFocused] = useState(false)
  const [nameFocused, setNameFocused] = useState(false)
  const [passwordFocused, setPasswordFocused] = useState(false)

  const inputStyle = {
    border : '1px solid #bfbfbf',
    borderBottom : '2p solid #bfbfbf'
  }
  const inputfocusedStyle = {
    border : '1px solid #A83D7B',
    borderBottom : '2px solid #A83D7B',
    boxShadow : '0 0 3px 0 #A83D7B'
  }

  const handleEmailFocus = ()=>{
    setEmailFocused(true)
  }
  const handleEmailBlur = ()=>{
    setEmailFocused(false)
  }
  const handleNameFocused = ()=>{
    setNameFocused(true)
  }
  const handleNameBlur = ()=>{
    setNameFocused(false)
  }
  const handlePasswordFocus = ()=>{
    setPasswordFocused(true)
  }
  const handlePasswordBlur =()=>{
    setPasswordFocused(false)
  }

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailValue.trim() === '') {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (nameValue.trim() === '') {
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (passwordValue.trim() === '') {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };
  const formRef=useRef(null)
  const clickNotForm = (e)=>{
    if(formRef.current && !formRef.current.contains(e.target)){
      setEmailError(false)
      setNameError(false)
      setPasswordError(false)
    }
  }
  useEffect(()=>{
    document.addEventListener("mousedown",clickNotForm)
    return ()=>{
      document.removeEventListener("mousedown",clickNotForm)
    }
  },[])


  return (
    <div className="w-full bg-[#EDEDED] min-h-screen flex justify-center items-center">
      <div ref={formRef} className="w-[380px] pt-10 pb-12 px-7 rounded-md text-center bg-white shadow-custom">
        <h1 className="text-4xl font-bold">Registr Form</h1>
        <form onSubmit={handleSubmit}
        id="registr-form" className="w-full py-10">
          <div className="w-full py-3 px-0">
            <div className="h-[50px] relative w-full">
              <input
                onFocus={handleEmailFocus}
                onBlur={handleEmailBlur}
                onChange={(e) => setEmailValue(e.target.value)}
                type="email"
                placeholder="Email Address"
                id="email"
                style={emailFocused ? inputfocusedStyle : inputStyle}
                className={`w-full h-full px-11 outline-0 text-lg caret-[#A83D7B] rounded-md transition-all duration-200 ease-in-out placeholder:text-[#bfbfbf] placeholder:text-lg`}
              />
              <i className="icon fas fa-envelope absolute left-4 text-[#bfbfbf] top-1/2 -translate-y-1/2"></i>
              <i className={`${emailError ? 'block' : 'hidden'} error-email error-icon fas fa-exclamation-circle absolute right-4 top-1/2 -translate-y-1/2 text-[#dc3545]`}></i>
            </div>
            <p className={`${emailError ? 'block' : 'hidden'} error-email text-[#dc3545] text-left p-1`}>
              Email can't be blank
            </p>
          </div>
          <div className="w-full py-3 px-0">
            <div className="h-[50px] relative w-full">
              <input
                onFocus={handleNameFocused}
                onBlur={handleNameBlur}
                onChange={(e) => setNameValue(e.target.value)}
                type="text"
                placeholder="Name"
                id="name"
                style={nameFocused ? inputfocusedStyle : inputStyle} 
                className={`w-full h-full px-11 outline-0 text-lg caret-[#A83D7B] rounded-md transition-all duration-200 ease-in-out placeholder:text-[#bfbfbf] placeholder:text-lg`}
              />
              <i className="icon fas fa-user absolute left-4 text-[#bfbfbf] top-1/2 -translate-y-1/2"></i>
              <i className={`${nameError ? 'block' : 'hidden'} error-name error-icon fas fa-exclamation-circle absolute right-4 top-1/2 -translate-y-1/2 text-[#dc3545]`}></i>
            </div>
            <p className={`${nameError ? 'block' : 'hidden'} error-name text-[#dc3545] text-left p-1`}>
              Name can't be blank
            </p>
          </div>
          <div className="w-full py-3 px-0">
            <div className="h-[50px] relative w-full">
              <input
                onFocus={handlePasswordFocus}
                onBlur={handlePasswordBlur}
                onChange={(e) => setPasswordValue(e.target.value)}
                placeholder="Password"
                id="password"
                type={showError ? 'text' : 'password'}
                style={passwordFocused ? inputfocusedStyle : inputStyle}
                className={`w-full h-full px-11 outline-0 text-lg caret-[#A83D7B] rounded-md transition-all duration-200 ease-in-out placeholder:text-[#bfbfbf] placeholder:text-lg`}
              />
              <i className="icon fas fa-lock absolute left-4 text-[#bfbfbf] top-1/2 -translate-y-1/2"></i>
              <i className={`${passwordError ? 'block' : 'hidden'} error-pass error-icon fas fa-exclamation-circle absolute right-4 top-1/2 -translate-y-1/2 text-[#dc3545]`}></i>
            </div>
            <p className={`${passwordError ? 'block' : 'hidden'} error-pass text-[#dc3545] text-left p-1`}>
              Password can't be blank
            </p>
            <div className="show flex items-center pt-2 gap-2">
              <p className="show-pass p-0 text-[17px]">show password</p>
              <input onChange={()=>{setShowError(!showError)}} type="checkbox" id="show-input" className="text-lg w-fit" />
            </div>
          </div>
          <input
            type="submit"
            value="Registr"
            className="w-full h-[50px] mt-7 rounded-md border-none bg-[#A83D7B] cursor-pointer text-white text-lg"
            style={{ borderBottom: '2px solid rgba(0,0,0,0.1)' }}
          />
        </form>
        <div className="sign-txt">
          Did you register? <a href="#" className="text-blue-700">Login page</a>
        </div>
      </div>
    </div>
  );
}

export default Registr;
