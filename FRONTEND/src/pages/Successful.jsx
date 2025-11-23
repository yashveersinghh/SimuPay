import { useNavigate } from "react-router-dom"

const Successful = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex justify-center items-center bg-gray-200">
        <div className="h-min bg-white w-120 p-5 shadow-lg rounded flex flex-col items-center justify-center" >
            <h1 className="text-2xl font-bold p-4">Transaction Successful!</h1>
            <div className="h-15 w-15 rounded-full flex justify-center items-center bg-green-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-9 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
            </div>
            <button onClick={()=>{
                navigate("/Dashboard");
            }} className="bg-green-500 rounded-xl cursor-pointer font-semibold text-white w-full m-5 p-3">
                Return to Dashboard
            </button>
        </div>
    </div>
  )
}

export default Successful