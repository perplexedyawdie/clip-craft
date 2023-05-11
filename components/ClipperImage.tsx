import Image from 'next/image';
import React from 'react'
import ReactCrop, { Crop } from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
interface Props {
    imgURL: HTMLImageElement;
}

function ClipperImage({ imgURL }: Props) {
    const [crop, setCrop] = React.useState<Crop>()
    return (
        <>
            <div className="card sm:w-96 bg-base-100 shadow-xl h-full">
                <div className="card-body w-full">
                    <ReactCrop crop={crop} onChange={c => setCrop(c)}>
                                <Image src={imgURL} width={350} height={400} alt="Uploaded image" />
                    </ReactCrop>
                </div>
            </div>

        </>
    )
}

export default ClipperImage