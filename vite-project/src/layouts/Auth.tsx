import React, { FC, ReactNode } from 'react'

const Auth: FC<{ children: ReactNode }> = ({children}) => {

  return (
    <div style={{
        width: '50%',
        display: 'center',
        padding: '20px',
        margin: 'auto',
        borderRadius: '15px',
        border: '2px solid black',
        marginTop: '20px'
    }}>
      {children}
    </div>
  )
}

export default Auth