function AllData(){
  const ctx = React.useContext(UserContext);
  return (
    <>
        <Card
      bgcolor="secondary"
      txtcolor="light"
      header="All Data"
      header-bg="success"
      body={JSON.stringify(ctx)}
    />    
    <br/>
    </>
  );
}
