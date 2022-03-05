setInterval (function loading() {
   const background = document.querySelector('body')
   const msg = document.getElementById('msg')
   const data = new Date()
   const hour = data.getHours()
   const min = data.getMinutes()
   const sec = data.getSeconds()
   msg.innerHTML = `${hour}:${min.toString().padStart(2, 0)}:${sec.toString().padStart(2, 0)}`

   if(hour >= 5 && hour < 13){
     background.classList.remove('afternoon', 'night')
   }
   else if(hour >= 13 && hour < 19){
    background.classList.remove('day', 'night')
  }
  else if(hour >= 19 || hour < 5){
    background.classList.remove('day', 'afternoon')
  }1000

})

loading()

