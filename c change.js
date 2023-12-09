const buttons=document.querySelectorAll ('.button')
const body = document.querySelector ('body')

buttons.forEach (function(button){
    console.log(button)
    button.addEventListener ('click', function(e){
          console.log(e)
          console.log(e.target)
          if (e.target.id==='box1') {
          body.style.backgroundColor='lightsalmon'
          }
          if (e.target.id==='box2') {
            body.style.backgroundColor='lightblue'
            }
            if (e.target.id==='box3') {
                body.style.backgroundColor='lightgreen'
                }
                if (e.target.id==='box4') {
                    body.style.backgroundColor='grey'
                    }
                    if (e.target.id==='box5') {
                        body.style.backgroundColor='yellow'
                        }
                        if (e.target.id==='box6') {
                            body.style.backgroundColor='navy'
                            }
    })
})