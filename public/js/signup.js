async function signupHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            console.log('success');
            document.location.replace('/dash');
        } else {
            console.log('unsuccessful')
            alert(response.statusText);
        }
    }
}

document.querySelector('.signup').addEventListener('submit', signupHandler);