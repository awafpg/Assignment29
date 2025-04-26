import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactPage from "./component/ContactPage";
import HomePage from "./component/HomePage";
import CoffeePage from "./component/CoffePage";

function App() {
  const about = {
    image: "/src/assets/images/about-img.png",
    title: "Coffee Distribution",
    description:
      "Our cafe offers a wide variety of carefully sourced and distributed coffee beans to ensure the highest quality in every cup...",
  };

  const menuItems = [
    {
      src: "/src/assets/images/img-1.png",
      alt: "Types of Coffee",
      title: "Types of Coffee",
      desc: "Experience a variety of coffee blends from around the world.",
    },
    {
      src: "/src/assets/images/img-2.png",
      alt: "Bean Varieties",
      title: "Bean Varieties",
      desc: "Explore the best coffee beans curated for quality and taste.",
    },
    {
      src: "/src/assets/images/img-3.png",
      alt: "Coffee & Pastry",
      title: "Coffee & Pastry",
      desc: "Pair your favorite coffee with delicious pastries.",
    },
    {
      src: "/src/assets/images/img-4.png",
      alt: "Coffee to Go",
      title: "Coffee to Go",
      desc: "Grab your favorite coffee on the go with ease.",
    },
  ];

  const testimonials = [
    {
      img: "/src/assets/images/client-img1.png",
      name: "Joy Boy",
      quote: "Amazing coffee and great atmosphere! Highly recommend!",
    },
    {
      img: "/src/assets/images/client-img2.png",
      name: "Mimirian",
      quote: "Best place to relax and enjoy a good cup of coffee!",
    },
    {
      img: "/src/assets/images/client-img3.png",
      name: "Uliya Den",
      quote: "Friendly staff and delicious coffee selections!",
    },
  ];

  const coffeeTypes = [
    {
      name: "Espresso",
      description: "A strong and rich coffee shot.",
      image: "/src/assets/images/img-1.png",
    },
    {
      name: "Latte",
      description: "Smooth coffee with steamed milk.",
      image: "/src/assets/images/img-2.png",
    },
    {
      name: "Cappuccino",
      description: "Espresso, hot milk, and foam.",
      image: "/src/assets/images/img-3.png",
    },
    {
      name: "Americano",
      description: "Espresso with added hot water.",
      image: "/src/assets/images/img-4.png",
    },
  ];

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                shopName="Nyan Cafe"
                about={about}
                menuItems={menuItems}
                testimonials={testimonials}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <ContactPage
                shopName="Nyan Cafe"
                navLinks={[
                  { href: "/", label: "Home" },
                  { href: "/", label: "Menu" },
                  { href: "/", label: "About" },
                  { href: "/contact", label: "Contact" },
                ]}
                contactTitle="Get In Touch"
                mapSrc="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Jakarta,Indonesia"
              />
            }
          />
          <Route
            path="/cofee"
            element={
              <CoffeePage
                title="Types of Coffee"
                coffees={coffeeTypes}
                bannerImage="/images/banner-bg.png"
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
