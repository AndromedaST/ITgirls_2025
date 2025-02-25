function buttonClick() {
    let li = document.createElement('li')
    let inputValue = document.getElementById('newInput').value
    let newList = document.getElementById('newList')
    li.textContent= inputValue
    newList.append(li)
    li.onclick = function () {
    li.classList.toggle('strike')
    }
   }