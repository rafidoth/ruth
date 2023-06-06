import {Client, Account, Databases,Permission,Role, ID} from 'appwrite'

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
    account.createOAuth2Session('google','http://localhost:3000/welcome','http://localhost:3000/register');
    
}

export const getLoggedInAccount = async()=>{
    try{
        const response = await account.get();
        console.log(response);
        handleUserData(response)
        return response;
    }catch(err){
        console.log("error occured in getLoggedInAccount");
        return null;
    }
}

export const handleUserData = async (loggedInAccount)=>{
    try{
        const db_response = await database.createDocument(
            '64740ca98b29b1803ee9', 
            '647a3d3ad5a5fffd5b81', 
            loggedInAccount.$id,
            {'email':loggedInAccount.email},
            [
                Permission.read(Role.user(loggedInAccount.$id)),
            ])
        console.log(db_response)
    }catch(err){
        try{
            const pastRecord = await database.getDocument('64740ca98b29b1803ee9', '647a3d3ad5a5fffd5b81', loggedInAccount.$id)
            console.log(pastRecord)
        }catch(err){
            console.log(err);
        }
    }
}





export const getSessions = async()=>{
    try{
        const response = await account.listSessions();
        return response
    }catch(err){
        console.log(err);
        return null;
    }
}




