import { useSelector, useDispatch } from "react-redux"
import { filterCategory } from "../../../redux/productSlice"

const FilterButton = ({ isActive, category }) => {
    const getSelectedCategory = useSelector(state => state.products.selectedCategory)
    const dispatch = useDispatch()
    const active = category.category === getSelectedCategory ? isActive === true : isActive === false

    return (
        <li className={active ? 'filter-button filter-button-active' : 'filter-button'} onClick={() => dispatch(filterCategory(category.category))}>
            {category.name}
        </li>
    )
}

export default FilterButton
