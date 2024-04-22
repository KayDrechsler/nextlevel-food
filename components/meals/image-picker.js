'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import styles from './image-picker.module.css';

export default function ImagePicker({ label, name, }) {
    const [pickedImage, setPickedImage] = useState();

    const imageInputRef = useRef();
    function handlePickClick() {
        imageInputRef.current.click();
    };

    function handleImageChange(event) {
        const file = event.target.files[0];

        if (!file) {
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        };

        fileReader.readAsDataURL(file);
    };

    return (
        <div className={styles.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={styles.controls}>
                <div className={styles.preview}>
                    {!pickedImage && <p>Please pick an image.</p>}
                    {pickedImage && <Image
                        src={`${pickedImage}`}
                        alt="The image selected by the user"
                        fill
                    />}
                </div>
                <input
                    className={styles.input}
                    type="file"
                    id={name}
                    name={name}
                    accept="image/png, image/jpeg"
                    ref={imageInputRef}
                    onChange={handleImageChange}
                    required
                />
                <button
                    className={styles.button}
                    type="button"
                    onClick={handlePickClick}
                >Pick an Image</button>
            </div>
        </div>
    )
};
