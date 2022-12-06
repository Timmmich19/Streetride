import React from 'react'

export default function PhotoGrid() {
    return (
        <div className="main">
            <div class="main__container container">
                <div class="main__srlabel">
                    <img src="/img/Street-Ride.svg" alt="StreetRide" />
                </div>
                <div class="main__gallery">
                    <div class="main__label">
                        <span>Gallery</span>
                    </div>
                    <div class="main__rulet">
                        <div class="main__even-row">
                            <div class="main__even-gall-photo"><img src="/img/image 3.png" alt="" /></div>
                            <div class="main__even-gall-photo"><img src="/img/image 4.png" alt="" /></div>
                            <div class="main__even-gall-photo"><img src="/img/image 5.png" alt="" /></div>
                            <div class="main__even-gall-photo"><img src="/img/image 6.png" alt="" /></div>
                        </div>
                        <div class="main__odd-row">
                            <div class="main__odd-gall-photo"><img src="/img/image 7.png" alt="" /></div>
                            <div class="main__odd-gall-photo"><img src="/img/image 8.png" alt="" /></div>
                            <div class="main__odd-gall-photo"><img src="/img/image 9.png" alt="" /></div>
                        </div>
                        <div class="main__even-row">
                            <div class="main__even-gall-photo"><img src="/img/image 10.png" alt="" /></div>
                            <div class="main__even-gall-photo"><img src="/img/image 11.png" alt="" /></div>
                            <div class="main__even-gall-photo"><img src="/img/image 12.png" alt="" /></div>
                            <div class="main__even-gall-photo"><img src="/img/image 13.png" alt="" /></div>
                        </div>
                        <div class="main__odd-row">
                            <div class="main__odd-gall-photo"><img src="/img/image 14.png" alt="" /></div>
                            <div class="main__odd-gall-photo"><img src="/img/image 15.png" alt="" /></div>
                            <div class="main__odd-gall-photo"><img src="/img/image 16.png" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
