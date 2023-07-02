window.addEventListener('load', function() {
  // Array of thumbnail image filenames
  const thumbnails = [
    'flowers-pink-small.jpg',
    'flowers-purple-small.jpg',
    'flowers-red-small.jpg',
    'flowers-white-small.jpg',
    'flowers-yellow-small.jpg'
  ];

  // Get the thumbnail list, featured image, and image title elements
  const thumbnailList = document.getElementById('thumbnail-list');
  const featuredImage = document.getElementById('featured-image');
  const imageTitle = document.getElementById('image-title');

  // Iterate over each thumbnail filename
  thumbnails.forEach(function(thumbnail) {
    // Create a list item and image element
    const li = document.createElement('li');
    const img = document.createElement('img');
    
    // Set the source, alt text, width, and height of the image
    img.src = 'images/' + thumbnail;
    img.alt = '';
    img.width = 240;
    img.height = 160;

    // Add a click event listener to the image
    img.addEventListener('click', function() {
      // Update the featured image source and image title
      featuredImage.src = 'images/' + thumbnail.replace('-small', '-large');
      imageTitle.textContent = getImageTitle(thumbnail);
    });

    // Append the image to the list item, and the list item to the thumbnail list
    li.appendChild(img);
    thumbnailList.appendChild(li);
  });

  // Function to get the image title based on the filename
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
