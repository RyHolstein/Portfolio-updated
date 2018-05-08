
import image1 from '../../../../assets/Projects/testing.jpg';
import image2 from '../../../../assets/Projects/testing2.jpg';

let fillerText = "Marry me. Across from where? Army had half a day. He'll want to use your yacht, and I don't want this thing smelling like fish. That's what it said on 'Ask Jeeves.'"
let fillerImages = [ image1, image2]



let projectInfo = {
    cianmoore : {
        title: 'Cian Moore',
        desc: fillerText,
        imgs: fillerImages,
        nextProject: 'loveisabella'
    },
    loveisabella: {
        title: 'Love Isabela',
        desc: fillerText,
        imgs: fillerImages,
        nextProject: 'riddlefamilyFoundation'
    },
    riddlefamilyFoundation : {
        title: 'Riddle Family Foundation',
        desc: fillerText,
        imgs: fillerImages,
        nextProject: 'twothumbsup'
    },
    twothumbsup : {
        title: 'Two Thumbs Up',
        desc: fillerText,
        imgs: fillerImages,
        nextProject: 'createsafebeta'
    },
    createsafebeta : {
        title : 'CreateSafe Beta',
        desc: fillerText,
        imgs: fillerImages,
        nextProject: 'cianmoore'
    }


}

export default projectInfo;