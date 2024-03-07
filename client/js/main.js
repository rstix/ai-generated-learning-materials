const removeStylesFromElements = (elements) => {
  elements.forEach((e) => e.removeAttribute('style'));
};

const btns = document.querySelectorAll('#btns a');

btns.forEach((e) => {
  if (location.pathname.includes(e.getAttribute('href'))) {
    e.style.background = '#fff';
    e.style.fontWeight = '500';
  }
});

const openAccordion = (accordion) => {
  accordion.classList.toggle('is-open');

  let content = accordion.nextElementSibling;

  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + 'px';
  }
};

const accordionBtns = document.querySelectorAll('.accordion');

const closeAccordions = () => accordionBtns.forEach((a) => openAccordion(a));

if (accordionBtns.length) {
  setTimeout(() => {
    openAccordion(accordionBtns[0]);
  }, 800);

  accordionBtns.forEach((accordion) => {
    accordion.addEventListener('click', (e) => {
      if (e.target.classList.contains('print')) return;
      openAccordion(accordion);
    });
  });
}

// const addUser = document.querySelector('.addUser');

// addUser.addEventListener('click', () => {
//
//
// });

const hiddenUser = document.querySelector('#hiddenUser');

const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#addUser');

const closeBtn = document.querySelector('.close');

// Events
if (modalBtn) {
  modalBtn.addEventListener('click', () => openModal(modal));
  closeBtn.addEventListener('click', () => closeModal(modal, hiddenUser));
  window.addEventListener('click', () => outsideClick(modal));
}

const modalBtn2 = document.querySelector('#addClass');
const modal2 = document.querySelector('#my-modal2');
const closeBtn2 = document.querySelector('.close2');
const hiddenClass = document.querySelector('#hiddenClass');

if (modalBtn2) {
  modalBtn2.addEventListener('click', () => openModal(modal2));
  closeBtn2.addEventListener('click', () => closeModal(modal2, hiddenClass));
  window.addEventListener('click', () => outsideClick(modal2));
}

// Open
function openModal(modal) {
  modal.style.display = 'flex';
}

// Close
function closeModal(modal, hiddenUser) {
  modal.style.display = 'none';
  hiddenUser.style.display = 'flex';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    closeModal();
  }
}

const continueBtns = document.querySelectorAll('.continue');

continueBtns.forEach((b) => {
  b.addEventListener('click', () => {
    const lesson = b.closest('.lesson');

    openAccordion(lesson.querySelector('.accordion'));
    b.style.display = 'none';
    openAccordion(lesson.nextElementSibling.querySelector('.accordion'));

    lesson.nextElementSibling.querySelector('.continue').style.display =
      'block';
  });
});

// function onSubmit(e) {
//   e.preventDefault();

//   const overlay = document.querySelector('#overlay');
//   overlay.style.height = 0;

//   const matching = document.querySelector('#matching')
//   const matchingCheckbox = document.querySelector('#matching-checkbox')
//   console.log(matchingCheckbox)
//   if(matchingCheckbox.checked){
// 	matching.style.display = "block"
//   }

// //   document.querySelector(".msg").textContent = "";
// //   document.querySelector("#image").src = "";

// //   const prompt = document.querySelector("#prompt").value;
// //   const size = document.querySelector("#size").value;

// //   if (prompt === "") {
// //     alert("Please add some text");
// //     return;
// //   }

//   generateImageRequest();
// }

// async function generateImageRequest() {
//   try {
//     // showSpinner();

//     const response = await fetch("http://localhost:5001/question", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     //   body: JSON.stringify({
//     //     prompt,
//     //     size,
//     //   }),
//     });

//     if (!response.ok) {
//     //   removeSpinner();
//       throw new Error("That image could not be generated");
//     }

//     const data = await response.json();
//     console.log("data:",data);

//     // const text = data.data.text;

//     // document.querySelector("#image").innerHTML = text;

//     // removeSpinner();
//   } catch (error) {
// 	console.log(error)
//   }
// }

// // function showSpinner() {
// //   document.querySelector(".spinner").classList.add("show");
// // }

// // function removeSpinner() {
// //   document.querySelector(".spinner").classList.remove("show");
// // }

// document.querySelector("#image-form").addEventListener("submit", onSubmit);

// function enableDragSort(listClass) {
//   const sortableLists = document.getElementsByClassName(listClass);
//   Array.prototype.map.call(sortableLists, (list) => {
//     enableDragList(list);
//   });
// }

// function enableDragList(list) {
//   Array.prototype.map.call(list.children, (item) => {
//     enableDragItem(item);
//   });
// }

// function enableDragItem(item) {
//   item.setAttribute('draggable', true);
//   item.ondrag = handleDrag;
//   item.ondragend = handleDrop;
// }

// function handleDrag(item) {
//   const selectedItem = item.target,
//     list = selectedItem.parentNode,
//     x = event.clientX,
//     y = event.clientY;

//   selectedItem.classList.add('drag-sort-active');
//   let swapItem =
//     document.elementFromPoint(x, y) === null
//       ? selectedItem
//       : document.elementFromPoint(x, y);

//   if (list === swapItem.parentNode) {
//     swapItem =
//       swapItem !== selectedItem.nextSibling ? swapItem : swapItem.nextSibling;
//     list.insertBefore(selectedItem, swapItem);
//   }
// }

// function handleDrop(item) {
//   item.target.classList.remove('drag-sort-active');
// }

// (() => {
//   enableDragSort('drag-sort-enable');
// })();
