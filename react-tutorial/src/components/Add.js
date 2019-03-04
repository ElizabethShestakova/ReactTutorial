import React from 'react'
import PropTypes from 'prop-types'

class Add extends React.Component {
    state = {              
        name: '',
        text: '',
        bigText: '',
        agree: false
    }
    onBtnClickHandler = (e) => {
        e.preventDefault();          
        const {name, text, bigText } = this.state        
        // alert(name + '\n' + text)            
        this.props.onAddNews({
            id: +new Date(),
            author: name,
            text,
            bigText
            })
    }
    handleChange = (e) => {   
        const { id, value } = e.currentTarget     
        this.setState({[id]: value})
    }
    handleCheckboxChange = (e) => {
        this.setState({agree: e.currentTarget.checked})
    }
    validate = () => {
        const {agree,name,text} = this.state
        if (agree && name.trim() !== '' && text.trim() !== '') {
            return true
        } else {
            return false
        }
    }
    render() {
        const { name, text, bigText } = this.state
        return(
    <form className='add'> 
        <input 
            id='name'
            type='text'
            className='add__author'
            placeholder='Ваше имя'
            onChange={this.handleChange}
            value={name}
        />
        <textarea
            id='text'
            className='add__text'
            placeholder='Текст новости'
            onChange={this.handleChange}
            value={text}
        ></textarea>
        <textarea
            id='bigText'
            className='add__text'
            placeholder='Дополнительный текст'
            onChange={this.handleChange}
            value={bigText}
        ></textarea>
        <label className='add__checkrule'>
            <input type='checkbox'
            onChange={this.handleCheckboxChange}/>
            Я согласен с правилами
        </label>
        <button
            className='add__btn'
            onClick={this.onBtnClickHandler}
            disabled={!this.validate()}>
            Показать alert
        </button>            
    </form>
        )
    }
  }
  Add.propTypes = {
    onAddNews: PropTypes.func.isRequired,
  }

  export { Add }