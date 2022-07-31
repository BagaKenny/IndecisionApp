import React from "react";

//Components
import { AddAction } from "./AddOption";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import OptionModal from "./OptionModal";


export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
    isOpen: false
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };


  handleDeleteSelected = () => {
    this.setState(() => ({selectedOption: undefined}))
  }

  // On va dans l'objet state qu'on a créé, et on change le contenu de options, qui est un tableau
  handleDeleteOption = (optionToRemove) => {
    this.setState((previousState) => ({
      // Si le item qu'on selection est n'est pas à celui du tableau on le garde dans le tableau
      options: previousState.options.filter(
        (option) => optionToRemove !== option
      ),
    }));
  };
  handlePick = () => {
    const random = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[random];
    this.setState(() => ({
      selectedOption: option
    }));
  };

  handleAddOption = (option) => {
    if (!option) {
      return "Error Enter valid value";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This item already exist";
    }

    this.setState((previousState) => ({
      options: previousState.options.concat([option]),
    }));
  };

  componentDidMount() {
    try {
      // on appelle les datas du localStorage lorsque s'affiche la page
      const json = localStorage.getItem("options");
      //ON va transformer les données en objets utilisables
      const options = JSON.parse(json);
      //On fait en sorte que même si on rafraichois la page les données restent comme tels
      //Si il y a options on stock les données
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (error) {
      //on ne fait rien
    }
  }
  componentDidUpdate(prevProps, prevState) {
    // si la taille de options a une taille differente de la taille actuel(vide) du tableau
    //on store dans une variable, l'état actuel du tableau
    //avec localStorage on definit l'objet options et on y inclus les données du tableau enregistrées dans json
    if (prevProps.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    };
  };
  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer";

    return (
      <div>
        <Header subtitle={subtitle} />
        
        <div className="container">
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <div className="widget">
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleAddOption={this.handleDeleteOption}
        />
        <AddAction handleAddOption={this.handleAddOption} />
        </div>
        </div>

        <OptionModal 
          selectedOption={this.state.selectedOption}
          handleDeleteSelected={this.handleDeleteSelected}
        />
      </div>
    );
  };

};

//C'est ainsi qu'on implément les props à un composant de classe
IndecisionApp.defaultProps = {
  options: [],
};
Header.defaultProps = {
  title: "Indecision",
};
