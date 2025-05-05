import "./App.css";
import Card from "./Card";
import End from "./End";
import Footer from "./Footer";
import Header from "./Header";
import Iconbar from "./Iconbar";
import Topbar from "./Topbar";
import hotel1 from "./assets/hotel1.jpg";
import hotel2 from "./assets/hotel2.jpg";
import hotel3 from "./assets/hotel3.jpg";
import hotel4 from "./assets/hotel4.jpg";
import hotel5 from "./assets/hotel5.jpg";
import hotel6 from "./assets/hotel6.jpg";
import hotel7 from "./assets/hotel7.jpg";
import hotel8 from "./assets/hotel8.jpg";
import hotel9 from "./assets/hotel9.jpg";
import hotel10 from "./assets/hotel10.jpg";
import hotel11 from "./assets/hotel11.jpg";
import hotel12 from "./assets/hotel12.jpg";

import star from "./assets/star.png";

function App() {
  return (
    <>
      <Header />
      <Topbar />
      <Iconbar />
      <Card hotel={hotel1} address="Corrego do Bom Jesus, Brazil" rating={star} rate={4.95} distance="14,260 Kilometers away" date="29 Jun-4 Jul" price="Rs 71,800" duration="for 5 nights" />
      <Card hotel={hotel2} address="Amsterdam, Brazil" rating={star} rate={4.96} distance="14,260 Kilometers away" date="29 Jun-4 Jul" price="Rs 71,800" duration="for 5 nights" />
      <Card hotel={hotel3} address="Munnar Kerala, India" rating={star} rate={4.94} distance="14,260 Kilometers away" date="29 Jun-4 Jul" price="Rs 71,800" duration="for 5 nights" />
      <Card hotel={hotel4} address="Ooty, india" rating={star} rate={4.97} distance="14,260 Kilometers away" date="29 Jun-4 Jul" price="Rs 71,800" duration="for 5 nights" />
      <Card hotel={hotel5} address="Kodaicanal TamilNadu, India" rating={star} rate={4.98} distance="14,260 Kilometers away" date="29 Jun-4 Jul" price="Rs 71,800" duration="for 5 nights" />
      <Card hotel={hotel6} address="Spiti valley, NE India" rating={star} rate={4.92} distance="14,260 Kilometers away" date="29 Jun-4 Jul" price="Rs 71,800" duration="for 5 nights" />
      <Card hotel={hotel7} address="Goa, india" rating={star} rate={4.91} distance="14,260 Kilometers away" date="29 Jun-4 Jul" price="Rs 71,800" duration="for 5 nights" />
      <Card hotel={hotel8} address="PondiCherry, India" rating={star} rate={4.95} distance="14,260 Kilometers away" date="29 Jun-4 Jul" price="Rs 71,800" duration="for 5 nights" />
      <Card hotel={hotel9} address="Coorg Karnataka, India" rating={star} rate={4.95} distance="14,260 Kilometers away" date="29 Jun-4 Jul" price="Rs 71,800" duration="for 5 nights" />
      <Card hotel={hotel10} address="Mysore Karnataka, India" rating={star} rate={4.99} distance="14,260 Kilometers away" date="29 Jun-4 Jul" price="Rs 71,800" duration="for 5 nights" />
      <Card hotel={hotel11} address="Kuduraimukh, India" rating={star} rate={4.96} distance="14,260 Kilometers away" date="29 Jun-4 Jul" price="Rs 71,800" duration="for 5 nights" />
      <Card hotel={hotel12} address="Wayanad Kerala, India" rating={star} rate={4.92} distance="14,260 Kilometers away" date="29 Jun-4 Jul" price="Rs 71,800" duration="for 5 nights" />
      <End />
      <Footer />
    </>
  );
}

export default App;
