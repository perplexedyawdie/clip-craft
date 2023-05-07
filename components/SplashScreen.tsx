import { useRouter } from 'next/router'
import React, { useRef } from 'react'

export default function SplashScreen() {
    const { push } = useRouter();
    const animRef = useRef<HTMLDivElement>(null)

    return (
        <div className="hero min-h-screen bg-black">
            <div className="w-full hero-content text-center relative">
                <div className="w-full relative card-body justify-center items-center">
                    <div onAnimationEnd={(e) => push("/app-store")} ref={animRef} id="anim" title="Animated Bat by Calciumtrice"></div>
                </div>
            </div>
        </div>
    )
}
