import img from '../assets/homeImg.svg'
import Button from '../layout/Button'

const Hero = () => {
  return (
    <div className='min-h-screen flex-col justify-center md:px-32 px-5 p-4 m-2'>
      <div className='md:w-3/5'> 
        <h1 className='text-8xl font-playFar font-semibold'>Build Your Dream <span className='text-brightRed'>House</span></h1>
      </div>
      <div className='flex flex-col md:flex-row pt-8'>
        <div className='p-5 m-2 space-y-5'>
          <p>
            100% guaranteed build safe, confortable and transparent with a
            project management for the best result
          </p>
          <Button title="Free Consultation " />
        </div>
        <div>
          <img className='rounded-md' src={img} alt='' />
        </div>
      </div>
    </div>
  )
}
export default Hero
