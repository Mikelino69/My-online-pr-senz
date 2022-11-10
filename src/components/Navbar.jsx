import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import MyImage from '../assets/images/mike.png'
import CafeImage from '../assets/images/cafe.jpg'

function Navbar() {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[130px] flex justify-between items-center px-4 bg-[#4fa7de] text-orange-300'>
    <div>
    <img src={MyImage} alt="Logo Image" style={{width: '110px', marginTop: '10px', borderRadius:'50%', rotate:''}}/>
    </div>
    <div>
    <img src={CafeImage} alt="Cafe Image" style={{width:'400px', height:'130px', marginTop:'0', borderRadius:'50%'}}/>
    </div>

    {/* menu*/}
    <div className='hidden md:flex'>
      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
    </div>
    {/* Hamburger */}
    <div onClick={handleClick} className='z-10 md:hidden'>
      {!nav ? <FaBars/> : <FaTimes/>}
      </div>


    {/* Mobile menue */}
    <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Skills</li>
        <li className='py-6 text-4xl'>Work</li>
        <li className='py-6 text-4xl'>Contact</li>
    </ul>

    {/* Social icons */}
    <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
      <ul>
        <li className='rounded-xl w-[160px] h-[60] 0.5rem; flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
          <a className='flex items-center justify-between w-full text-gray-300'
          href='/'>
            Linkedin <FaLinkedin size={30}/>
          </a>
        </li>
        <li className='rounded-xl w-[160px] h-[60] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
          <a className='flex items-center justify-between w-full text-gray-300'
          href='/'>
            Github  <FaGithub size={30}/>
          </a>
        </li>
        <li className='rounded-xl w-[160px] h-[60] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
          <a className='flex items-center justify-between w-full text-gray-300'
          href='/'>
            Email <HiOutlineMail size={30}/>
          </a>
        </li>
        <li className='rounded-xl w-[160px] h-[60] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
          <a className='flex items-center justify-between w-full text-gray-300'
          href='/'>
            Resume <BsFillPersonLinesFill size={30}/>
          </a>
        </li>
      </ul>
    </div>
    </div>
  )
};

export default Navbar

