document.addEventListener('DOMContentLoaded', () => {
  const editBtn = document.getElementById('editBtn');
  const editModal = document.getElementById('editModal');
  const closeModal = document.getElementsByClassName('close')[0];
  const editForm = document.getElementById('editForm');

  const password = 'TechHut'; // Set your desired password here.

  editBtn.addEventListener('click', () => {
    editModal.style.display = 'block';
  });

  closeModal.addEventListener('click', () => {
    editModal.style.display = 'none';
  });

  editForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.password.value === password) {
      e.target.style.display = 'none';
      document.getElementById('uploadForm').style.display = 'block';
    } else {
      alert('Incorrect password!');
    }
  });

  // Add this code block after the password check
  const uploadForm = document.getElementById('uploadForm');
  uploadForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    fetch('gallery.php', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          location.reload();
        } else {
          alert('Error uploading content');
        }
      })
      .catch(() => {
        alert('Error uploading content');
      });
  });
});
