import React from 'react'
import homeImage from '../../img/homepage_image.jpg'

function HomePage() {
  return (
    <div className="home-page text-white">
      <div className="">
        <div className="w-100">
          <div className="z-1 w-100">
            <h1 className="mt-3 text-center">Task App</h1>
            <p className="text-center">A Simple Task app with Authentication</p>
            <div className="home_img_div w-100 h-100 d-flex justify-content-center">
              <img className="home_img align-self-center" src={homeImage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage