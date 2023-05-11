import HelpModal from '@/components/HelpModal'
import Layout from '@/components/Layout'
import NavBar from '@/components/NavBar'
import { Apps } from '@/types/app-store.types'
import dynamic from 'next/dynamic'
import React from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { AiOutlineCloudUpload, AiOutlineScissor, AiOutlineReload } from 'react-icons/ai'
const ClipperImage = dynamic(() => import('@/components/ClipperImage'), {
  ssr: false
})

function Clipper() {
  const [uploadedImg, setUploadedImg] = React.useState<HTMLImageElement | null>(null);

  function handleImgUpload(event: React.ChangeEvent<HTMLInputElement>): void {
    if (event.target?.files && event.target?.files?.length > 0 && event.target.files[0].type.toLowerCase().includes("image")) {
      const img = new Image()
      img.src = URL.createObjectURL(event.target.files[0]);
      img.onload = (ev) => setUploadedImg(img)
    }
    if (event.target.files && !event.target.files[0].type.toLowerCase().includes("image")) {
      toast.error("Only images for now")
    }
  }

  return (
    <>
      <Layout Navbar={<NavBar title={Apps.CLIPPER} />}>
        {
          uploadedImg ? <ClipperImage imgURL={uploadedImg} /> : null
        }
        {!uploadedImg ? <input
          onChange={handleImgUpload}
          type="file"
          multiple={false}
          accept='image/*'
          className="file-input file-input-bordered file-input-accent w-full max-w-xs" /> :
          <div className="btn-group btn-group-horizontal">
            <button onClick={() => setUploadedImg(null)} className="btn btn-ghost tooltip" data-tip="Upload new image">
              <AiOutlineCloudUpload className="stroke-primary text-2xl md:text-3xl" />
            </button>
            <button className="btn btn-ghost tooltip" data-tip="Clear selection">
              <AiOutlineReload className="stroke-primary text-2xl md:text-3xl" />
            </button>
            <button className="btn btn-ghost tooltip" data-tip="Make clipping">
              <AiOutlineScissor className="stroke-primary text-2xl md:text-3xl" />
            </button>
          </div>}
          <div><Toaster/></div>
        <HelpModal screenName={Apps.CLIPPER} />
      </Layout>
    </>
  )
}

export default Clipper