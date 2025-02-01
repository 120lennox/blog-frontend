import axios from "axios"


export const getPosts = async()=>{
    try{
        const response = await axios.get('http://127.0.0.1:8000/api/')
        const data = response.data
        console.log(data)
        return data
    }catch(error){
        console.error("error", error)
    }
}

//fetch user details 
export const getUser = async (token:string) =>{
    try{
        const response = await axios.get(`http://127.0.0.1:8000/api/users/`, {
            headers: {
                'authorization': `Token ${token}`
            }
        })
        const data = response.data
        console.log(data)
    }catch(error){
        console.error("error", error)
    }
}