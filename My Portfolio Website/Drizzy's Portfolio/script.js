document.addEventListener('DOMContentLoaded', function () {
        const contactForm = 
        document.getElementById('contact-form');

        contactForm.addEventListener('submit', function (event) {
                event.preventDefault();
                //Validation code can be added here
                //For example, check if the fields are filled out correctly
                //Then, submit the form using AJAX or any other method
                //For demonstration purpouses, let's just log the form data
                const formData = new
                FormData(contactForm);
                for (const[name, value] of FormData.entries()) {
                        console.log(`${name}: ${value}`);
                }
                // Clear form fields after submission if needed
                contactForm.reset();
        });
});

function sendMessage() {
        var messageInput =
     document.getElementById('message-input');
        var message = messageInput.value.trim();
        if (message !== '') {
                appendMessage('You', message);
        }
}

function appendMessage(sender, message) {
        var messagesContainer =
     document.getElementById('messages');
        var messageDiv = 
     document.createElement('div');
        messageDivclassList.add('message');
        messageDiv.innerHTML = '<strong>' + sender + ':</strong>' + message;
     messagesContainer.appendChild(messageDiv);
}

function sendMessage() {
        var nameInput =
     document.getElementById('name-input');
        var emailInput =
     document.getElementById('email-input')
        var messageInput = 
     document.getElementById('message-input');
        var name = nameInput.value.trim();

        if (name !== '' && message !== '') {
                var messageContainer =
     document.getElementById('message');
                var messageDiv =
     document.createElement('div');
                messageDiv.classList.add('messages');
                messageDiv.innerHTML = '<strong>' + name + '</strong>' + message;

     messageContainer.appendChild(messageDiv);

//      clear input fields after sending message
                nameInput.value = '';
                emailInput.value = '';
                messageInput.value = '';

        }
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Get form inputs
        var nameInput = document.getElementById('name-input').value.trim();
        var emailInput = document.getElementById('email-input').value.trim();
        var messageInput = document.getElementById('message-input').value.trim();
        
        // Send data to server (not implemented in this example)
        // Here you would typically send the form data to a server using AJAX or fetch
        // For demonstration purposes, we'll just display a confirmation message
        var confirmationMessage = document.getElementById('confirmation-message');
        confirmationMessage.style.display = 'block';
        
        // Clear form inputs after submission
        document.getElementById('name-input').value = '';
        document.getElementById('email-input').value = '';
        document.getElementById('message-input').value = '';
      });