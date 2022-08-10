async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="wishlist-title"]').value;
    console.log(title);
    const wishlist_text = document.querySelector('input[name="wishlist-text"]').value;
    console.log(wishlist_text); 
  
    const response = await fetch(`/api/wishlist`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        wishlist_text
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);