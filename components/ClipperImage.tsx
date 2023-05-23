import { processImage } from '@/libs/imageProcessing';
// import { handleImageScale } from '@/libs/scaleImage';
import Image from 'next/image';
import React from 'react'
import ReactCrop, { Crop } from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
// import { Tensor } from "onnxruntime-web"
import { UploadedImage, modelScaleProps } from '@/types/app-store.types';
// const ort = require("onnxruntime-web");
/* @ts-ignore */
// import npyjs from "npyjs";
// import useU2net from '@/hooks/useSAM';
// import { processModelOutput } from '@/libs/modelHelper';
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
interface Props {
    uploadedImg: UploadedImage;
    setCrop: React.Dispatch<React.SetStateAction<Blob | undefined>>;
}

// const IMAGE_PATH = "../public/models/clip-img-test.JPG";
// const IMAGE_EMBEDDING = "../public/models/embeddings.npy";
// const MODEL_DIR = "../public/models/decoder.onnx";

function ClipperImage({ uploadedImg, setCrop }: Props) {
    // const [crop, setCrop] = React.useState<Blob>()
    // const [tensor, setTensor] = React.useState<Tensor | null>(null); // Image embedding tensor
    // The ONNX model expects the input to be rescaled to 1024. 
    // The modelScale state variable keeps track of the scale values.
    // const [modelScale, setModelScale] = React.useState<modelScaleProps | null>(null);

    // const canvasRef = React.useRef<HTMLCanvasElement>(null)
    // const outputCanvasRef = React.useRef<HTMLCanvasElement>(null)
    // const saliencyCanvasRef = React.useRef<HTMLCanvasElement>(null)
    // const imgDataRef = React.useRef<ImageData>()
    // const model = useU2net();
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

    React.useEffect(() => {
        // if (uploadedImg && model && canvasRef.current && saliencyCanvasRef.current) {
        //     processImage(uploadedImg.imgURL, canvasRef.current)
        //         .then((processedImg) => {
        //             imgDataRef.current = processedImg?.imgData;
        //             return model.run({
        //                 ["input.1"]: processedImg?.tensor!
        //             }, ["1799"])
        //         })
        //         .then((outputs) => {
        //             // process the output similar to the Python code
        //             const outputData = {
        //                 output : Object.values(outputs["1799"].data)
        //             }
        //             console.log(outputData)
        //             return fetch('/embeddings', {
        //                 method: 'POST',
        //                 headers: {
        //                     'Content-Type': 'application/json'
        //                 },
        //                 body: JSON.stringify(outputData)
        //             })
        //         })
        //         .then(response => response.blob())
        //         .then((blob) => console.log(URL.createObjectURL(blob)))
        //         .catch(console.error)

        // }
        if (uploadedImg.imgForm) {
            // fetch("/embeddings", {
            //     method: 'POST',
            //     body: uploadedImg.imgForm
            // })
            // .then((res) => res.blob())
            // .then((img) => {
            //     console.log(URL.createObjectURL(img))
            // })
            // .catch(console.error)
        }
    }, [uploadedImg])

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
                    {/* <ReactCrop crop={crop} onChange={c => setCrop(c)}>
                        <Image src={uploadedImg.imgURL} width={350} height={400} alt="Uploaded image" />
                    </ReactCrop> */}
                    {/* <canvas className="" ref={canvasRef} />
                    <canvas className="" ref={saliencyCanvasRef} />
                    <canvas className="" ref={outputCanvasRef} /> */}
                </div>
            </div>

        </>
    )
}

export default ClipperImage