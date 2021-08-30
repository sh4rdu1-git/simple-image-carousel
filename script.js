// image data stored in array
const images = [
  {
    _id: 1,
    imgSrc: "assets/images/plane1.jpg",
    imgAlt: "white plane flying in the sky",
  },
  {
    _id: 2,
    imgSrc: "assets/images/plane2.jpg",
    imgAlt: "white plane with blue stripe taking off",
  },
  {
    _id: 3,
    imgSrc: "assets/images/plane3.jpg",
    imgAlt: "white plane with blue stripe taking off",
  },
  {
    _id: 4,
    imgSrc: "assets/images/plane4.jpg",
    imgAlt: "white plane with blue stripe taking off",
  },
  {
    _id: 5,
    imgSrc: "assets/images/plane5.jpg",
    imgAlt: "white plane with blue stripe taking off",
  },
];

const showCarouselDots = () => {
  // Show dots below the displayed image.
  // The number of dots is equal to the number
  // Of images in the array
  const dotsDiv = document.getElementsByClassName("dots")[0];
  for (let i = 0; i < images.length; i++) {
    let dot = document.createElement("span");
    dot.className = "dot";
    dot.innerHTML = `dot${i}`;
    dotsDiv.appendChild(dot);
  }
};

const getCurrentImageIndex = () => {
  // Get the index of the currently displayed image
  const currentImageSrc = document
    .getElementById("currentImage")
    .getAttribute("src");
  for (let i = 0; i < images.length; i++) {
    if (images[i].imgSrc === currentImageSrc) {
      // if the image source matches, return index
      return i;
    }
  }
  // After running For loop, if we still
  // did not find the image index then
  // show an error in console.
  console.error("Image not found");
};

const setCurrentImageDot = (index) => {
  // Set the marker dot as "active" for the currently displayed image
  let dots = document
    .getElementsByClassName("dots")[0]
    .getElementsByTagName("span");
  for (let i = 0; i < images.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[index].className += " active";
};

const setCurrentImage = (imageIndex = 0) => {
  // Set the image to be displayed in carousel
  let img = document.getElementById("currentImage");
  img.setAttribute("src", images[imageIndex].imgSrc);
  img.setAttribute("alt", images[imageIndex].imgAlt);

  // Set the marker dot for current image index
  setCurrentImageDot(imageIndex);
};

const navigateImages = (direction) => {
  // Navigate images in forward (next) and backward (prev)
  // directions
  let imageIndex = getCurrentImageIndex();
  if (direction === "prev") {
    if (imageIndex === 0) {
      imageIndex = images.length - 1;
    } else {
      imageIndex -= 1;
    }
  } else if (direction === "next") {
    if (imageIndex === images.length - 1) {
      imageIndex = 0;
    } else {
      imageIndex += 1;
    }
  }
  // console.log(imageIndex, direction);
  setCurrentImage(imageIndex);
};

window.onload = () => {
  showCarouselDots();
  setCurrentImage();
}
