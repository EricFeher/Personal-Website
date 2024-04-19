import { TbSend  } from "react-icons/tb";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaCheck } from "react-icons/fa6";
import { MdErrorOutline, MdOutlineMail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import './Contact.css'
import { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser'

function Contact() {
    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    const buttonRef = useRef();

    const [loading,setLoading] = useState(false);
    const [sent,setSent] = useState(false);
    const [error,setError] = useState(false);

    useEffect(()=>{
        emailjs.init({
            publicKey: "21__Q-JkyZpHOXyZ9"
        });
    },[])

    const sendEmail = () =>{
        let name = nameRef.current.value;
        let email = emailRef.current.value;
        let message = messageRef.current.value;
        buttonRef.current.disabled = true;
        
        if(name == "" || email == "" || message == "") {
            setError(true);
            const interval = setInterval(() => {
                setError(false);
                buttonRef.current.disabled = false;
                clearInterval(interval);
            }, 3000);
            return;
        }
        setLoading(true);

        emailjs.send("service_f03wjhi","template_4qj971y",{
            from_name: name,
            email: email,
            message: message,
            }).then((data)=>{
                if(data.status===200){
                    setSent(true);
                    setLoading(false);
                    const interval = setInterval(() => {
                        setSent(false);
                        buttonRef.current.disabled = false;
                        clearInterval(interval);
                    }, 3000);
                } else {
                    console.log(data.status);
                }
            })
    }

    return (
        <div id="contact">
            <h2>Contact</h2>
                <div id="contactContent">
                    <div id="contactInfoContainer">
                        <a className="infoBox button">
                            <MdOutlineMail size={30}></MdOutlineMail>
                            <div>fehererik2001@gmail.com</div>
                        </a>
                        <a className="button infoBox" target="_blank" href="https://www.linkedin.com/in/ericfeher/">
                            <FaLinkedin size={30}></FaLinkedin>
                            <div>Linkedin</div>
                        </a>
                        <a className="button infoBox" target="_blank" href="https://github.com/EricFeher">
                        <FaGithub size={30}></FaGithub>
                            <div>Github</div>
                        </a>
                    </div>
                    <div id="sendMessageContainer">
                    <div>
                        <label>Name</label>
                        <input ref={nameRef} id="fromName" type="text" placeholder='Enter Your Name'/>
                    </div>
                    <div>
                        <label>Email</label>
                        <input ref={emailRef} id="fromEmail" type="text" placeholder='Enter Your Email'/>
                    </div>
                    
                    <div>
                        <label>Message</label>
                        <textarea ref={messageRef} id="message" type="text" placeholder='Enter your Message'/>
                    </div>
                    
                    <button ref={buttonRef} id="sendButton" className={`button ${sent ? "sentButton" : ""} ${error ? "errorButton" : ""}`} onClick={()=>sendEmail()}>
                        {loading ?
                        <>
                        <AiOutlineLoading3Quarters className="loader" size={24}/> 
                        </> 
                        : sent ? 
                        <>
                            Sent <FaCheck size={24}/>
                        </> 
                        : error ?
                        <>
                            Error <MdErrorOutline size={24}/>
                        </>
                        :
                        <>
                            Send <TbSend size={24}/>
                        </>
                        }
                    </button>
                </div>
            </div>
                
        </div>
        
    )
}

export default Contact;
