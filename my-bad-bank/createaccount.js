function CreateAccount(){
  const ctx = React.useContext(UserContext);
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [buttonStatus, setButtonStatus] = React.useState(true);


  function buttonActive(e) {
    if (password === null) {
      setButtonStatus(true);
      setPassword(e.currentTarget.value);
    } else {
      setButtonStatus(false);
      setPassword(e.currentTarget.value);
    }
  }
  function validate(field, label){
    if (!field) {
      setStatus('Error, please fix: ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    } else if(password.length < 8) {
      setStatus('Password must be longer than 8 characters.');
      return false;
    }
    return true;
}

  function handleCreate(){
    console.log(name,email,password);
    if (!validate(name,     'name'))     return;
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    ctx.users.push({name,email,password,balance:100});
    setShow(false);
  
    setButtonStatus(false);
    setShow(false);
    alert("You have created your account!")
  }    

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  function handle(data){
    ctx.users.push({name:data.name, email: data.email, password:data.password, balance:100})
  }

  return (
    <Card
      bgcolor="info"
      header="Create Account"
      status={status}
      handle={handle}
      body={show ? (  
              <>
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={buttonActive}/>
              <small id="passwordHelpInline" className="text-muted">
                Must be 8-20 characters long.
              </small><br/>
              <button type="submit" className="btn btn-light" disabled={buttonStatus} onClick={handleCreate}>Create Account</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
              </>
            )}
    />
  )
}