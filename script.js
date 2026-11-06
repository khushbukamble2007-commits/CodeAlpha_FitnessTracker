
let activities = [];
const dailyGoal = 60;

function addActivity() {
    const activity = document.getElementById("activity").value;
    const duration = Number(
        document.getElementById("duration").value
    );

    if (!Number.isInteger(duration) || duration <= 0) {
        alert("Please enter a valid duration.");
        return;
    }

    activities.push({
        name: activity,
        duration: duration
    });

    document.getElementById("duration").value = "";

    displayActivities();
}

function displayActivities() {
    const list = document.getElementById("activityList");
    list.innerHTML = "";

    let total = 0;

    activities.forEach((item, index) => {
        total += item.duration;

        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent =
            item.name + " - " + item.duration + " minutes";

        const button = document.createElement("button");
        button.textContent = "Delete";
        button.className = "delete-btn";
        button.onclick = () => deleteActivity(index);

        li.appendChild(span);
        li.appendChild(button);
        list.appendChild(li);
    });

    document.getElementById("total").textContent =
        total + " Minutes";

    document.getElementById("progress").value =
        Math.min(total, dailyGoal);

    document.getElementById("goalMessage").textContent =
        total >= dailyGoal
        ? "Daily goal completed! Great job!"
        : (dailyGoal - total) + " minutes left to reach your goal.";
}

function deleteActivity(index) {
    activities.splice(index, 1);
    displayActivities();
}
