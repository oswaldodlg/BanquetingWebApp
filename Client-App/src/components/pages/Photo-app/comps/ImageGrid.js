import React, { useState, useContext } from 'react';
import useFirestore from '../hooks/useFirestore';
import deleteStorage from "./deleteStorage";
import { motion } from 'framer-motion';
import EditBar from './EditBar';
import UserContext from '../../../../context/UserContext';


export default function ImageGrid({selectedImg, setSelectedImg, retrieveCaption, setRetrieveCaption, isDesktop}) {
    const [isHovered, setHover] = useState(false);
    const { docs } = useFirestore('images');

    const { userData } = useContext(UserContext);

    return (
        <div className="img-grid">   
            {docs && docs.map(doc => (
                <motion.div className="img-wrap"  key={doc.id}
                    layout
                    whileHover={{ opacity: 1 }}
                    onMouseOver ={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    //onClick={() => setSelectedImg(doc.url)}
                >
                    <motion.img src={doc.url} alt="uploaded" 
                        initial={{ opacity: 0 }}
                        animate ={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    />

                {userData.user && (<EditBar setSelectedImg={setSelectedImg} setRetrieveCaption={setRetrieveCaption} setHover={setHover} deleteStorage={deleteStorage} doc={doc} />)} 

                </motion.div>
                
            ))} 
        </div>
    )
}
