import { useNavigate } from "react-router-dom"

const Me = () => {
  const navigate = useNavigate();
  return (
    <div>
        <div>
            
        </div>
        <button onClick={()=>{
            navigate("/signin")
        }}>Signin</button>
        <button onClick={()=>{
            navigate("/signup")
        }}>Signup</button>
    </div>
  )
}

export default Me