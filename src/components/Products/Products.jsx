import React from 'react';
import { productState } from "../../config/data";
import RwdProducts from '../Responsive/RwdProducts/RwdProducts';

function Products(props) {
    const renderProducts = () => {
        return productState.map((product) => {
            return <div className="list__card" key={product.id}>
                <div className="card__img">
                    <img src={product.productImg} alt="product" />
                </div>
                <div className="card__content">
                    <p className="content__title">[what happen] How to create </p>
                    <div className="content__info">
                        <p className="info__price">2,500 won</p>
                        <div className="info__likes">
                            <div className="likes__img">
                                <img src="../img/product-list/hearticon.png" alt="heart" />
                            </div>
                            <span>236</span>
                        </div>
                    </div>
                </div>
            </div>
        })
    }
    return (
        <div className="products">
            <div className="products__wrapper">
                <div className="wrapper__list">
                    {renderProducts()}
                </div>
                <div className="wrapper__button">
                    <div className="button">
                        SEE MORE
                    </div>
                </div>
            </div>
            <RwdProducts />
        </div>
    );
}

export default Products;