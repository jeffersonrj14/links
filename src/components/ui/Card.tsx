import Link from 'next/link'
import React from 'react'

interface Props {
  title: string
  body?: string
  href: string
  icon?: React.ReactNode
}

function Card({ title, body, href, icon }: Props) {
  return (
    <li className='font-noto-sans-jp  flex rounded-xl border border-neutral-700 bg-neutral-900 text-neutral-100 shadow-sm shadow-neutral-800 transition-colors ease-in-out duration-150 hover:bg-neutral-800'>
      <Link href={href} target='_blank' className='flex h-full w-full' rel='noreferrer noopener'>
        {icon && (
          <div className='flex items-center justify-center rounded-l-xl p-4 bg-black'>{icon}</div>
        )}
        <div className='h-full w-full justify-center p-4'>
          <h2 className='font-semibold'>{title}</h2>
          {body && <p className='font-noto-sans-jp text-sm text-neutral-400'>{body}</p>}
        </div>
      </Link>
    </li>
  )
}

export default Card
