function buttonClick() {
    const currentDate = new Date()
    let bdDate = new Date(document.getElementById('bdDate').value)
    console.log('1 ' + typeof(bdDate))
     let diff = Math.floor((bdDate - currentDate)/(24*3600*1000))
    console.log(diff)
    let pText = document.getElementById('text')
    let day;
    if (diff >= 5 && diff<=20) {day = ' дней'
     } else if(diff%10 == 1) {day = ' день'
     }  else if ([2,3,4].includes(diff%10)) {day = ' дня'}
    else {day = ' дней'}   
    if (isNaN(diff)) {pText.textContent = 'Вы ничего не ввели'
        } else {pText.textContent = "До дня рождения " + diff + day }
  }