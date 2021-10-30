import React from 'react';

function Issue(props) {
    return (
        <div className="issue">
            <div className="issue__wrapper">
                <div className="wrapper__content">
                    <p className="content__title">HAPPENED'S ISSUE</p>
                    <p className="content__text">모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
                        다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.</p>
                    <div className="content__button">
                        <div className="button">
                            SEE MORE
                        </div>
                    </div>
                </div>
                <div className="wrapper__dice">
                    <img src="../img/happend-issue/news-object-03_2.png" alt="dice" />
                    <img src="../img/happend-issue/news-object-02.png" alt="dice" />
                </div>
                <div className="wrapper__list">
                    <div className="list__item list__item--main">
                        <p> WHPN<br />ISSUE</p>
                        <img src="../img/happend-issue/news-img-01.png" alt="arrow" />
                    </div>
                    <div className="list__item">
                        <img src="../img/happend-issue/news-object-04.png" alt="hot" className="item__hoticon" />
                        <div className="item__title">
                            B BRAND
                        </div>
                        <div className="item__img">
                            <img src="../img/happend-issue/news-img-03.png" alt="news" />
                        </div>
                    </div>
                    <div className="list__item">
                        <div className="item__title">
                            C BRAND
                        </div>
                        <div className="item__img">
                            <img src="../img/happend-issue/news-img-03.png" alt="news" />
                        </div>
                    </div>
                    <div className="list__item">
                        <div className="item__title">
                            D BRAND
                        </div>
                        <div className="item__img">
                            <img src="../img/happend-issue/news-img-04.png" alt="news" />
                        </div>
                    </div>
                    <div className="list__item">
                        <div className="item__title">
                            E BRAND
                        </div>
                        <div className="item__img">
                            <img src="../img/happend-issue/news-img-05.png" alt="news" />
                        </div>
                    </div>
                </div>
                <div className="wrapper__image wrapper__logo">
                    <img src="../img/happend-issue/news-object-03.png" alt="logo" />
                </div>
                <div className="wrapper__image wrapper__lol">
                    <img src="../img/happend-issue/news-object-05.png" alt="logo" />
                </div>
            </div>
        </div>
    );
}

export default Issue;