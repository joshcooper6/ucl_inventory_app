import React from 'react'
import renderDay from './renderDay.js'
import typedElement from './typedElement.js'

export default function Loading() {
    let src= "https://media0.giphy.com/media/3oEhmEUBfkRmJ9OBxe/giphy.gif"
    let cat = 'https://media1.giphy.com/media/ES4Vcv8zWfIt2/giphy.gif?cid=ecf05e47kjywk30gvbsk0juw7s0zxpueetoct3bv5651llo5&rid=giphy.gif&ct=g'
    

    return (
        <>
            <div id="loading">
                <div id="loading_text">
                    <h2>Numbers for</h2>
                    <h1 id="currentDay">{renderDay()}</h1>
                    <h2>{typedElement()}</h2>
                </div>
            </div>
        </>
    )
}