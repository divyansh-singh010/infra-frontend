import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();
    const token = localStorage.getItem("access_token");
    const client_id = "2HEtZsBPc0gWWDph0kBijGm8uWKeHOn1";

    useEffect(() => {
        if (token) {    
            navigate("/dashboard");
        }
        else {
            window.location.href = `https://oauth.iitd.ac.in/authorize.php?response_type=code&client_id=${client_id}&state=xyz`;
        }
    }, [token, navigate]);

    return (<></>);
}

export default Login;
