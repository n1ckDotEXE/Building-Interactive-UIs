window.addEventListener('DOMContentLoaded', function() {

$.get("https://dog.ceo/api/breeds/list")
  .then(function(data) {
    const breeds = data.message;

    breeds.forEach(function(breed) {
      const option = document.createElement('option');
      option.setAttribute('value', breed) {
        option.textContent = breed;
        select.appendChild(option);
        // const select = document.getElementById('dog-select'); <-- Another Alternative
      };


    });
  });

});