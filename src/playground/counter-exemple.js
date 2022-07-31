
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count : 0
        };
    }
    componentDidMount() {
        try{
            const number = localStorage.getItem('count')
            const count = JSON.parse(number)
            //Le state actuel restera count du coup
            //etant donné que la donné ne s'éffacera pas
            this.setState(() => ({count}))
            console.log('componentDidMount')
        }catch(error) {

        }
    }

    componentDidUpdate(previousState, previousProps) {
        //Store the JSON in a variable 
        //On va chercher le state count et on le mets en chaine
        //Maintenant mettre dans le localStorage un objet count et lui mettre la valeur json(le nombre augmenté)
        if(previousState !== this.state.count){
            const json = JSON.stringify(this.state.count)
            localStorage.setItem('count', json)
            console.log(json)
        }
    }


    handleAddOne(e) {
        e.preventDefault
        this.setState((previousState) => {
            return {
                count: previousState.count +1
            };
        });

    };
    handleMinusOne(e) {
        e.preventDefault
        this.setState((previousState)  => {
            return {
                count : previousState.count -1
            }
        });
    };
    handleReset(e) {
        e.preventDefault
        this.setState(() => {
            return {
                count: 0
            };
        });
    };
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}> + 1</button>
                <button onClick={this.handleMinusOne}> - 1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}


ReactDOM.render(<Counter />, document.getElementById('app'))


