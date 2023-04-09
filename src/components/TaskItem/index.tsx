import { useState, ChangeEvent } from 'react'
import { formatDistanceStrict, Locale } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Task } from '@/@types/Task'
import { useTaskContext } from '@/contexts/TaskContext'
import { vars } from '@/styles/theme.css'

import {
  Checkbox,
  Divider,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Portal,
} from '@chakra-ui/react'

import {
  MdCheck,
  MdClose,
  MdDelete,
  MdEdit,
  MdMoreHoriz,
  MdQueryBuilder,
} from 'react-icons/md'

import {
  container,
  inputEditing,
  buttonConfirmation,
  containerTask,
  titleTaskCompleted,
  buttonOpen,
  groupButtons,
  buttonOptions,
  footer,
} from './styles.css'

interface TaskProps {
  task: Task
}

export default function TaskItem({ task }: TaskProps) {
  const {
    deleteTask,
    completeTask,
    editTask,
    editingTaskId,
    setEditingTaskId,
  } = useTaskContext()

  const [title, setTitle] = useState(task.title)
  const editing = editingTaskId === task.id

  const handleDelete = () => {
    deleteTask(task.id)
  }

  const handleComplete = () => {
    completeTask(task.id)
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value)
  }

  const [isOpen, setIsOpen] = useState(false)
  const toggleButtons = () => setIsOpen(!isOpen)

  return (
    <div className={container}>
      <li className={containerTask}>
        <Checkbox
          defaultChecked={!!task.isCompleted}
          onChange={handleComplete}
        />
        {editing ? (
          <>
            <input
              className={inputEditing}
              type="text"
              value={title}
              onChange={handleChange}
              autoFocus
            />
            <button
              onClick={() => editTask(task.id, title)}
              className={buttonConfirmation}
            >
              <MdCheck fontSize={24} />
            </button>

            <button
              onClick={() => setEditingTaskId(null)}
              className={buttonConfirmation}
            >
              <MdClose fontSize={24} color="red" />
            </button>
          </>
        ) : (
          <>
            <p className={task.isCompleted ? titleTaskCompleted : ''}>
              {task.title}
            </p>

            <Popover>
              <PopoverTrigger>
                <button
                  title="Opções"
                  className={buttonOpen}
                  onClick={toggleButtons}
                >
                  <MdMoreHoriz fontSize={24} />
                </button>
              </PopoverTrigger>
              <Portal>
                <PopoverContent
                  bg={vars.color.black}
                  borderColor={vars.gray.primary}
                  w="12rem"
                >
                  <PopoverArrow
                    bg={vars.gray.primary}
                    boxShadow={`-1px -1px 0 0 ${vars.gray.primary}`}
                  />
                  <PopoverHeader
                    color={vars.gray.secondary}
                    borderColor={vars.gray.primary}
                  >
                    Opções
                  </PopoverHeader>
                  <PopoverCloseButton size="md" color={vars.gray.secondary} />
                  <PopoverBody>
                    <div className={groupButtons}>
                      <button
                        onClick={() => setEditingTaskId(task.id)}
                        className={buttonOptions}
                      >
                        <MdEdit fontSize={20} />
                        <span>Editar</span>
                      </button>
                      <Divider
                        orientation="horizontal"
                        borderColor={vars.gray.secondary}
                      />
                      <button onClick={handleDelete} className={buttonOptions}>
                        <MdDelete fontSize={20} />
                        <span>Excluir</span>
                      </button>
                    </div>
                  </PopoverBody>
                </PopoverContent>
              </Portal>
            </Popover>
          </>
        )}
      </li>
      <footer className={footer}>
        <MdQueryBuilder fontSize={16} />
        <span>
          Criada{' '}
          {formatDistanceStrict(new Date(task.createdAt), new Date(), {
            locale: ptBR as Locale,
            addSuffix: true,
          })}{' '}
          atrás
        </span>
      </footer>
    </div>
  )
}
