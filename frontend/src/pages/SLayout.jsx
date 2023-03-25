import React from 'react'
import SNavbar from '../components/SNavbar'
import SSidebar from '../components/SSidebar'

const SLayout = ({ children }) => {
  return (
    <React.Fragment>
      <SNavbar />
      <div className="columns mt-6" style={{ minHeight: "100vh" }}>
        <div className="column is-2">
          <SSidebar />
        </div>
        <div className="column has-background-light">
          <main>{children}</main>
        </div>
      </div>
    </React.Fragment>
  )
}

export default SLayout