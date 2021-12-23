import { catapult, crafted, finales, macrina, holidayCrafted, plantlife, empanadas } from './vendor'
import renderList from './renderList'

export default function rendorVendor(input) {
    let date = new Date()
    let day = date.getDay()

    if ( input == 'Crafted' ) { // START OF VENDORS
        return crafted.concat(holidayCrafted)
    } else if ( input == 'Finales' ) {
        return finales
    } else if ( input == 'Catapult' ) {
        return catapult
    } else if ( input == 'Macrina' ) {
        return macrina
    } else if ( input == 'Plantlife' ) {
        return plantlife
    } else if ( input == 'Empanadas' ) {
        return empanadas
    } else if ( input == 'Vendors' ) {
        return renderList(day)
    } else if ( input == 'Sunday') { // START OF DAYS OF WEEK
        return renderList(0)
    } else if ( input == 'Monday') {
        return renderList(1)
    } else if ( input == 'Monday AM') {
        return crafted.concat(holidayCrafted)
    } else if ( input == 'Monday PM') {
        return catapult.concat(macrina, empanadas)
    } else if ( input == 'Tuesday') {
        return renderList(2)
    } else if ( input == 'Wednesday') {
        return renderList(3)
    } else if ( input == 'Thursday') {
        return renderList(4)
    } else if ( input == 'Thursday AM') {
        return crafted.concat(holidayCrafted)
    } else if ( input == 'Thursday PM') {
        return catapult.concat(macrina, empanadas)
    } else if ( input == 'Friday') {
        return renderList(5)
    } else if ( input == 'Saturday' ) {
        return renderList(6)
    } else if ( input == 'Saturday AM' ) {
        return crafted.concat(holidayCrafted)
    } else if ( input == 'Saturday PM' ) {
        return catapult.concat(macrina, empanadas, plantlife)
    } else if ( input == 'Days' ) {
        return renderList(day)
    } else if ( input == 'Time of Day') {
        return renderList(day)
    }
}