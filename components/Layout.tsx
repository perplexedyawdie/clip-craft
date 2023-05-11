import React from 'react'
type Props = {
    children: React.ReactNode;
    Navbar: React.ReactNode;
}

export default function Layout({ children, Navbar }: Props) {
    return (
        <>
            <div className="hero min-h-screen bg-base">
                {Navbar}
                <div className="hero-content text-center relative px-0 sm:px-4">
                    <div className=" justify-center items-center ">
                        <div className="w-full flex justify-center items-center flex-col">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}