import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage';
import LinearProgress from '@material-ui/core/LinearProgress'

export default function ProgressBar({file, setFile, caption}) {
    const { progress, url } = useStorage(file, caption);
    
    useEffect(() => {
        if (url){
            setFile(null)
        }
    }, [url, setFile])

    return (
        <LinearProgress value={progress} />
    )
}
