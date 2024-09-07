import Card from '@/components/ui/Card'
import { SiDiscord, SiGithub, SiKofi } from 'react-icons/si'
import { FaXTwitter } from 'react-icons/fa6'
import { GrMailOption } from 'react-icons/gr'
import { CiGlobe } from 'react-icons/ci'

export default function SocialCard() {
  return (
    <div>
      <div className='mt-6'>
        <ul className='my-2 grid sm:grid-cols-2 flex-col gap-4'>
          <Card
            icon={<CiGlobe />}
            title='Website'
            href='https://jeffersonrj.com'
            body='https://jeffersonrj.com'
          />
          <Card
            icon={<GrMailOption />}
            title='Email'
            href='mailto:jefferson@jeffersonrj.com'
            body='jefferson@jeffersonrj.com'
          />
          <Card icon={<SiGithub />} title='Github' href='https://github.com/jeffersonrj14' />
          <Card
            icon={<SiDiscord />}
            title='Discord'
            href='https://discordapp.com/users/606481557615542273'
          />
          <Card icon={<FaXTwitter />} title='Twitter' href='https://x.com/jeffersonrj14' />
        </ul>
      </div>
      <div className='mt-6'>
        <h2 className='text-lg font-medium text-neutral-700 dark:text-neutral-300'>Support</h2>
        <ul className='my-2 flex flex-col gap-4'>
          <Card icon={<SiKofi />} title='Ko-Fi' href='https://ko-fi.com/jeffersonrj14' />
        </ul>
      </div>
    </div>
  )
}
