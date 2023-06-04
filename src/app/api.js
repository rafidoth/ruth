import {Client, Account, Databases, ID} from 'appwrite'

const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_API_ENDPOINT) // Your API Endpoint
    .setProject(process.env.NEXT_PUBLIC_PROJECT_ID);// Your project ID
const database = new Databases(client);
const account = new Account(client);

export const signUp = async (email,password)=>{
    try{
        
        const response  = await account.create(ID.unique(), email,password);
        console.log(response);
    }catch(err){
        console.log(err);
    }
}

export const singnInWIthGoogle = async() =>{
    try{
        const response  = await account.createOAuth2Session('google','http://localhost:3000/','http://localhost:3000/register');
        console.log(response);
    }catch(error){
        console.log('Found Error :' + error);
    }
}


export const getCurrentLoggedInUser = async ()=>{

    try{
        let response = await account.get()
        localStorage.setItem('user': response);
    }catch(err){
        localStorage.setItem('user' : 0)
    }
    return response;
}




