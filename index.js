const form = document.querySelector('#form');

const createErrorElem = () => {
    const elem = document.createElement('p');
    elem.className = "text-error";
    elem.innerText = "Обязательное поле!";
    return elem;
}

const removeErrorElem = () => {
    const elem = document.querySelectorAll('.text-error')
    if (elem.length > 0) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].remove();
        }
    }
}

const makeObject = (event) => {
    let obj = {}
    for (let i = 0; i < event.length; i++) {
        obj[event[i].id] = event[i].value;
    }
    console.log(obj);
}

const checkElem = (event) => {
    if (event.target.value !== '') {
        event.target.classList.remove('empty-field')
        event.target.nextElementSibling.remove()
    }
}

form.addEventListener("submit", () => {
    let a = 2;
    const elements = document.querySelectorAll('#form input,#form select,#form textarea');
    removeErrorElem();
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].hasAttribute("data-required")) {
            if (elements[i].value === '') {
                a--;
                elements[i].classList.add('empty-field');
                elements[i].after(createErrorElem());
                elements[i].addEventListener('change', checkElem);
            }
        }
    }
    if (a === 2)
    {
        makeObject(elements);
    }
})