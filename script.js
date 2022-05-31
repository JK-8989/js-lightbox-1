document.addEventListener('click', lightbox);

function lightbox(e){
  let element = e.target,
      elementId = element.getAttribute('id'),
      lightBoxImg = document.getElementById('lightbox-image'),
      lightBoxBg = document.getElementById('lightbox-overlay'),
      fullImage = new Image();

      if(element.hasAttribute('data-lightbox')){
          e.preventDefault();

          fullImage.onload = function() {
            lightBoxImg.src = this.src;
            // console.log(this.src)
          }
          lightBoxImg.src = '';
          fullImage.src = element.getAttribute('data-lightbox');
          lightBoxBg.classList.add('visible');
          // console.log(element.getAttribute('data-lightbox'))

          lightBoxBg.addEventListener('click', ()=>{
          lightBoxBg.classList.remove('visible')
          })

        };
      
      }


     
    
     
  // console.log(element)
 

