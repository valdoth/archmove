const Button = ({title}) => {
  return (
    <div>
      <button className='bg-brightRed px-4 py-2 rounded-md hover:bg-white hover:text-black hover:scale-105 transition-all'>{title}</button>
    </div>
  )
}
export default Button