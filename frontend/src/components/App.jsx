import React from 'react';
import './app.css';
import {useFormik} from 'formik';
import axios from 'axios';
export default function App(){
    const [resmessage, setResmessage] = React.useState('');

    function onSubmit(e){
        e.preventDefaults;
        console.log('Send axios request');
        postKeyToValidate();
    }
    async function postKeyToValidate(){
        try{
            const res = await axios.post('http://localhost:3000', values);
            setResmessage(res.data.message);
        }catch(err){
            setResmessage(err.response.data);
        }
        
    }

    const {values,errors,handleChange,handleSubmit} = useFormik({
        initialValues:{
            key:'',
        },
        onSubmit,
    })
    return(
        <div className='container'>
            <h1>Welcome 👋</h1>
            <form action="#" onSubmit={handleSubmit}>
                <div>
                <label htmlFor="key">Validation number</label>
                <input onChange={handleChange} type="text" name="key" id="key" placeholder='Enter your key' required/>
                </div>
                <button>Submit</button>
            </form>
            Message: {resmessage}
        </div>
    )
}