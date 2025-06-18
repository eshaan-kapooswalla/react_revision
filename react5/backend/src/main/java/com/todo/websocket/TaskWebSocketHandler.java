package com.todo.websocket;

import com.todo.model.Task;
import com.todo.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
public class TaskWebSocketHandler {

    @Autowired
    private TaskService taskService;

    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    @MessageMapping("/task/create")
    public void createTask(@Payload Task task) {
        Task savedTask = taskService.createTask(task);
        messagingTemplate.convertAndSend("/topic/tasks", savedTask);
    }

    @MessageMapping("/task/update")
    public void updateTask(@Payload Task task) {
        Task updatedTask = taskService.updateTask(task);
        messagingTemplate.convertAndSend("/topic/tasks", updatedTask);
    }

    @MessageMapping("/task/delete")
    public void deleteTask(@Payload Long id) {
        taskService.deleteTask(id);
        messagingTemplate.convertAndSend("/topic/tasks", id);
    }
}
