document.getElementById("searchBtn").addEventListener("click", () => {
    const weaponName = document.getElementById("weaponSearch").value.trim();
    const weaponType = document.getElementById("weaponType").value;

    if (!weaponName) {
        alert("Please enter a weapon name.");
        return;
    }

    const apiUrl = `https://genshinlist.com/developer-api/weapons?name=${weaponName}&type=${weaponType}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch weapon data");
            }
            return response.json();
        })
        .then(data => {
            displayResults(data);
        })
        .catch(error => {
            console.error("Error:", error);
            alert("An error occurred while fetching data.");
        });
});

function displayResults(weapons) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    if (!weapons || weapons.length === 0) {
        resultDiv.innerHTML = "<p>No results found.</p>";
        return;
    }

    weapons.forEach(weapon => {
        const weaponItem = document.createElement("div");
        weaponItem.className = "weapon-item";

        const weaponImg = document.createElement("img");
        weaponImg.src = weapon.image || "placeholder.png"; // Add a default placeholder image if missing
        weaponImg.alt = weapon.name;

        const weaponName = document.createElement("h3");
        weaponName.textContent = weapon.name;

        const weaponType = document.createElement("p");
        weaponType.textContent = `Type: ${weapon.type}`;

        const weaponDesc = document.createElement("p");
        weaponDesc.textContent = weapon.description;

        weaponItem.appendChild(weaponImg);
        weaponItem.appendChild(weaponName);
        weaponItem.appendChild(weaponType);
        weaponItem.appendChild(weaponDesc);

        resultDiv.appendChild(weaponItem);
    });
}
