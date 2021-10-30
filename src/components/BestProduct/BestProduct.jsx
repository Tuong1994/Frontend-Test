import React from 'react';

function BestProduct(props) {
    return (
        <div className="best-product">
            <div className="best-product__wrapper">
                <div className="wrapper__content">
                    <p className="content__title">
                        BEST PRODUCT
                    </p>
                    <p className="content__info">
                        How to create mobile-optimized videos in minutes. Not a designer,
                        every team makes a lot of videos Can be trimmed. Take the first
                    </p>
                </div>
                <div className="wrapper__images">
                    <div className="images__item">
                        <div className="item__producticon">
                            <img src="../img/best-product/producticon-01.png" alt="production" />
                        </div>
                        <div className="item__product">
                            <img src="../img/best-product/best-image-01.png" alt="best-production" />
                        </div>
                        <div className="item__content">
                            <p className="content__text">How to create mobile-optimized</p>
                            <div className="content__go-icon">
                                <img src="../img/best-product/go-icon.png" alt="icon" />
                            </div>
                        </div>
                    </div>
                    <div className="images__item">
                        <div className="item__producticon">
                            <img src="../img/best-product/producticon-02.png" alt="production" />
                        </div>
                        <div className="item__product">
                            <img src="../img/best-product/best-image-02.png" alt="best-production" />
                        </div>
                        <div className="item__content">
                            <p className="content__text">How to create mobile-optimized</p>
                            <div className="content__go-icon">
                                <img src="../img/best-product/go-icon.png" alt="icon" />
                            </div>
                        </div>
                    </div>
                    <div className="images__item">
                        <div className="item__producticon">
                            <img src="../img/best-product/producticon-03.png" alt="production" />
                        </div>
                        <div className="item__product">
                            <img src="../img/best-product/best-image-03.png" alt="best-production" />
                        </div>
                        <div className="item__content">
                            <p className="content__text">How to create mobile-optimized</p>
                            <div className="content__go-icon">
                                <img src="../img/best-product/go-icon.png" alt="icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BestProduct;