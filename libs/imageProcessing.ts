import * as tf from "@tensorflow/tfjs"
import pica from 'pica';
import { Tensor, TypedTensor } from "onnxruntime-web";


export async function processImage(image: HTMLImageElement, canvas: HTMLCanvasElement) {
    const image_size = 320;
    const mean = [0.485, 0.456, 0.406];
    const std = [0.229, 0.224, 0.225];

    canvas.width = image_size;
    canvas.height = image_size;
    const ctx = canvas.getContext('2d');
    await pica().resize(image, canvas);
    if (ctx !== null) {
        // get ImageData from the context
        const imgData = ctx.getImageData(0, 0, image_size, image_size);
        // normalize the ImageData
        const normImgData = new Float32Array(image_size * image_size * 3);
        let i, j;
        for (i = 0; i < imgData.data.length; i += 4) {
            j = i / 4 * 3;
            normImgData[j] = (imgData.data[i] / 255 - mean[0]) / std[0];
            normImgData[j + 1] = (imgData.data[i + 1] / 255 - mean[1]) / std[1];
            normImgData[j + 2] = (imgData.data[i + 2] / 255 - mean[2]) / std[2];
        }
        // create the ONNX Tensor
        const tensor = new Tensor('float32', normImgData, [1, 3, image_size, image_size]);
        return {
            tensor,
            imgData
        };
    } else {
        return null
    }

}