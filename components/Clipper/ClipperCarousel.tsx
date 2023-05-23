import { ClippedImage } from '@/types/app-store.types'
import React from 'react'
import CarouselItem from './CarouselItem';

interface Props {
    clippedImgs: ClippedImage[];
    setSelectedImg: React.Dispatch<React.SetStateAction<ClippedImage | null>>;
}

function ClipperCarousel({ setSelectedImg, clippedImgs }: Props) {
    return (
        <>
            <div className="carousel rounded-box mt-4 justify-center items-center">
                {
                    clippedImgs.map((clippedImg) => (
                        <CarouselItem
                            key={clippedImg.id}
                            clippedImg={clippedImg}
                            setSelectedImg={setSelectedImg} />
                    ))
                }
            </div>
        </>
    )
}

export default ClipperCarousel