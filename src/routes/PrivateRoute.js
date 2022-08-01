import { useEffect } from "react";
import { useNavigate} from "react-router-dom";
import { Auth } from "aws-amplify";


export const PrivateRoute = ({ children }) => {

    let navigate = useNavigate(); 
    async function checkAuthState() {
        try {
          await Auth.currentAuthenticatedUser(); 
        } catch (err) {
        //   props.history.push(route)
          navigate("/sign-in")
        }
      }
      useEffect(() => {
        checkAuthState()
      })

    return children; 
}; 

