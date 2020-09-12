import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import firebase from "firebase";
import { storage, db } from '../firebase';
import './Styles/ImageUpload.css';

function ImageUpload({ username }) {
    //console.log('username in imageupload', username)
    const [image, setImage] = useState('');
    const [progress, setProgress] = useState('');
    const [caption, setCaption] = useState('');

    //  handleChange actually allows us to pick/choose files from your system
    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    //console.log('db, storage', db, storage);
    const handleUpload = () => {
        // uploadTask allows us to push that image/upload to firebase....
        const uploadTask = storage.ref(`images/${ image.name }`).put(image);

        //console.log('uploadTask', uploadTask)


        // .on allows us to listen to what's happening now i.e. "state_changed"
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                //progress function for the progress bar visuals ...
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            (error) => {
                // Error function ...
                console.log(error);
                alert(error.message);
            },
            () => {
                //complete function for getting image from firebase to our app ....
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        // post image inside db
                        db.collection("posts").add({
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            caption: caption,
                            imageUrl: url,
                            username: username
                        });

                        setProgress(0);
                        setCaption("");
                        setImage(null);
                    })
            }
        )
    }

    return (
        <div className="imageUpload">
            {/*  I want to have */}
            {/* Caption input */}
            {/* File picker */}
            {/* Post button */}

            <progress className="imageUpload__progress" value={progress} max="100" />
            <input type="text" placeholder="Enter a caption..." value={caption} onChange={e => setCaption(e.target.value)} />
            <input type="file" onChange={handleChange} />

            <Button onClick={handleUpload}>Upload</Button>
        </div>
    )
}

export default ImageUpload;
