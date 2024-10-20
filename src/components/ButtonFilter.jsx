export const ButtonFilter = ({ filter, handleClickFilterTask, condition }) => {
    return (
        <button data-active={filter === condition} className='px-2 py-1 select-none text-xs rounded-md border 
            bg-zinc-100 border-zinc-500 text-dark/80 hover:bg-zinc-200 data-[active=true]:bg-zinc-400
            dark:bg-zinc-800 dark:border-zinc-200 dark:text-white/80 dark:hover:bg-zinc-600 active:dark:bg-zinc-500 dark:text-black'
            onClick={() => handleClickFilterTask(condition)}>{condition.toUpperCase()}</button>
    )
}
