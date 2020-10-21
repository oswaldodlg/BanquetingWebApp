import React from 'react';
import {motion} from 'framer-motion';

export default function Modal( {selectedImg, setSelectedImg, retrieveCaption, setRetrieveCaption} ) {

    const handleClick = (e) => {
        
        if(e.target.classList.contains('backdrop')){
            setSelectedImg(null);
            setRetrieveCaption(null)
        }
        
    }

    return (
        <motion.div className="backdrop" onClick={handleClick}
            initial={{ opacity:0 }}
            animate = {{ opacity: 1 }}
        >       
                <img src={selectedImg} alt="enlarged" />
                {retrieveCaption && <motion.p initial={{ opacity:0 }}
            animate = {{ opacity: 1 }} >{retrieveCaption}</motion.p>}

        </motion.div>
    )
}
