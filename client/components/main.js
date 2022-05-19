import React from 'react'
import Header from './header'

const Main = () => {
  return (
    <div>
      <Header/>
      <div className="title">
        Main
      </div>
      <link to={"/dashboard/profile/7d770120-bff3-11e9-954d-2f6ce28e9166"}>
        Go To Profile
      </link>
      <link to={"/dashboard"}>
        Go To Root
      </link>
    </div>
  )
}

Main.propTypes = {}

export default Main;
