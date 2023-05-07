import { AppData } from '@/types/app-store.types'
import { useRouter } from 'next/router'
import React from 'react'

function CraftApp({ name, icon, url }: AppData) {
    const { push } = useRouter();
    function handleAppClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        push(url);
    }

    return (
        <div className="flex justify-center items-center flex-col space-y-4">
            <button onClick={handleAppClick} className="btn btn-square btn-xl text-xl">
                {icon}
            </button>
            <h2 className="font-semibold text-lg">{name}</h2>

        </div >
    )
}

export default CraftApp