import React from 'react'
import ANavBar from '../components/ANavbar'
import ASidebar from '../components/ASidebar'

const ALayout = ({children}) => {
  return (
    <React.Fragment>
    <ANavBar />
    <div className="columns mt-6" style={{ minHeight: "100vh" }}>
      <div className="column is-2">
        <ASidebar />
      </div>
      <div className="column has-background-light">
        <main>{children}</main>
      </div>
    </div>
  </React.Fragment>
  )
}

export default ALayout