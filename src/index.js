import sum from './sum.js';
import { cube } from './math.js';
import image_viewer from './image_viewer';
import _ from 'lodash';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
} else {
    //console.log('Looks like we are in production mode!');
}

/*function getComponent() {
    return import(/* webpackChunkName: "lodash"  'lodash').then(_ => {
        var element = document.createElement('div');
        element.innerHTML = _.join(['Hello', 'webpack'], ' ');
        return element;
    }).catch(error => 'An error occurred while loading the component');
}
getComponent().then(component => {
    document.body.appendChild(component);
})*/

if (module.hot) {
    module.hot.accept('./sum.js', function () {
        console.log('Accepting the updated module!');
        const total = sum(10, 5);
        console.log(total);
    })
}

function launchComponent() {
    var element = document.createElement('div');
    var button = document.createElement('button');
    var br = document.createElement('br');

    button.innerHTML = 'Click me and look at the console!';
    element.appendChild(br);
    element.appendChild(button);

    // Note that because a network request is involved, some indication
    // of loading would need to be shown in a productionlevel site/app.
    button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
        var print = module.default;
        print();
    });

    return element;
}

function component() {
    var element = document.createElement('pre');
    element.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n');

    return element;
}

//image_viewer();
document.body.appendChild(component());
document.body.appendChild(launchComponent());
