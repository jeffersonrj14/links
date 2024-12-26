import Image from 'next/image'

export default function HomeImage() {
  return (
    <div className='sm:flex block gap-3'>
      <Image
        src='/profile.png'
        alt='profile picture'
        width={80}
        height={80}
        className='h-20 w-20 rounded-full'
        priority
      />
      <div className='pt-3 text-neutral-100'>
        <h1 className='font-kosugi-maru tracking-widest text-3xl font-bold'>RJ Jefferson</h1>
        <p className='font-sour-gummy text-2xl font-normal text-neutral-400'>
          Self Taught Developer based in Indonesia
        </p>
      </div>
    </div>
  )
}
