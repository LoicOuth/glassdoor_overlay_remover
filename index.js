const remove = () => {
   const div = document.querySelector('div.gdGrid.css-1xxrqhd.e91w1dn4')
   const noConnectedDiv = document.querySelector('div.hardsellOverlay  ')

   if (div) {
      div.remove()
   }

   if (noConnectedDiv) {
      noConnectedDiv.remove()
   }

   const main = document.getElementsByTagName('main')

   if (main.length) {
      for (let index = 0; index < main.length; index++) {
         const element = main[index]
         element.style.height = '100vh'
         element.style.overflow = 'auto'
      }
   }
}


//0 timeout to pass at the end of call stack 
setTimeout(() => {
   remove()
}, 0)