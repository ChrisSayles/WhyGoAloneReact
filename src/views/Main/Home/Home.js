import React, { PropTypes as T } from 'react'
import {Button} from 'react-bootstrap'
import AuthService from 'utils/AuthService'
import styles from './styles.module.css'
import ReactDOM from 'react-dom';
import Interest from './components/interest';
import InterestList from './components/interestList';
import Login from './components/login.js';
import Map from './components/map.js';
import Chat from './components/chat.js';
import Footer from './components/footer.js';
import Filters from './components/filters.js';
import Slider from './components/slider.js';
import helpers from '../../../utils/helpers.js';

export class Home extends React.Component {
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    auth: T.instanceOf(AuthService)
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      profile: props.auth.getProfile()
    }
    props.auth.on('profile_updated', (newProfile) => {
      this.setState({profile: newProfile})
    })
  }

  logout(){
    this.props.auth.logout()
    this.context.router.push('/login');
  }

  render(){
    const { profile } = this.state
    return (
      <div className={styles.root}>
        <h2>Home</h2>
        <p>Welcome {profile.name}!</p>
        <Button onClick={this.logout.bind(this)}>Logout</Button>
        <Login />
                    <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                                <div className="row">
                                    <div className="col-md-12">
                                        <InterestList />
                                    </div>
                                    <div className="col-md-12 ">
                                        <Interest />
                                    </div>
                                    <div className="col-md-12 ">
                                        <Filters />
                                    </div>
                                </div>
                        </div>
                    <div className="col-md-6">
                                <Map />
                    </div>
                    <div className="col-md-3">
                            <Chat setMessage={this.setMessage} messages={this.state.messages}/>
                    </div>        
                    </div>
                    </div>
                    <div className="footer">
                        <Footer />
                    </div>     
      </div>
    )
  }
}

export default Home;



