import { v4 as uuidv4 } from 'uuid'

import { Task } from '@/@types/Task'
import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from 'react'

const LOCAL_STORAGE_KEY = 'todo:savedTask'

interface TaskContextData {
  tasks: Task[]
  quantityTasks: number
  addTask: (title: string) => void
  deleteTask: (id: string) => void
  completeTask: (id: string) => void
  completedTasks: number
  editTask: (id: string, newTitle: string) => void
  editingTaskId: string | null
  setEditingTaskId: (id: string | null) => void
  pendingTasks: number
}

export const TaskContext = createContext<TaskContextData>({} as TaskContextData)

type TaskProviderProps = {
  children: ReactNode
}

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null)

  const loadSavedTasks = () => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (saved) {
      setTasks(JSON.parse(saved))
    }
  }

  useEffect(() => {
    loadSavedTasks()
  }, [])

  const setTaskAndSave = (newTasks: Task[]) => {
    setTasks(newTasks)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks))
  }

  const addTask = (title: string) => {
    const newTask: Task = {
      id: uuidv4(),
      title,
      createdAt: new Date(),
      isCompleted: false,
    }
    setTaskAndSave([...tasks, newTask])
  }

  const deleteTask = (id: string) => {
    setTaskAndSave(tasks.filter((task) => task.id !== id))
  }

  const completeTask = (id: string) => {
    setTaskAndSave(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task,
      ),
    )
  }

  const editTask = (id: string, newTitle: string) => {
    setTaskAndSave(
      tasks.map(
        (task) => (task.id === id ? { ...task, title: newTitle } : task),
        setEditingTaskId(null),
      ),
    )
  }

  const pendingTasks = tasks.filter((task) => !task.isCompleted).length

  const quantityTasks = tasks.length

  const completedTasks = tasks.filter((task) => task.isCompleted).length

  return (
    <TaskContext.Provider
      value={{
        tasks,
        quantityTasks,
        completedTasks,
        addTask,
        deleteTask,
        completeTask,
        editTask,
        editingTaskId,
        setEditingTaskId,
        pendingTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}

export const useTaskContext = () => useContext(TaskContext)
