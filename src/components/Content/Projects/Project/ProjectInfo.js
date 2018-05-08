
import image1 from '../../../../assets/Projects/testing.jpg';
import image2 from '../../../../assets/Projects/testing2.jpg';


import cianIMG1 from '../../../../assets/Projects/cian/1.png'
import cianIMG2 from '../../../../assets/Projects/cian/2.png'
import cianIMG3 from '../../../../assets/Projects/cian/3.png'

import loveIMG1 from '../../../../assets/Projects/love/1.png'
import loveIMG2 from '../../../../assets/Projects/love/2.png'
import loveIMG3 from '../../../../assets/Projects/love/3.png'


import twoIMG1 from '../../../../assets/Projects/movie/1.png'
import twoIMG2 from '../../../../assets/Projects/movie/2.png'
import twoIMG3 from '../../../../assets/Projects/movie/3.png'
import twoIMG4 from '../../../../assets/Projects/movie/4.png'

import createIMG1 from '../../../../assets/Projects/csbeta/1.png'

import riddleIMG1 from '../../../../assets/Projects/riddle/1.png'
import riddleIMG2 from '../../../../assets/Projects/riddle/2.png'

let fillerImages = [ image1, image2]



let projectInfo = {
    cianmoore : {
        title: 'Cian Moore',
        desc: 'This website was created for the photographer Cian Moore as a portfolio site where he can share his work.'  ,
        imgs: [cianIMG1, cianIMG2, cianIMG3],
        nextProject: 'loveisabella',
        date: '2017',
    },
    loveisabella: {
        title: 'Love Isabela',
        desc: 'This website was created for the Tripoli Gallery.  It was silent art auction that raised money for the victims of Hurricane Maria in Isabela, Puerto Rico.',
        imgs: [loveIMG1, loveIMG2, loveIMG3],
        nextProject: 'riddlefamilyFoundation',
        date: '2016',
    },
    riddlefamilyFoundation : {
        title: 'Riddle Family Foundation',
        date: '2017',
        desc: 'This site was created as way to share your movie Reviews with friends. Users would follow each other and when there friends leave a movie review it would show up on their feed and they would be able so see what their friends thought of movies.',
        imgs: [riddleIMG1, riddleIMG2],
        nextProject: 'twothumbsup',
        date: '2017',
    },
   
    createsafebeta : {
        title : 'CreateSafe Beta',
        desc: 'his website was created for CreateSafe.  It was a landing page as well as full signup page for one of their beta Apps. Users could sign up to be added to their App beta testing.',
        imgs: [createIMG1],
        nextProject: 'cianmoore',
        date: '2016',
    },
    twothumbsup : {
        title: 'Two Thumbs Up',
        desc: 'This website was created for the Riddle Family foundation. The complete is still in progress however this was set up as a way for people to apply for a Scholarship From the Riddle Family Foundation.',
        imgs: [twoIMG1, twoIMG2, twoIMG3. twoIMG4],
        nextProject: 'createsafebeta',
        date: '2016',
    },


}

export default projectInfo;