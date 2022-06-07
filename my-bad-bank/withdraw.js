function Withdraw(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [withdrawal, setWithdrawal]   = React.useState('');
  const [balance, setBalance]   = React.useState(100);
  const [disabled, setDisabled] = React.useState(true);

  const ctx = React.useContext(UserContext);  

  const validate = amount => {
      if (!amount) {
        setStatus('Error: please enter a value');
        return false;
      } if (amount <=0) {
        setStatus('Error: Cannot withdrawal more than balance');
        return false;
      } if (!Number(amount)) {
        setStatus('Error: please enter a value');
      } if (balance - amount < 0) {
        setStatus('Warning: overdrafting account')
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
  setDeposit('');
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
              Deposit Amount<br/>
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