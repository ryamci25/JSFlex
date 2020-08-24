

function loadData() {
    fetch("script/data.json")
    .then(resp => resp.json())
    .then(data =>{

        let panles = data.images.map((pannle,i) => {

            return `
            <div class= pannle$(i) styles="background-image : url(${pannle.image})">
            <p>${pannle.text_top}</p>
            <p>${pannle.text_middle}</p>
            <p>${pannle.text_bottom}</p>
            <div/>
            `
            })

            document.querySelector('#pannle_container').innerHTML = pannles
    
    })

    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

}

function toggleOpen() {
  console.log('Hello');
  this.classList.toggle('open');
}

function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

