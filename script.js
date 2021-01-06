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
        _res.innerHTML = '';
    } else {
        window.alert('Valor inválido ou já encontrado na lista!');
    }
    _num.value = ""
    _num.focus();
}


function inspect(){
    if(_values.length == 0){
        window.alert('No numbers found! You need to add at least one')
    }
    else{
        _res.innerHTML = '';
        _res.innerHTML = `<p>We have ${_values.length} numbers in the list</p>`
        let _max = _values[0];
        let _min = _values[0];
        let _sum = 0;
        for (let index = 0; index < _values.length; index++) {
            if(_values[index] > _max) _max = _values[index];
            if(_values[index] < _min) _min = _values[index];
            _sum += _values[index];
        }
        _res.innerHTML += `<p>The largest number is ${_max} while the smallest number is ${_min}</p>`;
        _res.innerHTML += `<p>The sum of the numbers is ${_sum}</p>`;
        _res.innerHTML += `<p>The average of the numbers is ${Number(_sum/_values.length).toFixed(2)}</p>`;
    }
}