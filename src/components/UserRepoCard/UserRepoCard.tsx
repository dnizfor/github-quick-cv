import React from 'react'
import "./UserRepoCard.scss"

type UserRepoType  ={
    title : string,
    content : string,
    url : string,
    language:string
}
export default function UserRepoCard({title,content,url,language} : UserRepoType) {

    const clickHandler = (event: React.MouseEvent<HTMLElement>) : void =>{
        window.open(url, '_blank');
    }
  return (
    <div onClick={clickHandler} className='repo-container'>
        <div className='repo-title'>{title}</div>
        <div className='repo-detail'>{content}</div>
        <div className='repo-language'>{language}</div>

    </div>
  )
}
