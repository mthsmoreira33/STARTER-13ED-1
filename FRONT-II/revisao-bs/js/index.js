const lista = [
    {
        id: 1,
        nome: 'Ana',
        detalhamento: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore non sint nulla incidunt beatae velit sit repudiandae dolores, vitae voluptatibus odio delectus maxime consequatur nesciunt ea assumenda nihil alias ad?'
    },
    {
        id: 2,
        nome: 'Jão',
        detalhamento: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore non sint nulla incidunt beatae velit sit repudiandae dolores, vitae voluptatibus odio delectus maxime consequatur nesciunt ea assumenda nihil alias ad?'
    },
    {
        id: 3,
        nome: 'Pedro',
        detalhamento: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore non sint nulla incidunt beatae velit sit repudiandae dolores, vitae voluptatibus odio delectus maxime consequatur nesciunt ea assumenda nihil alias ad?'
    },
    {
        id: 4,
        nome: 'Lucas',
        detalhamento: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore non sint nulla incidunt beatae velit sit repudiandae dolores, vitae voluptatibus odio delectus maxime consequatur nesciunt ea assumenda nihil alias ad?'
    }
]

const accordionContainer = document.getElementById('meu-accordion')


function addAccordionItem(item) {
    const { id, nome, detalhamento } = item;

    /*
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#text-item-1"
                    aria-expanded="true" aria-controls="text-item-1">
                    Nome #1
                </button>
            </h2>
            <div id="text-item-1" class="accordion-collapse collapse show">
                <div class="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore non sint nulla incidunt beatae velit sit repudiandae dolores, vitae voluptatibus odio delectus maxime consequatur nesciunt ea assumenda nihil alias ad?
                </div>
            </div>
        </div>
    */

        const accordionItem = document.createElement('div')
        accordionItem.classList.add('accordion-item')

        const accordionHeader = document.createElement('h2')
        accordionHeader.classList.add('accordion-header')

        const accordionButton = document.createElement('button')
        accordionButton.classList.add('accordion-button', 'collapsed')
        accordionButton.setAttribute('type', 'button')
        accordionButton.setAttribute('data-bs-toggle', 'collapse')
        accordionButton.setAttribute('data-bs-target', `#text-item-${id}`)
        accordionButton.innerHTML = `${nome} #${id}`

        const accordionCollapse = document.createElement('div')
        accordionCollapse.setAttribute('id', `text-item-${id}`)
        accordionCollapse.classList.add("accordion-collapse", "collapse")
        accordionCollapse.setAttribute('data-bs-parent', '#meu-accordion')


        const accordionBody = document.createElement('div')
        accordionBody.classList.add('accordion-body')
        accordionBody.innerHTML = detalhamento

        accordionHeader.appendChild(accordionButton)
        accordionCollapse.appendChild(accordionBody)
        accordionItem.appendChild(accordionHeader)
        accordionItem.appendChild(accordionCollapse)

        accordionContainer.appendChild(accordionItem)

}

lista.forEach((item) => addAccordionItem(item))