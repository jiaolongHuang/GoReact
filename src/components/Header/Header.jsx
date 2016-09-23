import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link, IndexLink } from 'react-router'
import CSSModules from 'react-css-modules'
import styles from './HeaderStyle.css'

class Header extends Component {
	constructor(props, context) {
		super(props, context)
	}
	
	
	render() {
		const {  } = this.props

		return (
			<div className={styles.header}>
				<a className={styles.logo}>logo</a>
				<div className={styles['nav-list']}>
					  <IndexLink to="/" activeClassName={styles.curr}>主页</IndexLink>
			  		<Link to="/detail/test" activeClassName={styles.curr}>&nbsp;&nbsp;DETAIL LINK</Link>
				</div>
			
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

// react router bug,will fixed 3.0.0-alpha.1 and newer.
export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    {pure: false}
)(CSSModules(Header, styles))
