import React, { useState, useEffect } from 'react'
import { InferenceModel } from "@/types/app-store.types";
import { initU2net } from '@/libs/modelHelper';
import { InferenceSession } from 'onnxruntime-web';

function useU2net() {
    const [u2netModel, setU2netModels] = useState<InferenceSession>();

    useEffect(() => {
      initU2net()
        .then((model) => setU2netModels(model))
        .catch(console.error);
    }, [])
    
  return (u2netModel)
}

export default useU2net