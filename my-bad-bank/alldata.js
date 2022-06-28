function AllData(){
  const ctx = React.useContext(UserContext);
  return (
    <>
    {ctx.users.map((ctx, i) => (
        <Card
        key={i}
        bgcolor="secondary"
        txtcolor="light"
        header={"User Data for: " + ctx.name}
        title={"Balance: $" + ctx.balance}
        text={"Email: " + ctx.email}
        header-bg="success"
        body={"Password: " + ctx.password}
      />
    ))}
    </>
  );
}




