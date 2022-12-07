import Footer from "../functional/Footer";
import Header from "../functional/Header";
import MainSection from "../functional/MainSection";
import '../../css/main.css';

export default function Main() {
  return (
    <div className="main-page">
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
}
