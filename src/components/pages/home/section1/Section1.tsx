import { useGetProductsQuery } from '../../../../redux/api/productApi';
import scss from './Section1.module.scss';

const Section1 = () => {
  const {data: productsArray = []} =  useGetProductsQuery();
	console.log(productsArray);
  return (
    <div className={scss.section1}>
      <div className="container">
        <div className={scss.content}>
          {productsArray.map((item) => (
            <div key={item._id}>
              <img src={item.photoUrl} alt={item.productName} />
              <p>{item.productName}</p>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Section1