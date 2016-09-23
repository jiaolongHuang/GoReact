import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class DetailContainer extends React.Component {
    constructor(props, context) {
        super(props, context)
    }


  render() {
      
      return (
        <div className="g-clearfix homePage">
            this is detail
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
)(DetailContainer)
