import React from 'react'
import Navbar from '../Navbar/Navbar'
import {Array} from './Array'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

export default function BlogDetails() {
  const { id } = useParams();
  const singleBlog=Array.filter((blog)=>blog.id===parseInt(id))
  const newBlog=singleBlog[0]||{}

  return (
    <div>
        <Navbar/>        
        <div class="container py-5">
            <div class="row pt-5">
                <div class="col-lg-8">
                    <div class="d-flex flex-column text-left mb-4">
                        <h4 class="text-secondary mb-3">Blog Detail</h4>
                        <h1 class="mb-3">{newBlog.title}</h1>
                        <div class="d-index-flex mb-2">
                            <span class="mr-3"><i class="fa fa-user text-muted"></i> Admin</span>
                        </div>
                    </div>

                    <div class="mb-5">
                        <img class="img-fluid w-100 mb-4" src={newBlog.img} alt="cat"/>
                        <p>{newBlog.desc}</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
