
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { useParams } from 'react-router-dom'
import Header2 from '../components/Header/Header2';
import {SelectedProduct,removeSelectedProduct} from '../Redux/Actions/ProductActions'
import './ProductDetail.css'

const ProductDetail = () => {
  const product = useSelector((state)=>state.product);
  const { id,image, title, price ,description,category} = product;
  const { ProductID } = useParams();
  
  const dispatch = useDispatch();
  const fetchProductDetail = async () => {
    const res = await axios.get(`https://fakestoreapi.com/products/${ProductID}`)
      .catch((err) => console.log(err));
      dispatch(SelectedProduct(res.data))
  }
  useEffect(() => {
    if (ProductID && ProductID !=="") {
    
    fetchProductDetail();
  }
  return()=>{
    dispatch(removeSelectedProduct());
  }
  }, [ProductID])
  

  return (
    <div className='bg-detail'>
      <Header2/>
      {Object.keys(product).length ===0 ?(
        <div>...loading</div>):(
          <div className='small-container single-product'>
            <div className="row">
              <div className="col-2">
                <img src={image} alt="" />
              </div>
            <div className='col-2'>
              <p>{category}</p>
              <h1>{title}</h1>
              <h4>${price}</h4>
              <input type="number" defaultValue="1"  min="1"/>
              <button className='btn'>Add to cart</button>
              <h3>product Details</h3>
              <p>{description}</p>
            </div>
            </div>
          </div>
        )
      }
    </div> 
  )
}

export default ProductDetail