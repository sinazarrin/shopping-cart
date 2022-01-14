import './filters.css'
import { useState } from 'react'
import FilterButton from '../FilterButton/FilterButton'

const Filters = () => {


    const [filterCategory] = useState([
        {id:1, name: "همه", category: 'all' },
        {id:2, name: "هودی", category: 'hoodie' },
        {id:3, name: "شلوار", category: 'pants' },
        {id:4, name: "کفش", category: 'shoe' },
        {id:5, name: "تیشرت", category: 'Tshirt' },
        {id:6, name: "کلاه", category: 'hat' }
    ])

    const showBtns = filterCategory.map(category => {
        return <FilterButton key={category.id} isActive={false} category={category} />
    })

    return (
        <div className="filter-container">
            <h2 className="product-title">محصولات</h2>
            <div className="border-filter">
                <ul className='ul-filter'>
                    {showBtns}
                </ul>
            </div>
        </div>

    )
}

export default Filters
