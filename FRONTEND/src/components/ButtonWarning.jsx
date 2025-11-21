import { Link } from 'react-router-dom'

const ButtonWarning = ({label, buttonText, to}) => {
  return (
    <div className='py-2 text-sm text-black flex justify-center'>
        <div>
            {label}
        </div>
        <Link className='pointer cursor-pointer underline pl-1' to={to}>
            {buttonText}
        </Link>
    </div>
  )
}

export default ButtonWarning