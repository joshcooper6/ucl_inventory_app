import React from 'react'

export default function getDay() {
    let date = new Date()
    let day = date.getDay()
    
    return day
}