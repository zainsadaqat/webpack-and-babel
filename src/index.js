// write some modular javascript
import list1 from './list';
const body = document.querySelector('body');
const f1 = () => {
  list1.forEach(({ name, age }) => {
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    h1.innerText = name;
    p.innerText = age;
    body.append(h1);
    body.append(p);
  });
};

f1();
