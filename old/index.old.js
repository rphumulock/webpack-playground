import sum from './sum.js';
//import image_viewer from './image_viewer';
//import { cube } from './math.js';
//import printMe from './print.js';

const total = sum(10, 5);
console.log(total);

/*function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = 'Hello webpack';

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}*/

/*const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
    import('./image_viewer').then(module => {
        return module.default();
    }).catch(err => {
        console.log('chunk loading', err);
    });
};
document.body.appendChild(button);*/

/*function component() {
 var element = document.createElement('pre');

 // Lodash, now imported by this script
 element.innerHTML = [
   'Hello webpack!',
   '5 cubed is equal to ' + cube(5)
 ].join('\n\n');

  return element;
}*/

/*if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}*/

//image_viewer();
//document.body.appendChild(component());