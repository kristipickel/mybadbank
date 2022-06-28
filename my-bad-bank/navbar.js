function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent" aria-current="true">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <a className="navbar-brand" id="homepage" href="#">BadBank Home <p className="tooltiptext">Go back to homepage</p></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="create-account" href="#/CreateAccount/" >Create Account<p className="tooltiptext">Create your account here</p></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="make-deposit" href="#/deposit/">Deposit <p className="tooltiptext">Make a Deposit</p></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="make-withdraw" href="#/withdraw/">Withdraw <p className="tooltiptext">Make a Withdraw</p></a>
          </li>
                 <li className="nav-item">
            <a className="nav-link" id="all-data" href="#/alldata/">AllData <p className="tooltiptext">Find all transactions here</p></a>
          </li>          
        </ul>
      </div>
    </nav>
    </>
  );
}