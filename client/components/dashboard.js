import React from 'react'
import Header from './header'

const Dashboard = () => {
  return (
    <div>
      <Header/>
      <div className="title">
        Dashboard
      </div>
      <link to={"/dashboard/profile/7d770120-bff3-11e9-954d-2f6ce28e9166"}>
        Go To Profile
      </link>
      <link to={"/dashboard/main"}>
        Go To Main
      </link>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard;
