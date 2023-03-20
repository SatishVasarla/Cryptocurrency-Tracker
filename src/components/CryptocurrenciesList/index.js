// Write your JS code here
import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  render() {
    const {cryptocurrencyData} = this.props

    return (
      <div className="bg-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          className="coin-image"
          alt="cryptocurrency"
        />
        <div className="items-container">
          <div className="items-list-container">
            <p className="coin-type">Coin Type</p>
            <div className="coins">
              <p className="paragraph">USD</p>
              <p className="paragraph">EURO</p>
            </div>
          </div>
          <ul className="list-crypto-currency">
            {cryptocurrencyData.map(eachItem => (
              <CryptocurrencyItem
                key={eachItem.id}
                currencyDetails={eachItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CryptocurrenciesList
