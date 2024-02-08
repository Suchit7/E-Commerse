import React from "react";
import { useState } from "react";
import DisplayProducts from "./DisplayProducts";

function Home() {
  let [products, setProducts] = useState([
    {
      productpic:
        "https://rukminim1.flixcart.com/image/580/696/xif0q/t-shirt/m/w/a/m-bylrnful-z56-blive-original-imaggnwhufnbx6h6.jpeg?q=50",
      brand: "BLIVE",
      discription: "Printed Men Round Neck Yellow T-Shirt",
      color: "BLACK",
      discountPrice: "$217",
      mrp: "$999",
    },
    {
      productpic:
        "https://rukminim1.flixcart.com/image/580/696/kf1fo280hlty2aw-0/t-shirt/w/s/e/-original-imafdfvvr8hqdu65.jpeg?q=50",
      brand: "Urbano Plus ",
      discription: "Solid Men Henley Neck Dark Blue T-Shirt",
      color: "BLACK",
      discountPrice: "$517",
      mrp: "$1999",
    },
    {
      productpic:
        "https://rukminim1.flixcart.com/image/580/696/kzegk280/t-shirt/2/t/a/xs-t51-bl-eyebogler-original-imagbf5tcgxyyyhp.jpeg?q=50",
      brand: "HELMONT ",
      discription: "Color Block Men Hooded Neck Red, Black T-Shirt",
      color: "BLUE",
      discountPrice: "$317",
      mrp: "$399",
    },
    {
      productpic:
        "https://rukminim1.flixcart.com/image/580/696/xif0q/kids-apparel-combo/o/j/o/6-12-months-kids-dungree-navy-blue-6-12-krijal-original-imagge9na4kgnsyy.jpeg?q=50",
      brand: "The Silk Shop ",
      discription: "Boys Casual Shirt Dungaree",
      color: "BLUE",
      discountPrice: "$317",
      mrp: "$1298",
    },
    {
      productpic:
        "https://rukminim1.flixcart.com/image/580/696/xif0q/kids-apparel-combo/t/n/y/9-10-years-brighteye-blk-namma-ooru-trend-original-imaggsfanw2f8bk8.jpeg?q=50",
      brand: "NAMMA OORU TREND ",
      discription: "Boys Casual T-shirt Pant",
      color: "GREEN",
      discountPrice: "$317",
      mrp: "$399",
    },
    {
      productpic:
        "https://rukminim1.flixcart.com/image/580/696/kzegk280/t-shirt/2/t/a/xs-t51-bl-eyebogler-original-imagbf5tcgxyyyhp.jpeg?q=50",
      brand: "HELMONT ",
      discription: "Color Block Men Hooded Neck Red, Black T-Shirt",
      color: "GREEN",
      discountPrice: "$317",
      mrp: "$399",
    },
    {
      productpic:
        "https://rukminim1.flixcart.com/image/580/696/l55nekw0/kids-apparel-combo/n/y/3/6-7-years-3pc-sm-munif-dresses-original-imagfw8zrpba6vrk.jpeg?q=50",
      brand: "SM MUNIF DRESSES",
      discription: "Girls Party(Festive) Top Pant, Shrug",
      color: "GREY",
      discountPrice: "$317",
      mrp: "$399",
    },
    {
      productpic:
        "https://rukminim1.flixcart.com/image/580/696/l1qrjbk0/kids-apparel-combo/9/i/d/2-3-years-197-mustard-kidzarea-original-imagd8u6hvhsdtxt.jpeg?q=50",
      brand: "Kidzarea",
      discription: "Boys Casual Blazer Jean",
      color: "GREY",
      discountPrice: "$317",
      mrp: "$399",
    },
    {
      productpic:
        "https://rukminim1.flixcart.com/image/580/696/krjjde80/kids-apparel-combo/8/n/h/18-24-months-racing-chatni-skii-original-imag5b6zdcmmzqsj.jpeg?q=50",
      brand: "SKII ",
      discription: "Boys Casual T-shirt Dungaree",
      color: "BLACK",
      discountPrice: "$317",
      mrp: "$399",
    },
    {
      productpic:
        "https://rukminim1.flixcart.com/image/580/696/l0lbrm80/kids-apparel-combo/x/l/5/12-13-years-3pc-325-new-makhi-check-zolario-original-imagccdeghncztuy.jpeg?q=50",
      brand: "Zolario",
      discription: "Boys Party(Festive) Waistco",
      color: "WHITE",
      discountPrice: "$317",
      mrp: "$399",
    },
    {
      productpic:
        "https://rukminim1.flixcart.com/image/580/696/keg02a80/kids-apparel-combo/u/w/s/6-12-months-boys-202-20-boom-boys-original-imafv4ufspwaccm2.jpeg?q=50",
      brand: "Boom Boys",
      discription: "Boys Casual Shirt Pant, Cap",
      color: "WHITE",
      discountPrice: "₹555",
      mrp: "$999",
    },
    {
      productpic:
        "https://rukminim1.flixcart.com/image/580/696/l5bd5zk0/kids-apparel-combo/6/q/q/4-5-years-t-hf11-rust-alphabets-mars-infiniti-original-imaggypcw9ksnznh.jpeg?q=50",
      brand: "Mars Infiniti ",
      discription: "Boys Casual T-shirt Shorts",
      color: "WHITE",
      discountPrice: "₹717",
      mrp: "₹445",
    },
    {
      productpic:
        "https://rukminim1.flixcart.com/image/580/696/xif0q/kids-apparel-combo/y/l/3/2-3-years-gmw-dungaree01-smartbazar-original-imaggzjwmcddxfhk.jpeg?q=50",
      brand: "smartbazar",
      discription: "Girls Party(Festive) Shirt Dungaree, Top, Belt",
      color: "BLACK",
      discountPrice: "₹177",
      mrp: "₹299",
    },
    {
      productpic:
        "https://rukminim1.flixcart.com/image/580/696/xif0q/sweatshirt/z/q/7/xxl-222056461-1-monte-carlo-original-imaggbz8t6phwgtz.jpeg?q=50",
      brand: "MONTE CARLO",
      discription: "Full Sleeve Printed Men Sweatshirt",
      color: "BLACK",
      discountPrice: "₹117",
      mrp: "₹1399",
    },
    {
      productpic:
        "https://rukminim1.flixcart.com/image/580/696/kw104nk0/sweatshirt/u/n/d/xxl-udsws0063-u-s-polo-assn-original-imag8sekzaaqgxrj.jpeg?q=50",
      brand: "U.S. POLO ASSN.",
      discription: "Full Sleeve Graphic Print Me",
      color: "BLACK",
      discountPrice: "₹117",
      mrp: "₹999",
    },
    {
      productpic:
        "https://rukminim1.flixcart.com/image/580/696/ksj9dow0/sweatshirt/d/r/s/m-maw21ss012b-metronaut-original-imag62rzhz5zyuze.jpeg?q=50",
      brand: "METRONAUT",
      discription: "Full Sleeve Graphic Print M",
      color: "BLACK",
      discountPrice: "₹317",
      mrp: "₹3399",
    },
  ]);
  return (
    <div>
      {/* <DisplayProducts products={products} title="All Products" /> */}
      <DisplayProducts products={products.filter((product)=>{return product.color=== "BLACK"})}  title="All Products" />
    </div>

    // <div>
    //   <div className='product'>
    //    <img src={products[0].productpic} alt="" />
    //    <h3>{products[0].brand} </h3>
    //    <p>{products[0].discription}</p>
    //    <span>{products[0].discountPrice}</span> <span>{products[0].mrp}</span>
    //   </div>
    //   <div className='product'>
    //    <img src={products[1].productpic} alt="" />
    //    <h3>{products[1].brand} </h3>
    //    <p>{products[1].discription}</p>
    //    <span>{products[1].discountPrice}</span> <span>{products[1].mrp}</span>
    //   </div>
    //   <div className='product'>
    //    <img src={products[2].productpic} alt="" />
    //    <h3>{products[2].brand} </h3>
    //    <p>{products[2].discription}</p>
    //    <span>{products[2].discountPrice}</span> <span>{products[2].mrp}</span>
    //   </div>
    // </div>
  );
}

export default Home;
