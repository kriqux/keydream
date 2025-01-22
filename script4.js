document.getElementById('submit-button').addEventListener('click', function () {
  // Получение значений из полей
  const name = document.getElementById('name').value.trim()
  const phone = document.getElementById('phone').value.trim()
  const email = document.getElementById('email').value.trim()

  // Проверка заполнения всех полей
  if (!name || !phone || !email) {
    displayMessage('Пожалуйста, заполните все поля.', 'error')
    return
  }

  // Отправка данных через fetch
  const data = { name, phone, email }

  fetch('https://example.com/api/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => {
      if (response.ok) {
        displayMessage('Заявка успешно отправлена!', 'success')
        resetForm()
      } else {
        throw new Error('Ошибка при отправке заявки.')
      }
    })
    .catch(() => {
      displayMessage('Ошибка: попробуйте позже.', 'error')
    })
})

// Функция отображения сообщений
function displayMessage(message, type) {
  const messageDiv = document.getElementById('success-message')
  messageDiv.textContent = message
  messageDiv.style.color = type === 'success' ? 'lightgreen' : 'red'
}

// Очистка формы
function resetForm() {
  document.getElementById('name').value = ''
  document.getElementById('phone').value = ''
  document.getElementById('email').value = ''
}
