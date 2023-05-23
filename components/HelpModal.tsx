import { Apps } from '@/types/app-store.types'
import React from 'react'

interface Props {
    screenName: Apps;
}

function HelpModal({ screenName }: Props) {
    return (
        <>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="help-modal" className="modal-toggle" />
            <label htmlFor='help-modal' className="modal modal-bottom sm:modal-middle z-50">
                <label className="modal-box relative bg-accent">
                    <label htmlFor="help-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    {/* <div className="carousel w-full">
                        <div id="item1" className="carousel-item w-full flex flex-col">
                            <img src="https://picsum.photos/200/300" className="w-full" />
                            <p>hello world</p>
                        </div>
                        <div id="item2" className="carousel-item w-full">
                            <img src="https://picsum.photos/200/300" className="w-full" />
                        </div>
                        <div id="item3" className="carousel-item w-full">
                            <img src="https://picsum.photos/200/300" className="w-full" />
                        </div>
                        <div id="item4" className="carousel-item w-full">
                            <img src="https://picsum.photos/200/300" className="w-full" />
                        </div>
                    </div>
                    <div className="flex justify-center w-full py-2 gap-2">
                        <a href="#item1" className="btn btn-xs">1</a>
                        <a href="#item2" className="btn btn-xs">2</a>
                        <a href="#item3" className="btn btn-xs">3</a>
                        <a href="#item4" className="btn btn-xs">4</a>
                    </div> */}
                </label>
            </label >
        </>
    )
}

export default HelpModal