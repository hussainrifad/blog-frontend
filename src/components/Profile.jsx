import { Axios } from 'axios';
import React, { useEffect, useState } from 'react';

const Profile = () => {

    const [postBlogs, setPostBlogs] = useState(false);
    const [catagories, setCatagories] = useState([]);
    const [catagory, setCatagory] = useState("");
    const [imageSelected, setImageSelectd] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setimageUrl] = useState("");
    
    let post = { post_title : title,
        post_catagory : catagory,
        post_description : description,
        image_Url : imageUrl
    };

    useEffect(() => {
        fetch('http://localhost:3000/catagories')
        .then(res => res.json())
        .then(data => setCatagories(data))
    },[])

    // IMAGE UPLOAD 

    const imageUpload = () => {
        const formData = new FormData();
        formData.append("file", imageSelected);
        formData.append("upload_preset", "vzsjhjkk");
        formData.append("cloud_name", "dmzfdmwwc");
        

        fetch('http://api.cloudinary.com/v1_1/dmzfdmwwc/image/upload',{
            method:"post",
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            setimageUrl(data.url);
        })
        .catch(error => {
            console.log(error);
        })
    }


    // handle post 

    const handlePost = () =>{
        console.log(post);

        fetch('http://localhost:3000/postblogs', {
            method : "post",
            headers : { 
                'content-type' : 'application/json'
            },
            body : JSON.stringify(post)
        }).then(res => res.json())
        .then(data => console.log(data));
    }
    
    return (
        <section>
            <div>
                <div className='text-center'>
                {
                    !postBlogs && <button onClick={() => setPostBlogs(true)} className='px-7 py-2 border bg-green-100 font-semibold hover:bg-blue-800 hover:text-white'>Post your own blogs</button>

                }
                </div>
                {
                    postBlogs && <div className='m-5'>
                        <div className='flex flex-col gap-3'>
                            <span className="label-text font-semibold">Upload an image relevant to this post</span>
                            <div className='flex gap-5'>
                                <input onChange={(event) => { setImageSelectd(event.target.files[0]) }} type="file" className="file-input file-input-bordered text-sm w-full max-w-xs" />
                                <button onClick={imageUpload} className="btn btn-neutral">Upload</button>
                            </div>
                            <span className="label-text font-semibold">Add blog title</span>
                            <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Type blog title" name='title' className="bg-cyan-100 input input-bordered input-success w-full max-w-xs" />
                            <span className="label-text font-semibold">Catagory</span>
                            <select onChange={(e) => setCatagory(e.target.value)} name='catagory' className="bg-cyan-100 select w-full max-w-xs">
                                {
                                    catagories.map((cata, index) => <option key={index} value={cata.catagory_id}>{cata.name}</option>)
                                }
                            </select>
                        </div>
                        <div className='flex flex-col gap-3 mt-5'>
                            <span className="label-text font-semibold">Write your blog here</span>
                            <textarea onChange={(e) => setDescription(e.target.value)} placeholder="Description" className="bg-cyan-100 textarea textarea-bordered textarea-md min-h-[250px] sm:w-1/2" ></textarea>
                        </div>
                        <div className='my-5'>
                            <button disabled={!imageUrl} onClick={handlePost} className="btn btn-neutral">Post</button>
                        </div>
                    </div>
                    
                }
            </div>
            <div>
                {catagories.length}
            </div>
        </section>
    );
};

export default Profile;