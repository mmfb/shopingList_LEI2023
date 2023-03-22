window.onload = async function () {
    try {
        let result = await checkAuthenticated(true);
        if (result.err) throw result.err;
       // window.user -> Tem o objecto de profile do user (criado no checkAuthenticated)
        document.getElementById("name").textContent = window.user.name;
        // Popular shoplists
    } catch (err) {
        console.log(err);
    }
}