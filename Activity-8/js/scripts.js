function get(element)
{
    return document.getElementById(element);
}

function openModal() {
    var modal = get('modalDialog');
    var backdrop = get('modalBackdrop');

    modal.classList.add('visible');
    backdrop.classList.add('visible');
}

function closeModal()
{
    var title = get('editTitleText');
    var text = get('editContentText')
    var modal = get('modalDialog');
    var backdrop = get('modalBackdrop');

    title.value ='';
    text.value = '';

    modal.classList.remove('visible');
    backdrop.classList.remove('visible');
}

function saveContent()
{
    var title = get('editTitleText');
    var text = get('editContentText');
    var content = get('displayContent');

    var newTitle = document.createElement('h2');
    var newTitleText = document.createTextNode(title.value);
    var newContent = document.createElement('p');
    var newContentText = document.createTextNode(text.value);

    newTitle.appendChild(newTitleText);
    newContent.appendChild(newContentText);
    content.appendChild(newTitle);
    content.appendChild(newContent);

    closeModal();
}

window.addEventListener('load', function() {
    var newButton = get('newButton');
    var cancelButton = get('cancelButton');
    var saveButton = get('saveButton');

    newButton.addEventListener('click', openModal);
    cancelButton.addEventListener('click',closeModal);
    saveButton.addEventListener('click', saveContent);
})