import big from '../assets/big.jpg';
import small from '../assets/small.jpg';
import '../styles/image_viewer.css'

export default () => {
    const tiny = document.createElement('img');
    tiny.src = small;

    document.body.appendChild(tiny);


    const large = document.createElement('img');
    large.src = big;

    document.body.appendChild(large);
}