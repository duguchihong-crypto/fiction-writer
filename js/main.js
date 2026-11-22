/* =================================
文墨首页启动程序
================================= */

import { initHeader } from “./header.js”;

import { initShelf } from “./shelf.js”;

import { initFooter } from “./footer.js”;

// 新建弹窗模块
import { initCreateModal } from “../create/js/modal.js”;

/* 加载 HTML 组件 */

async function loadComponent(containerId, filePath) {

const container = document.getElementById(containerId);
const response = await fetch(filePath);
if (!response.ok) {
    throw new Error("组件加载失败：" + filePath);
}
container.innerHTML = await response.text();

}

/* 初始化首页 */

async function initApp() {

try {
    await Promise.all([
        loadComponent(
            "header-container",
            "components/header.html"
        ),
        loadComponent(
            "shelf-container",
            "components/shelf.html"
        ),
        loadComponent(
            "footer-container",
            "components/footer.html"
        )
    ]);
    /* 启动各个独立模块 */
    initHeader();
    initShelf();
    initFooter();
    // 启动新建弹窗
    initCreateModal();
} catch (error) {
    console.error(error);
    document.body.innerHTML =
        "<p style='padding:20px;text-align:center'>首页加载失败，请检查文件路径。</p>";
}

}

initApp();
alert("新建弹窗模块已启动");
