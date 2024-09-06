const year = new Date().getFullYear()

export default function MainFooter() {
  return (
    <footer className='select-none mx-auto my-8 max-w-[872px] bottom-0 px-4 text-stone-300 md:px-0'>
      <p className='text-gray-500 text-center dark:text-gray-400'>
        &copy; {year}&nbsp; RJ Jefferson
      </p>
    </footer>
  )
}
