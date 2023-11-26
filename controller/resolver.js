const resolve = (req, res) => {
    try {
        console.log("inside resolve");
        console.log("hash: ", req.params.hash);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    resolve
}