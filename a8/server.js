const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const app = express();
const path = require('path');
app.use(express.json());

const client = new MongoClient('mongodb://localhost:27017');
const dbName = "Assignment8";
const port = 3000;

client.connect().then(() => {
    const db = client.db(dbName);
    const students = db.collection("student");

    app.post('/api/student', async (req, res) => {
        const {studentId} = req.body;
        const exists = await students.findOne({studentId: studentId});
        if (exists) {
            return res.status(400).json({error: "Student ID already exists"});
        }
        students.insertOne(req.body)
            .then(result => res.status(201).json({message: "Student added successfully", id: result.insertedId}))
            .catch(error => res.status(500).json({error: error.message}));
    });

    app.get('/api/student/:id', async (req, res) => {
        const student = await students.findOne({studentId: req.params.id});
        if (!student) {
            return res.status(404).json({error: "No student found with that ID"});
        }
        res.json(student);
    });

    app.put('/api/student/:id', async (req, res) => {
        const updateResult = await students.updateOne({studentId: req.params.id}, {$set: req.body});
        if (updateResult.matchedCount === 0) {
            return res.status(404).json({error: "No student found with that ID"});
        }
        res.json({message: "Student updated successfully"});
    });

    app.delete('/api/student/:id', async (req, res) => {
        const deleteResult = await students.deleteOne({studentId: req.params.id});
        if (deleteResult.deletedCount === 0) {
            return res.status(404).json({error: "No student found with that ID"});
        }
        res.json({message: "Student deleted successfully"});
    });

// Serve static files from your project directory
    app.use(express.static(path.join('C:', 'Users', 'matth', 'WebstormProjects', 'a8')));

// Redirect root to student.html
    app.get('/', (req, res) => {
        res.sendFile(path.join('C:', 'Users', 'matth', 'WebstormProjects', 'a8', 'student.html'));
    });

    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}/`);
    });
});
