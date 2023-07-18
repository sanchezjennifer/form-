let items = localStorage.getItem('itemList')
items = items ? items.split(',') : []
showItem()


function addItem() {
    let item = document.getElementById('item').value
    item  = item.split(',')
    for (let i = 0; i < item.length; i++) {
        if(item[i]){
            items.push(item[i])
            showItem()
        }
    }
   
}

function showItem() {
    document.getElementById('item').value = ''
    let html = ''
    for (let i = 0; i < items.length; i++) {
        html += `<div class="col-10 mb-3"> ${items[i]} </div>`
        html += `<div class="col-2 mb-3"> <a href="#" class="btn btn-info" onclick="deleteItem(${i})"> X </a> </div>`
    }

    localStorage.setItem('itemList', items)
    document.getElementById('items').innerHTML = html
}

function deleteItem(item) {
    items.splice(item, 1)
    showItem()
}

