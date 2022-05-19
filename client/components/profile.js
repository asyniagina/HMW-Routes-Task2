import React from 'react'
import Header from './header'

import { useParams } from 'react-router-dom'

const Profile = () => {
  const { username } = useParams()
  return (
    <div>
      <Header/>
      <div className="title">
        Profile
      </div>
      <link to={"/dashboard"}>
        Go To Root
      </link>
      <link to={"/dashboard/main"}>
        Go To Main
      </link>
      <div>
        {username}
      </div>
    </div>
  )
}

Profile.propTypes = {}

export default Profile;
