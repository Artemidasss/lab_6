// script.js
function changeTitle() {
  const title = document.querySelector('#main-title');
  title.textContent = "Ееее кнопочки жмутся, хайп";
}

function makeTextRed() {
  const text = document.getElementById('main-text');
  text.style.color = '#ff3366';
  text.style.fontWeight = '700';
  text.style.fontStyle = 'italic';
}

function toggleHide() {
  document.getElementById('content').classList.toggle('hidden');
}

function toggleHighlight() {
  document.getElementById('content').classList.toggle('active');
}

function toggleTheme() {
  document.body.classList.toggle('dark');
}

// пасхалка
document.getElementById('main-title').addEventListener('dblclick', () => {
  alert('Пу пу пу');
});