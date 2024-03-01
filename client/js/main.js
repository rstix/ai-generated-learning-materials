function onSubmit(e) {
  e.preventDefault();

//   document.querySelector(".msg").textContent = "";
//   document.querySelector("#image").src = "";

//   const prompt = document.querySelector("#prompt").value;
//   const size = document.querySelector("#size").value;

//   if (prompt === "") {
//     alert("Please add some text");
//     return;
//   }

  generateImageRequest();
}

async function generateImageRequest() {
  try {
    // showSpinner();

    const response = await fetch("http://localhost:5001/question", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    //   body: JSON.stringify({
    //     prompt,
    //     size,
    //   }),
    });

    if (!response.ok) {
    //   removeSpinner();
      throw new Error("That image could not be generated");
    }

    const data = await response.json();
    console.log("data:",data);

    const text = data.data.text;

    document.querySelector("#image").innerHTML = text;

    // removeSpinner();
  } catch (error) {
	console.log(error)
  }
}

// function showSpinner() {
//   document.querySelector(".spinner").classList.add("show");
// }

// function removeSpinner() {
//   document.querySelector(".spinner").classList.remove("show");
// }

document.querySelector("#image-form").addEventListener("submit", onSubmit);
