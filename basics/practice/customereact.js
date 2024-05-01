function customeRender(reactElement,container) {
    const docElement = document.createElement(reactElement.type);
    
    docElement.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {
      if (prop === "children") continue;

      docElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(docElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target : '_blank'
    },
    children : 'Click me to visit google'
}

const mainContainer = document.querySelector("#root");

customeRender(reactElement, mainContainer);