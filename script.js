function getRepositories() {
    const username = document.getElementById('username').value.trim();
    const loader = document.getElementById('loader');

  
    loader.style.display = 'block';

    fetch(`https://api.github.com/users/${username}/repos?per_page=10`)
        .then(response => {
          
            loader.style.display = 'none';

            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
        
            localStorage.setItem('repositoriesData', JSON.stringify(data));

           
            window.location.href = 'newpage.html';
        })
        .catch(error => {
            
            loader.style.display = 'none';

            
            console.error('Error fetching repositories:', error);
            alert(`Error fetching repositories. ${error.message}`);
        });
}
