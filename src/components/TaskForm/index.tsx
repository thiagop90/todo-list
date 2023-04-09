import React, { useState } from 'react'

import { form, container, icon, input, button } from './style.css'
import { TbPlaylistAdd } from 'react-icons/tb'
import { MdAdd } from 'react-icons/md'

import { useTaskContext } from '../../contexts/TaskContext'

export default function TaskForm() {
  const [title, setTitle] = useState('')
  const { addTask } = useTaskContext()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (title.trim()) {
      addTask(title.trim())
      setTitle('')
    }
  }

  return (
    <div>
      <form className={form} onSubmit={handleSubmit}>
        <div className={container}>
          <span className={icon}>
            <TbPlaylistAdd size={24} />
          </span>
          <input
            type="text"
            className={input}
            placeholder="Adicionar tarefa"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </div>
        <button type="submit" className={button}>
          <MdAdd size={20} />
          <span>Adicionar</span>
        </button>
      </form>
    </div>
  )
}
