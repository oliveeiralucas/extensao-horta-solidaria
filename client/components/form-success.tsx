import { BiCheckCircle } from 'react-icons/bi'

interface FormErrorProps {
  message?: string
}

export const FormSuccess = ({ message }: FormErrorProps) => {
  if (!message) {
    return null
  }

  return (
    <div className="bg-green-500 w-full p-3 rounded-md flex items-center text-sm text-white">
      <BiCheckCircle className="w-5 h-5 mr-2" />
      <p className="capitalize font-bold">{message}</p>
    </div>
  )
}
