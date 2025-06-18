package com.todo.service;

import com.todo.model.Task;
import com.todo.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    @Transactional
    public Task createTask(Task task) {
        task.setCompleted(false);
        return taskRepository.save(task);
    }

    @Transactional
    public Task updateTask(Task task) {
        return taskRepository.save(task);
    }

    @Transactional
    public void deleteTask(Long id) {
        taskRepository.deleteById(id);
    }

    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    public List<Task> getIncompleteTasks() {
        return taskRepository.findByCompleted(false);
    }

    public List<Task> getOverdueTasks() {
        return taskRepository.findByDueDateBeforeAndCompletedFalse(LocalDateTime.now());
    }
}
