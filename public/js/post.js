// create post

const newPostHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-name').value.trim();

  const body = document.querySelector('#post-body').value.trim();

  if (title && body) {
    const response = await fetch(`/dashboard`, {
      method: 'POST',
      body: JSON.stringify({ title, body }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Unable to create post');
    }
  }
};

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newPostHandler);


// delete post 
const deletePostHandler = async (event) => {
  event.preventDefault();

  if (event.target.hasAttribute('post-id')) {
    const id = event.target.getAttribute('post-id');

    const response = await fetch(`/dashboard/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Oh no! This button does not work! ');
    }
  }
};

document
  .getElementById('postlist')
  .addEventListener('click', deletePostHandler);

