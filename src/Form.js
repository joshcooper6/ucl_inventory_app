import React, { useRef } from 'react'
import renderList from './RenderList.js'
import OpenApp from 'react-open-app'
import TypedElement2 from './typedElement2.js'

import { BrowserRouter as Router, Redirect } from 'react-router-dom'


export default function Form({inventory}) {

    const [formData, updateFormData] = React.useState([])
    const [totals, setTotals] = React.useState([]);
    
    const handleChange = (e) => {
        e.preventDefault();
         updateFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }
    
    const formElements = inventory.map((item) => {
        const selectOptions = () => {
            let nums = []
            for (let i = 0; i < 50; i++) {
                nums.push(<option key={i} value={i}>{i}</option>)
            }
            return nums
        }

        return <><div key={item.id} className="input_cntnr">
            <select
                key={item.id} 
                name={item.name}
                onClick={handleChange} 
                onChange={handleChange}
            >{selectOptions()}</select>
            <label for={item.name}>{item.name}</label>
        </div>
        </>
    })
    
   const [displayResults, setDisplayResults] = React.useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        setDisplayResults(!displayResults)
        setTotals(Object.entries(formData))        
    }
    
    let displayedRes = totals.map((item) => {return `${item[0]} = ${item[1]}\n`});
   
    const FinalResult = () => {
        const textAreaRef = useRef(null);
        const [copySuccess, setCopySuccess] = React.useState('');
        
        function copyToClipboard(e) {
            textAreaRef.current.select();
            document.execCommand('copy');
            e.target.focus();
        };
        
        const joshCopy = () => {
            textAreaRef.current.select();
            document.execCommand('copy');
            setCopySuccess('Copied!')
            textAreaRef.current.focus();
            document.execCommand('copy');
        }
        
        React.useEffect(() => {
            joshCopy()
        }, [])
        
        // React.useEffect(() => {
        //     let timeout= setTimeout(() => {
        //         window.open('https://app.7shifts.com/log_book')
        //     }, 2000)
        // },[])
        
        const handleChange = (e) => {
            let timeout = setTimeout(() => {
                joshCopy()    
            }, 2000)
        }
        
        const handleClick = (e) => {
            e.preventDefault()
            setDisplayResults(!displayResults)
        }
        
        return (
            <>
                <div id="final_result_header">
                    <button onClick={copyToClipboard}>Copy Today's Numbers</button>
                    <img src="https://media0.giphy.com/media/MZXmFVrbMA1qSDNGOt/giphy.gif" className="icon" />
                    <a href="https://app.7shifts.com/log_book" target="_blank">
                        <img src="https://www.7shifts.com/images/media-kit-2018/orange-icon.png" className="icon"/>
                    </a><br />
                </div>
                
                <div id="final_result_text_cntnr">
                    <textarea 
                        defaultValue={displayedRes.join('')}
                        className="show-white-space"
                        ref={textAreaRef}
                        id="textarea"
                    /><br />
                    
                    <div id="final_result_text_cntnr_btns">
                        {/* render a button that clears the form */}
                        <button onClick={handleClick}>Go back to form</button>
                        <p>NOTE: Your current results & any following changes will automatically be saved. </p>
                    </div>
                </div>
                
            </>
        )
    }
    
    return (
        <>            
            {displayResults ? <FinalResult /> :
            <form id="inventory_form">
                <button onClick={handleSubmit}>Render</button>   
                    {formElements}
                <button onClick={handleSubmit}>Render</button> 
            </form>}
        </>
    )
}