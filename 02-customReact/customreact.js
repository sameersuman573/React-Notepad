
// react tries to make tree
function customRender(reactelement,container){

// const domElement = document.createElement(reactelement.type)
// domElement.innerHTML = reactelement.children
// domElement.setAttribute('href', reactelement.props.href)
// domElement.setAttribute('target',reactelement.props.target)

// container.appendChild(domElement)




// loop based same code 


const domElement = document.createElement(reactelement.type)
domElement.innerHTML = reactelement.children
for (const prop in reactelement.props) {
    // if your prop key becomes children then continue
   if (prop ==='children') continue
//    setting all attributes
domElement.setAttribute(prop, reactelement.props[prop])
    
}
container.appendChild(domElement)
}


// with element - react tries to make tree
const reactelement = {
    type: 'a',

    props: {
href: 'https://google.com',
target: '_blank'
    },
    children: 'click me to visit google'
}

const mainContainer = document.querySelector('#root')

// a method which will render that is we inject some elemnts into customrender
customRender(reactelement, mainContainer)