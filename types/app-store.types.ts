import { InferenceSession } from "onnxruntime-web";

export interface AppData {
    name: string;
    icon: string;
    url: string;
    id: number;
}

export enum Apps {
    CLIPPER = "Clipper",
    SCRAPBOOKER = "Scrapbooker",
    PODCLIP = "Podclip"
}

export interface InferenceModel {
    u2netModel: InferenceSession;
}

export interface UploadedImage {
    imgURL: HTMLImageElement;
    imgForm: FormData;
}

export interface modelScaleProps {
    samScale: number;
    height: number;
    width: number;
}

export interface ClippedImage {
    imgURL: string;
    id: string;
    img: Blob;
}