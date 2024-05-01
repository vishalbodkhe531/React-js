function customeRender(reactElement, container) {
  // const domeElement = document.createElement(reactElement.type)
  // domeElement.innerHTML = reactElement.children
  // domeElement.setAttribute('href', reactElement.props.href)
  // domeElement.setAttribute('target', reactElement.props.target)

  // container.appendChild(domeElement);

  //                        Or 2nd Methode

  const domElement = document.createElement(reactElement.type);

  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === 'children') continue
    domElement.setAttribute(prop,reactElement.props[prop])
  }
  container.appendChild(domElement);
}


//custome render methode Syntax
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const mainContainer = document.querySelector("#root");

customeRender(reactElement, mainContainer);

// Basics Staps

/* 
1] Access HTML element :  #root element 

2] then define react element's : we have use Obj reactElement

3] then defind customeRender function for render the code : customeRender()

4] then last in customeRender pass argument : customeRender(reactElement, mainContainer);

5] reactElement render methode put in mainContainer
*/