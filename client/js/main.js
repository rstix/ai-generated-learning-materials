const removeStylesFromElements = (elements) => {
  elements.forEach((e) => e.removeAttribute('style'));
};

// btns[0].style.background = '#e5e5e5';

const btns = document.querySelectorAll('#btns a');

btns.forEach((e) => {
  if (location.pathname.includes(e.getAttribute('href'))) {
    console.log(location.pathname);
    e.style.background = '#e5e5e5';
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

if (accordionBtns.length) {
  setTimeout(() => {
    openAccordion(accordionBtns[0]);
  }, 800);

  accordionBtns.forEach((accordion) => {
    accordion.addEventListener('click', () => openAccordion(accordion));
  });
}

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

//  function enableDragSort(listClass) {
// 	const sortableLists = document.getElementsByClassName(listClass);
// 	Array.prototype.map.call(sortableLists, (list) => {enableDragList(list)});
//   }

//   function enableDragList(list) {
// 	Array.prototype.map.call(list.children, (item) => {enableDragItem(item)});
//   }

//   function enableDragItem(item) {
// 	item.setAttribute('draggable', true)
// 	item.ondrag = handleDrag;
// 	item.ondragend = handleDrop;
//   }

//   function handleDrag(item) {
// 	const selectedItem = item.target,
// 		  list = selectedItem.parentNode,
// 		  x = event.clientX,
// 		  y = event.clientY;

// 	selectedItem.classList.add('drag-sort-active');
// 	let swapItem = document.elementFromPoint(x, y) === null ? selectedItem : document.elementFromPoint(x, y);

// 	if (list === swapItem.parentNode) {
// 	  swapItem = swapItem !== selectedItem.nextSibling ? swapItem : swapItem.nextSibling;
// 	  list.insertBefore(selectedItem, swapItem);
// 	}
//   }

//   function handleDrop(item) {
// 	item.target.classList.remove('drag-sort-active');
//   }

//   (()=> {enableDragSort('drag-sort-enable')})();
