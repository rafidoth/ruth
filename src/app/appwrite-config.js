import {Client, Account, Databases, ID} from 'appwrite'

const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_API_ENDPOINT) // Your API Endpoint
    .setProject(process.env.NEXT_PUBLIC_PROJECT_ID);// Your project ID
const database = new Databases(client);
const account = new Account(client);
export {client, account, database, ID}
// const client = new Client()
//     .setEndpoint(process.env.NEXT_PROJECT_ENDPOINT) 
//     .setProject(process.env.NEXT_PROJECT_ID)