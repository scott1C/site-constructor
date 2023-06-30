// import './assets/scss/style.scss'
const model = [
    { type: 'title', value: 'Hello World from JS' },
    { type: 'text', value: 'Here is some text' },
    {
        type: 'columns', value: [
            '11111111111',
            '22222222222',
            '33333333333'
        ]
    }
]

const $site = document.querySelector('#site')
model.forEach(block => {
    let html = ''
    if (block.type === 'title') {
        html = title(block)
    } else if (block.type === 'text') {
        html = text(block)
    } else if (block.type === 'columns') {
        html = columns(block)
    }

    $site.insertAdjacentHTML('beforeend', html)
})

function title(block) {
    return `
        <div class="row">
            <div class="col-sm">
                <p>${block.value}</p>
            </div>
        </div>
    `
}

function text(block) {
    return `
        <div class="row">
            <div class="col-sm">
                <p>${block.value}</p>
            </div>
        </div>
    `
}

function columns(block) {
    let html = ''
    block.value.forEach(item => {
        html += `
            <div class="col-sm">
                ${item}
            </div>
        `
    })
    return `
        <div class="row">
            ${html}
        </div>
    `
}