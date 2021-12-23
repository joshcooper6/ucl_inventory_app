export default function renderRules() {
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
}