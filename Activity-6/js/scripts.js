
var messages = [];

var messageType = 
{
    out: 'sentMessage',
    in: 'recievedMessage',
    unknown: 'unknownMessage'
};

function Message(type,sender,messageContent)
{
    this.type = type;
    this.sender = sender;
    this.messageContent = messageContent;
}

function createMessageElement(message)
{
    var messageContent = document.createTextNode
    (message.sender + ': ' + message.messageContent);

    var messageEl = document.createElement('div');
    messageEl.appendChild(messageContent);

    messageEl.className = message.type;

    return messageEl;
}

function addMessageHandler(event)
{
    var sender;
    var type;
    var messageInput = document.getElementById('messageInput');
    var messageContainerEl = document.getElementById('messageContainer');
    switch (event.target.id)
    {
        case 'sendButton':
            sender = 'Conner';
            type = messageType.out;
            break;
        case 'replyButton':
            sender = 'Deborah';
            type = messageType.in;
            break;
    }

    if (messageInput.value != '')
    {
        var message = new Message(type,sender,messageInput.value);
        messages.push(message);

        var el =createMessageElement(message);

        messageContainerEl.appendChild(el);

        messageInput.value = '';
    }
}

var init = function()
{
    document.getElementById('sendButton').onclick =addMessageHandler;
    document.getElementById('replyButton').onclick = addMessageHandler;
}

init();