import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Products from '../../pages/Products/Products';

function ProductRoute(props) {
    return (
        <Routes>
            <Route path='' element={ <Products /> } />
            <Route path='/:category' element={ <Products /> } />
        </Routes>
    );
}

export default ProductRoute;