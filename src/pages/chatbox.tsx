import React, { useRef } from "react"
import { RedoOutlined } from '@ant-design/icons';

interface Conversation {
  role: string
  content: string
}

export default function ChatBox() {
  const [value, setValue] = React.useState<string>("")
  const [conversation, setConversation] = React.useState<Conversation[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  const handleInput = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
    },
    []
  )

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const chatHistory = [...conversation, { role: "user", content: value }]
      const response = await fetch("/api/chatGpt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: chatHistory }),
      })

      const data = await response.json()
      setValue("")
      setConversation([
        ...chatHistory,
        { role: "assistant", content: data.result.choices[0].message.content },
      ])
    }
  }

  const handleRefresh = () => {
    inputRef.current?.focus()
    setValue("")
    setConversation([])
  }

  return (
    <div className="chat-box" >
      <div className='flex flex-col items-center justify-center text-center'>
        <div className='my-12'>
          <p className='mb-6 font-bold'>Nhập câu hỏi vào đây:</p>
          <input
            type="text"
            placeholder='Type here'
            className='w-full border border-[#000] px-[10px] py-[5px] rounded'
            value={value}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
          />

          <button
            className='font-bold flex gap-[10px] items-center '
            onClick={handleRefresh}
          >
            <RedoOutlined rev={undefined} />
            Bắt đầu cuộc trò chuyện mới
          </button>
        </div>
        <div className='textarea'>
          {conversation.map((item, index) => (
            <React.Fragment key={index}>
              <br />
              {item.role === "assistant" ? (
                <div className='chat chat-end'>
                  <div className='chat-bubble chat-bubble-secondary'>
                    <strong className='text-blue-500'>Chat Toeic</strong>
                    <br />
                    {item.content}
                  </div>
                </div>
              ) : (
                <div className='chat chat-start'>
                  <div className='chat-bubble chat-bubble-primary'>
                    <strong className='text-blue-500'>Tôi:</strong>
                    <br />
                    {item.content}
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}