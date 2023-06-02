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



