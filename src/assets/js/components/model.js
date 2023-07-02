import image from '../../img/image.png'
import { TitleBlock, TextBlock, ColumnsBlock, ImageBlock } from '../classes/block'

export const model = [
    new TitleBlock('Site constructor using vanilla JS', {
        tag: 'h2',
        styles: {
            padding: '1.5rem',
            'text-align': 'center',
            color: '#fff',
            background: 'linear-gradient(to right, #ff0099, #493240)'
        }
    }),
    new TextBlock('Here is some text'),
    new ColumnsBlock([
        '11111111111',
        '22222222222',
        '33333333333'
    ]),
    new ImageBlock(image, {
        alt: 'It is a simple image', imageStyles: {
            width: '500px',
            height: 'auto',
            margin: '50px auto 0'
        }
    })
]