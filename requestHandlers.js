
function impares(req, res) {
    for (var i = 1; i < 100; i = i + 2) {
        res.write(i + " ");
    }
    res.end();
}

exports.impares = impares;

