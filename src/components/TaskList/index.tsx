import { useTaskContext } from '@/contexts/TaskContext'
import TaskItem from '../TaskItem'

import {
  tabsContainer,
  tabList,
  tabTask,
  textArea,
  taskNumber,
  tabPanel,
} from './styles.css'

import {
  Tabs,
  TabList,
  Tab,
  TabIndicator,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react'

export default function TaskList() {
  const { tasks, quantityTasks, completedTasks, pendingTasks } =
    useTaskContext()

  return (
    <Tabs variant="unstyled" className={tabsContainer}>
      <TabList className={tabList} position="relative">
        <Tab className={tabTask}>
          <span className={textArea}>Todas</span>
          <span className={taskNumber}>{quantityTasks}</span>
        </Tab>
        <Tab className={tabTask}>
          <span className={textArea}>Tarefas pendentes</span>
          <span className={taskNumber}>{pendingTasks}</span>
        </Tab>
        <Tab className={tabTask}>
          <span className={textArea}>Tarefas conluídas</span>
          <span className={taskNumber}>{completedTasks}</span>
        </Tab>
        <TabIndicator
          bottom={0}
          mt="-1.5px"
          height="2px"
          bg="#0466C8"
          borderRadius="1px"
        />
      </TabList>
      <TabPanels>
        <TabPanel className={tabPanel}>
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </TabPanel>
        <TabPanel className={tabPanel}>
          {tasks.map(
            (task) =>
              !task.isCompleted && <TaskItem key={task.id} task={task} />,
          )}
        </TabPanel>
        <TabPanel className={tabPanel}>
          {tasks.map(
            (task) =>
              task.isCompleted && <TaskItem key={task.id} task={task} />,
          )}
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
