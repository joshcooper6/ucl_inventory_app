import { 
    crafted, 
    finales,
    macrina,
    catapult,
    empanadas,
    holidayCrafted,
    plantlife } from './vendor.js'


export default function renderList(num) {
    let day = num
    
    if (day == 0) {
        return catapult.concat(macrina, holidayCrafted, plantlife, finales)
    } else if (day == 1) {
        return crafted.concat(holidayCrafted, catapult, empanadas)
    } else if (day == 2) {
        return []
    } else if (day == 3) {
        return catapult.concat(macrina, holidayCrafted, plantlife, finales)
    } else if (day == 4) {
        return crafted.concat(holidayCrafted, catapult, macrina, empanadas)
    } else if (day == 5) {
        return []
    } else if (day == 6) {
        return crafted.concat(holidayCrafted, catapult, macrina, plantlife, empanadas)
    } 
}