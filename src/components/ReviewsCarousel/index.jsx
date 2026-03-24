// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {currentIndex: 0}

  onClickingLeftArrow = () => {
    const {currentIndex} = this.state
    if (currentIndex !== 0) {
      this.setState(prevState => ({currentIndex: prevState.currentIndex - 1}))
    }
  }

  onClickingRightArrow = () => {
    const {currentIndex} = this.state
    const {reviewsList} = this.props

    if (currentIndex !== reviewsList.length - 1) {
      this.setState(prevState => ({currentIndex: prevState.currentIndex + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {currentIndex} = this.state
    const currentReviewObject = reviewsList[currentIndex]
    const {imgUrl, username, companyName, description} = currentReviewObject

    return (
      <div className="container">
        <h1 className="heading">Reviews</h1>
        <div className="sub-container">
          <button className="button" type="button" data-testid="leftArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              onClick={this.onClickingLeftArrow}
            />
          </button>
          <div className="obj-container">
            <img src={imgUrl} alt={username} />
            <p>{username}</p>
            <p className="para">{companyName}</p>
            <p className="para">{description}</p>
          </div>
          <button className="button" type="button" data-testid="rightArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              onClick={this.onClickingRightArrow}
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
