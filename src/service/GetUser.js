import { Auth } from "aws-amplify";


export const GetUser = async () => {
    // let user = await Auth.currentAuthenticatedUser();

    let user; 
    try {
        user = await Auth.currentAuthenticatedUser(); 
    } catch(err) {
        console.log(err); 
    }
    return user; 
    // console.log(email)
}


