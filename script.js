let _num = document.querySelector('input#fnum');
let _list = document.querySelector('select#flist');
let _res = document.querySelector('div#res');
let _values = [];

function isNumber(_v){
    if(Number(_v) >= 1 && Number(_v) <=100){
        return true
    } else return false;
}

function inList(_v, _array){
    if (_array.indexOf(Number(_v)) != -1){
        return true;
    } else return false;
}

function add(){
    if(isNumber(_num.value) && !inList(_num.value, _values)){
        _values.push(Number(_num.value));
        let item = document.createElement('option');
        item.text = `Valor ${_num.value} adicionado`;
        _list.appendChild(item);
    } else {
        window.alert('Valor inválido ou já encontrado na lista!');
    }
    _num.value = ""
    _num.focus();
}