import { Link } from 'react-router-dom';
import '../../App.css';
import React, {useEffect, useRef, useState} from 'react'
import Forgotten from '../Forgotten/Forgotten';
function Login() {
    const [emailValue, setEmailValue] = useState('')
    const [nameValue, setNameValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [passwordError, setPasswordError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [nameError, setNameError] = useState(false)
    const [showError, setShowError] = useState(false)


    const [emailFocused, setEmailFocused] = useState(false)
    const [nameFocused, setNameFocused] = useState(false)
    const [passwordFocused, setPasswordFocused] = useState(false)

    const inputStyle = {
        border: '1px solid #bfbfbf',
        borderBottom: '2px solid #bfbfbf'
    }
    const inputFocusedStyle = {
        border: '1px solid #A83D7B',
        borderBottom: '2px solid #A83D7B',
        boxShadow: '0 0 3px 0 #A83D7B'
    }

    const handleEmailFocus = ()=>{
        setEmailFocused(true)
    }
    const handleEmailBlur = ()=>{
        setEmailFocused(false)
    }

    const handleNameFocus = ()=>{
        setNameFocused(true)
    }
    const handleNameBlur = ()=>{
        setNameFocused(false)
    }

    const handlePasswordFocus = ()=>{
        setPasswordFocused(true)
    }
    const handlePasswordBlur = ()=>{
        setPasswordFocused(false)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        let valid=false;
        if(emailValue.trim()===''){
            setEmailError(true)
        }
        else{
            setEmailError(false)
            valid=true;
        }
       
        if(nameValue.trim()===''){
            setNameError(true)
        }
        else{
            setNameError(false)
            valid=true;``
        }
       
        if(passwordValue.trim()===''){
            setPasswordError(true)
        }
        else{
            setPasswordError(false)
            valid=true
        }
        if(valid){
            console.log("Succesfully!!!!")
        }
        
    }

    const formRef=useRef(null)

    const clickNotForm = (e)=>{
        if(formRef.current && !formRef.current.contains(e.target)){
            setEmailError(false)
            setNameError(false)
            setPasswordError(false)
        }
    }
        useEffect(()=>{
            document.addEventListener('mousedown',clickNotForm)
            return ()=>{
                document.removeEventListener('mousedown',clickNotForm)
            }
        })
    
    return (
        <div className="w-full min-h-screen flex justify-center items-center bg-[#EDEDED]">
            <div ref={formRef} className="w-[380px] p-10 rounded-md text-center bg-white shadow-custom">
                <h1 className="text-4xl font-bold mb-10">Login Form</h1>
                <form onSubmit={handleSubmit} id="login-form" className="w-full">
                    <div className="mb-6">
                        <div className="relative h-[50px]">
                            <input
                                onFocus={handleEmailFocus}
                                onBlur={handleEmailBlur}
                                onChange={(e)=>setEmailValue(e.target.value)}
                                type="email"
                                placeholder="Email Address"
                                id="email"
                                className="w-full h-full px-11 text-lg rounded-md outline-none transition-all duration-200 ease-in-out caret-[#A83D7B] placeholder:text-[#bfbfbf] placeholder:text-lg"
                                style={emailFocused ? inputFocusedStyle : inputStyle}
                            />
                            <i className="fas fa-envelope absolute left-4 text-[#bfbfbf] top-1/2 -translate-y-1/2"></i>
                            <i className={`${emailError ? 'block' : 'hidden'} error-email error-icon fas fa-exclamation-circle absolute right-4 top-1/2 -translate-y-1/2 text-[#dc3545]`}></i>
                        </div>
                        <p className={`${emailError ? 'block' : 'hidden'} error-email text-[#dc3545] text-left p-1`}>Email can't be blank</p>
                    </div>

                    <div className="mb-6">
                        <div className="relative h-[50px]">
                            <input
                                onFocus={handleNameFocus}
                                onBlur={handleNameBlur}
                                onChange={(e)=>setNameValue(e.target.value)}
                                type="text"
                                placeholder="Name"
                                id="name"
                                className="w-full h-full px-11 text-lg rounded-md outline-none transition-all duration-200 ease-in-out caret-[#A83D7B] placeholder:text-[#bfbfbf] placeholder:text-lg"
                                style={nameFocused ? inputFocusedStyle : inputStyle}
                            />
                            <i className="fas fa-user absolute left-4 text-[#bfbfbf] top-1/2 -translate-y-1/2"></i>
                            <i className={`${nameError ? 'block' : 'hidden'} error-name error-icon fas fa-exclamation-circle absolute right-4 top-1/2 -translate-y-1/2 text-[#dc3545]`}></i>
                        </div>
                        <p className={`${nameError ? 'block' : 'hidden'} error-name text-[#dc3545] text-left p-1`}>Email can't be blank</p>
                    </div>

                    <div className="mb-6">
                        <div className="relative h-[50px]">
                            <input
                                onFocus={handlePasswordFocus}
                                onBlur={handlePasswordBlur}
                                onChange={(e)=>setPasswordValue(e.target.value)}
                                type={showError ? 'text' : 'password'}
                                placeholder="Password"
                                id="password"
                                className="w-full h-full px-11 text-lg rounded-md outline-none transition-all duration-200 ease-in-out caret-[#A83D7B] placeholder:text-[#bfbfbf] placeholder:text-lg"
                                style={passwordFocused ? inputFocusedStyle : inputStyle}
                            />
                            <i className="fas fa-lock absolute left-4 text-[#bfbfbf] top-1/2 -translate-y-1/2"></i>
                            <i className={`${passwordError ? 'block' : 'hidden'} error-pass error-icon fas fa-exclamation-circle absolute right-4 top-1/2 -translate-y-1/2 text-[#dc3545]`}></i>
                        </div>
                        <p className={`${passwordError ? 'block' : 'hidden'} error-pass text-[#dc3545] text-left p-1`}>Password can't be blank</p>
                        <div className="flex items-center justify-between pt-2">
                            <a href="forgotten.html" className="text-blue-700">Forgot password?</a>
                            <div className="flex items-center gap-2">
                                <p className="text-[17px]">show password</p>
                                <input onChange={()=>{setShowError(!showError)}} type="checkbox" id="show-input" className="text-lg w-fit" />
                            </div>
                        </div>
                    </div>

                    <input
                        type="submit"
                        value="Login"
                        className="w-full h-[50px] mt-7 rounded-md border-none bg-[#A83D7B] cursor-pointer text-white text-lg hover:bg-red-500"
                        style={{ borderBottom: '2px solid rgba(0,0,0,0.1)' }}
                    />
                </form>
                <div className="mt-5">
                    Not yet member? <a href="" className="text-blue-700">Register page</a>
                </div>
            </div>
        </div>
    );
}

export default Login;
