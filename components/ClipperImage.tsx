import React from 'react'
import { UploadedImage } from '@/types/app-store.types';
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
interface Props {
    uploadedImg: UploadedImage;
    setCrop: React.Dispatch<React.SetStateAction<Blob | undefined>>;
}

function ClipperImage({ uploadedImg, setCrop }: Props) {

    const cropperRef = React.useRef<ReactCropperElement>(null);
    const onCropEnd = () => {
        const cropper = cropperRef.current?.cropper;
        if (cropper) {
            console.log(cropper.getCroppedCanvas().toDataURL());
            cropper.getCroppedCanvas().toBlob((blob) => {
                if (blob) {
                    setCrop(blob);
                }
            })
        }
    };

    return (
        <>
            <div className="card sm:w-96 bg-base-100 shadow-xl h-full mt-6">
                <div className="card-body w-full px-0">
                    <Cropper
                        src={uploadedImg.imgURL.src}
                        style={{ width: 350, height: 400 }}
                        guides
                        cropend={onCropEnd}
                        initialAspectRatio={0}
                        autoCrop={false}
                        responsive
                        ref={cropperRef}
                    />
                </div>
            </div>

        </>
    )
}

export default ClipperImage