import _ from 'lodash';
function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = "Rachel's Really, Really Good Restuarant";
  
    return element;
  }
  
  document.body.appendChild(component());