import { ButtonDarkMode } from './ButtonDarkMode'

export const AppTitle = () => {
    return (
        <div className='text-center select-none mb-10 pt-5 flex flex-row gap-2 justify-center items-end
          [text-shadow:_3px_4px_2px_rgb(63_63_70_/_40%)]
          dark:text-zinc-200 dark:[text-shadow:_3px_4px_2px_rgb(255_255_255_/_40%)]'>
            <h1 className='opacity-0 animate-fadeInLeft'>[</h1>
            <h1 className='opacity-0 animate-fadeInUp'>To.Do.App</h1>
            <h1 className='opacity-0 animate-fadeInRight'>]</h1>
            <ButtonDarkMode></ButtonDarkMode>
        </div>
    )
}
