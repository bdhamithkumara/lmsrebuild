import React from 'react'
import LNavbar from '../components/LNavbar'
import Lsidebar from '../components/Lsidebar'

const LLayout = ({children}) => {
  return (
    <React.Fragment>
    <LNavbar />
    <div className="columns mt-6" style={{ minHeight: "100vh" }}>
      <div className="column is-2">
        <Lsidebar />
      </div>
      <div className="column has-background-light">
        <main>{children}</main>
      </div>
    </div>
  </React.Fragment>
  )
}

export default LLayout