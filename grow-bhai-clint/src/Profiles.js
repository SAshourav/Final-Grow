import { useEffect, useState } from "react";
import { useUserAuth,upload } from "./Context/UserAuthContext";

export default function  Profiles(){
    const { user } = useUserAuth();
    const [photoURL, setPhotoUrl] = useState(user.photoURL)
    const [photo, setPhoto] = useState(null)
    const [loading, setLoading] = useState(false);
    const handleChange = (e) =>{
        if(e.target.files[0]){
            setPhoto(e.target.files[0])
        }
    }
    const handleClick = () => {
        upload(photo, user, setLoading)
    }
    useEffect(()=>{
        if(user && user.photoURL){
            setPhotoUrl(user.photoURL);
        }
    },[user])
    return (
        <div className="ml-5 flex justify-center items-center border border-black rounded-md p-4">
            <div>
                <input onChange={handleChange} type="file" className="file-input file-input-bordered file-input-accent w-full max-w-xs" />
                <button className="btn btn-primary mt-4" disabled={loading || !photo} onClick={handleClick}>Upload</button>
            </div>
            <img src={photoURL} alt="avatar" className="rounded-full h-52 w-52 object-cover ml-4" />
        </div>


    )
}