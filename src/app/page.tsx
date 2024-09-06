import ProfileImage from '@/components/index/HomeImage'
import SocialLink from '@/components/index/SocialCard'

export default function Home() {
  return (
    <div className='mx-auto pt-16 max-w-3xl px-4 md:px-0'>
      <ProfileImage />
      <SocialLink />
    </div>
  )
}
