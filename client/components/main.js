import React from 'react'
import { Link } from 'react-router-dom'
import Header from './header'

const Main = () => {
  return (
    <div>
      <Header title="Main" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title"> Main </div>
          <Link to={"/dashboard/profile/7d770120-bff3-11e9-954d-2f6ce28e9166"}>
            Go To Profile
           </Link>
          <Link to={"/dashboard"}> Go To Root </Link>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main;
