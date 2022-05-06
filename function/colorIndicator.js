//Color indicator function for warning and critical level
const colorIndicator = (className, totalElement) => {
    if (className === "danger") {
        totalElement.classList.add("danger");
        totalElement.classList.remove("warning");
        totalElement.classList.remove("dark");
    } else if (className === "warning") {
        totalElement.classList.add("warning");
        totalElement.classList.remove("danger");
        totalElement.classList.remove("dark");
    } else if (className === "dark") {
        totalElement.classList.add("dark");
        totalElement.classList.remove("danger");
        totalElement.classList.remove("warning");
    }
} 