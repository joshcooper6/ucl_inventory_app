import React, {createContext, useContext} from 'react'
import Header from './Header'
import Form from './Form'
import renderList from './RenderList'
import NoNums from './NoNums'
import Loading from './Loading'
import getDay from './getDay'
import renderDay from './RenderDay'

export default function App() {
    
    const [loading, setLoading] = React.useState(true)
    const [inventory, setInventory] = React.useState(renderList(getDay()))
    let [day, setDay] = React.useState(renderDay(getDay()))
    const [showSelect, setShowSelect] = React.useState(false)
    
    React.useEffect(() => setTimeout(() => {
        setLoading(!loading)
    }, 1000), [])
    

    const handleChange = (e) => {
        e.preventDefault()
        let val = e.target
        setInventory(renderList(e.target.value))
        setDay(renderDay(e.target.value))
        setShowSelect(!showSelect)
    }
    
    const selectOptions = () => {
        let options = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        let elements = []
        for (let i = 0; i < options.length; i++) {
            elements.push(<option value={i} id={options[i]} key={options[i]}>{options[i]}</option>)
        } 
        return elements
    }
    
    let a = 'https://images.squarespace-cdn.com/content/v1/52e4acabe4b0fe48e4d68193/1440581979066-6Y0P210U6ZMJUUG30KSC/Logo+Inverted.png'
    
    return (   
        <>
                <img src="https://i.pinimg.com/originals/2b/4b/e9/2b4be96bc38970073bbdf0f5b5ce5d5d.gif" id="bg_gif" / >
            
                <div id="cntnr">
                    <div id="header">
                        <img src={a} id="logo" />
                        
                        {loading ? '' : <><select onChange={handleChange}>{selectOptions()}</select></>}
                        
                        {showSelect ? <p>Today's inventory already loaded. Are you sure you want to change the day?</p> : ''}
                    </div>

                    
                    {loading ? <Loading /> : <>
                    <h3 id="subheader">{day} Inventory Numbers</h3>
                    {inventory.length <= 0 ? <NoNums /> : <Form inventory={inventory} select />}
                    </>}
                </div>
        </>
    )
}