import './index.css'

const NotFound = () => (
  <div className="notfound-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png "
      className="notfound-img"
      alt="not found"
    />
    <h1 className="notfound-heading">Page Not Found</h1>
    <p className="notfound-paragraph">
      We are sorry, the page you requested could not be found
    </p>
  </div>
)

export default NotFound
