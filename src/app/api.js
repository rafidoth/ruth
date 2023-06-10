import {Client, Account, Databases,Permission,Role, ID, Query} from 'appwrite'

const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_API_ENDPOINT) // Your API Endpoint
    .setProject(process.env.NEXT_PUBLIC_PROJECT_ID);// Your project ID
const database = new Databases(client);
const account = new Account(client);

export const signUp = async (email,password,name)=>{
    try{
        const id = ID.unique()
        await account.create(id, email,password,name);
        await account.createEmailSession(email, password);
        await database.createDocument(
                        process.env.NEXT_PUBLIC_DATABASE_ID, 
                        process.env.NEXT_PUBLIC_USERS_INFO, 
                        id,
                        {'email':email},
                        [
                            Permission.read(Role.any()),
                        ])
    }catch(err){
        console.log(err.message);
    }
}

export const signIn = async (email,password)=>{
    try{
        await account.deleteSession("current");
        await account.createEmailSession(email, password);
        return 1;
    }catch(e){
        console.log(e.message)
        return 0;
    }
}


export const signOut = async ()=>{
    try{
        return await account.deleteSession("current");
    }catch(err){
        console.log(err.message);
    }
}

export const getLoggedInAccount = async()=>{
    try{
        const acc = await account.get();
        console.log(acc)
    }catch(err){
        // console.log("error occured in getLoggedInAccount");
        return err.message;
    }
}

/// If there is an existing document then rreturn that
/// else create a document


// export const getLoggedInSession= async ()=>{
//     try{
//         const session = await account.getSession('current')
//         console.log(session.$id)
//         return session.$id;
//     }catch(err){
        
//     }
// }




// export const handleUserData = async (loggedInAccount)=>{
//     try{
//         const db_response = await database.createDocument(
//             process.env.NEXT_PUBLIC_DATABASE_ID, 
//             process.env.NEXT_PUBLIC_USERS_INFO, 
//             loggedInAccount.$id,
//             {'email':loggedInAccount.email},
//                 [
//                 Permission.read(Role.any()),
//             ])
//         // console.log(db_response)
//     }catch(err){
//         try{
//             const pastRecord = await database.getDocument(process.env.NEXT_PUBLIC_DATABASE_ID, process.env.NEXT_PUBLIC_USERS_INFO, loggedInAccount.$id)
//             // console.log(pastRecord)
//         }catch(err){
//             console.log(err);
//         }
//     }
// }

// export const isProfileCompleted = async(loggedInId)=>{
//     try{
//         const profileData = await database.getDocument(
//             process.env.NEXT_PUBLIC_DATABASE_ID, 
//             process.env.NEXT_PUBLIC_USERS_INFO,
//             loggedInId
//             );
//             console.log(profileData)
//         const {name,tech_interest, email, github_profile, project } = profileData;
//         const profileArray = [name,tech_interest, email, github_profile, project]
//         const isCompleted = profileArray.every(element =>element!==null)
//         // console.log(isCompleted)
//         return isCompleted;

//     }catch(err){
//         console.log(err);
//     }
// }



// export const updateProfileData  = async(loggedInAccount, data)=>{
//     try{
//         const promise = await database.updateDocument(
//             process.env.NEXT_PUBLIC_DATABASE_ID,
//             process.env.NEXT_PUBLIC_USERS_INFO,
//             loggedInAccount.$id,
//             data
//         )
//         // console.log(promise)
//     }catch(err){
//         console.log(err)
//     }
// }



