import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../redux/reducers/user'

function Header(props) {
    return (
        <div style={styles.header}>
            <div id="logo" style={styles.logo}>
                <Link to='/'><h1>WSL1 ROCKS!</h1></Link>
            </div>
            <div id="navbar" style={styles.navbar}>
                <Link to={'/posts'}>posts</Link>
                {props.user ? <Link to="/" onClick={props.logout}>logout</Link> : <Link to='/'>login</Link>}
            </div>
        </div>
    )
}
let mapStateToProps = state => {
    return {
        user: state.user.data
    }
}

export default connect(mapStateToProps, {logout})(Header)

let styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: 20,
        alignItems: 'center'
    },
    logo: {
        flex: 4,
        display: 'flex',
        justifyContent: 'flex-start'
    },
    navbar: {
        flex: 1,
        display: 'flex',
        justifyContent: 'space-between'
    }
}