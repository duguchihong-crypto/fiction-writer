/* =================================
文墨首页启动程序
负责加载组件、初始化独立模块
================================= */

// 首页模块
import { initHeader } from “./header.js”;
import { initShelf } from “./shelf.js”;
import { initFooter } from “./footer.js”;

// 新建弹窗模块
import { initCreateModal } from “../create/js/modal.js”;

/* =================================
HTML 组件加载
================================= */

async function loadComponent(containerId, filePath) {

const container = document.getElementById(containerId);
// 检查容器是否存在
if (!container) {
    throw new Error("找不到页面容器：" + containerId);
}
// 加载 HTML
const response = await fetch(filePath);
if (!response.ok) {
    throw new Error(
        "组件加载失败：" + filePath +
        "，状态码：" + response.status
    );
}
const html = await response.text();
// 插入 HTML
container.innerHTML = html;
return container;

}

/* =================================
首页初始化
================================= */

async function initApp() {

try {
    console.log("文墨首页正在启动……");
    // 第一步：加载首页 HTML 组件
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
    // 第二步：初始化首页独立模块
    initHeader();
    initShelf();
    initFooter();
    // 第三步：初始化新建弹窗
    initCreateModal();
    // 启动成功
    console.log("文墨首页启动成功！");
    console.log("新建弹窗模块已启动。");
} catch (error) {
    // 输出错误信息
    console.error("文墨首页启动失败：", error);
    // 显示错误提示
    document.body.innerHTML = `
        <div style="
            padding: 30px 20px;
            text-align: center;
            color: #9f3028;
            font-family: sans-serif;
        ">
            <h3>文墨首页加载失败</h3>
            <p>请检查文件路径或模块代码。</p>
            <p style="font-size: 13px; color: #777;">
                ${error.message}
            </p>
        </div>
    `;
}

}

/* =================================
启动文墨
================================= */

initApp();
