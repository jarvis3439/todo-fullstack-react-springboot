package com.jarvis.todo.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.jarvis.todo.model.Todo;

@Service
public class TodoService {

	private static long idCounter = 0;

	public static List<Todo> todos = new ArrayList<>();

	static {
		todos.add(new Todo(++idCounter, "jarvis", "Do it", new Date(), false));
		todos.add(new Todo(++idCounter, "jarvis", "Just Do it", new Date(), false));
		todos.add(new Todo(++idCounter, "jarvis", "Keep Doing it", new Date(), false));
	}

	public List<Todo> findAll() {
		return todos;
	}
	
	public Todo save(Todo todo) {
		if(todo.getId()==-1 || todo.getId()==0) {
			todo.setId(++idCounter);
			todos.add(todo);
			
		} else {
			deleteById(todo.getId());
			todos.add(todo);
		}
		return todo;
	}

	public Todo deleteById(long id) {
		Todo todo = findById(id);
		if (todo == null) {
			return null;
		} else {
			todos.remove(todo);
			return todo;
		}
	}

	public Todo findById(long id) {
		for (Todo todo : todos) {
			if (todo.getId() == id) {
				return todo;
			}
		}
		return null;
	}
}
