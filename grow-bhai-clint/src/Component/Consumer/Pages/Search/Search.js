import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SearchDetails from './SearchDetails';

const Search = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('query');

    const [searchedProduct, setSearchProduct] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/addedproduct")
            .then(res => res.json())
            .then(data => setSearchProduct(data.filter(pd => pd.product_name.toLowerCase().includes(searchQuery.toLowerCase()))))
    }, [searchQuery]);


    return (
        <div>
        <h2 className='text-3xl pt-5'>Khoj - The Search</h2>
        {searchedProduct.length === 0 ? (
            <div className='border border-black font-mono text-5xl m-10 p-5'>
                <h3>No Product Found</h3>
                <span>:)</span>
            </div>
        ) : (
            searchedProduct.map(pd => <SearchDetails key={pd._id} allSearchedCollection={pd}></SearchDetails>)
        )}
    </div>
    );
};

export default Search;

