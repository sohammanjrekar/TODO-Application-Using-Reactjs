import React from 'react'

function NavBar() {
  return (
    <>
   <header>
  <nav className="shadow bg-white sm:p-6 dark:bg-gray-800">

  <div className="flex justify-between items-center py-3 px-10 container mx-auto">

    <div>
      <h1 className="text-2xl font-bold bg-gradient-to-tr from-indigo-600 to-green-600 bg-clip-text text-transparent hover:cursor-pointer">Adsla</h1>
    </div>

    <div>
      
      <div className="hover:cursor-pointer sm:hidden">
        <spnan className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
        <spnan className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
        <spnan className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
      </div>
      <div className="flex items-center">

        <ul className="sm:flex space-x-4 hidden items-center">
          <li><a href="#" className="text-white hover:text-indigo-600 text-md ">Home</a></li>
          <li><a href="#" className="text-white hover:text-indigo-600 text-md ">About</a></li>
          <li><a href="#" className="text-white hover:text-indigo-600 text-md ">Services</a></li>
          <li><a href="#" className="text-white hover:text-indigo-600 text-md ">Products</a></li>
          <li><a href="#" className="text-white hover:text-indigo-600 text-md ">Contact</a></li>
        </ul>

        <div className="md:flex items-center hidden space-x-4 ml-8 lg:ml-12">
          <h1 className="text-white  py-2 hover:cursor-pointer hover:text-indigo-600">LOGIN</h1>
          <h1 className="text-text-gray-600  py-2 hover:cursor-pointer px-4 rounded text-white bg-gradient-to-tr from-indigo-600 to-green-600 hover:shadow-lg">SIGNUP</h1>
        </div>
      </div>
    </div>
  </div>
  </nav>
</header>
    </>
  )
}

export default NavBar