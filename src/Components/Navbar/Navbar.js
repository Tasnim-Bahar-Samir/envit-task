import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../images/logo.webp'
import { authProvider } from '../Contexts/UserContext'
import {FaUserAlt} from 'react-icons/fa'
const Navbar = () => {
    const{user,userLogOut} = useContext(authProvider)
    const navigate = useNavigate()
    console.log(user)
    const handleLogout = ()=>{
        userLogOut()
        navigate('/login')
    }
  return (
    <div className="navbar bg-base-100 md:px-10 px-2">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li ><Link to='/'>Home</Link></li>
        <li tabIndex={0}>
          <a className="justify-between">
            Events
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2 bg-white shadow-sm z-40">
            <li><a>Monthy Event</a></li>
            <li><a>Regular Event</a></li>
            <li><a>Annual Event</a></li>
          </ul>
        </li>
        <li><a>Contact Us</a></li>
        <div className='form-control'>
    <input type="text" placeholder="Search" className="input input-bordered" />
  </div>
      </ul>
    </div>
    <Link to='/' className="normal-case md:text-4xl text-xl font-bold flex items-center"><img className='w-24' src={logo} alt="" /> Save<span className='text-orange-600'>Life</span></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/'>Home</Link></li>
      <li tabIndex={0}>
        <a>
          Events
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-white shadow-sm z-40">
        <li><a>Monthy Event</a></li>
            <li><a>Regular Event</a></li>
            <li><a>Annual Event</a></li>
        </ul>
      </li>
      <li><a>Contact Us</a></li>
    </ul>
  </div>
  <div className="navbar-end  flex md:gap-5 gap-1">
  <div className='form-control md:block hidden'>
    <input type="text" placeholder="Search" className="input input-bordered" />
  </div>
  {
    user?.uid?
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full h-10">
          {user.photoURL?
            <img className='w-full' src={user.photoURL} alt="" />
          :<FaUserAlt className='w-full h-full'/>}
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
          </a>
        </li>
        <li onClick={handleLogout}><a>Logout</a></li>
      </ul>
    </div>
    :
    <Link to='/login' className='btn'>Login</Link>
  }
  </div>
</div>
  )
}

export default Navbar