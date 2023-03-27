
async function requestUserShoplists() {
    try {
        const response = await fetch(`/api/shoplists/auth`);
        var result = await response.json();
        return { successful: response.status == 200,
                 unauthenticated: response.status == 401,
                 shoplists: result};
    } catch (err) {
        // Treat 500 errors here
        console.log(err);
        return {err: err};
    }
}


async function requestUserShoplist(shlId) {
    try {
        const response = await fetch(`/api/shoplists/auth/${shlId}`);
        var result = await response.json();
        return { successful: response.status == 200,
                 unauthenticated: response.status == 401,
                 shoplist: result};
    } catch (err) {
        // Treat 500 errors here
        console.log(err);
        return {err: err};
    }
}

