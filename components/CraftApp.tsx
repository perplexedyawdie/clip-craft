import { AppData } from '@/types/app-store.types'
import { useRouter } from 'next/router'
import React from 'react'

interface Props {
    id: number;
}
function Status({ id }: Props) {
    switch (id) {
        case 2:
        case 3:
        case 4:
        case 5:
            return (
                <span className="inline-flex items-center justify-center rounded-full bg-amber-100 px-2 py-0.5 text-amber-700">
                    <p className="whitespace-nowrap text-xs">Coming Soon</p>
                </span>
            )
        default:
            return null
    }
}
function CraftApp({ name, icon, url, id }: AppData) {
    const { push } = useRouter();
    function handleAppClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        push(url);
    }

    return (
        <div className="flex justify-center items-center flex-col space-y-4">
            <button disabled={id > 1 ? true : false} onClick={handleAppClick} className="btn btn-square btn-xl text-xl">
                {icon}
            </button>
            <Status id={id} />
            <h2 className="font-semibold text-lg">
                
                {name}
            </h2>

        </div >
    )
}

export default CraftApp