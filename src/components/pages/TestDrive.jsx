import React from 'react'
import Header from '../functional/Header'
import Footer from '../functional/Footer'
import '../../css/testdrive.css';
import TestDriveForm from '../functional/TestDriveForm';

export default function TestDrive() {
    return (
        <div className='test-drive-page'>
            <Header />
            <TestDriveForm />
            <Footer />
        </div>
    )
}
