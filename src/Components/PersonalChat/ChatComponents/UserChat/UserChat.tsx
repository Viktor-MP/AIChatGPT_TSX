import React, { FC, ReactNode } from 'react'


import { PersonType } from '../../../PersonalMap/typesPersonMap'
import { RootState } from '../../../ReduxToolkit/app_store'
import { useSelector } from 'react-redux'
import "./UserChat.scss"

const UserChat:FC <PersonType> = ({className}) => {

  const reduxMessage = useSelector((state: RootState) => state.message)

  return (
    <div className={className}>
        <div className='_chat_'>
          {/* {reduxMessage} */}
        </div>
      
    </div>
  )
}

export default UserChat
