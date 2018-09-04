import React, {PureComponent} from 'react';
import articles from '../fixtures';
import ArticleList from './ArticleList';
import 'bootstrap/dist/css/bootstrap.css'

class App extends PureComponent{
    state = {
        isReverse: false
    }

    articles = articles.slice();
   

    render(){
        return(
            <div className='container'>
                <div className='jumbotron'>
                    <h1 className='display-3'>
                        App name
                        <button className='btn btn-success btn-lg' onClick={this.reversed}>{this.state.isReverse ? 'Undo': 'Reverse'}</button>
                    </h1>
                    
                </div>
                <ArticleList articles = {this.state.isReverse ? articles.slice().reverse() : articles}/>
            </div>
        )
    }
    reversed = () => {
        this.setState({
            isReverse: !this.state.isReverse
        });
    }
}

export default App;
