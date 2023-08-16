const deleteButton = document.querySelector("#delete-button");

const deleteBtnHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    // console.log(id)

    const response = await fetch(`/api/dashboard/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to delete profile.");
    }
  }
};

document
  .querySelector(".profiles-list")
  .addEventListener("click", deleteBtnHandler);
