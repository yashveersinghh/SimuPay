import Button from "../components/Button"
import ButtonWarning from "../components/ButtonWarning"
import { Heading } from "../components/Heading"
import InputBox from "../components/InputBox"
import SubHeading from "../components/SubHeading"

const Signup = () => {
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="bg-white w-80 rounded-lg text-centered p-2 px-4 h-max">
                <Heading label={'Sign Up'} />
                <SubHeading label={"Enter yout information to create an account"}/>
                <InputBox placeholder="john" label={"First Name"} />
                <InputBox placeholder="cena" label={"Last Name"} />
                <InputBox placeholder="johncena@gmail.com" label={"Email"} />
                <InputBox placeholder="password" label={"Password"} />
                <div className="pt-4">
                    <Button label={"Sign up"}/>
                </div>
                <ButtonWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"}/>
            </div>
        </div>
    </div>
  )
}

export default Signup