import image from '../../img/image.png'

export const model = [
    {
        type: 'title', value: 'Site constructor using vanilla JS', options: {
            tag: 'h2',
            styles: {
                padding: '1.5rem',
                'text-align': 'center',
                color: '#fff',
                background: 'linear-gradient(to right, #ff0099, #493240)'
            }
        }
    },
    { type: 'text', value: 'Here is some text' },
    {
        type: 'columns', value: [
            '11111111111',
            '22222222222',
            '33333333333'
        ]
    },
    { type: 'image', value: image }
]