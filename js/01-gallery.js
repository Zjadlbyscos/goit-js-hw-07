import { galleryItems } from "./gallery-items.js";
const gallery = document.querySelector(".gallery");

// This function collects the gallery items (liItem) into a variable (picArray) and then appends to the html file (DOM)
// <<<
let picArray = [];
galleryItems.forEach((galleryItem) => {
  const liItem = document.createElement("li");
  liItem.classList.add("gallery__item");
  const innerString = `<a class="gallery__link" href="${galleryItem.original}">
<img
  class="gallery__image"
  src="${galleryItem.preview}"
  data-source="${galleryItem.original}"
  alt="${galleryItem.description}"
/>
</a>`;
  liItem.insertAdjacentHTML("beforeend", innerString);

  picArray.push(liItem);
});

gallery.append(...picArray);

gallery.addEventListener("click", clickGallery);
function clickGallery(e) {
  e.preventDefault();
  if (!e.target.dataset.source) {
    return;
  }

  const instance = basicLightbox.create(
    `
    <img src="${e.target.dataset.source}" width="800" height="600">
  `,
    {
      onClose: () => {
        document.removeEventListener("keydown", closeListener);
      },
    }
  );

  const closeListener = (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  };

  instance.show();
  document.addEventListener("keydown", closeListener);
}
console.log(galleryItems);





///>>>
//Alternative: of adding to html file.
///<<<
// const galleryImages = galleryItems.map(
//     (image) =>
//       `<div class = "gallery__item">
//         <a class = "gallery__link" href = "${image.original}">
//         <img class = "gallery__image" src = "${image.preview}" data-source = "${image.original}"  alt = "${image.description}" />
//         </a>
//         </div>`
//   )
//   .join("");
// gallery.insertAdjacentHTML("beforeend", galleryImages);
//>>>


//**
// if (!e.target.dataset.source) //  if (!(url && description)) return;
// */
//Jeśli warunek nie jest spełniony (czyli istnieje data-source), to funkcja będzie kontynuowana dalej. Jeśli jednak warunek jest spełniony (brak data-source), funkcja zostanie natychmiast zakończona, a żaden dalszy kod wewnątrz tej funkcji nie zostanie wykonany. To pomaga zoptymalizować wykonywanie kodu, unikając zbędnych operacji lub błędów, gdy warunki nie są spełnione.

//<< Alternative with callback to escape - close  instance window
// /function onClickGallery(e) {
//     e.preventDefault();

//     const url = e.target.dataset.source;
//     const description = e.target.alt;

//     if (!(url && description)) return;

//     instance = basicLightbox.create(genBigImg({ url, description }), {
//       onClose: () => {
//         gallery.removeEventListener("keydown", onKeyDownEsc);
//       },
//     });
//     instance.show();
//     gallery.addEventListener("keydown", onKeyDownEsc);
//   }

//   const onKeyDownEsc = (e) => {
//     if (e.key === "Escape" || e.keyCode === [wpisz coś]) {
//       instance.close();
//     }
//     console.log(e.key);
//   };
///>>>/
