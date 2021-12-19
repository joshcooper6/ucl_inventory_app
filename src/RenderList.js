import React from 'react'
import getDay from './getDay'

import { 
    crafted, 
    finales,
    macrina,
    catapult,
    empanadas,
    plantlife } from './vendor.js'

export default function renderList(num) {
    let day = num
    
    if (day == 0) {
        return catapult.concat(macrina, crafted, plantlife, finales)
    } else if (day == 1) {
        return catapult.concat(crafted, empanadas)
    } else if (day == 2) {
        return []
    } else if (day == 3) {
        return crafted.concat(catapult, macrina, finales)
    } else if (day == 4) {
        return crafted.concat(catapult, macrina, empanadas)
    } else if (day == 5) {
        return []
    } else if (day == 6) {
        return crafted.concat(catapult, macrina, plantlife, empanadas)
    } else if (day == 7) {
        return crafted
    } else if (day == 8) {
        return catapult
    } else if (day == 9) {
        return macrina
    } else if (day == 10) {
        return finales
    } else if (day == 11) {
        return plantlife
    }
    else if (day == 13) {
        return empanadas
    }
}