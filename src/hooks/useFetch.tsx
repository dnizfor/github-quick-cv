import { useEffect,useState } from "react";
import axios from  "axios"

export default function useFetch(username:string | undefined) : any {

    const [profile, setProfile] = useState<object>({})
    const [repos, setRepos] = useState([])

    useEffect(() => {
       fetchData()
    }, [])



    const fetchData = async() =>{
        
        try{
            const responseProfıle = await axios.get(`https://api.github.com/users/${username}`)
            setProfile(responseProfıle.data)
        }
        catch{
            console.log(`profile err`);
            
        }

        try{
            const responseRepos = await axios.get(`https://api.github.com/users/${username}/repos?page=1&per_page=4&sort=updated`)
            setRepos(responseRepos.data)
        }
        catch{
            console.log(`profile err`);
            
        }

    }
    
    return {profile,repos}

}
