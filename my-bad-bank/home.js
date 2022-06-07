function Home(){
  return (
    <Card
      bgcolor="info"
      txtcolor="light"
      header="Bad Bank"
      header-bg="success"
      title="Welcome to the baddest bank"
      text="Your money isn't safe here."
      body={(<img src="badbank.jpeg" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}
