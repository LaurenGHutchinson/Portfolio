import React from 'react'
import './Logo.scss'

function Logo() {
  return (
    <div className="logo-body">
        <div className="name">
            <div className="name__upper">
                <h1>
                    Lauren
                </h1>
                <h2 className="name__letter">
                    G
                </h2>
            </div>
            <h2 className="name__last">HUTCHINSON</h2>
        </div>
        {/* <div className="tagline">
            <span className="tagline tagline__upper">Classic by</span>
            <span className="tagline tagline__lower">Modern Design</span>

        </div> */}
    </div>

  )
}

export default Logo