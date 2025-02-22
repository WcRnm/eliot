// JS for PicoCSS tabs
// ref: https://erikpoehler.com/2022/12/15/picocss-content-tabs/

const nodeList = document.querySelectorAll('nav[role="tab-control"] label');
const eventListenerCallback = setActiveState.bind(null, nodeList);

nodeList[0].classList.add('active'); /** add active class to first node  */

nodeList.forEach((node) => {
  node.addEventListener("click", eventListenerCallback); /** add click event listener to all nodes */
});

/** the click handler */
function setActiveState(nodeList, event) {
  nodeList.forEach((node) => {
    node.classList.remove("active"); /** remove active class from all nodes */
  });
  event.target.classList.add("active"); /* set active class on current node */
}
