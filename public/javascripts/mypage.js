window.onload = async function () {
    try {
        let result = await checkAuthenticated(true);
        if (result.err) throw result.err;
        // window.user -> Tem o objecto de profile do user (criado no checkAuthenticated)
        document.getElementById("name").textContent = window.user.name;
        // Popular shoplists
        let shopRes = await requestUserShoplists();
        if (!shopRes.successful) throw { msg: "Something went wrong" };
        populateShoplists(shopRes.shoplists);
    } catch (err) {
        console.log(err);
    }
}

function populateShoplists(shoplists) {
    let container = document.getElementById("shoplists");
    for (let sl of shoplists) {
        let li = document.createElement("li");
        li.textContent = sl.name;
        container.appendChild(li);
    }
}

async function logout() {
    await requestLogout();
    alert("You have logged out! Going to the initial page.");
    window.location.pathname = "index.html";
}