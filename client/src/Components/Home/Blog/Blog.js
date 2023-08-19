import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import {Array} from './Array'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Blog({data}) {
  return (
    <div>
      {data?
        <div class="container pt-5">
                <div class="d-flex flex-column text-center mb-5 pt-5">
                    <h4 class="text-secondary mb-3">Pet Blog</h4>
                    <h1 class="display-4 m-0"><span class="text-primary">Updates</span> From Blog</h1>
                </div>
                <div class="row pb-3">
                    {Array.map(blog=>
                        <div class="col-lg-4 mb-4">
                            <div class="card border-0 mb-2" key={blog.id}>
                                <img class="card-img-top" src={blog.img} alt="blogImage"/>
                                <div class="card-body bg-light p-4">
                                    <h4 class="card-title text-truncate">{blog.title}</h4>
                                    <div class="d-flex mb-3">
                                        <small class="mr-2"><i class="fa fa-user text-muted"></i> Admin</small>
                                    </div>
                                    <p>{blog.desc.slice(0,112)}</p>
                                    <Link class="font-weight-bold" to={`/blogdetails/${blog.id}`}>Read More</Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
        </div>:
      <div>
      <Navbar/>
      <div class="container pt-5">
              <div class="d-flex flex-column text-center mb-5 pt-5">
                  <h4 class="text-secondary mb-3">Pet Blog</h4>
                  <h1 class="display-4 m-0"><span class="text-primary">Updates</span> From Blog</h1>
              </div>
              <div class="row pb-3">
                  {Array.map(blog=>
                      <div class="col-lg-4 mb-4">
                          <div class="card border-0 mb-2" key={blog.id}>
                              <img class="card-img-top" src={blog.img} alt="blogImage"/>
                              <div class="card-body bg-light p-4">
                                  <h4 class="card-title text-truncate">{blog.title}</h4>
                                  <div class="d-flex mb-3">
                                      <small class="mr-2"><i class="fa fa-user text-muted"></i> Admin</small>
                                  </div>
                                  <p>{blog.desc.slice(0,112)}</p>
                                  <Link class="font-weight-bold" to={`/blogdetails/${blog.id}`}>Read More</Link>
                              </div>
                          </div>
                      </div>
                  )}
              </div>
      </div>
      <Footer/>
    </div>
      }
    </div>
  )
}
