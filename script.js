function showTab(tabId) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
}

function toggleTheme() {
  document.body.classList.toggle('dark-theme');
}

function addItem() {
  const name = document.getElementById('itemName').value;
  const location = document.getElementById('itemLocation').value;
  const note = document.getElementById('itemNote').value;
  const list = document.getElementById('itemList');

  if (name.trim() === '') return;

  const itemDiv = document.createElement('div');
  itemDiv.className = 'form-card';
  itemDiv.innerHTML = `<strong>${name}</strong><br>Location: ${location}<br>Note: ${note}`;
  list.appendChild(itemDiv);

  showNotification('Added item!');
}

function showNotification(message) {
  const notification = document.getElementById('notification');
  notification.textContent = message;
  notification.style.display = 'block';
  setTimeout(() => notification.style.display = 'none', 2000);
}