// Login Functionality
function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'mreema2002@gmail.com' && password === 'Jesus@123') {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
  } else {
    alert('Invalid credentials!');
  }
}

// Logout Functionality
function logout() {
  document.getElementById('mainContent').style.display = 'none';
  document.getElementById('logoutMessage').style.display = 'flex';
}

// Return to Login
function returnToLogin() {
  document.getElementById('logoutMessage').style.display = 'none';
  document.getElementById('loginPage').style.display = 'flex';
}

// Get Started Options
function showGetStarted() {
  document.getElementById('loginPage').style.display = 'none';
  document.getElementById('getStartedOptions').style.display = 'flex';
}

function closeGetStarted() {
  document.getElementById('getStartedOptions').style.display = 'none';
  document.getElementById('loginPage').style.display = 'flex';
}

// Continue with External Options
function continueWith(option) {
  alert(`Continuing with ${option}...`);
}

// Create Post
function createPost() {
  const postContent = document.getElementById('postContent').value;
  if (postContent) {
    const post = document.createElement('div');
    post.classList.add('post');
    post.innerHTML = `<p>${postContent}</p><small>Posted just now</small>`;
    document.getElementById('posts').prepend(post);
    document.getElementById('postContent').value = '';
  }
}

// Send Chat Message
let messages = [];
function sendMessage() {
  const message = document.getElementById('chatMessage').value;
  if (message) {
    // Add a default response
    let reply = 'I am doing well! How about you?';
    
    if (message.toLowerCase().includes('hello')) {
      reply = 'How are you today?';
    } else if (message.toLowerCase().includes('how are you')) {
      reply = 'I am doing well, thank you!';
    }
    
    messages.push({ sender: message, reply: reply });
    displayMessages();
    document.getElementById('chatMessage').value = '';
  }
}

function displayMessages() {
  const chatWindow = document.getElementById('chatWindow');
  chatWindow.innerHTML = '';
  messages.forEach(msg => {
    const messageDiv = document.createElement('div');
    messageDiv.innerHTML = `<b>You:</b> ${msg.sender} <br> <b>ChatBot:</b> ${msg.reply}<br><br>`;
    chatWindow.appendChild(messageDiv);
  });
}
