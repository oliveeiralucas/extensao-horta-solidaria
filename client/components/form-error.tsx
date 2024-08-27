import { BiErrorCircle } from 'react-icons/bi'

interface FormErrorProps {
  message?: string
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) {
    return null
  }

  return (
    <div className="bg-red-500 w-full p-3 rounded-md flex items-center text-sm text-white">
      <BiErrorCircle className="size-4 mr-2" />
      <p className="capitalize font-bold">{message}</p>
    </div>
  )
}
