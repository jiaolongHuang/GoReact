import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class HomeContainer extends React.Component {
	constructor(props, context) {
		super(props, context)
	}


  render() {
	  return (
		<div>

			{this.props.children}
		</div>
	  )
	}
}

const mapStateToProps = (state) => {
	return {
	 
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
	   
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeContainer)
