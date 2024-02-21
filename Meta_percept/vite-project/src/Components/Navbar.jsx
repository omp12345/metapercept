import React from 'react'
import "../Components/Navbar.css"
function Navbar() {
  return (
    <>
      <nav>
        <ul className="nav-box">
          <div>
            <h4>Title</h4>
          </div>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Blog</li>
              <li>Contact</li>
              <button className='btn'>Button</button>
            </ul>
        </ul>
      </nav>
      <div className='title-box'>
        <p className='title-size'>Title</p>
        <p className='lor-box'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, molestias molestiae praesentium odio quibusdam repellat doloremque voluptate nisi quasi odit neque non doloribus numquam eos necessitatibus recusandae eveniet iure quas!</p>
        <button className='btn-read'>Read More</button>
      </div>
    </>
  );
}

export default Navbar