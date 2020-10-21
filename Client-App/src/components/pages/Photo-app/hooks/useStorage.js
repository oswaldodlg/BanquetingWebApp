import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';

export default function useStorage(file, caption) {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        //References
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images');

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred  / snap.totalBytes) * 100
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async() => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({ url, createdAt, caption})
            setUrl(url);
        })
    }, [file, caption]);

    return { progress, url, error }
}
