/* =================================
   底部导航栏功能
================================= */

export function initFooter() {

    const shelfButton =
        document.getElementById("wm-nav-shelf");

    const toolsButton =
        document.getElementById("wm-nav-tools");


    function navigate(page) {

        const isShelf = page === "shelf";

        shelfButton.classList.toggle("active", isShelf);

        toolsButton.classList.toggle("active", !isShelf);


        document.dispatchEvent(

            new CustomEvent("wm:navigate", {

                detail: {
                    page: page
                }

            })

        );

    }


    shelfButton.addEventListener("click", () => {

        navigate("shelf");

    });


    toolsButton.addEventListener("click", () => {

        navigate("tools");

    });

}
