import { useState } from "react"
import { useFilters } from "../hooks/useFilters"
import { useTasks } from "../hooks/useTasks"
import { CardOfTasks } from "./CardOfTasks"

export const ListOfTasks = () => {
    const { tasks, updateStatusTask } = useTasks()
    const { filter } = useFilters()

    const [draggedTaskId, setDraggedTaskId] = useState(null)
    const [sourceListId, setSourceListId] = useState(null)

    const active = filter === 'completed'
    const filteredTasks = filter === 'actives' ? tasks.filter(t => !t.done) : tasks.filter(t => t.done)

    const allowDrop = (e) => {
        e.preventDefault()
    }

    const handleDragStart = (e, taskId) => {
        setDraggedTaskId(taskId)
        setSourceListId(e.target.closest('ul').id)
    };

    const drop = (e) => {
        e.preventDefault()
        const destinationListId = e.target.closest('ul').id
        if (sourceListId !== destinationListId) {
            updateStatusTask(tasks.find(t => t.id === draggedTaskId))
        }
        setDraggedTaskId(null)
        setSourceListId(null)
    }

    return (
        <main className='mt-10 px-5'>
            {
                (filter === '' || filter === 'all')
                    ?
                    <>
                        <section className="flex flex-col gap-6">
                            <CardOfTasks
                                tasks={tasks}
                                title='Active tasks'
                                tasksStatus={false}
                                allowDrop={allowDrop}
                                handleDragStart={handleDragStart}
                                drop={drop}
                            ></CardOfTasks>
                            <CardOfTasks
                                tasks={tasks}
                                title='Completed tasks'
                                tasksStatus={true}
                                allowDrop={allowDrop}
                                handleDragStart={handleDragStart}
                                drop={drop}
                            ></CardOfTasks>
                        </section>
                        <div className="mt-5 text-xs text-zinc-700 dark:text-white/60 opacity-0 animate-fadeInUp">
                            <p>- Try drag and drop your tasks!</p>
                            <p>- And doble-click to edit them.</p>
                            <p>- Don`t forget to try the dark mode.</p>
                        </div>
                    </>
                    :
                    <section>
                        <CardOfTasks
                            tasks={filteredTasks}
                            title=''
                            tasksStatus={active}
                        ></CardOfTasks>
                    </section>
            }
        </main>
    )
}
