function addRoomRenovations() {
  const rooms = parseInt(document.getElementById('rooms').value)
  if (isNaN(rooms) || rooms <= 0) {
    alert('Пожалуйста, введите корректное количество комнат.')
    return
  }

  const roomRenovationsDiv = document.getElementById('roomRenovations')
  roomRenovationsDiv.innerHTML = ''

  for (let i = 1; i <= rooms; i++) {
    const label = document.createElement('label')
    label.textContent = `Тип ремонта для комнаты ${i}:`
    const select = document.createElement('select')
    select.id = `roomRenovation${i}`
    select.innerHTML = `
                <option value="4000">Стандарт ($4000 за комнату)</option>
                <option value="5000">Премиум ($5000 за комнату)</option>
                <option value="7000">Люкс ($7000 за комнату)</option>
            `
    roomRenovationsDiv.appendChild(label)
    roomRenovationsDiv.appendChild(select)
  }
}

function calculatePrice() {
  const houseTypePrice = parseFloat(document.getElementById('houseType').value)
  const squareMeters = parseFloat(document.getElementById('squareMeters').value)
  const rooms = parseInt(document.getElementById('rooms').value)

  if (isNaN(squareMeters) || squareMeters <= 0 || isNaN(rooms) || rooms <= 0) {
    alert(
      'Пожалуйста, введите корректные данные для площади и количества комнат.'
    )
    return
  }

  const houseCost = houseTypePrice * squareMeters

  let renovationCost = 0
  for (let i = 1; i <= rooms; i++) {
    const renovationPrice = parseFloat(
      document.getElementById(`roomRenovation${i}`).value
    )
    renovationCost += renovationPrice
  }

  const totalCost = houseCost + renovationCost

  const resultDiv = document.getElementById('result')
  resultDiv.style.display = 'block'
  resultDiv.innerHTML = `
            <h3>Результат расчёта</h3>
            <p>Стоимость дома: $${houseCost.toLocaleString()}</p>
            <p>Стоимость ремонта: $${renovationCost.toLocaleString()}</p>
            <p><strong>Общая стоимость: $${totalCost.toLocaleString()}</strong></p>
        `
}
