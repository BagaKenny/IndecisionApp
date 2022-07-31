//Créer une class Visibility
//mettre un event listerner sur le bouton
//Bind le state dans le constructo
//definir information sur false
//Lorsqu'il est true changer le state

class Visibility extends React.Component {
    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this)
        this.state = {
            informations : false
        }
    }
    toggle(e) {
        e.preventDefault();
        this.setState((previousState) => {
            return {
                informations: !previousState.informations
            }
        })
    }
    render() {
        return (
            <div>
            <h1>Visible Toggle</h1>
            <button onClick={this.toggle}> {this.state.informations ? 'Hide Details' : 'Show Details'} </button>
            {this.state.informations === true && <p> Hey. These are some details you see now </p>}
            </div>
        )
    }
}


var appRoot = document.getElementById("app");
ReactDOM.render(<Visibility />, appRoot);