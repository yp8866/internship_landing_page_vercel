import React from 'react'

function Button1({children,className=''}) {
  return (
    <button className={className}>
      {children}
    </button>
  )
}

export default Button1