const con = require('../connect');

const create = (req, res) => {
    const { nome, email, data, feedback } = req.body;
    con.query('INSERT INTO feedbacks (nome, email, data, feedback) VALUES(?,?,?,?)',
        [nome, email, data, feedback], (err, result) => {
            if (err) {
                res.status(400).json({ erro: err });
            } else {
                res.status(201).json(result);
            }
        });
};

const read = (req, res) => {
    con.query('SELECT * FROM feedbacks', (err, result) => {
        if (err) {
            res.status(500).json({ erro: err });
        } else {
            res.json(result);
        }
    });
};

const update = (req, res) => {
    const id = req.params.id;
    const { nome, email, data, feedback} = req.body;
    con.query('UPDATE feedbacks SET nome = ?, email = ?, data = ?, feedback = ? WHERE feedback_id = ?',
        [nome, email, data, feedback, id], (err, result) => {
            if (err) {
                res.status(400).json({ erro: err });
            } else {
                res.status(202).json(result);
            }
        });
};

const del = (req, res) => {
    const id = req.params.id;
    con.query('DELETE FROM feedbacks WHERE feedback_id = ?', [id], (err, result) => {
        if (err) {
            res.status(500).json({ erro: err });
        } else {
            res.status(204).json(result);
        }
    });
};

module.exports = { create, read, update, del };