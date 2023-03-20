// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {cryptocurrencyData: [], isLoading: true}

  componentDidMount = () => {
    this.getCryptocurrencyData()
  }

  getCryptocurrencyData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    this.setState({
      cryptocurrencyData: data.map(eachItem => ({
        id: eachItem.id,
        currencyLogo: eachItem.currency_logo,
        currencyName: eachItem.currency_name,
        euroValue: eachItem.euro_value,
        usdValue: eachItem.usd_value,
      })),
      isLoading: false,
    })
  }

  renderListCryptocurrencyList = () => {
    const {cryptocurrencyData} = this.state

    return <CryptocurrenciesList cryptocurrencyData={cryptocurrencyData} />
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="tracker-container">
        {isLoading ? this.renderLoader() : this.renderListCryptocurrencyList()}
      </div>
    )
  }
}
export default CryptocurrencyTracker
