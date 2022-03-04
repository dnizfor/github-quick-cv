import React from 'react'
import "./UserDataCard.scss"

type props = {title : string,content: string}

export default function UserDataCard({title,content}: props) {
  return (
    <div className='user-data-card'>
          <span>{title}</span>{content}
    </div>
  )
}
