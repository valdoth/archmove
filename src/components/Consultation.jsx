import img from '../assets/consultationImg.svg'
import Button from '../layout/Button'

const Consultation = () => {
  return (
    <div className='min-h-screen flex flex-col items-center md:justify-center md:px-32 px-5 p-4 m-2'>
      <div className='flex flex-col items-center md:flex-row mt-10 md:mt-0'>
        <div>
          <img src={img} alt='' />
        </div>
        <div className='flex flex-row items-center'>
          <div className='flex flex-col items-center text-center space-y-5'>
            <h1 className='text-6xl font-playFar md:w-2/4 md:mt-0'>
              Realise your dream project with{' '}
              <span className='text-brightRed'>Archmove</span>
            </h1>
            <Button title='FREE CONSULTATION' />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Consultation
