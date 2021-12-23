import React from 'react'
import { Header } from '../components'
import image from '../Logo+Inverted (1).png'

export default function HeaderContainer({handleChange, title}) {

    const selectOptions = () => {
        let options = [
            'Days',
            'Sunday', 
            'Monday', 
            'Tuesday', 
            'Wednesday', 
            'Thursday', 
            'Friday', 
            'Saturday']
        let elements = []
        for (let i = 0; i < options.length; i++) {
            elements.push(<Header.Option value={options[i]} id={options[i]} key={options[i]}>{options[i]}</Header.Option>)
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
            elements.push(<Header.Option value={options[i]} id={options[i]} key={options[i]}>{options[i]}</Header.Option>)
        } 
        return elements
    }


    return (<>
        <Header>
                <Header.SubheaderContainer>
                    <Header.SubheaderWrap>
                        <Header.Logo src={image}/>
                            <Header.Subheader>
                                <p>{title} Inventory Numbers</p>
                            </Header.Subheader>
                    </Header.SubheaderWrap>
                </Header.SubheaderContainer>

                <Header.SelectWrap>
                    <Header.Select onChange={handleChange}>{selectOptions()}</Header.Select>
                    <Header.Select onChange={handleChange}>{selectVendorOptions()}</Header.Select>
                </Header.SelectWrap>
                
            
        </Header>
    </>)
}