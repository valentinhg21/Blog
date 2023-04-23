const test = (req, res) => {
    return res.status(200).json({
        mensaje: "test"
    });
}

module.exports = {
    test
}