async function newPostHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="title"]').value;
    const post_content = document.querySelector('input[name="content"]').value;

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            post_content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dash');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.post').addEventListener('submit', newPostHandler);