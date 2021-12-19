import React from 'react'

export default function Header() {
    
    let a = 'https://images.squarespace-cdn.com/content/v1/52e4acabe4b0fe48e4d68193/1440581979066-6Y0P210U6ZMJUUG30KSC/Logo+Inverted.png'
    
    return (
        <div id="header">
            <img src={a} id="logo" />
        </div>
    )
}