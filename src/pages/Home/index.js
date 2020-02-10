import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';
//import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';

class Home extends Component{

  constructor(props){
    super(props);

    this.state = {
      teste: []
    }
  }

  componentDidMount = () => {

     const data = [{
      "stock": [
        {
          "id": 1,
          "amount": 3
        },
        {
          "id": 2,
          "amount": 5
        },
        {
          "id": 3,
          "amount": 2
        },
        {
          "id": 4,
          "amount": 1
        },
        {
          "id": 5,
          "amount": 5
        },
        {
          "id": 6,
          "amount": 10
        }
      ],
      "products": [
        {
          "id": 1,
          "title": "Tênis NIKE Pro",
          "price": 179.9,
          "image": "https://nikys-ecomitizellc.netdna-ssl.com/media/catalog/product/cache/1/image/670x670/9df78eab33525d08d6e5fb8d27136e95/t/i/tiempox-legend-vii-academy-turf-soccer-cleat-rernzr.jpg"
        },
        {
          "id": 2,
          "title": "Tênis VR Caminhada Couro Masculino",
          "price": 139.9,
          "image": "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg"
        },
        {
          "id": 3,
          "title": "Tênis Adidas Duramo Lite 2.0",
          "price": 219.9,
          "image": "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg"
        },
        {
          "id": 5,
          "title": "Tênis Adidas Prateado Branco",
          "price": 139.9,
          "image": "https://img.favpng.com/8/9/25/adidas-stan-smith-adidas-superstar-adidas-originals-sneakers-png-favpng-QnAAA1f6awKYc45E2LHNhmQHv.jpg"
        },
        {
          "id": 6,
          "title": "Tênis Marca Puma 1.0",
          "price": 219.9,
          "image": "https://www.pngitem.com/pimgs/m/218-2188902_men-s-esito-finale-tt-turf-soccer-shoes.png"
        },
        {
          "id": 4,
          "title": "Tênis de Caminhada Leve Confortável",
          "price": 179.9,
          "image": "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg"
        }
      ]
    }];

    this.setState({ teste: data });

   // this.setState({ products: data });
  }



  handleAddProcuts = (id) => {
    const { addToCartRequest } = this.props;
    console.log(id);
    addToCartRequest(id);
  }


    render(){

      const { teste } = this.state;

          return (
              <ProductList>
                {teste.map(obj => (
                  obj.products.map(value => (

                  <li key={value.id} className="items">
                    <img src={value.image} alt={value.title} />
                    <strong>{value.title}</strong>
                    <button type="button" onClick={() => this.handleAddProcuts(value.id)}>
                      <div>
                        <MdShoppingCart size={16} color="#FFF" /> 
                      </div>
                      <span>Add ao carrinho</span>
                    </button>
                  </li>

                  ))
                ))}
              </ProductList>
          );
    }

}



const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    (amount[product.id] = product.amount);
    return amount;
  }, {})
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
