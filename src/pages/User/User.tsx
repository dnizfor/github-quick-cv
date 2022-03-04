import { useParams } from 'react-router-dom';
import UserDataCard from '../../components/UserDataCard/UserDataCard';
import UserRepoCard from '../../components/UserRepoCard/UserRepoCard';
import useFetch from '../../hooks/useFetch';

import "./User.scss"

export default function User() {

  const { username } = useParams<string>();

  const {profile,repos} = useFetch(username)

  type IRepoMap = {
    name:string,
    description:string,
    html_url:string,
    language:string
  }

  return (
    <div className='user-container'>
      <div className='user-content'>
        <img src={profile?.avatar_url} alt="avatar" />

        <UserDataCard title={"Name"} content={profile?.name}/>
        <UserDataCard title={"Bio"} content={profile?.bio}/>
        <UserDataCard title={"Mail"} content={profile?.email}/>
        <UserDataCard title={"Location"} content={profile?.location}/>
        <UserDataCard title={"Company"} content={profile?.company}/>
        <UserDataCard title={"Since"} content={new Date(profile?.created_at).toUTCString()}/>


        <iframe title='uniq1' src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact`}/>

        <iframe title='uniq2' src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true`}/>



  

        <div className='user-repos'>
          <span>Last Repos</span>

          {
            repos?.map(({name,description,html_url,language}: IRepoMap)=>(<UserRepoCard title={name} content={description} url={html_url} language={language}/>))
          }
          
          
          </div>




      </div>




    </div>
  )
}
