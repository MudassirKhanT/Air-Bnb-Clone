import "./App.css";
import Card from "./Card";
import End from "./End";
import Header from "./Header";
import Iconbar from "./Iconbar";
import Topbar from "./Topbar";
import hotel1 from "./assets/hotel1.jpg";
import star from "./assets/star.png";

function App() {
  return (
    <>
      <Header />
      <Topbar />
      <Iconbar />
      <Card hotel={hotel1} address="Corrego do Bom Jesus, Brazil" rating={star} rate={4.95} distance="14,260 Kilometers away" date="29 Jun-4 Jul" price="Rs 71,800" duration="for 5 nights" />
      <Card hotel={hotel1} address="Corrego do Bom Jesus, Brazil" rating={star} rate={4.95} distance="14,260 Kilometers away" date="29 Jun-4 Jul" price="Rs 71,800" duration="for 5 nights" />
      <Card hotel={hotel1} address="Corrego do Bom Jesus, Brazil" rating={star} rate={4.95} distance="14,260 Kilometers away" date="29 Jun-4 Jul" price="Rs 71,800" duration="for 5 nights" />
      <Card hotel={hotel1} address="Corrego do Bom Jesus, Brazil" rating={star} rate={4.95} distance="14,260 Kilometers away" date="29 Jun-4 Jul" price="Rs 71,800" duration="for 5 nights" />
      <Card hotel={hotel1} address="Corrego do Bom Jesus, Brazil" rating={star} rate={4.95} distance="14,260 Kilometers away" date="29 Jun-4 Jul" price="Rs 71,800" duration="for 5 nights" />
      <Card hotel={hotel1} address="Corrego do Bom Jesus, Brazil" rating={star} rate={4.95} distance="14,260 Kilometers away" date="29 Jun-4 Jul" price="Rs 71,800" duration="for 5 nights" />
      <Card hotel={hotel1} address="Corrego do Bom Jesus, Brazil" rating={star} rate={4.95} distance="14,260 Kilometers away" date="29 Jun-4 Jul" price="Rs 71,800" duration="for 5 nights" />
      <Card hotel={hotel1} address="Corrego do Bom Jesus, Brazil" rating={star} rate={4.95} distance="14,260 Kilometers away" date="29 Jun-4 Jul" price="Rs 71,800" duration="for 5 nights" />
      <Card hotel={hotel1} address="Corrego do Bom Jesus, Brazil" rating={star} rate={4.95} distance="14,260 Kilometers away" date="29 Jun-4 Jul" price="Rs 71,800" duration="for 5 nights" />
      <Card hotel={hotel1} address="Corrego do Bom Jesus, Brazil" rating={star} rate={4.95} distance="14,260 Kilometers away" date="29 Jun-4 Jul" price="Rs 71,800" duration="for 5 nights" />
      <Card hotel={hotel1} address="Corrego do Bom Jesus, Brazil" rating={star} rate={4.95} distance="14,260 Kilometers away" date="29 Jun-4 Jul" price="Rs 71,800" duration="for 5 nights" />
      <Card hotel={hotel1} address="Corrego do Bom Jesus, Brazil" rating={star} rate={4.95} distance="14,260 Kilometers away" date="29 Jun-4 Jul" price="Rs 71,800" duration="for 5 nights" />
      <End />
    </>
  );
}

export default App;
