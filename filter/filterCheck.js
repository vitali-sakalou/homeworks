var FilterCheck = React.createClass({

    displayName: 'FilterCheck',

    valueChecked: function() { 
        if (this.props.checked){
            console.log(this.props.checked);
            this.props.cbCheckedValueFalse();
        }
        else {
            console.log(this.props.checked);
            this.props.cbCheckedValueTrue();
        }
      },

    render: function(){
        return React.DOM.label({className: 'label-check'},
            React.DOM.input({type:'checkbox', className:'check', onChange:this.valueChecked}),
            'По алфавиту',
        )
    },
})