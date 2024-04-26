// 默认显示HOME版块
document.addEventListener('DOMContentLoaded', function() {
    showSection('home'); // 确保网页加载时默认显示 HOME 版块
});




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
        maincontent.classList.remove('expanded');
    } else {
        sidebar.classList.add('collapsed');
        maincontent.classList.add('expanded');
    }
}

 
/**
 * 显示指定的部分
 * show the specified section of content
 * @param {*} sectionId 
 */
function showSection(sectionId) {
    // 隐藏当前活动的板块
    var currentActiveSection = document.querySelector('.Main-section.active');
    if (currentActiveSection) {
        currentActiveSection.classList.add('shownhidden');
        currentActiveSection.classList.remove('active');
    }

    // 显示指定的板块
    var section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('shownhidden');
        section.classList.add('active');
    }

    // 更新导航链接的激活状态
    updateNavLinks(sectionId);
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
            link.classList.add('active-section');
        } else {
            link.classList.remove('active');
            link.classList.remove('active-section');
        }
    });
    var navIcons = document.querySelectorAll('.icons-in-navigator');
    navIcons.forEach(function(icon) {
        if (icon.nextElementSibling.getAttribute('href') === '#' + activeSectionId) {
            icon.classList.add('active-section-icon');
        } else {
            icon.classList.remove('active-section-icon');
        }
    });
}

document.getElementById('resumedownload').addEventListener('click', function() {
    window.open( 'assets/ResumeOfBohaoSu.pdf', '_blank'); 
  });

