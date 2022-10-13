import React from 'react'
import { Store } from 'uicore'
import './Username.scss'
import { IconPeopleCount } from '../../Icons'

const Username = () => {
  return (
    <div className='username'>
      <IconPeopleCount />
      {Store.UserStore.user.name}
    </div>
  )
}

Username.propTypes = {}

export default Username
