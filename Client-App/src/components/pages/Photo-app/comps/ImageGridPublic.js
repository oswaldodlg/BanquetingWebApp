import React, { useState, useContext } from 'react';
import useFirestore from '../hooks/useFirestore';
import deleteStorage from "./deleteStorage";
import { motion } from 'framer-motion';
import Modal from './Modal';
import EditBar from './EditBar';
import UserContext from '../../../../context/UserContext';


export default function ImageGridPublic({selectedImg, setSelectedImg, retrieveCaption, setRetrieveCaption, isDesktop}) {
    const [isHovered, setHover] = useState(false);
    const { docs } = useFirestore('images');

    return (
        <div className="img-grid">   
            {docs && docs.map(doc => (
                <motion.div className="img-wrap"  key={doc.id}
                    layout
                    whileHover={{ opacity: 1 }}
                    onMouseOver ={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    onClick={() =>{
                        setSelectedImg(doc.url);
                        setRetrieveCaption(doc.caption);
                    }
                    } 
                    >
                        
                    <motion.img src={doc.url} alt="uploaded" 
                        initial={{ opacity: 0 }}
                        animate ={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    />

                </motion.div>
                
            ))} 
        </div>
    )
}
