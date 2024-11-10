import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="bg-gray-800 text-white py-8 w-full">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
                <div className="text-2xl font-bold">
                <span className="text-white">Zest</span>
                <span className="text-orange-600">Fuse.</span>
                </div>
                <p className="text-gray-400 mt-2">Campus Craving... One stop solution!</p>
            </div>
            <div className="flex space-x-6">
                <a className="text-gray-400 hover:text-white" href="#"><i className="fab fa-facebook-f"></i></a>
                <a className="text-gray-400 hover:text-white" href="#"><i className="fab fa-twitter"></i></a>
                <a className="text-gray-400 hover:text-white" href="#"><i className="fab fa-instagram"></i></a>
                <a className="text-gray-400 hover:text-white" href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Footer
