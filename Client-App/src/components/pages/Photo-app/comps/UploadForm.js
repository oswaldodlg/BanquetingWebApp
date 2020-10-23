import React, {useState, useEffect} from 'react';
import Alert from 'react-bootstrap/Alert';
import ProgressBar from './ProgressBar';

export default function UploadForm() {

    const [file, setFile] = useState(null);
    const [caption, setCaption] = useState(null);
    const [selectedImg, setSelectedImg] = useState(null)
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    const submit = (e) => {
        e.preventDefault();

        if (selectedImg && types.includes(selectedImg.type)) {
            setFile(selectedImg);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image file (png or jpg)')
        }
    }




    return (
        <form onSubmit={submit}>
                <div  className="label" >
                    <input type="file" onChange={e => setSelectedImg(e.target.files[0])} />
                    <span>+</span>
                </div>
                {selectedImg && <p>{selectedImg.name}</p>}
                <input type="text" placeholder="Caption" onChange={e => setCaption(e.target.value)}/>
                <button type="submit">Upload</button>
            <div className="output">
                {error && <div className="error"><Alert>{error}</Alert></div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} caption={caption} setCaption={setCaption}/>}
            </div>
        </form>
    )
}

