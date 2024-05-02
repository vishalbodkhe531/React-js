import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  const laptopInformation = {
    hp: {
      laptopName: "Hp",
      info: "Hewlett-Packard Company, American manufacturer of software and computer services and a major brand in the history of computers and computer-related products. The company split in 2015 into two companies: HP Inc.",

      img: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07958886.png",
    },

    apple: {
      laptopName: "Apple",

      info: "MacBook is a brand of Mac notebook computers designed and marketed by Apple that use Apple's macOS operating system since 2006. The MacBook brand replaced the PowerBook and iBook brands during the Mac transition to Intel processors, announced in 2005.",

      img: "https://bl-i.thgim.com/public/incoming/fk5hrs/article67097604.ece/alternates/FREE_1200/MacBookAir%2015inch_5.JPG",
    },

    dell: {
      laptopName: "Dell",

      info: "Dell customizable laptops include a selection of pre-configured models with a variety of processors, graphics cards, hard drives, RAM, storage drives, touchscreen technology, and more. With a choice of screen resolution, you can configure an HD laptop or a 4K laptop.",

      img: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/g-series/g16-7630/media-gallery/black/notebook-g16-7630-nt-black-gallery-1.psd?fmt=pjpg&pscan=auto&scl=1&wid=3500&hei=2625&qlt=100,1&resMode=sharp2&size=3500,2625&chrss=full&imwidth=5000",
    },

    lenovo: {
      laptopName: "Lenovo",

      info: "Lenovo is a manufacturer of personal computers, smartphones, televisions, and wearable devices. Some of the company's earliest products included the KT8920 mainframe computer and a circuit board that allowed IBM-compatible personal computers to process Chinese characters.",

      img: "https://p3-ofp.static.pub/fes/cms/2022/12/09/sqk0z99zltdbdr6s9nca0i8rhszdaa364217.png",
    },
  };

  return (
    <>
      <h1 className="bg-green-500 text-white p-4 rounded-xl m b-10">
        Laptop Sell !!
      </h1>
      <div className="flex flex-wrap justify-center m-5">
        <Card
          langauge="JavaScript"
          laptopName={laptopInformation.hp.laptopName}
          laptopInformation={laptopInformation.hp.info}
          laptopImg={laptopInformation.hp.img}
        />
        <Card
          laptopName={laptopInformation.apple.laptopName}
          laptopInformation={laptopInformation.apple.info}
          laptopImg={laptopInformation.apple.img}
        />
        <Card
          laptopName={laptopInformation.dell.laptopName}
          laptopInformation={laptopInformation.dell.info}
          laptopImg={laptopInformation.dell.img}
        />
        <Card
          laptopName={laptopInformation.lenovo.laptopName}
          laptopInformation={laptopInformation.lenovo.info}
          laptopImg={laptopInformation.lenovo.img}
        />
      </div>
    </>
  );
}

export default App;
