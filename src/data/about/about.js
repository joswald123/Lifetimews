//  Asset images
import imageGermaine from '../../images/germaine.jpg'
import imageJeannette from '../../images/Jeannette.jpg'
import imageJuliana from '../../images/Juliana.png'

// Components
import Germaine from './Germaine'
import Jeannette from './Jeannette'
import Juliana from './Juliana'

const aboutUsTitle = 'Our Team';

const aboutUs = [
    {
        id: 1,
        title: 'ABOUT GERMAINE CORDES, CHFC®',
        img: imageGermaine,
        content: <Germaine />
    },
    {
        id: 2,
        title: 'ABOUT JEANNETTE GUTHRIE',
        img: imageJeannette,
        content: <Jeannette />
    },
    {
        id: 3,
        title: 'ABOUT JULIANA OSWALD',
        img: imageJuliana,
        content: <Juliana />
    }
];

export function getAboutUsTitle() {
    return aboutUsTitle;
}

export function getAllAboutUs() {
    return aboutUs;
}

export function getAboutUs(id) {
    return aboutUs.find((about) => about.id === id);
}