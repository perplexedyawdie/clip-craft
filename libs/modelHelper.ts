import { InferenceModel } from "@/types/app-store.types";
import { InferenceSession, Tensor } from "onnxruntime-web";

const u2net = "../_next/static/chunks/u2net.onnx";

export async function initU2net(): Promise<InferenceSession> {
    const u2netModel = await InferenceSession.create(u2net);
    return u2netModel
}

export function processModelOutput(result: Float32Array): Uint8Array {
    result = result.map(value => 1 - value);
    const min_value = Math.min(...result);
    const max_value = Math.max(...result);
    result = result.map(value => (value - min_value) / (max_value - min_value) * 255);
    return Uint8Array.from(result);
}


