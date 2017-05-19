var React = require('react');

var button = React.createClass({

	render: function() {
		return (
			<View>
			{this.renderButton()}
			</View>
		);
	}

	renderButton: function() {
	  return (
	    <TouchableHighlight onPress={this._onPressButton}>
	      <Image
	        style={{backgroundColor:'blue'}}
	        source={require('../scrollView/styles/assets/pic_jishi@3x.png')}
	      />
	    </TouchableHighlight>
	  );
	}

	_onPressButton:function(){

	}

});

module.exports = button;