// Write your code here.
import './index.css'

function BannerCardItem(props) {
  const {bannerList} = props
  const {headerText, description, className} = bannerList
  return (
    <li className={`layer ${className}`}>
      <h1 className="head">{headerText}</h1>
      <p className="info">{description}</p>
      <button className="btn" type="button">
        Show More
      </button>
    </li>
  )
}
export default BannerCardItem
