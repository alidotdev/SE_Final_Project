import { Footer, Header } from "../../components";
import "./styles.css";
const Blogs = () => {
  return <>
   <Header />
   <div class="container">
  <div class="card">
    <div class="card__header">
    </div>
    <div class="card__body">
      <span class="tag tag-blue">Fashion</span>
      <h4>What's new in 2022 Fashion</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
    </div>
    <div class="card__footer">
      <div class="user">
        <div class="user__info">
          <h5>Jane Doe</h5>
          <small>2h ago</small>
        </div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card__header">
    </div>
    <div class="card__body">
      <span class="tag tag-brown">New Trends</span>
      <h4>Fashion Sense And Trends</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
    </div>
    <div class="card__footer">
      <div class="user">
        <div class="user__info">
          <h5>Jony Doe</h5>
          <small>Yesterday</small>
        </div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card__header">
    </div>
    <div class="card__body">
      <span class="tag tag-red">New Collection</span>
      <h4>Summer Volume 2</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
    </div>
    <div class="card__footer">
      <div class="user">
        <div class="user__info">
          <h5>John Doe</h5>
          <small>2d ago</small>
        </div>
      </div>
    </div>
  </div>
</div>
  
  
  
  
  
  
  
  
  
  
  
  
  
   <Footer />
  
  
  </>;
};

export default Blogs