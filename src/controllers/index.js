class IndexController {
    getIndex(req, res) {
        res.send('Welcome to the Express App!');
    }
}

module.exports = IndexController;