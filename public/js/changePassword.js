const form = document.querySelector('form');
const currentPassword = document.querySelector('#currentPassword');
const newpassword1 = document.querySelector('#newPassword1');
const newpassword2 = document.querySelector('#newPassword2');

const handleSubmit = async (e) => {
  e.preventDefault();
  if (newpassword1.value !== newpassword2.value) {
    document.querySelector('#error').innerHTML = `Password Error`;
    return;
  }
  const passwordFetch = await fetch('/user/changePassword', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      newPassword: newpassword1.value,
      currentPassword: !currentPassword ? '' : currentPassword.value,
    }),
  });
  if (passwordFetch.status === 400) {
    return window.location.replace('/user/changePassword');
  }
  if (passwordFetch.status === 200) {
    return window.location.replace('/user/profile');
  }
};

form.addEventListener('submit', handleSubmit);
