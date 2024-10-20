import { useEffect, useRef, useState } from "react"

export const useEditInput = () => {
    const [viewEditInputTask, setViewEditInputTask] = useState(false)
    const [editInputTask, setEditInputTask] = useState('')
    const itemRef = useRef(null)
    const focusRef = useRef()

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (itemRef.current && !itemRef.current.contains(e.target)) {
                setViewEditInputTask(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    useEffect(() => {
        if (viewEditInputTask) {
            focusRef.current.focus()
        }
    }, [viewEditInputTask])

    return { viewEditInputTask, setViewEditInputTask, editInputTask, setEditInputTask, itemRef, focusRef }
}