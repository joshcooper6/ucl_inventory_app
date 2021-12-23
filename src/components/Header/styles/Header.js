import styled from 'styled-components'

const mainColor = 'orange'
const fontColor = 'black'

export const Container = styled.div`
    width: 100%;
    display: flex;
    height: 25%;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    grid-gap: .5em;
    margin-bottom: 1em;
`

export const Logo = styled.img`
    max-height: 150px;
    max-width: 250px;
    align-self: center;
    margin-right: auto;
    filter: invert(1);
`

export const SelectWrap = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-gap: .5em;
    margin: 0 auto;
`

export const Select  = styled.select`
    width: 50%;
    max-width: 500px;
    border: 0;
    padding: .3em;
    background-color: ${mainColor};
    font-family: 'Roboto Mono';
    color: ${fontColor};
    margin-bottom: .5em;
    
`

export const Option = styled.option`
    font-size: 1em;
`

export const SubheaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    background-color: ${mainColor};
    width: 100vw;
    align-content: center;
    margin: 0 auto;
`

export const SubheaderWrap  = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 800px;
    width: 90%;
    align-content: center;
`

export const Subheader  = styled.h2`
    font-size: 2em;
    text-align: right;
    font-family: 'Roboto Mono';
    color: ${fontColor};
    margin: 0;
    padding: 0;
`



