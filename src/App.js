import React, {createContext, useContext} from 'react'
import { HeaderContainer }  from './containers'
import { MainViewer } from './components'
import Form from './Form'
import NoNums from './NoNums'
import Loading from './Loading'
import renderDay from './renderDay'
import rendorVendor from './rendorVendor'
import a from './Logo+Inverted (1).png'

export default function App() {

    const [added, isItAdded] = React.useState(false)
    const [cleared, setCleared] = React.useState(false)
    const [totals, setTotals] = React.useState([])
    const [formData, updateFormData] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [inventory, setInventory] = React.useState()
    const [title, setTitle] = React.useState(renderDay())
    const [displayResults, setDisplayResults] = React.useState(false);

    React.useEffect(() => setTimeout(() => {
        setLoading(!loading)
    }, 1000), [])

    React.useEffect(() => {
        // controls inventory & title based on time of day
        let date = new Date()
        let day = date.getDay()
        let time = date.getHours()

        if (day == 1 & time < 11) {
            setInventory(rendorVendor('Monday AM'))
            setTitle('Monday AM')
        } else if (day == 1 & time >= 11) {
            setInventory(rendorVendor('Monday PM'))
            setTitle('Monday PM')
        } else if (day == 1 & time < 11) {
            setInventory(rendorVendor('Thursday AM'))
            setTitle('Thursday AM') 
        } else if (day == 4 & time >= 11) {
            setInventory(rendorVendor('Thursday PM'))
            setTitle('Thursday PM')
        }  else if (day == 6 & time < 11) {
            setInventory(rendorVendor('Saturday AM'))
            setTitle('Saturday AM')
        }  else if (day == 6 & time >= 11) {
            setInventory(rendorVendor('Saturday PM'))
            setTitle('Saturday PM')
        }  else {
            setInventory(rendorVendor(renderDay()))
            setTitle(renderDay())
        }
    }, [])
    
    const handleChange = (e) => {
        e.preventDefault()
        setInventory(rendorVendor(e.target.value))
        isItAdded(false)
        setCleared(false)
        setTitle(() => {
            if (e.target.value == 'Vendors') {
                return renderDay()
            } else if (e.target.value == 'Days') {
                return renderDay()
            } else if (e.target.value == 'Time of Day') {
                return renderDay()
            } else {
                return e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        setDisplayResults(!displayResults)
        setTotals(Object.entries(formData)) 
        isItAdded(false)  
        setCleared(false)    
    }

    const selectOptions = () => {
        let options = [
            'Days',
            'Sunday', 
            'Monday',
            'Tuesday', 
            'Wednesday', 
            'Thursday',
            'Friday', 
            'Saturday'
        ]
        let elements = []
        for (let i = 0; i < options.length; i++) {
            elements.push(<option value={options[i]} id={options[i]} key={options[i]}>{options[i]}</option>)
        } 
        return elements
    }

    const selectVendorOptions = () => {
        let options = [
            'Vendors',
            'Crafted', 
            'Catapult', 
            'Macrina', 
            'Finales', 
            'Plantlife', 
            'Empanadas']
        let elements = []
        for (let i = 0; i < options.length; i++) {
            elements.push(<option value={options[i]} id={options[i]} key={options[i]}>{options[i]}</option>)
        } 
        return elements
    }

    const selectTimeOfDay = () => {
        let options = [
            'Time of Day',
            'Monday AM', 
            'Monday PM', 
            'Thursday AM', 
            'Thursday PM', 
            'Saturday AM', 
            'Saturday PM']
        let elements = []
        for (let i = 0; i < options.length; i++) {
            elements.push(<option value={options[i]} id={options[i]} key={options[i]}>{options[i]}</option>)
        } 
        return elements
    }
    
    let gifs = [
        'https://media3.giphy.com/media/3osBLaPnXNd7vUbA3K/giphy.gif?cid=ecf05e4766um30ss0sr5xcje0xme4bpg5e33osksyzd22iga&rid=giphy.gif&ct=g',
        "https://i.pinimg.com/originals/2b/4b/e9/2b4be96bc38970073bbdf0f5b5ce5d5d.gif"
    ]

    const [click, setClick] = React.useState(false)

    return (   
        <>
               
                    <img src={gifs[0]} id="bg_gif" / >

                        <div id="header">
                            {loading ? '' : <>
                                {displayResults ? '' : <>

                                    <div id="logo_n_btn">
                                        <img src={a} id="logo" />

                                        <button className='add_all' onClick={() => {setClick(!click)}}>
                                            {click ? 'Close menu' : 'Need another list?'}
                                        </button>
                                    </div>

                                    {click ? <div id="header_selects">
                                        <select onChange={handleChange}>{selectOptions()}</select>
                                        <select onChange={handleChange}>{selectVendorOptions()}</select>
                                        <select onChange={handleChange}>{selectTimeOfDay()}</select>
                                    </div> : <></>}

                                    {/* <div id="header_selects">
                                        <select onChange={handleChange}>{selectOptions()}</select>
                                        <select onChange={handleChange}>{selectVendorOptions()}</select>
                                        <select onChange={handleChange}>{selectTimeOfDay()}</select>
                                    </div> */}
                                </>}

                            </>}
                        </div>

                                               
                        {loading ? <Loading /> : <>

                        {/* <HeaderContainer 
                            handleChange={handleChange}
                            title={title}
                            /> */}


                
                        {inventory.length <= 0 ? <NoNums /> : <>
                        {displayResults? '' :<h1 id="main_title">{title} #'s</h1> }
                        <Form 
                            handleSubmit={handleSubmit}
                            inventory={inventory} 
                            updateFormData={updateFormData} 
                            formData={formData} 
                            totals={totals} 
                            setTotals={setTotals} 
                            displayResults={displayResults} 
                            setDisplayResults={setDisplayResults} 
                            added={added}
                            isItAdded={isItAdded}
                            cleared={cleared}
                            setCleared={setCleared}
                            select />
                            <div id="button-space"></div>
                     

                        {loading? <></> : <button id="official_submit" onClick={handleSubmit}>
                        {displayResults ? "Go back to form" : "Render"}
                        </button> }   

                         </>}
                         
                        </>
                        }
                        
                        
                    

                   
         
        </>
    )
}