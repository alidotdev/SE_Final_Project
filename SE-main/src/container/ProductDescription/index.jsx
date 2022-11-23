import { Footer, Header } from "../../components";
import Picture3 from "../../assets/images/Picture3.jpg";
import Picture4 from "../../assets/images/Picture4.jpg";
import Picture5 from "../../assets/images/Picture5.jpg";
import Picture6 from "../../assets/images/Picture6.jpg";

import "./styles.css";

const Description = () => {
  return (
    <>
      <Header />
      <section class="container sproduct my-5 pt-5">
        <div class="row-mt-5">
          <div class="col-lg-5 col-md-12 col-12">
            <img src={Picture3} class="img-fluid w-100 pb-1" alt="Picture3" />

            <div class="small-img-group">
              <div class="small-img-col">
                <img
                  src={Picture4}
                  width="100%"
                  class="small-img"
                  alt="Picture4"
                />
              </div>

              <div class="small-img-col">
                <img
                  src={Picture5}
                  width="100%"
                  class="small-img"
                  alt="Picture5"
                />
              </div>

              <div class="small-img-col">
                <img
                  src={Picture6}
                  width="100%"
                  class="small-img"
                  alt="Picture6"
                />
              </div>
            </div>
          </div>
          
          <div class="col-lg-6 col-md-12 col-12">
            <h6>Women/Shirts</h6>
            <h3 class='py-4'>Forever Teen Top</h3>
            <h2>$100.00</h2>
            <select class="my-3">
              <option>Select Size</option>
              <option>XL</option>
              <option>Large</option>
              <option>Medium</option>
              <option>Small</option>
            </select>
            <input type="number" value='1' />
            <button class = "buy-btn">Add To Cart</button>
            <h4 class ='mt-5 mb-5'>Product Details</h4>
            <h6>Get this fitted crop top in one of two versions: with
             a positive message or with a White background. Different look,
             same upbeat vibes. Featuring a full sleeves and a slim cut in
             stretch cotton jersey.</h6>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Description;
