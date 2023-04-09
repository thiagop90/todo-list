import Image from 'next/image'
import Link from 'next/link'
import { Text } from '@chakra-ui/react'

import { header, container, logo, containerLinks, link } from './styles.css'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

export default function Header() {
  return (
    <header className={header}>
      <div className={container}>
        <div className={logo}>
          <Image src="todo.svg" alt="todo-logo" width={44} height={44} />
          <Text fontSize="2xl" as="b">
            To-Do
          </Text>
        </div>
        <div className={containerLinks}>
          <Link
            href="https://linkedin.com/in/psthiago/"
            target="_blank"
            className={link}
          >
            <BsLinkedin size={24} />
          </Link>
          <Link
            href="https://github.com/thiagop90"
            target="_blank"
            className={link}
          >
            <BsGithub size={24} />
          </Link>
        </div>
      </div>
    </header>
  )
}
