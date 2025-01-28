document.getElementById("ktbtn").addEventListener("change", option);

function option() {
    const ktbtn = document.getElementById("ktbtn");
    const submitBtn = document.getElementById("submitBtn");
    const aanestysform = document.getElementById("aanestysform");
    const deletebtn = document.getElementById("deletebtn");
    const checkboxit = document.querySelectorAll(".delete-checkbox");

    if (ktbtn.value === "kt") {
        submitBtn.classList.add("disabled");
        submitBtn.style.display = "none";
        aanestysform.style.display = "none";
        deletebtn.style.display = "none";
        checkboxit.forEach((checkbox) => {
            checkbox.style.display = "none";
        });
    } else if (ktbtn.value === "yl") {
        submitBtn.classList.remove("disabled");
        submitBtn.style.display = "inline-block";
        aanestysform.style.display = "block";
        deletebtn.style.display = "inline-block";

        checkboxit.forEach((checkbox) => {
            checkbox.style.display = "inline-block";
        });
    }
}

option();

document.getElementById("deletebtn").addEventListener("click", function () {
    const checkboxit = document.querySelectorAll(".delete-check:checked");

    checkboxit.forEach((checkbox) => {
        const aanestysDiv = checkbox.closest(".aanestys");
        if (aanestysDiv) {
            aanestysDiv.remove();
        }
    });
});

submitBtn.onclick = function () {
    const question = document.getElementById("input1").value.trim();
    const option1 = document.getElementById("input2").value.trim();
    const option2 = document.getElementById("input3").value.trim();

    if (!question || !option1 || !option2) {
        return;
    }

    const newAanestys = document.createElement("div");
    newAanestys.classList.add("aanestys");

    const i = Date.now();

    newAanestys.innerHTML = `
    <label class="delete-checkbox">
        <input type="checkbox" class="delete-check" style="accent-color: red;">
    </label>
    <h3>${question}</h3>
    <label class="vaihtoehto1">
        <input id="option1-${i}" type="radio" name="vote-${i}" value="option1" class="rd">
        <p>${option1}</p>
        <progress id="prog1-${i}" value="0" max="100"></progress>
    </label>
    <label class="vaihtoehto2">
        <input id="option2-${i}" type="radio" name="vote-${i}" value="option2" class="rd">
        <p>${option2}</p>
        <progress id="prog2-${i}" value="0" max="100"></progress>
    </label>
    <button class="vote-btn" id="votebtn-${i}">Äänestä</button>
    <p class="abtn" id="aanet-${i}">Äänet "${option1}: 0" Äänet "${option2}: 0"</p>
`;

    document.querySelector(".aanestykset").appendChild(newAanestys);

    option();

    aanestys1(i);

    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
};

function aanestys1(i) {
    const votebtn = document.getElementById(`votebtn-${i}`);
    const prog1 = document.getElementById(`prog1-${i}`);
    const prog2 = document.getElementById(`prog2-${i}`);
    const option1 = document.getElementById(`option1-${i}`);
    const option2 = document.getElementById(`option2-${i}`);
    const results = document.getElementById(`aanet-${i}`);

    let votes1 = 0;
    let votes2 = 0;

    votebtn.addEventListener("click", function () {
        if (option1.checked) {
            votes1++;
        } else if (option2.checked) {
            votes2++;
        } else {
            return;
        }

        const totalvotes = votes1 + votes2;
        const percentage1 = totalvotes > 0 ? (votes1 / totalvotes) * 100 : 0;
        const percentage2 = totalvotes > 0 ? (votes2 / totalvotes) * 100 : 0;

        prog1.value = percentage1;
        prog2.value = percentage2;

        results.textContent = `Äänet "${option1.nextElementSibling.textContent}: ${votes1}" ` + `Äänet "${option2.nextElementSibling.textContent}: ${votes2}"`;
    });
}

function aanestys2() {
    const prog1 = document.getElementById("prog1");
    const prog2 = document.getElementById("prog2");
    const option1 = document.getElementById("option1");
    const option2 = document.getElementById("option2");
    const votebtn = document.getElementById("votebtn");
    const results = document.getElementById("aanet1");

    let votes1 = 0;
    let votes2 = 0;

    votebtn.addEventListener("click", function () {
        if (option1.checked) {
            votes1++;
        } else if (option2.checked) {
            votes2++;
        } else {
            return;
        }

        const totalvotes = votes1 + votes2;
        const percentage1 = totalvotes > 0 ? (votes1 / totalvotes) * 100 : 0;
        const percentage2 = totalvotes > 0 ? (votes2 / totalvotes) * 100 : 0;

        prog1.value = percentage1;
        prog2.value = percentage2;

        results.textContent = `Äänet "${option1.nextElementSibling.textContent}: ${votes1}" ` + `Äänet "${option2.nextElementSibling.textContent}: ${votes2}"`;
    });
}

aanestys2();

