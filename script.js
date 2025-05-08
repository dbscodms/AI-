fetch('nav.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data;

    const path = location.pathname.split("/").pop();
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
      if (link.getAttribute("href") === path) {
        link.classList.add("active");
      }
    });
  });
