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


// delete post - this doesn't work
const deletePostHandler = async (event) => {
  event.preventDefault();

  const id = document.querySelector('post-id');

  const response = await fetch(`/dashboard/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({ id }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Unable to delete post');
  }
}
document
  .querySelector('#delete-post')
  .addEventListener('click', deletePostHandler);

// update post
