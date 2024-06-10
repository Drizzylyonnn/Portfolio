document.addEventListener('DOMContentLoaded', function () {
    const itemsPerPage = 5; // Number of items per page
    const items = []; // Your list of items
  
    // Function to display items for a specific page
    function displayItems(pageNumber) {
      const startIndex = (pageNumber - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const itemsToDisplay = items.slice(startIndex, endIndex);
      const page = document.getElementById('page');
      page.innerHTML = ''; // Clear previous items
  
      // Display items
      itemsToDisplay.forEach(function (item) {
        const itemElement = document.createElement('div');
        itemElement.textContent = item;
        page.appendChild(itemElement);
      });
    }
  
    // Function to generate pagination buttons
    function generatePaginationButtons() {
      const totalItems = items.length;
      const totalPages = Math.ceil(totalItems / itemsPerPage);
      const paginationButtonsContainer = document.getElementById('page-btn');
      paginationButtonsContainer.innerHTML = ''; // Clear previous buttons
  
      for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.classList.add('page-btn');
        button.addEventListener('click', function () {
          displayItems(i);
        });
        paginationButtonsContainer.appendChild(button);
      }
    }
  
    // Example: Populate items with dummy data
    for (let i = 1; i <= 20; i++) {
      items.push(Item ${i});
    }
  
    // Initial display
    displayItems(1);
    generatePaginationButtons();
  });