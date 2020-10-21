import React, { useState } from 'react';
import useFirestore from '../hooks/useFirestore';
import deleteStorage from "./deleteStorage";
import { motion } from 'framer-motion';
import { Button, ButtonGroup } from 'react-bootstrap';
import { faTrash, faEye} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function ImageGrid({selectedImg, setSelectedImg, retrieveCaption, setRetrieveCaption, isDesktop}) {
    const [isHovered, setHover] = useState(false);
    const { docs } = useFirestore('images');

    return (
        
        <div className="img-grid">
            
            { docs && docs.map(doc => (
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
                {isHovered && (
                <ButtonGroup    style={{
                    position: "absolute",
                    top: "5px",
                    right: "5px",
                    }}>
                        {<Button 
                        size="sm"
                        variant="secondary"
                        onClick={() => {
                            setSelectedImg(doc.url);
                            setRetrieveCaption(doc.caption)
                            setHover(false);
                        }}
                        >
                            <FontAwesomeIcon icon={faEye} />
                        </Button>}
                        {/* <Button 
                        size="sm"
                        variant="secondary" >
                            <FontAwesomeIcon icon={faPen} />
                        </Button> */}
                       <Button 
                        size="sm"
                        variant="secondary" 
                        onClick={() => deleteStorage({id: doc.id, collection: 'images'})}
                        >
                            <FontAwesomeIcon icon={faTrash}
                            />
                        </Button>
                </ButtonGroup>
             
                
                )} 
                </motion.div>
                
            ))} 
        </div>
    )
}
