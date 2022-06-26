//  Asset images
import imageGermaine from '../../images/germaine.jpg'

// Components
import Welcome from './WelcomeText'

const welcome = [
    {
        id: 1,
        title: 'Welcome to Lifetime Capital',
        img: imageGermaine,
        content: <Welcome />
    }
];

export function getAllWelcome() {
    return welcome;
}

export function getWelcome(id) {
    return welcome.find((about) => about.id === id);
}