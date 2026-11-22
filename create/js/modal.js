/* ==============================
   文墨 · 新建弹窗模块
   ============================== */

export function initCreateModal() {

    // 创建弹窗
    const overlay = document.createElement("div");

    overlay.className = "wm-create-overlay";
    overlay.hidden = true;

    overlay.innerHTML = `
        <div class="wm-create-modal">

            <h2 class="wm-create-title">
                新建内容
            </h2>

            <button
                class="wm-create-option"
                id="wm-create-book"
                type="button"
            >
                <span class="wm-create-icon">📖</span>
                <span>新建书籍</span>
            </button>

            <button
                class="wm-create-option"
                id="wm-create-group"
                type="button"
            >
                <span class="wm-create-icon">📚</span>
                <span>新建分组</span>
            </button>

            <button
                class="wm-create-cancel"
                id="wm-create-cancel"
                type="button"
            >
                取消
            </button>

        </div>
    `;

    document.body.appendChild(overlay);

    const bookButton = overlay.querySelector("#wm-create-book");
    const groupButton = overlay.querySelector("#wm-create-group");
    const cancelButton = overlay.querySelector("#wm-create-cancel");

    // 打开弹窗
    function openModal() {
        overlay.hidden = false;
    }

    // 关闭弹窗
    function closeModal() {
        overlay.hidden = true;
    }

    // 点击顶部新建按钮
    document.addEventListener("wm:create", openModal);

    // 点击取消
    cancelButton.addEventListener("click", closeModal);

    // 点击弹窗外部
    overlay.addEventListener("click", function(event) {
        if (event.target === overlay) {
            closeModal();
        }
    });

    // 点击新建书籍
    bookButton.addEventListener("click", function() {
        closeModal();

        document.dispatchEvent(
            new CustomEvent("wm:create-book")
        );
    });

    // 点击新建分组
    groupButton.addEventListener("click", function() {
        closeModal();

        document.dispatchEvent(
            new CustomEvent("wm:create-group")
        );
    });

    // 按下 ESC 关闭
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            closeModal();
        }
    });
}
