import Button from "../components/Button"
import ButtonWarning from "../components/ButtonWarning"
import { Heading } from "../components/Heading"
import InputBox from "../components/InputBox"
import SubHeading from "../components/SubHeading"

const Signin = () => {
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="bg-white w-80 rounded-lg text-centered p-2 px-4 h-max">
                <Heading label={'Sign In'} />
                <SubHeading label={"Enter your information to sign in your account"}/>
                <InputBox placeholder="johncena@gmail.com" label={"Email"} />
                <InputBox placeholder="password" label={"Password"} />
                <div className="pt-4">
                    <Button label={"Sign in"}/>
                </div>
                <ButtonWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"}/>
            </div>
        </div>
    </div>
  )
}

export default Signin