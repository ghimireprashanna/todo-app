const myform=document.querySelector('.my-form');
const nameinput=document.querySelector('#name');
const emailinput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userlist=document.querySelector('.items');

myform.addEventListener('submit',onSubmit);
function onSubmit(e){
    e.preventDefault();
    if (nameinput.value==='' || emailinput.value===''){
        msg.innerHTML='Please enter all field';
        msg.classList.add('error');
        setTimeout(()=>msg.remove(),2500);
    }else{
        const li = document.createElement('li');
        li.className='item';
        li.appendChild(document.createTextNode(`${nameinput.value} : ${emailinput.value}`))
        userlist.appendChild(li);
    }
}

