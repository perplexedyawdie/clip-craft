import ClipperCarousel from '@/components/Clipper/ClipperCarousel'
import HelpModal from '@/components/HelpModal'
import Layout from '@/components/Layout'
import NavBar from '@/components/NavBar'
import { Apps, UploadedImage } from '@/types/app-store.types'
import dynamic from 'next/dynamic'
import React from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { AiOutlineCloudUpload, AiOutlineScissor, AiOutlineReload } from 'react-icons/ai'
const ClipperImage = dynamic(() => import('@/components/ClipperImage'), {
  ssr: false
})

function Clipper() {
  const [uploadedImg, setUploadedImg] = React.useState<UploadedImage | null>(null);
  const [crop, setCrop] = React.useState<Blob>()

  function handleImgUpload(event: React.ChangeEvent<HTMLInputElement>): void {
    if (event.target?.files && event.target?.files?.length > 0 && event.target.files[0].type.toLowerCase().includes("image")) {
      const img = new Image()
      const imgForm = new FormData();
      imgForm.append("file", event.target.files[0]);
      img.src = URL.createObjectURL(event.target.files[0]);
      img.onload = (ev) => setUploadedImg({
        imgForm,
        imgURL: img
      })
    }
    if (event.target.files && !event.target.files[0].type.toLowerCase().includes("image")) {
      toast.error("Only images for now")
    }
  }
  async function segmentImage(imgForm: FormData) {
    return fetch("/embeddings", {
      method: 'POST',
      body: imgForm
    })
      .then((res) => res.blob())
      .then((img) => {
        console.log("segmentation")
        console.log(URL.createObjectURL(img))
      })
  }

  function handleMakeClip(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    if (crop) {
      const imgForm = new FormData();
      imgForm.append("file", crop);
      toast.promise(
        segmentImage(imgForm),
        {
          loading: 'Clipping Image',
          success: 'Image Clipped!',
          error: 'Error when clipping',
        },
        {
          style: {
            minWidth: '250px',
          },
        }
      )
    }
  }

  return (
    <>
      <Layout Navbar={<NavBar title={Apps.CLIPPER} />}>
        {
          uploadedImg ? <ClipperImage uploadedImg={uploadedImg} setCrop={setCrop} /> : null
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
            <button disabled={!crop ? true : false} onClick={handleMakeClip} className="btn btn-ghost tooltip" data-tip="Make clipping">
              <AiOutlineScissor className="stroke-primary text-2xl md:text-3xl" />
            </button>
          </div>}
          <ClipperCarousel />
        <div><Toaster /></div>
        <HelpModal screenName={Apps.CLIPPER} />
      </Layout>
    </>
  )
}

export default Clipper