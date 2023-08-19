import React, { useContext, useState } from 'react'
import NavTop from '../../Home/Navbar/NavTop'
import SideNav from '../../Admin/SideNav/SideNav'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { UserContext } from '../../../App';

export default function AddToLostAndFound() {
    const [imgUrl,setImgUrl]=useState(null);
    const {register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)

    const onSubmit = data =>{
        const formData={
            author:loggedInUser?.name||'Admin',
            title:data.title,
            address:data.address,
            phone:data.phone,
            message:data.message,
            img:imgUrl
        }
        fetch('http://localhost:5000/addLostAndFound',{
           method:'POST',
           headers:{
               'Content-Type':'application/json'
           },
           body: JSON.stringify(formData)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data) {
                alert('Your post has been added.')
            }
        })
    }

    const handleImg=event=>{
        const imgData=new FormData();
        imgData.set('key','69f67a6ce8f59c06c511c35448d16eaa')
        imgData.append('image',event.target.files[0])

         axios.post('https://api.imgbb.com/1/upload',imgData)
           .then(function (response) {
            setImgUrl(response.data.data.display_url)
          })
          .catch(function (error) {
            console.log(error);
        });
    }


  return (
    <div>
        <NavTop/>
        <SideNav/>
            <div style={{
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                padding:'30px',
                borderRadius:'10px'
            }} className='container mt-5'>

                <h3>Create a Lost & Found Post</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="mb-3">
                        <input type="text" class="form-control mt-4" id="exampleFormControlInput1" placeholder="Give a title of your post.."
                        {...register("title", { required: true })}/>
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Give the address where you found or lost.."
                        {...register("address", { required: true })}/>
                    </div>
                    <div class="mb-3">
                        <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Give your phone number.."
                        {...register("phone", { required: true })}/>
                    </div>
                    <div class="mb-3">
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your message"
                        {...register("message", { required: true})}></textarea>
                    </div>
                    <label>Upload a Photo: </label>
                    <input  type="file" class="form-control mt-2" id="exampleFormControlInput1"
                    {...register("image", { required: true })} onChange={handleImg}/>

                    <input type="submit" style={{width:'100%'}} className='button mt-4' value="Add a Post"/>
                </form>
            </div>
    </div>
  )
}
