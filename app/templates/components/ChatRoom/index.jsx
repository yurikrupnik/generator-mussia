import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

import service from '../../services/socket/client';

const CardExampleWithAvatar = (props) => {
    const { nickname, avatar, message } = props;
    return (
        <Card>
            <CardContent
                title={nickname}
                avatar={avatar}
            >
                {nickname}
            </CardContent>
            <CardContent>
                {message}
            </CardContent>
        </Card>
    );
};

CardExampleWithAvatar.propTypes = {
    nickname: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
};

class ChatRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            messages: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.resetValue = this.resetValue.bind(this);
        this.handleNewMessage = this.handleNewMessage.bind(this);
    }

    componentDidMount() {
        service.registerReceiveMessage(this.handleNewMessage);
    }

    componentWillUnmount() {
        service.unRegisterReceiveMessage(this.handleNewMessage);
    }

    handleNewMessage(newMessage) {
        this.setState(prevState => ({
            messages: prevState.messages.concat(newMessage)
        }));
    }

    handleChange(event) {
        const { target } = event;
        const { value } = target;
        this.setState(() => ({ value }));
    }

    resetValue() {
        this.setState(() => ({ value: '' }));
    }

    handleKeyDown(event) {
        if (event.which === 13) {
            const { value } = this.state;
            service.newUser(value, this.resetValue);
        }
    }

    render() {
        const { messages, value } = this.state;
        return (
            <div style={{ minHeight: '100%' }}>
                <h3 className="header">
                    Chat
                </h3>
                <div>
                    {messages.map(message => (
                        <CardExampleWithAvatar key={message.nickname} {...message} />
                    ))}
                </div>
                <div className="footer">
                    <TextField
                        fullWidth
                        value={value}
                        label="Message"
                        onKeyDown={this.handleKeyDown}
                        onChange={this.handleChange}
                    />
                </div>
            </div>
        );
    }
}

export default ChatRoom;
