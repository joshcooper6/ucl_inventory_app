import React, {useRef, useEffect} from 'react'
import Typed from 'typed.js'
 
export default function TypedElement2() {
    
    const element = useRef(null)
    const typed = useRef(null)
    
    
    useEffect(() => {
        const options = {
            strings: [
                `Numbers copied!`,
                'Go to 7shifts and paste directly.'
            ],
            typeSpeed: 50,
            loop: true,
            backSpeed: 50
        };
        typed.current = new Typed(element.current, options);
        return () => {typed.current.destroy()}
    }, [])
    
    return (
        <span ref={element}></span>
    )
}