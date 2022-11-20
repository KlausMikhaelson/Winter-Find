import 'bootstrap/dist/css/bootstrap.css'
import styles from '../styles/globals.css'

const gameover = () => {

  return (
    <>
      <div className="container-fluid banner">
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-md">
              <div className="navbar-brand"> ./WinterFind</div>
              
            </nav>
          </div>
          <div className="col-md-8 offset-md-2 info">
            <strong><h1 className="text-center">CONGRATULATIONS!</h1> </strong>
            <p className="text-center">
              <strong className="won"> YOU WON! </strong>
            </p> 
            <a href="http://localhost:3000/" className="btn btn-md text-center primary">Play Again</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default gameover;