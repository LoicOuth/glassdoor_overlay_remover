const remove = () => {
   const div = document.querySelector('div.gdGrid.css-1xxrqhd.e91w1dn4')
   const noConnectedDiv = document.querySelector('div.hardsellOverlay  ')

   if (div) {
      div.remove()
   }

   if (noConnectedDiv) {
      noConnectedDiv.remove()
   }

   const main = document.querySelector('main.css-yaeagj')

   if (main) {
      main.style.height = '100vh'
      main.style.overflow = 'auto'
   }
}


//0 timeout to pass at the end of call stack 
setTimeout(() => {
   remove()
}, 0)