'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
    _this.state = {
      options: []
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {

      try {
        // on appelle les datas du localStorage lorsque s'affiche la page
        var json = localStorage.getItem('options');
        //ON va transformer les données en objets utilisables
        var options = JSON.parse(json);
        //On fait en sorte que même si on rafraichois la page les données restent comme tels
        //Si il y a options on stock les données
        if (options) {
          this.setState(function () {
            return { options: options };
          });
        }
      } catch (error) {
        //on ne fait rien
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      // si la taille de options a une taille differente de la taille actuel(vide) du tableau
      //on store dans une variable, l'état actuel du tableau
      //avec localStorage on definit l'objet options et on y inclus les données du tableau enregistrées dans json
      if (prevProps.options.length !== this.state.options.length) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      console.log('componentWillUnmount');
    }
  }, {
    key: 'handleDeleteOptions',
    value: function handleDeleteOptions() {
      this.setState(function () {
        return { options: [] };
      });
    }

    // On va dans l'objet state qu'on a créé, et on change le contenu de options, qui est un tableau

  }, {
    key: 'handleDeleteOption',
    value: function handleDeleteOption(optionToRemove) {
      this.setState(function (previousState) {
        return {
          // Si le item qu'on selection est n'est pas à celui du tableau on le garde dans le tableau
          options: previousState.options.filter(function (option) {
            return optionToRemove !== option;
          })
        };
      });
    }
  }, {
    key: 'handlePick',
    value: function handlePick() {
      var random = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[random];
      alert(option);
    }
  }, {
    key: 'handleAddOption',
    value: function handleAddOption(option) {
      if (!option) {
        return 'Error Enter valid value';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This item already exist';
      }

      this.setState(function (previousState) {
        return { options: previousState.options.concat([option]) };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var title = 'Indecision';
      var subtitle = 'Put your life in the hands of a computer';

      return React.createElement(
        'div',
        null,
        React.createElement(Header, { subtitle: subtitle }),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0,
          handlePick: this.handlePick
        }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions,
          handleAddOption: this.handleDeleteOption
        }),
        React.createElement(AddAction, {
          handleAddOption: this.handleAddOption
        })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

//C'est ainsi qu'on implément les props à un composant de classe


IndecisionApp.defaultProps = {
  options: []
};
var Header = function Header(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      props.title
    ),
    props.subtitle && React.createElement(
      'h2',
      null,
      ' ',
      props.subtitle
    )
  );
};

Header.defaultProps = {
  title: 'Indecision'
};

var Action = function Action(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.handlePick,
        disabled: !props.hasOptions
      },
      'What Should I do ?'
    )
  );
};

//Options class render Text
var Options = function Options(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.handleDeleteOptions },
      'Remove All not'
    ),
    props.options.length === 0 && React.createElement(
      'p',
      null,
      'Please add an option to get started'
    ),
    props.options.map(function (item) {
      return React.createElement(Option, {
        key: item,
        optionText: item,
        handleDeleteOption: props.handleAddOption
      });
    })
  );
};

//Option -> Static text

var Option = function Option(props) {
  return React.createElement(
    'div',
    null,
    props.optionText,
    React.createElement(
      'button',
      {
        onClick: function onClick(e) {
          props.handleDeleteOption(props.optionText);
        }
      },
      'Remove'
    )
  );
};

//Add Action -> mettre une form

var AddAction = function (_React$Component2) {
  _inherits(AddAction, _React$Component2);

  function AddAction(props) {
    _classCallCheck(this, AddAction);

    var _this2 = _possibleConstructorReturn(this, (AddAction.__proto__ || Object.getPrototypeOf(AddAction)).call(this, props));

    _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddAction, [{
    key: 'handleAddOption',
    value: function handleAddOption(e) {
      e.preventDefault();
      var value = e.target.elements.input.value.trim();
      var error = this.props.handleAddOption(value);
      e.target.elements.input.value = '';

      this.setState(function () {
        return { error: error };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.error && React.createElement(
          'p',
          null,
          this.state.error
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleAddOption },
          React.createElement('input', { type: 'text', name: 'input' }),
          React.createElement(
            'button',
            null,
            'Add Action'
          )
        )
      );
    }
  }]);

  return AddAction;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
