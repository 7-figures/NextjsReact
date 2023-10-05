import React from 'react'
import Link from 'next/link'

const Navbar = () =>{
   
  return (
    
    <div>
         <nav className="navbar navbar-expand-lg navy">
    <div className="container-fluid">
        <Link className="navbar-brand logo" href="/">
            get<span className='linked'>Linked</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse gap-3 p-3" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                    <Link className="nav-link " aria-current="page" id="timeline" href='./' >Timeline </Link>
                </li>
                <li class="nav-item">
                    <a className="nav-link" id="overview" href="#Overview">Overview</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#FAQs">FAQs</a>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" href='/Contact'>Contact</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link reg" href='/blog'>Blog</Link>
                </li>
            </ul>
        </div>
    </div>
</nav></div>
  )
}

export default Navbar