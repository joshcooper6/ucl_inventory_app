import React, {useRef, useEffect} from 'react'
import Typed from 'typed.js'
 
export default function typedElement() {
    
    const element = useRef(null)
    const typed = useRef(null)
    
    useEffect(() => {
        const options = {
            strings: [
                'loading...'
            ],
            typeSpeed: 50,
            loop: false,
            backSpeed: 50
        };
        typed.current = new Typed(element.current, options);
        return () => {typed.current.destroy()}
    }, [])
    
    return (
        <span ref={element}></span>
    )
}