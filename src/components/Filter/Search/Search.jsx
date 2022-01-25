import './search.css'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateSearch, fetchProducts, fetchSearchProduct } from '../../../redux/productSlice';

const Search = () => {
    const search = useSelector(state => state.products.search)
    const dispatch = useDispatch()

    const handleSearch = (e) => {
        dispatch(updateSearch(e.target.value))
    }

    useEffect(() => {
        if (search.length > 0) {
            dispatch(fetchSearchProduct(search))
        }else{
            dispatch(fetchProducts())
        }
    }, [dispatch, search]);


    return (
        <div class="search-banner">
            <form method="get" action="#" class="search-from">
                <input
                    class="search-field"
                    type="text"
                    placeholder="محصول مورد نظرت رو پیدا کن"
                    value={search}
                    onChange={handleSearch}
                />
                <button class="search-submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </button>
            </form>
        </div>
    )
};

export default Search;
