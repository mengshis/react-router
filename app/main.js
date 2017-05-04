'use strict';

import 'semantic-ui/semantic.min.css!';
import React from 'react';
import ReactDom from 'react-dom';
import { Router,Route,Link ,IndexRoute,Redirect} from 'react-router';

class App extends React.Component{
    componentDidMount(){
        console.log('App did mount');
    }
    componentWillReceiveProps(){
        console.log('app will receive props')
    }
    componentDidUpdate(){
        console.log('app did update')
    }
    render(){
        return(
            <div>
                <div className="ui secondary pointing menu">
                    <Link to="/" className="item">首页</Link>
                    <Link to="/tv" className="item" query={{orderBy:'date'}}>电视</Link>
                </div>
                {this.props.children}
            </div>
        );
    }
}

class TV extends React.Component{
    componentDidMount(){
        console.log('tv did mount')
    }
    constructor(props){
        super(props);
        let {query}=this.props.location;
        console.log(query);
    }
    render(){
        return(
            <div>
                <div className="ui info message">电视节目列表</div>
                {this.props.children}
            </div>
        );
    }
}

class Show extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.params);
    }
    render(){
        return(
            <h3>节目{this.props.params.id}</h3>
        );
    }
}

class Home extends React.Component{
    componentDidMount(){
        console.log('Home did Mount')
    }
    componentWillUnmount(){
        console.log('Home will unmount')
    }
    render(){
        return (
            <div className="ui info message">首页内容</div>
        );
    }
}
function handleEnter(){
    console.log('进入')
}
function handleLeave(){
    console.log('离开')
}

ReactDom.render(
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="tv" component={TV}>
                <IndexRoute component={TV} />
                <Route path="/shows/:id" component={Show} />
                <Redirect from="shows/:id" to="/shows/:id"
                    onEnter={handleEnter}
                          onLeave={handleLeave}
                    />
            </Route>
        </Route>
    </Router>
,document.getElementById("app"));





