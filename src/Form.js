import React, { useRef } from 'react'

export default function Form({handleSubmit, inventory, formData, updateFormData, totals, setTotals, displayResults, setDisplayResults,
added, isItAdded, cleared, setCleared}) {

    let displayedRes = totals.map((item) => {return `${item[0]} = ${item[1]}\n`});
    let formInput = React.useRef();
    
    React.useEffect(() => {
        const htmlCollection = [...formInput.current.children]
        const abba = htmlCollection.map((container) => container.children)
        const barbra = abba.map((htmlArray) => htmlArray[0])
        const cristina = barbra.map((select) => select.name)
        const currentItems = {}
        const array = cristina.map((name) => Object.assign( currentItems, new Object({[name]: '---'})))
        const a = {}
        const proper = Object.assign(a, formData, currentItems)
        updateFormData(proper)
    }, [])
    

    const FinalResult = () => {
        const textAreaRef = useRef(null);
        const [copySuccess, setCopySuccess] = React.useState('');
        const [copy, setCopy] = React.useState(false);
        
        function copyToClipboard(e) {
            setCopy(true)
            textAreaRef.current.select();
            document.execCommand('copy');
            e.target.focus();

            let timeout = setTimeout(() => {
                window.open('https://app.7shifts.com/log_book')
            }, 1000)
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
        
        const handleClick = (e) => {
            e.preventDefault()
            setDisplayResults(!displayResults)
        }
        
        return (
            <>
                <div id="final_result_header">
                    <button onClick={copyToClipboard} className="result_buttons">{copy ? 'All numbers copied! Redirecting to 7shifts...' : 'Click to copy numbers and go to 7shifts...'}</button>
                    {/* <a href="https://app.7shifts.com/log_book" target="_blank">
                        <div id="shifts_btn" >
                            <div id="shifts_text_cntnr">
                                <p>Click here to paste to 7 shifts</p>
                                <img src="https://www.7shifts.com/images/media-kit-2018/orange-icon.png" className="result_buttons "/>
                            </div>
                        </div>
                    </a><br /> */}
                </div>
                
                <div id="final_result_text_cntnr">
                        <textarea 
                            defaultValue={displayedRes.join('')}
                            className="show-white-space"
                            ref={textAreaRef}
                            id="textarea"
                        /><br />
                        <p>NOTE: Your current results & any following changes will automatically be saved. </p>
                </div>
                
            </>
        )
    }

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

        const thisHandle = (e) => {
            e.preventDefault();
            const box = e.target
            const foodItem = box.innerHTML
            const parent = box.parentElement
            const sister = parent.firstChild
            const totalOfFoodItem = sister.value

            updateFormData({
                ...formData,
                [foodItem]: totalOfFoodItem
            })
            
        }   

        return <><div key={item.id} className="input_cntnr">
            <select
                key={item.id} 
                name={item.name}
                onClick={handleChange} 
                onChange={handleChange}
            >{selectOptions()}</select>
            <a onClick={(e) => {
                e.preventDefault();
                let target = e.target
                let parent = target.parentElement
                let supertarget = parent.firstChild
                updateFormData({
                    ...formData,
                    [supertarget.name]: supertarget.value
                })

            }} for={item.name} id="add_btn">+</a>
            <label for={item.name} onClick={thisHandle}>{item.name}</label>
        </div>
        </>
    })


    const addAllItems = () => {
        isItAdded(true)
        const htmlCollection = [...formInput.current.children]
        const abba = htmlCollection.map((container) => container.children)
        const barbra = abba.map((htmlArray) => htmlArray[0])
        const cristina = barbra.map((select) => select.name)
        const currentItems = {}
        const array = cristina.map((name) => Object.assign( currentItems, new Object({[name]: '---'})))
        const a = {}
        const proper = Object.assign(a, formData, currentItems)
        updateFormData(proper)
    }

    return (
        <>            
            {displayResults ? <FinalResult /> :
            <>
            
            <div id="add_btn_div">
                <button className="add_all" onClick={(e) => {
                    e.preventDefault()
                    addAllItems()
                    setCleared(false)

                    let timeout = setTimeout(() => {
                        isItAdded(false)
                    }, 1500)
                }}>
                {added ? 'All Items Added!' : 'Add All Items To List'}
                </button>
                <button id="clr_btn" className="add_all" onClick={(e) => {
                    e.preventDefault()
                    setCleared(true)
                    updateFormData([])
                    isItAdded(false)

                    let timeout = setTimeout(() => {
                        setCleared(false)
                    }, 1500)
                }}>
                { cleared ? 'All items cleared!' : 'Clear All Current Items' }
                </button>
            </div>
            
            
                <form name="inventory-form" ref={formInput} id="inventory_form"> 
                        {formElements}
                </form>
            
            </>
            }
        </>
    )
}