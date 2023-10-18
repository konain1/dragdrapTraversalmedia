
const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')


fill.addEventListener('dragstart',dragStart)
fill.addEventListener('dragend',dragEnd)


empties.forEach(element => {
    element.addEventListener('dragover',dragOver)
    
    element.addEventListener('dragenter',dragEnter)
    
    element.addEventListener('dragleave',dragLeave)
    element.addEventListener('drop',fillDrop)

});

function dragStart(e){
    setTimeout(() => {
        
     this.className = 'invisible'
    }, 0);
    console.log('start')
}
function dragEnd(){
    this.className = 'fill'
}

// loop functions

function dragEnter(e){
e.preventDefault();
console.log('dragenter')
}

function dragOver(e){
    e.preventDefault()
}
function dragEnter(e){
    e.preventDefault();
    this.className += ' hovered'
    console.log('dragend')
}
function dragLeave(){
    this.className = 'empty'
}
function fillDrop(e){
    e.preventDefault();
    this.className = 'empty'
    this.append(fill)
    console.log('drop')
}