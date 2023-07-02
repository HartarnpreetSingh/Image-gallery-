window.addEventListener('load', function() {
    const thumbnails = [
      'flowers-pink-small.jpg',
      'flowers-purple-small.jpg',
      'flowers-red-small.jpg',
      'flowers-white-small.jpg',
      'flowers-yellow-small.jpg'
    ];
  
    const thumbnailList = document.getElementById('thumbnail-list');
    const featuredImage = document.getElementById('featured-image');
    const imageTitle = document.getElementById('image-title');
  
    thumbnails.forEach(function(thumbnail) {
      const li = document.createElement('li');
      const img = document.createElement('img');
      img.src = 'images/' + thumbnail;
      img.alt = '';
      img.width = 240;
      img.height = 160;
  
      img.addEventListener('click', function() {
        featuredImage.src = 'images/' + thumbnail.replace('-small', '-large');
        imageTitle.textContent = getImageTitle(thumbnail);
      });
  
      li.appendChild(img);
      thumbnailList.appendChild(li);
    });
  
    function getImageTitle(filename) {
      const titleMap = {
        'flowers-pink-small.jpg': 'Pink Flowers',
        'flowers-purple-small.jpg': 'Purple Flowers',
        'flowers-red-small.jpg': 'Red Flowers',
        'flowers-white-small.jpg': 'White Flowers',
        'flowers-yellow-small.jpg': 'Yellow Flowers'
      };
  
      return titleMap[filename] || '';
    }
  });
      