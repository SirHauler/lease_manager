import { Auth } from "aws-amplify";


export const ValidateToken = async () => {
    // let user;
    try {
        await Auth.currentAuthenticatedUser(); 
        return true; 
    } catch(e) {
        console.log(e)
        return false; 
    }

  }



