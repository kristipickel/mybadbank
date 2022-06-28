function Balance(){
  const ctx = React.useContext(UserContext); 
  const [status, setStatus] = React.useState('');
  const [balance, setBalance] = React.useState(ctx.users[0].balance);

  return (
    <Card
    bgcolor="info card title"
    header="Your Account Balance"
    status={status}
    body={(
      <>
      Balance: ${balance.toFixed(2)}
      </>

    )}
    />
  )
}
