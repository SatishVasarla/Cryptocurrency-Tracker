// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = currencyDetails
  return (
    <li className="currency_list">
      <div className="currency-logo-container">
        <img src={currencyLogo} alt={currencyName} className="logo-currency" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="container">
        <p className="currency-numbers">{usdValue}</p>
        <p className="currency-numbers">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
