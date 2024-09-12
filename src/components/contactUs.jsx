import { useState } from "react";
import './contact.css'

const Contact = () => {

    const[name,setName] = useState('');
    const[number,setNumber] = useState('');
    const[email,setEmail] = useState('');
    const[org,setOrg] = useState('');


    const handleSubmit=(e)=>{
        e.preventDefault(); //this function prevents the reloading of the window
        alert("Thanks for contacting us we will reach out to you soon");
    }


    return ( 
        <div className="contact">
            <h2>Partner with us</h2>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input 
                    type="text"
                    required
                    value = {name}
                    onChange={(e)=> setName(e.target.value)}
                />
                <label>Mobile Number: </label>
                <input 
                    type="text"
                    required
                    value = {number}
                    onChange={(e)=> setNumber(e.target.value)}
                />
                <label>Email Id:</label>
                <input 
                    type="text"
                    required
                    value = {email}
                    onChange={(e)=> setEmail(e.target.value)}
                />
                <label>Type Of Organization: </label>
                <textarea 
                    required
                    value={org}
                    onChange={(e)=> setOrg(e.target.value)}                
                ></textarea>
                <button>Submit</button>
            </form>
        </div>
     );
}
 
export default Contact;