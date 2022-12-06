import React from 'react'
import ImmageHover from './ImmageHover'

const rows = [[3, 4, 5, 6], [7, 8, 9], [10, 11, 12, 13], [14, 15, 16]]


export default function PhotoGrid() {

    return (
        <div classNameName="gall">
            <div className="gall__container container">
                <div className="gall__srlabel">
                    <img src="/img/Street-Ride.svg" alt="StreetRide" />
                </div>
                <div className="gall__gallery">
                    <div className="gall__label">
                        <span>Gallery</span>
                    </div>
                    <div className="gall__rulet">
                        <div className="gall__even-row">
                            {rows[0].map((el) => <ImmageHover key={el} className="gall__even-gall-photo" src={"/img/image " + String(el) + ".png"} />)}
                        </div>
                        <div className="gall__odd-row">
                            {rows[1].map((el) => <ImmageHover key={el} className="gall__odd-gall-photo" src={"/img/image " + String(el) + ".png"} />)}
                        </div>
                        <div className="gall__even-row">
                            {rows[2].map((el) => <ImmageHover key={el} className="gall__even-gall-photo" src={"/img/image " + String(el) + ".png"} />)}
                        </div>
                        <div className="gall__odd-row">
                            {rows[3].map((el) => <ImmageHover key={el} className="gall__odd-gall-photo" src={"/img/image " + String(el) + ".png"} />)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
