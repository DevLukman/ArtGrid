import ArtistList from "../features/Artist/ArtistList";
import MobileNav from "../ui/MobileNav";
import Nav from "../ui/Nav";
import Footer from "../ui/Footer";
function Artists() {
  return (
    <>
      <Nav />
      <MobileNav />
      <ArtistList />
      <Footer />
    </>
  );
}

export default Artists;
