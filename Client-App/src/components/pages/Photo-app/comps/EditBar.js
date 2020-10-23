import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { faTrash, faPen, faEye} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function EditBar({setSelectedImg, setRetrieveCaption, isHovered, setHover, doc, deleteStorage}) {
    if (isHovered){
        return (
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
        )
    }
}
