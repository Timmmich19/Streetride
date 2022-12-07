
import React from 'react'
import Footer from '../functional/Footer'
import Header from '../functional/Header'
import MapBox from '../functional/MapBox'
import '../../css/map.css'

export default function Map() {
    return (
        <div class="map-page">
            <Header />
            <div className='map'>
                <MapBox />
            </div>
            <Footer />
        </div>
    )
}
