import CraftApp from '@/components/CraftApp'
import Layout from '@/components/Layout'
import { AppData } from '@/types/app-store.types'
import React from 'react'

const appData: AppData[] = [
    {
        name: "Clipper",
        icon: "✂",
        url: "/app-store/clipper",
        id: 1
    },
    {
        name: "Scrapbooker",
        icon: "📸",
        url: "/app-store/scrapbook",
        id: 2
    },
    {
        name: "PodClip",
        icon: "🎙",
        url: "/app-store/pod-clip",
        id: 3
    },
]
function AppStore() {
    return (
        <div className="hero items-start pt-8 min-h-screen bg-base">
            <div className="w-full hero-content text-center relative">
                <div className="w-full relative card-body justify-center items-center">
                    <div className="w-full flex justify-center items-center flex-col">
                        <h1 className="text-5xl font-semibold">Apps</h1>
                        <div className="divider"></div>
                        <div className="grid grid-flow-row xl:grid-cols-3 3xl:grid-cols-4 grid-cols-3 gap-4 w-full place-items-center h-max mt-4">
                            {
                                appData.map((app) => (<CraftApp
                                    name={app.name}
                                    icon={app.icon}
                                    url={app.url}
                                    id={app.id}
                                    key={app.id} />))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AppStore