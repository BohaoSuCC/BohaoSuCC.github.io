// 定义侧边栏收缩函数 Define the function of collapsing sidebar
// function SidebarCollapse() {
//     var sidebar = document.getElementById('sidebar');
//         if (sidebar.classList.contains('collapsed')) {
//             sidebar.classList.remove('collapsed');
//         } else {
//             sidebar.classList.add('collapsed');
//         }
//     }


/**
 * 定义侧边栏收缩函数
 * Define the function of collapsing sidebar
 */
function SidebarCollapse() {
    // 获取侧边栏和主内容区的元素
    // get the elements of sidebar and main content area
    var sidebar = document.getElementById('sidebar');
    var maincontent = document.getElementById('main-content');

    if (sidebar.classList.contains('collapsed')) {
        sidebar.classList.remove('collapsed');
        maincontent.classList.remove('expanded'); // 移除主内容区的扩展样式
    } else {
        sidebar.classList.add('collapsed');
        maincontent.classList.add('expanded'); // 添加主内容区的扩展样式
    }
}



/**
 * 显示指定的部分
 * show the specified section of content
 * @param {*} sectionId 
 */
function showSection(sectionId) {
    // 隐藏所有部分
    hideAllSections();

    // 显示指定的部分
    var section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('shownhidden');
    }

    // 更新导航链接的激活状态
    updateNavLinks(sectionId);
}
/**
 * 隐藏所有部分
 * hide all sections of content
 */
function hideAllSections() {
    var sections = document.querySelectorAll('.Main-section');
    sections.forEach(function(section) {
        section.classList.add('shownhidden');
    });
}
/**
 * 更新导航链接的激活状态
 * update the active status of navigation links
 * @param {*} activeSectionId 
 */
function updateNavLinks(activeSectionId) {
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        if (link.getAttribute('href') === '#' + activeSectionId) {
            link.classList.add('active');
            link.classList.add('active-section')
        } else {
            link.classList.remove('active');
            link.classList.remove('active-section');
        }
    });
    var navIcons = document.querySelectorAll('.icons-in-navigator');
    navIcons.forEach(function(icon) {
        if (icon.nextElementSibling.getAttribute('href') === '#' + activeSectionId) {
            icon.classList.add('active-section-icon')
        } else {
            icon.classList.remove('active-section-icon');
        }
    });
}
