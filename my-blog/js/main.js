// 获取当前页面文件名
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

// 所有导航链接
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
        link.classList.add('active');
    }
});
fetch('/footers.html')
			.then(response => response.text())
			.then(data =>{
				document.getElementById('footers-placeholder').innerHTML = data;
			})
			.catch(error => console.log('页脚加载失败，原因：’,error));