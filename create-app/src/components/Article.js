import React, {Component} from 'react';

class Article extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }
    render(){
        const {article, isOpen, onButtonClick} = this.props;
        const body = isOpen && <section className='card-text'>{article.text}</section>
        return(
            <div className='card mx-auto' style={{width: '55%'}}>
                <div className='card-header'>
                    <h2>
                        {article.title}
                        <button onClick={onButtonClick} className='btn btn-primary btn-lg float-right'>
                        {isOpen ? 'close' : 'open'}
                        </button>
                    </h2>
                </div>
               <div className='card-body'>
                    <h6 className='card-subtitle text-muted'>creating date: {(new Date(article.date)).toDateString()}</h6>
                    {body}
                </div>
            </div>
        )
    }
}


export default Article;