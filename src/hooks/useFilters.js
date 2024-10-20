import { useContext } from "react"
import { FilterContext } from "../contexts/filters"

export const useFilters = () => {
    const { filter, setFilter } = useContext(FilterContext)

    return { filter, setFilter }
}