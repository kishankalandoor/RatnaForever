window.onload = function() {
  fetch('sprits.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('content').innerHTML = data;
      setupSearch();
    });

  function setupSearch() {
    const searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', function() {
      let input = document.getElementById('searchInput').value.toLowerCase();
      let menuItems = document.querySelectorAll('.menu-item');

      menuItems.forEach(item => {
        let itemName = item.querySelector('h3').innerText.toLowerCase();
        let itemDescription = item.querySelector('p').innerText.toLowerCase();

        if (itemName.includes(input) || itemDescription.includes(input)) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }
};
