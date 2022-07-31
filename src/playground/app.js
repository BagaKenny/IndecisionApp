
class IndecisionApp extends React.Component {

  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options : []
    }
  }
  componentDidMount() {

    try{
    // on appelle les datas du localStorage lorsque s'affiche la page
    const json = localStorage.getItem('options')
    //ON va transformer les données en objets utilisables
    const options = JSON.parse(json);
    //On fait en sorte que même si on rafraichois la page les données restent comme tels
    //Si il y a options on stock les données
    if(options) {
      this.setState(() => ({ options}));
    }
    } catch(error) {
      //on ne fait rien
    }

   
  }
  componentDidUpdate(prevProps, prevState) {
    // si la taille de options a une taille differente de la taille actuel(vide) du tableau
    //on store dans une variable, l'état actuel du tableau
    //avec localStorage on definit l'objet options et on y inclus les données du tableau enregistrées dans json
    if(prevProps.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json)
    }
}
componentWillUnmount() {
  console.log('componentWillUnmount')
}

  handleDeleteOptions() {
    this.setState(() => ({options: [] }))}

    // On va dans l'objet state qu'on a créé, et on change le contenu de options, qui est un tableau
handleDeleteOption(optionToRemove) {
  this.setState((previousState) => ({
    // Si le item qu'on selection est n'est pas à celui du tableau on le garde dans le tableau
    options: previousState.options.filter((option) => optionToRemove !== option)
  }))
}
  handlePick() {
    const random = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[random];
    alert(option)
  
  }
  
  handleAddOption(option) {
    if (!option) {
      return 'Error Enter valid value'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This item already exist'
    }

    this.setState((previousState) => ({options : previousState.options.concat([option])}))
  }

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle = {subtitle}/>
        <Action 
        hasOptions={this.state.options.length > 0}
        handlePick={this.handlePick}
        />
        <Options 
        options = {this.state.options}
        handleDeleteOptions = {this.handleDeleteOptions}
        handleAddOption = {this.handleDeleteOption}
        />
        <AddAction 
          handleAddOption = {this.handleAddOption}
        />
      </div>
    );
  }
}

//C'est ainsi qu'on implément les props à un composant de classe
IndecisionApp.defaultProps = {
  options: []
}
const Header = (props) => {
    return (
      <div>
        <h1>{props.title}</h1>
       {props.subtitle &&  <h2> {props.subtitle}</h2>}
      </div>
    );
}

Header.defaultProps = {
  title: 'Indecision'
}

const Action = (props) => {
    return (
      <div>
      {/* Si il n'y a rien dans le tableau desactiver le bouton */}
        <button onClick={props.handlePick}
        disabled={!props.hasOptions}
        >
        What Should I do ?
        </button>
      </div>
    );
}

//Options class render Text
const Options = (props) => {
    return (
      <div>  
        <button onClick={props.handleDeleteOptions}>
            Remove All not 
        </button>
        {props.options.length === 0 && <p>Please add an option to get started</p>}
        {
          props.options.map((item) => 
         ( <Option 
         key={item} 
         optionText={item}
         handleDeleteOption={props.handleAddOption}
         /> 
         ))
         }
      </div>
    );
};

//Option -> Static text

const Option = (props) =>  {
        return (
            <div>
                {props.optionText}
                <button 
                onClick={(e) => {
                  props.handleDeleteOption(props.optionText)
                }}
                >
                Remove
                </button>
            </div>
        )
}



//Add Action -> mettre une form

class AddAction extends React.Component {

  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }
    handleAddOption(e) {
        e.preventDefault();
        let value = e.target.elements.input.value.trim();
        const error = this.props.handleAddOption(value);
        e.target.elements.input.value = '';
        
      this.setState(() => ({ error }))
    }
  render() {
    return (
      <div>
      {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="input"></input>
          <button>Add Action</button>
        </form>
      </div>
    );
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
