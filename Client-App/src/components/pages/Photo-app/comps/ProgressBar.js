import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage';
import LinearProgress from '@material-ui/core/LinearProgress'

const ProgressBar = ({file, setFile, caption, setCaption}) => {
    const { progress, url } = useStorage(file, caption);
    
    useEffect(() => {
        if (url){
            setFile(null)
        }
    }, [url, setFile])

    return (
        // <motion.div className="progress-bar" 
        //     initial={{ width:0 }}
        //     animate = { { width: progress + '%'}}
        // >   
        // </motion.div>
        <LinearProgress value={progress} />
    )
}

export default ProgressBar;
