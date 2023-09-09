import icon from '../assets/logo-arch.svg'
import Button from '../layout/Button'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between md:px-32 p-4 m-2'>
      <div className='flex flex-row items-center gap-12 text-lightText'>
        <div>
          <img src={icon} alt='' />
        </div>
        <nav className='hidden md:flex gap-4'>
          <a className='hover:text-brightRed transition-all' href='/works'>
            Hot it works
          </a>
          <a className='hover:text-brightRed transition-all' href='/gallery'>
            Design Gallery
          </a>
          <a className='hover:text-brightRed transition-all' href='/architects'>
            Architects
          </a>
          <a className='hover:text-brightRed transition-all' href='/articles'>
            Articles
          </a>
        </nav>
      </div>
      <div className='flex flex-row items-center p-2 gap-4'>
        <a href='/signin'>Sign In</a>
        <Button title='Sign Up' />
      </div>
    </div>
  )
}
export default Navbar
