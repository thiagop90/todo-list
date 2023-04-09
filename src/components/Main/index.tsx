import { useState } from 'react'
import Image from 'next/image'
import { Text } from '@chakra-ui/react'

import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import TaskForm from '../TaskForm'
import TaskList from '../TaskList'
import { MdAdd, MdCalendarMonth } from 'react-icons/md'
import { vars } from '@/styles/theme.css'

import {
  main,
  containerTasks,
  containerImage,
  containerText,
  containerHome,
  containerNewTask,
  buttonAddTask,
} from './style.css'

import { useTaskContext } from '@/contexts/TaskContext'

export default function Main() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleInput = () => setIsOpen(!isOpen)
  const { tasks } = useTaskContext()

  return (
    <main className={main}>
      {tasks.length === 0 ? (
        <div className={containerHome}>
          <div className={containerImage}>
            <Image src="addtask.svg" width={350} height={350} alt="logo" />
          </div>

          <div className={containerText}>
            <Text as="b" fontSize="lg">
              Você ainda não tem tarefas cadastradas!
            </Text>
            <Text as="b" fontSize="md" color={vars.gray.secondary}>
              Crie tarefas e organize seus itens a fazer.
            </Text>
          </div>

          <div className={containerNewTask}>
            {isOpen ? (
              <div>
                <TaskForm />
              </div>
            ) : (
              <button className={buttonAddTask} onClick={toggleInput}>
                <MdAdd fontSize={24} />
                <span>Adicionar nova tarefa</span>
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className={containerTasks}>
          <div>
            <Text fontSize="2xl" as="b">
              Tarefas de hoje
            </Text>
            <Text
              fontSize="md"
              color={vars.gray.secondary}
              display={'flex'}
              alignItems={'center'}
              gap={'0.25rem'}
            >
              <MdCalendarMonth />
              {format(new Date(), 'eeee, d LLLL', { locale: ptBR })}
            </Text>
          </div>
          <TaskForm />
          <TaskList />
        </div>
      )}
    </main>
  )
}
