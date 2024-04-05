const loginFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the login form
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password ) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
};

const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();

    const password = document.querySelector('#password-signup').value.trim();

    if (username && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json'}
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);

    document
        .querySelector('.signup-form')
        .addEventListener('submit', signupFormHandler);

        document.addEventListener('DOMContentLoaded', () => {
            const loginTab = document.getElementById('loginTab');
            const signupTab = document.getElementById('signupTab');
            const loginPanel = document.getElementById('login-panel');
            const signupPanel = document.getElementById('signup-panel');
          
            loginTab.addEventListener('click', () => {
              loginPanel.style.display = 'block';
              signupPanel.style.display = 'none';
              loginTab.classList.add('is-active');
              signupTab.classList.remove('is-active');
            });
          
            signupTab.addEventListener('click', () => {
              signupPanel.style.display = 'block';
              loginPanel.style.display = 'none';
              signupTab.classList.add('is-active');
              loginTab.classList.remove('is-active');
            });
          });
          
          document.addEventListener('DOMContentLoaded', () => {
            const tabs = document.querySelectorAll('.tabs li');
            const tabContentBoxes = document.querySelectorAll('.tab-content');
        
            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    tabs.forEach(item => item.classList.remove('is-active'));
                    tab.classList.add('is-active');
        
                    const target = tab.getAttribute('data-tab');
                    tabContentBoxes.forEach(box => {
                        if (box.getAttribute('id') === target) {
                            box.classList.add('is-active');
                        } else {
                            box.classList.remove('is-active');
                        }
                    });
                });
            });
        });
        