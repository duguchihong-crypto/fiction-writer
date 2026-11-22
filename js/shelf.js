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
/* =================================
   书架页面
================================= */
function showShelf() {
    shelfPage.hidden = false;
    emptyState.hidden = false;
    toolsPage.hidden = true;
}
/* =================================
   工具页面
================================= */
function showTools() {
    shelfPage.hidden = false;
    emptyState.hidden = true;
    toolsPage.hidden = false;
}
/* =================================
   页面导航
================================= */
document.addEventListener("wm:navigate", (event) => {
    if (event.detail.page === "shelf") {
        showShelf();
    }
    if (event.detail.page === "tools") {
        showTools();
    }
});
/* =================================
   新建弹窗
================================= */
const createModal =
    document.getElementById("wm-create-modal");
const cancelButton =
    document.getElementById("wm-modal-cancel");
/* 点击顶部新建按钮 */
document.addEventListener("wm:create", () => {
    createModal.hidden = false;
});
/* 点击取消按钮 */
cancelButton.addEventListener("click", () => {
    createModal.hidden = true;
});
/* 点击弹窗外部 */
createModal.addEventListener("click", (event) => {
    if (event.target === createModal) {
        createModal.hidden = true;
    }
});
/* =================================
   设置功能
================================= */
document.addEventListener("wm:settings", () => {
    alert("设置功能将在后续开发。");
});
/* =================================
   初始化
================================= */
showShelf();

}
