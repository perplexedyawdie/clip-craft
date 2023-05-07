import React from 'react'
type Props = {
    children: React.ReactNode;
}
function Layout({ children }: Props) {
    return (
        <>
            <div className="hero items-start py-8 min-h-screen bg-base">
                <div className="hero-content text-center relative">
                    <div className=" relative card-body justify-center items-center">
                        <div className="w-full flex justify-center items-center flex-col">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}