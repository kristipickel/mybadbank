function Withdraw(){
  const ctx = React.useContext(UserContext);
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [withdrawal, setWithdrawal]   = React.useState('');
  const [balance, setBalance]   = React.useState(ctx.users[0].balance);
  const [disabled, setDisabled] = React.useState(true);

  const validate = amount => {
    if (!amount) {
      setStatus('Error: please enter a dollar value');
      return false;
    } if (amount > balance) {
      setStatus('Warning: You will overdraft your account');
      return false;
    }  if (amount <= 0) {
      setStatus('Error: Deposit cannot be zero or a negative number');
      return false;
    }
    if (isNaN(amount)) {
      setStatus('Error: please enter a value');
      return false;
    }
    return true;
}

  const makeWithdrawal = amount => {
    if (!validate(amount)) return;
    setBalance(Number(balance) - Number(amount));
    setShow(false);
    setStatus('');
    ctx.users.push(Number(balance) - Number(amount));
  }

function clearForm(){
  setWithdrawal('');
  setShow(true);
}


React.useEffect(() => {
  if (!withdrawal) {
    setDisabled(true); 
  } else {
    setDisabled(false);
  }
},   [withdrawal]);


  return (
    <Card
      bgcolor="warning"
      header="Withdraw"
      status={status}
      body={show ? (  
              <>
              <h4>Balance: ${balance}</h4> <br/>
              Withdraw Amount<br/>
              <input type="withdraw" className="form-control" id="withdraw" placeholder="Withdrawal Amount $" value={withdrawal} onChange={e => setWithdrawal(e.currentTarget.value)}/> <br/>
              <button type="submit" className="btn btn-light" onClick={() => makeWithdrawal(withdrawal)} disabled={disabled}>Withdrawal</button>
              </>
            ):(
              <>
              <h5>Withdrawal has been made!</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Make another withdrawal?</button>
              </>
            )}
    />
  )
}