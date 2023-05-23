import { ClippedImage } from '@/types/app-store.types'
import Image from 'next/image';
import React from 'react'
import { v4 as uuidv4 } from 'uuid';

interface Props {
    selectedImg: ClippedImage | null;
}

function ImageModal({ selectedImg }: Props) {
    return (
        <>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="image-modal" className="modal-toggle" />
            <label htmlFor='image-modal' className="modal modal-bottom sm:modal-middle z-50">
                <label className="modal-box relative bg-accent">
                    <label htmlFor="image-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="w-full flex justify-center items-center flex-col space-y-4">
                        {
                            selectedImg?.imgURL ? (
                                <>
                                    <Image src={selectedImg.imgURL} alt='Clipped image preview' width={200} height={200} />
                                    <a className="btn btn-block glass" href={selectedImg.imgURL} download={uuidv4()}>Download</a>
                                </>
                            ) : null
                        }
                    </div>
                </label>
            </label >
        </>
    )
}

export default ImageModal