package com.jarvis.todo.model;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

public class Todo {

	private Long id;
	private String username;
	private String description;
	
	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date targetDate;
	private boolean isCompleted;

	public Todo(Long id, String username, String description, Date targetDate, boolean isCompleted) {
		super();
		this.id = id;
		this.username = username;
		this.description = description;
		this.targetDate = targetDate;
		this.isCompleted = isCompleted;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getTargetDate() {
		return targetDate;
	}

	public void setTargetDate(Date targetDate) {
		this.targetDate = targetDate;
	}

	public boolean isCompleted() {
		return isCompleted;
	}

	public void setCompleted(boolean isCompleted) {
		this.isCompleted = isCompleted;
	}

	@Override
	public String toString() {
		return "Todo [id=" + id + ", username=" + username + ", description=" + description + ", targetDate="
				+ targetDate + ", isCompleted=" + isCompleted + "]";
	}

}
