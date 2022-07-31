var app = {
    title: "Indecision App",
    subtitle: "Yeah My Man",
    options: [],
  };
  
  function checkerOptions(options) {
    if (app.options.length > 0) {
      return (
          //Map pour qu'a chaque fois qu'il y ait un submit, un li s'ajoute
          // en contenant le nom que j'ai push dans app.options
          <ul>
          {app.options.map((item) => <li key={Math.floor(Math.random() * 100)}>{item}</li>)}
        </ul>
      );
  }
  }
  
  const renderList = () => {
      var template = (
          <div>
          <h1>{app.title}</h1>
          {app.subtitle ? <p>{app.subtitle}</p> : undefined}
       
          <button onClick={onMakeDecision}>What Should I Do ?</button>
          <button onClick={removeAll}>Remove All</button>
          {checkerOptions(app.options)}
        <form onSubmit={onFormSubmit}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
        </div>
      );
  
      ReactDOM.render(template, appRoot);
  }
  
  
  
  const onFormSubmit = (e) => {
      e.preventDefault();
  //Permettre à l'utilisateur de mettre ce qu'il veut
      const option = e.target.elements.option.value;
  //On va chercher la valeur de target de e
  //Si l'utilisateur a submit, on ajout la valeur au tableau options de l'objet app
  if(option) {
      app.options.push(option);
      //Après avoir submit on efface l'input
      e.target.elements.option.value = '';
  }
  
  renderList()
  }
  
  const removeAll = () => {
      app.options = [];
      renderList()
  }
  
  const onMakeDecision = () => {
      //On selectionne chaque élements du tableau grace à la méthode math.random
      //Ceci nous permet de prendre chaque élément avec un index particulier
  
      //Ceci va me servir à appeler chaque index lorsque sera submit le bouton 
      //What should I do
      const randomNumber = Math.floor(Math.random() * app.options.length);
      const option = app.options[randomNumber];
      alert(option)
      console.log(randomNumber);
  };
  
  const numbers = [55, 101, 1000];
  
  var template = (
      <div>
      <h1>{app.title}</h1>
      {app.subtitle ? <p>{app.subtitle}</p> : undefined}
   
      <button disabled={ app.options.length > 0 ? false : true } onClick={onMakeDecision}>What Should I Do ?</button>
      <button onClick={removeAll}>Remove All</button>
      {checkerOptions(app.options)}
    <form onSubmit={onFormSubmit}>
      <input type="text" name="option"/>
      <button>Add Option</button>
    </form>
    </div>
  );
  
  
  var appRoot = document.getElementById("app");
  
  ReactDOM.render(template, appRoot);