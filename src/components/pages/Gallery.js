import Footer from "../functional/Footer";
import Header from "../functional/Header";
import '../../css/gallery.css';
import PhotoGrid from "../functional/PhotoGrid";
export default function Gallery() {
    return (
        <div className="gallery">
            <Header />
            <PhotoGrid />
            <Footer />
        </div>
    )
}
