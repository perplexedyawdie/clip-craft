import { ClippedImage } from '@/types/app-store.types';
import Image from 'next/image';
import React from 'react'

interface Props {
    clippedImg: ClippedImage;
    setSelectedImg: React.Dispatch<React.SetStateAction<ClippedImage | null>>;
}
function CarouselItem({ clippedImg, setSelectedImg }: Props) {
    function handlePreviewClick(event: React.MouseEvent<HTMLLabelElement, MouseEvent>): void {
        setSelectedImg(clippedImg);
    }

    return (
        <label onClick={handlePreviewClick} htmlFor="image-modal" className="carousel-item btn p-0 h-full">
            <Image src={clippedImg.imgURL} alt='Clipped image' width={200} height={200} />
            {/* <img src="https://fastly.picsum.photos/id/248/200/200.jpg?hmac=36BllTJxy_tU762d2RYKfYaSQ3-RmP74hVxabGP_u3o" alt="Burger" /> */}
        </label>

    )
}

export default CarouselItem