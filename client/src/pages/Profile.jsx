import { useSelector } from "react-redux"
import { useEffect, useRef, useState } from "react"
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import { app } from '../firebase'
export default function Profile() {
  const fileRef = useRef(null)
  const currentUser = useSelector((state) => state.user.currentUser)
  const [file, setFile] = useState(undefined)
  const [filePerc, setFilePerc] = useState(0)
  const [fileUploadError, setFileUploadError] = useState(false)
  const [formData, setFormData] = useState({})

  useEffect(() => {
    if (file){
      handleFileUpload(file);
    }
  }, [file])

  const handleFileUpload = async (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file)
    uploadTask.on('state_changed', (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setFilePerc(Math.round(progress))
    }, (error) => {
      setFileUploadError(true);
      console.log(error);
    }, () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setFormData({...formData, avatar: downloadURL});
      }
    )});
  }
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <input onChange={(e) => setFile(e.target.files[0])} type="file" ref={fileRef} hidden accept="image/.*" />
        <img onClick={() => fileRef.current.click()} src={formData.avatar || currentUser.avatar} alt="avatar"  className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"/>
        <p className="text-center text-sm">
          {fileUploadError ? (
            <span className="text-red-700">Error with image upload. Image must be less than 2MB</span>) :
          filePerc > 0 && filePerc < 100 ? (
            <span className="text-slate-700">Uploading... {filePerc}%</span>) :
          filePerc === 100 ? (
            <span className="text-green-700">Image uploaded successfully</span>) : null
          }
        </p>
        <input type="text" className="border p-3 rounded-lg" placeholder="username" id="username" />        
        <input type="text" className="border p-3 rounded-lg" placeholder="email" id="email" />        
        <input type="text" className="border p-3 rounded-lg" placeholder="password" id="password" />    
        <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80"> Update</button>    
      </form>
      <div className="flex justify-between mt-5"> 
        <span className="text-red-700 cursor-pointer">Delete Account</span>
        <span className="text-red-700 cursor-pointer">Sign Out</span>
      </div>
    </div> 
  )
}
