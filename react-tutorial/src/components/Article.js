import React from 'react'
import PropTypes from 'prop-types'

class Article extends React.Component {
    state = {
        visible: false
    }
    handlerReadMoreClick = (e) => {
        e.preventDefault();
        this.setState({visible: true})
    }
    render() {
        const { author, text, bigText } = this.props.data
        const { visible } = this.state
        return (
            <div className='article'>
                <p className='news__author'>{author}</p>
                <p className='news__text'>{text}</p>
                { /*если не visible то показывай*/
                    !visible && <a onClick={this.handlerReadMoreClick} href='#readmore' className='news__readmore'>Подробнее</a>
                }
                {/*если visible то показывай*/
                    visible && <p className='news__big-text'>{bigText}</p>
                }
            </div>
        )
    }
}

Article.propTypes = {
    data: PropTypes.shape({
        author: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        bigText: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    })
}
export { Article }