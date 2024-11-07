document.addEventListener("DOMContentLoaded", () => {
    const elements = {
        addTaskBtn: document.getElementById("addTaskBtn"),
        inputField: document.getElementById("input-Field"),
        titleInput: document.getElementById("title"),
        descriptionInput: document.getElementById("description"),
        submitBtn: document.getElementById("submitBtn"),
        taskContainer: document.getElementById("task-Container"),
        inProgressContainer: document.getElementById("in-progress").querySelector('.card'),
        completeContainer: document.getElementById("complete").querySelector('.card'),
        inProgressBtn: document.getElementById("in-progress-btn"),
        taskBtn: document.getElementById("task-btn"),
        completeBtn2: document.getElementById("complete-btn"),
    };

    elements.addTaskBtn.addEventListener("click", () => {
        elements.inputField.style.display = "block";
    });

    elements.submitBtn.addEventListener("click", () => {
        const title = elements.titleInput.value.trim();
        const description = elements.descriptionInput.value.trim();

        if (title) {
            createTaskCard(title, description);
            resetInputFields();
        }
    });

    elements.inProgressBtn.addEventListener("click", () => {
        moveTask(elements.taskContainer, elements.inProgressContainer);
    });

    elements.taskBtn.addEventListener("click", () => {
        moveTask(elements.inProgressContainer, elements.taskContainer);
    });

    elements.completeBtn2.addEventListener("click", () => {
        moveTask(elements.inProgressContainer, elements.completeContainer);
    });

    elements.doneBtn.addEventListener("click", () => {
        showCompleteMessage();
    });

    function createTaskCard(title, description) {
        const taskCard = document.createElement("div");
        taskCard.classList.add("task-card");
        taskCard.innerHTML = `<h4>${title}</h4><p>${description}</p>`;
        elements.taskContainer.appendChild(taskCard);
    }

    function resetInputFields() {
        elements.titleInput.value = "";
        elements.descriptionInput.value = "";
        elements.inputField.style.display = "none";
    }

    function moveTask(fromContainer, toContainer) {
        const taskCards = fromContainer.children;
        if (taskCards.length > 0) {
            const taskToMove = taskCards[0];
            fromContainer.removeChild(taskToMove);
            toContainer.appendChild(taskToMove);
        }
    }
});
