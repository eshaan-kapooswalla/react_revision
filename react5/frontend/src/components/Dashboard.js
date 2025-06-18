import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  TextField,
  IconButton,
  Chip,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from '@mui/material';
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  Check as CheckIcon,
} from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { selectTasks, fetchTasks, addTask, updateTask, deleteTask } from '../features/tasksSlice';

const priorities = [
  { id: 'high', label: 'High', color: 'error' },
  { id: 'medium', label: 'Medium', color: 'warning' },
  { id: 'low', label: 'Low', color: 'success' },
];

const categories = ['Work', 'Personal', 'Shopping', 'Other'];

const Dashboard = () => {
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    priority: 'medium',
    category: 'Work',
    dueDate: '',
  });
  const [editingTask, setEditingTask] = useState(null);
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTask) {
      dispatch(updateTask({ ...newTask, id: editingTask }));
      setEditingTask(null);
    } else {
      dispatch(addTask(newTask));
    }
    setNewTask({
      title: '',
      description: '',
      priority: 'medium',
      category: 'Work',
      dueDate: '',
    });
  };

  const handleEdit = (task) => {
    setEditingTask(task.id);
    setNewTask({
      ...task,
      dueDate: task.dueDate ? new Date(task.dueDate).toISOString().split('T')[0] : '',
    });
  };

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Task Form */}
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
          >
            <form onSubmit={handleSubmit}>
              <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                <TextField
                  fullWidth
                  label="Title"
                  value={newTask.title}
                  onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                  required
                />
                <TextField
                  select
                  label="Priority"
                  value={newTask.priority}
                  onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
                >
                  {priorities.map((priority) => (
                    <option key={priority.id} value={priority.id}>
                      {priority.label}
                    </option>
                  ))}
                </TextField>
              </Box>
              <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                <TextField
                  fullWidth
                  label="Description"
                  multiline
                  rows={3}
                  value={newTask.description}
                  onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                />
                <TextField
                  select
                  label="Category"
                  value={newTask.category}
                  onChange={(e) => setNewTask({ ...newTask, category: e.target.value })}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </TextField>
              </Box>
              <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                <TextField
                  type="date"
                  label="Due Date"
                  value={newTask.dueDate}
                  onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                  InputLabelProps={{ shrink: true }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  startIcon={editingTask ? <EditIcon /> : <AddIcon />}
                >
                  {editingTask ? 'Update Task' : 'Add Task'}
                </Button>
              </Box>
            </form>
          </Paper>
        </Grid>

        {/* Tasks List */}
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
          >
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Tasks
            </Typography>
            <List>
              {tasks.map((task) => (
                <ListItem key={task.id}>
                  <ListItemText
                    primary={task.title}
                    secondary={task.description}
                  />
                  <Chip
                    label={task.priority}
                    color={priorities.find(p => p.id === task.priority).color}
                    size="small"
                    sx={{ mr: 1 }}
                  />
                  <Chip
                    label={task.category}
                    size="small"
                    sx={{ mr: 1 }}
                  />
                  {task.dueDate && (
                    <Chip
                      label={`Due: ${new Date(task.dueDate).toLocaleDateString()}`}
                      size="small"
                      sx={{ mr: 1 }}
                    />
                  )}
                  <ListItemSecondaryAction>
                    <IconButton edge="end" onClick={() => handleEdit(task)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton edge="end" onClick={() => handleDelete(task.id)}>
                      <DeleteIcon />
                    </IconButton>
                    <IconButton edge="end" onClick={() => dispatch(updateTask({ ...task, completed: !task.completed }))}>
                      <CheckIcon color={task.completed ? 'primary' : 'disabled'} />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
