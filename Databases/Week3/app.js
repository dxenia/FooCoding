const express = require('express');
const mysql = require('mysql2');
const app = express();
const PORT = 3000;
app.use(express.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'thisisthePasswordforrootuser1995o7o9',
  database: 'todo',
});

connection.connect((error) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Successful connection to the database!');
  }
});

// app.get('/', (req, res) => {
//   res.send('Hello from the server!');
// });

// ------------------Support multiple users (register user query)------------------
// INSERT INTO user (username, email, password) VALUES (@username, @email, @password);

app.post('/users', (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ message: 'Username, email and password are required' });
  }

  const query = 'INSERT INTO user (username, email, password) VALUES (?, ?, ?)';

  connection.query(query, [username, email, password], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Error creating new user' });
      return;
    }
    res.status(201).json({ message: 'New user created', results });
  });
});

// ------------------Insert item(s) in ToDo list------------------
// INSERT INTO todo_item (list_id, tag_id, task) VALUES (@list_id, @tag_id, @task);

app.post('/items', (req, res) => {
  const { listId, tagId, task } = req.body;

  if (!listId || !task) {
    return res.status(400).json({ message: 'List id and task are required' });
  }

  const query =
    'INSERT INTO todo_item (list_id, tag_id, task) VALUES (?, ?, ?)';

  connection.query(query, [listId, tagId, task], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Error creating new to do item' });
      return;
    }
    res.status(201).json({ message: 'New to do item created', results });
  });
});

// ------------------Delete item(s) in ToDo list------------------
// DELETE FROM todo_item WHERE item_id = @item_id;

app.delete('/items/:id', (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM todo_item WHERE item_id = ?';

  connection.query(query, [id], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Error deleting to do item' });
      return;
    }
    if (results.affectedRows === 0) {
      res.status(400).json({ error: 'Item not found' });
      return;
    }
    res.status(204).json({ results });
    console.log('To do item deleted');
  });
});

// ------------------Create a new ToDo list------------------
// INSERT INTO todo_list (user_id, list_name, reminder) VALUES (@user_id, @list_name, @reminder);

app.post('/lists', (req, res) => {
  const { userId, listName, reminder } = req.body;

  if (!userId || !listName) {
    return res
      .status(400)
      .json({ message: 'User id and list name are required' });
  }

  const query =
    'INSERT INTO todo_list (user_id, list_name, reminder) VALUES (?, ?, ?)';

  connection.query(query, [userId, listName, reminder], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Error creating new to do list' });
      return;
    }
    res.status(201).json({ message: 'New to do list created', results });
  });
});

// ------------------Delete a ToDo list------------------
// DELETE FROM todo_list WHERE list_id = @list_id;

app.delete('/lists/:id', (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM todo_list WHERE list_id = ?';

  connection.query(query, [id], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Error deleting to do list' });
      return;
    }
    if (results.affectedRows === 0) {
      res.status(400).json({ error: 'List not found' });
      return;
    }
    res.status(204).json({ results });
    console.log('To do list and related items deleted.');
  });
});

// ------------------Mark an item as completed------------------
// UPDATE todo_item SET done = "T" WHERE item_id = @item_id;

app.put('/items/:id', (req, res) => {
  const { id } = req.params;

  const query = 'UPDATE todo_item SET done = "T" WHERE item_id = ?';

  connection.query(query, [id], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Error checking off the task' });
      return;
    }
    if (results.affectedRows === 0) {
      res.status(400).json({ error: 'Item not found' });
      return;
    }
    res.status(204).json({ results });
    console.log('Item marked completed.');
  });
});

// ------------------Add a reminder for the list (not for the item)------------------
// UPDATE todo_list SET reminder = @reminder WHERE list_id = @list_id;

app.put('/lists/:id', (req, res) => {
  const { reminder } = req.body;
  const { id } = req.params;

  if (!reminder) {
    return res.status(400).json({ message: 'Reminder is required' });
  }

  const query = 'UPDATE todo_list SET reminder = ? WHERE list_id = ?';

  connection.query(query, [reminder, id], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Error adding reminder.' });
      return;
    }
    if (results.affectedRows === 0) {
      res.status(400).json({ error: 'List not found' });
      return;
    }
    res.status(201).json({ message: 'Reminder added to the list', results });
  });
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}.`));
