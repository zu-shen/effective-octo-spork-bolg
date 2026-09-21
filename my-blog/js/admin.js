// ============================================
// 管理员认证 & 数据管理（本地存储）
// ============================================

const ADMIN_PASSWORD = '123456789'; // ⚠️ 请修改成你自己的密码

// ---------- 认证 ----------
function checkAuth() {
    const isAdmin = sessionStorage.getItem('sunbird_admin') === 'true';
    if (!isAdmin) {
        const pwd = prompt('🔐 请输入管理员密码：');
        if (pwd === ADMIN_PASSWORD) {
            sessionStorage.setItem('sunbird_admin', 'true');
            return true;
        } else {
            if (pwd !== null) alert('密码错误，请重试');
            return false;
        }
    }
    return true;
}

function logout() {
    sessionStorage.removeItem('sunbird_admin');
    location.reload();
}

function isAdmin() {
    return sessionStorage.getItem('sunbird_admin') === 'true';
}

// ---------- 数据读写 ----------
function getStorageData(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}

function setStorageData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// ---------- 通用渲染辅助 ----------
function getDefaultNotes() {
    return [
        { id: Date.now() + 1, title: '黄昏的飞行', date: '2026-08-15', content: '傍晚时分，窗外的光线开始变软。我想起小时候在田野里追着蜻蜓跑的日子，那种毫无目的的快乐，现在很少有了。' },
        { id: Date.now() + 2, title: '读《夜晚的潜水艇》', date: '2026-08-15', content: '陈春成的文字像水底的月光，清澈又有点摇晃。那些关于想象力的故事，让人想重新做一个会做梦的人。' },
        { id: Date.now() + 3, title: '关于坚持这件事', date: '2026-08-15', content: '很多时候，我们以为坚持是靠意志力，其实靠的是习惯和一点点不甘心。慢慢写，慢慢走，总会到某个地方。' }
    ];
}

function getDefaultWorks() {
    return [
        { id: Date.now() + 4, title: '「鸟与树」—— 个人博客设计', date: '2026 · 设计 / 开发', content: '一个以文字为核心的轻量级博客，强调阅读体验和氛围感。用暖色和衬线字体构建出纸页般的质感。' },
        { id: Date.now() + 5, title: '黄昏集 · 短诗三首', date: '2026 · 写作', content: '关于傍晚、落日和那些没说出口的话。三首短诗，记录三个不同时刻的黄昏。' },
        { id: Date.now() + 6, title: '城市散步地图', date: '2026 · 摄影 / 随笔', content: '用脚步丈量熟悉的街道，拍下那些容易被忽略的角落。每一张照片背后，都有一段小小的城市故事。' }
    ];
}

// 初始化数据（如果本地没有数据，写入默认示例）
function initStorage(key, defaultData) {
    if (!localStorage.getItem(key)) {
        setStorageData(key, defaultData);
    }
}