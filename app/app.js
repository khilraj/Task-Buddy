const { ClerkExpressWithAuth } = require('@clerk/clerk-sdk-node');
const express = require('express');
const app = express();

app.use(ClerkExpressWithAuth());

app.get('/api/tasks', (req, res) => {
  if (req.auth) {
    // Retrieve tasks for the authenticated user
    const tasks = getTasksForUser(req.auth.userId);
    res.json(tasks);
  } else {
    res.status(401).send('Unauthorized');
  }
});

function getTasksForUser(userId) {
  // Logic to retrieve tasks from the database for the given user
  return tasks.filter(task => task.userId === userId);
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
