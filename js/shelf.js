/* =================================
   中间区域功能
================================= */

export function initShelf() {

    const shelfPage =
        document.getElementById("wm-shelf-page");

    const emptyState =
        document.getElementById("wm-empty-state");

    const toolsPage =
        document.getElementById("wm-tools-page");


    function showShelf() {

        shelfPage.hidden = false;

        emptyState.hidden = false;

        toolsPage.hidden = true;

    }


    function showTools() {

        shelfPage.hidden = false;

        emptyState.hidden = true;

        toolsPage.hidden = false;

    }


    document.addEventListener("wm:navigate", (event) => {

        if (event.detail.page === "shelf") {

            showShelf();

        }

        if (event.detail.page === "tools") {

            showTools();

        }

    });


    document.addEventListener("wm:create", () => {

        alert("新建功能将在后续开发。");

    });


    document.addEventListener("wm:settings", () => {

        alert("设置功能将在后续开发。");

    });


    showShelf();

}
