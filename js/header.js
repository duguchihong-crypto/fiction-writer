/* =================================
   顶部导航栏功能
================================= */

export function initHeader() {

    const createButton =
        document.getElementById("wm-create-btn");

    const settingsButton =
        document.getElementById("wm-settings-btn");


    createButton.addEventListener("click", () => {

        document.dispatchEvent(
            new CustomEvent("wm:create")
        );

    });


    settingsButton.addEventListener("click", () => {

        document.dispatchEvent(
            new CustomEvent("wm:settings")
        );

    });

}
