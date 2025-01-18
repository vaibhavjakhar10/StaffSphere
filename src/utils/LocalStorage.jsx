

const employees= [
      {
        "id": 1,
        "firstName": "Aarav",
        "email": "employee1@example.com",
        "password": "123",
        "tasksCounts": {
          "active": 1,
          "completed": 1,
          "failed": 0,
          "new_task": 1
        },
        "tasks": [
          {
            "active": true,
            "completed": false,
            "failed": false,
            "new_task": true,
            "task_title": "Task 1",
            "task_description": "Description for Task 1",
            "category": "Development",
            "task_date": "2025-01-20"
          },
          {
            "active": false,
            "completed": true,
            "failed": false,
            "new_task": false,
            "task_title": "Task 2",
            "task_description": "Description for Task 2",
            "category": "Testing",
            "task_date": "2025-01-15"
          }
        ]
      },
      {
        "id": 2,
        "firstName": "Isha",
        "email": "employee2@example.com",
        "password": "123",
        "tasksCounts": {
          "active": 1,
          "completed": 0,
          "failed": 1,
          "new_task": 1
        },
        "tasks": [
          {
            "active": true,
            "completed": false,
            "failed": true,
            "new_task": true,
            "task_title": "Task 3",
            "task_description": "Description for Task 3",
            "category": "Design",
            "task_date": "2025-01-18"
          }
        ]
      },
      {
        "id": 3,
        "firstName": "Rohan",
        "email": "employee3@example.com",
        "password": "123",
        "tasksCounts": {
          "active": 0,
          "completed": 1,
          "failed": 0,
          "new_task": 1
        },
        "tasks": [
          {
            "active": false,
            "completed": true,
            "failed": false,
            "new_task": false,
            "task_title": "Task 4",
            "task_description": "Description for Task 4",
            "category": "Development",
            "task_date": "2025-01-14"
          }
        ]
      },
      {
        "id": 4,
        "firstName": "Priya",
        "email": "employee4@example.com",
        "password": "123",
        "tasksCounts": {
          "active": 1,
          "completed": 2,
          "failed": 0,
          "new_task": 1
        },
        "tasks": [
          {
            "active": true,
            "completed": false,
            "failed": false,
            "new_task": true,
            "task_title": "Task 5",
            "task_description": "Description for Task 5",
            "category": "Marketing",
            "task_date": "2025-01-25"
          }
        ]
      },
      {
        "id": 5,
        "firstName": "Aditi",
        "email": "employee5@example.com",
        "password": "123",
        "tasksCounts": {
          "active": 2,
          "completed": 0,
          "failed": 1,
          "new_task": 0
        },
        "tasks": [
          {
            "active": true,
            "completed": false,
            "failed": false,
            "new_task": false,
            "task_title": "Task 6",
            "task_description": "Description for Task 6",
            "category": "Support",
            "task_date": "2025-01-30"
          },
          {
            "active": true,
            "completed": false,
            "failed": false,
            "new_task": false,
            "task_title": "Task 7",
            "task_description": "Description for Task 7",
            "category": "Support",
            "task_date": "2025-01-31"
          }
        ]
      }
    ]
  
  
  
  const admin = [
    {
      "id": 1,
      "firstName": "Rajesh",
      "email": "admin@example.com",
      "password": "123"
    }
  ];
  
  
  export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees));
    localStorage.setItem('admin',JSON.stringify(admin))
  }
  export const getLocalStorage=()=>{
    const employees=JSON.parse(localStorage.getItem('employees'));
    const admin=JSON.parse(localStorage.getItem('admin'));
    return {employees,admin};
  }

