import React from 'react'
import './Home.css'
import Product from './Product'
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://res.cloudinary.com/do9kzlzo0/image/upload/v1653115024/Hooks/pexels-taner-soyler-2459869_nkzyme.jpg" },
  { url: "https://res.cloudinary.com/do9kzlzo0/image/upload/v1653115024/Hooks/pexels-taner-soyler-2459869_nkzyme.jpg" },
  { url: "https://res.cloudinary.com/do9kzlzo0/image/upload/v1653115024/Hooks/pexels-taner-soyler-2459869_nkzyme.jpg" },
  { url: "https://res.cloudinary.com/do9kzlzo0/image/upload/v1653115024/Hooks/pexels-taner-soyler-2459869_nkzyme.jpg" },
];

function Home() {
  return (
    <div className='home'>
      <div className='homeContainer'>

        <img src='https://res.cloudinary.com/do9kzlzo0/image/upload/v1653115024/Hooks/pexels-taner-soyler-2459869_nkzyme.jpg' 
        className='homeImage'/>

        <div className='homeProductContainer'>


            <div className='homeContainer2'>
              <div className='homeRow'>
                <Product id="0001" title="Shop 01 | Red onion" price={0.99} image="https://res.cloudinary.com/do9kzlzo0/image/upload/v1652665796/Hooks/pexels-mali-maeder-244393-removebg-preview_atcxym.png" rating={3}/>
                <Product id="0001" title="Shop 02 | Chilli peppers" price={1.11} image="https://res.cloudinary.com/do9kzlzo0/image/upload/v1652840969/Hooks/pexels-rio-lecatompessy-5655453-removebg-preview_nggudh.png" rating={5}/>
                <Product id="0001" title="Shop 03 | Garlic" price={0.91} image="https://res.cloudinary.com/do9kzlzo0/image/upload/v1652665790/Hooks/pexels-isabella-mendes-928251-removebg-preview_yadvbn.png" rating={1}/>
                <Product id="0001" title="Shop 02 | Papaya" price={0.19} image="https://res.cloudinary.com/do9kzlzo0/image/upload/v1653009734/Hooks/pexels-allec-gomes-5626115-removebg-preview_wymgwe.png" rating={2}/>
                {/* product */}
              </div>

              <div className='homeRow'>
                  <Product id="0001" title="Shop 01 | Tomatoes" price={0.09} image="https://res.cloudinary.com/do9kzlzo0/image/upload/v1652665786/Hooks/pexels-pixabay-209401-removebg-preview_u2camq.png" rating={1}/>
                  <Product id="0001" title="Shop 03 | Pumpkin" price={0.99} image="https://res.cloudinary.com/do9kzlzo0/image/upload/v1652665780/Hooks/pexels-valeriia-miller-3151771-removebg-preview_hrzhck.png" rating={5}/>
                  <Product id="0001" title="Shop 01 | Apple" price={4.99} image="https://res.cloudinary.com/do9kzlzo0/image/upload/v1653009732/Hooks/pexels-mareefe-672101-removebg-preview_n5aagm.png" rating={4}/>
                  <Product id="0001" title="Shop 08 | Strawberry" price={5.99} image="https://res.cloudinary.com/do9kzlzo0/image/upload/v1653009737/Hooks/pexels-ylanite-koppens-934055-removebg-preview_y9fwx0.png" rating={5}/>
              </div>

              <div className='homeRow'>
                <Product id="0001" title="Sop 05 | Banana" price={0.09} image="https://res.cloudinary.com/do9kzlzo0/image/upload/v1653009741/Hooks/pexels-aleksandar-pasaric-2872755-removebg-preview_jknefw.png" rating={5}/>
                <Product id="0001" title="Shop 01 | Bell pepper" price={0.99} image="https://res.cloudinary.com/do9kzlzo0/image/upload/v1653009745/Hooks/pexels-%D0%B5%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B0-9573478-removebg-preview_fp8zjr.png" rating={3}/>
                <Product id="0001" title="Shop 02 | Grapes" price={1.99} image="https://res.cloudinary.com/do9kzlzo0/image/upload/v1653009743/Hooks/pexels-anna-nekrashevich-7214926-removebg-preview_k9iory.png" rating={1}/>
                <Product id="0001" title="Shop 02 | Papaya" price={0.19} image="https://res.cloudinary.com/do9kzlzo0/image/upload/v1653009734/Hooks/pexels-allec-gomes-5626115-removebg-preview_wymgwe.png" rating={2}/>
              </div>

              <div className='homeRow'>
                <Product id="0001" title="Sop 05 | Pineapple" price={0.99} image="https://res.cloudinary.com/do9kzlzo0/image/upload/v1653009740/Hooks/pexels-alizee-marchand-947879-removebg-preview_yrjjt5.png" rating={3}/>
                <Product id="0001" title="Shop 01 | Lemon" price={0.99} image="https://res.cloudinary.com/do9kzlzo0/image/upload/v1653009739/Hooks/pexels-anna-nekrashevich-7214431-removebg-preview_xomrhe.png" rating={4}/>
                <Product id="0001" title="Shop 02 | Papaya" price={0.19} image="https://res.cloudinary.com/do9kzlzo0/image/upload/v1653009734/Hooks/pexels-allec-gomes-5626115-removebg-preview_wymgwe.png" rating={2}/>
                <Product id="0001" title="Shop 02 | Avacado" price={0.19} image="https://res.cloudinary.com/do9kzlzo0/image/upload/v1653009733/Hooks/pexels-thought-catalog-2228553-removebg-preview_grohv7.png" rating={4}/>
              </div>
            </div>
        

      
        <div className='homeContainer2'>
          <div className='homeRow'>
            <Product id="0001" title="Shop 01 | Red onion" price={0.99} image="https://res.cloudinary.com/do9kzlzo0/image/upload/v1652840892/Hooks/pexels-pixabay-39390-removebg-preview_bkht0p.png" rating={3}/>
            <Product id="0001" title="Shop 02 | Chilli peppers" price={1.11} image="https://res.cloudinary.com/do9kzlzo0/image/upload/v1653009733/Hooks/pexels-gustavo-fring-7156089-removebg-preview_suhwge.png" rating={5}/>
            <Product id="0001" title="Shop 03 | Garlic" price={0.91} image="https://res.cloudinary.com/do9kzlzo0/image/upload/v1653009727/Hooks/pexels-gustavo-fring-7156058-removebg-preview_h9llfx.png" rating={1}/>
            <Product id="0001" title="Shop 02 | Papaya" price={0.19} image="https://res.cloudinary.com/do9kzlzo0/image/upload/v1653009737/Hooks/pexels-ylanite-koppens-934055-removebg-preview_y9fwx0.png" rating={2}/>
            {/* product */}
          </div>

          <div className='homeRow'>
              <Product id="0001" title="Shop 01 | Tomatoes" price={0.09} image="https://res.cloudinary.com/do9kzlzo0/image/upload/v1652840903/Hooks/pexels-mali-maeder-143133-removebg-preview_kmbzlz.png" rating={1}/>
              <Product id="0001" title="Shop 03 | Pumpkin" price={0.99} image="https://res.cloudinary.com/do9kzlzo0/image/upload/v1652665790/Hooks/pexels-isabella-mendes-928251-removebg-preview_yadvbn.png" rating={5}/>
              <Product id="0001" title="Shop 01 | Apple" price={4.99} image="https://res.cloudinary.com/do9kzlzo0/image/upload/v1653008878/Hooks/pexels-leticia-weigert-4499668-removebg-preview_vobibl.png" rating={4}/>
              <Product id="0001" title="Shop 08 | Strawberry" price={5.99} image="https://res.cloudinary.com/do9kzlzo0/image/upload/v1653009739/Hooks/pexels-anna-nekrashevich-7214431-removebg-preview_xomrhe.png" rating={5}/>
          </div>

          <div className='homeRow'>
            <Product id="0001" title="Sop 05 | Banana" price={0.09} image="https://res.cloudinary.com/do9kzlzo0/image/upload/v1652840969/Hooks/pexels-rio-lecatompessy-5655453-removebg-preview_nggudh.png" rating={5}/>
            <Product id="0001" title="Shop 01 | Bell pepper" price={0.99} image="https://res.cloudinary.com/do9kzlzo0/image/upload/v1653009745/Hooks/pexels-%D0%B5%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B0-9573478-removebg-preview_fp8zjr.png" rating={3}/>
            <Product id="0001" title="Shop 02 | Grapes" price={1.99} image="https://res.cloudinary.com/do9kzlzo0/image/upload/v1653009727/Hooks/pexels-gustavo-fring-7156058-removebg-preview_h9llfx.png" rating={1}/>
            <Product id="0001" title="Shop 02 | Papaya" price={0.19} image="https://res.cloudinary.com/do9kzlzo0/image/upload/v1653008878/Hooks/pexels-leticia-weigert-4499668-removebg-preview_vobibl.png" rating={2}/>
          </div>

          <div className='homeRow'>
            <Product id="0001" title="Sop 05 | Pineapple" price={0.99} image="https://res.cloudinary.com/do9kzlzo0/image/upload/v1653009733/Hooks/pexels-gustavo-fring-7156089-removebg-preview_suhwge.png" rating={3}/>
            <Product id="0001" title="Shop 01 | Lemon" price={0.99} image="https://res.cloudinary.com/do9kzlzo0/image/upload/v1653009746/Hooks/pexels-cup-of-couple-7657065-removebg-preview_akq1a8.png" rating={4}/>
            <Product id="0001" title="Shop 02 | Papaya" price={0.19} image="https://res.cloudinary.com/do9kzlzo0/image/upload/v1652665796/Hooks/pexels-mali-maeder-244393-removebg-preview_atcxym.png" rating={2}/>
            <Product id="0001" title="Shop 02 | Avacado" price={0.19} image="https://res.cloudinary.com/do9kzlzo0/image/upload/v1653009733/Hooks/pexels-gustavo-fring-7156089-removebg-preview_suhwge.png" rating={4}/>
          </div>

        </div>

      </div>

      </div>
    </div>
  )
}

export default Home