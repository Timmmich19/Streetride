import Footer from "../functional/Footer";
import Header from "../functional/Header";
import PhotoGrid from "../functional/PhotoGrid";
import '../../css/gallery.css';
export default function Gallery() {
    return (
        <div className="gallery-page">
            <Header />
            <PhotoGrid />
            <Footer />
        </div>
    )
}
