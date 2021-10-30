import React from 'react';

function VideoImage(props) {
    return (
        <div className="video-image">
            <div className="video-image__wrapper">
                <div className="wrapper__img wrapper__img-h">
                    <img src="../img/video-image/video-object-05.png" alt="video-img" />
                </div>

                <div className="wrapper__content">
                    <p className="content__title">WHAT HAPPENED</p>
                    <p className="content__text">How to create mobile-optimized videos in minutes. Not a designer, every team makes a lot of videos Can be trimmed. Take the first </p>
                    <div className="content__button">
                        <div className="button">
                            SEE MORE
                        </div>
                    </div>
                </div>

                <div className="wrapper__img wrapper__img-w">
                    <div className="img-w">
                        <img src="../img/video-image/video-object-07.png" alt="video-img" />
                        <img src="../img/video-image/video-object-06.png" alt="video-img" />
                    </div>
                </div>

                <div className="wrapper__image">
                    <div className="image image__left">
                        <img src="../img/video-image/video-object-04.png" alt="video" />
                    </div>

                    <div className="image__main">
                        <img src="../img/video-image/video.png" alt="video-main" />
                    </div>

                    <div className="image image__bottom">
                        <img src="../img/video-image/video-object-03.png" alt="video-main" />
                        <img src="../img/video-image/video-object-01.png" alt="video-main" />
                    </div>

                    <div className="image image__click">
                        <img src="../img/video-image/video-object-02.png" alt="video-main" />
                    </div>

                    <div className="image image__right">
                        <div className="right__wrapper">
                            <img src="../img/video-image/video-object-08.png" alt="video-main" />
                            <img src="../img/video-image/video-object-09.png" alt="video-main" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoImage;