
function setupMenubarTab(tab) {
    console.log(tab);
}

let currentActiveMenubar;
let currentActiveMenubarTabs = [];

function closeCurrentMenubarTabs() {
    currentActiveMenubarTabs.forEach((tab) => {
        tab.removeAttribute("active");
    });
    currentActiveMenubarTabs = [];
}

function openMenubarTab(tab) {
    tab.setAttribute("active", "true");

}

function init_menubar() {
    let menubars = document.getElementsByClassName("menubar");
    for (let i = 0; i < menubars.length; i++) {
        let menubar = menubars[i];

        menubar.childNodes.forEach((node) => {
            if (node.classList && node.classList.contains("menubar-tab")) {
                setupMenubarTab(node);
            }
        });
    }

    window.addEventListener("mousedown", (event) => {
        let menubar = closestParentClassName(event.target, "menubar");
        console.log(menubar);
        currentActiveMenubar = menubar;
        if (!menubar) {
            // If not clicked on menubar then close active one
            closeCurrentMenubarTabs();
            return;
        }

        let tab = closestParentClassName(event.target, "menubar-tab");
        if (tab) {
            openMenubarTab(tab);
        }
    });
}
