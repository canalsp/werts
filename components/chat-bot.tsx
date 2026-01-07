"use client"

import React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, X, Send, Minimize2, Maximize2, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { useModal } from "@/components/modal-provider"

type Message = {
  id: string
  text: string
  isBot: boolean
  isOption?: boolean
  jsx?: React.ReactElement
}

type QuickOption = {
  id: string
  text: string
  action: () => void
}

export function ChatBot() {
  const { openOrcamentoModal } = useModal()
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [input, setInput] = useState("")
  const [showLabel, setShowLabel] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Olá! Como posso ajudar você hoje? Escolha uma das opções abaixo ou digite sua pergunta.",
      isBot: true,
    },
  ])

  const openWhatsApp = (message: string = "Olá! Gostaria de falar com um atendente comercial da Werts.") => {
    const phoneNumber = "5511978304267"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const quickOptions: QuickOption[] = [
    {
      id: "orcamento",
      text: "Solicitar orçamento",
      action: () => {
        handleOptionSelect("Gostaria de solicitar um orçamento")
        setTimeout(() => {
          openOrcamentoModal()
        }, 1000)
      },
    },
    {
      id: "produtos",
      text: "Conhecer produtos",
      action: () => {
        handleOptionSelect("Quero conhecer os produtos")
        setTimeout(() => {
          addBotMessage(
            "Temos uma linha completa de produtos para sua necessidade:\n\n" +
            "• Painéis elétricos de baixa tensão\n" +
            "• Quadros de distribuição\n" +
            "• Banco de capacitores\n" +
            "• Sistemas de automação industrial\n" +
            "• Painéis PTTA e TTA\n" +
            "• IT Médico\n\n" +
            "Gostaria de falar com um especialista sobre algum desses produtos?"
          )
          setTimeout(() => {
            addBotMessage(
              <div className="flex justify-center">
                <Button className="bg-teal-800 hover:bg-teal-700 text-white mt-2" onClick={() => openWhatsApp("Olá! Gostaria de saber mais sobre os produtos da Werts.")}>
                  Falar com Especialista
                </Button>
              </div>
            )
          }, 1000)
        }, 1000)
      },
    },
    {
      id: "servicos",
      text: "Serviços oferecidos",
      action: () => {
        handleOptionSelect("Quais serviços vocês oferecem?")
        setTimeout(() => {
          addBotMessage(
            "Oferecemos diversos serviços especializados:\n\n" +
            "• Montagem de painéis elétricos\n" +
            "• Projetos de automação industrial\n" +
            "• Instalação e manutenção\n" +
            "• Consultoria técnica\n" +
            "• Correção de fator de potência\n" +
            "• Retrofit de painéis\n\n" +
            "Posso agendar uma consulta com nosso time técnico?"
          )
          setTimeout(() => {
            addBotMessage(
              <div className="flex justify-center">
                <Button className="bg-teal-800 hover:bg-teal-700 text-white mt-2" onClick={() => openWhatsApp("Olá! Gostaria de uma consulta técnica sobre os serviços da Werts.")}>
                  Agendar Consulta
                </Button>
              </div>
            )
          }, 1000)
        }, 1000)
      },
    },
    {
      id: "normas",
      text: "Normas e certificações",
      action: () => {
        handleOptionSelect("Quais normas e certificações vocês atendem?")
        setTimeout(() => {
          addBotMessage(
            "Nossos produtos e serviços atendem às principais normas:\n\n" +
            "• NBR IEC 60439-1\n" +
            "• NBR IEC 61439-1 e 2\n" +
            "• NR-10\n" +
            "• NBR 5410\n" +
            "• ISO 9001\n\n" +
            "Quer saber mais sobre nossas certificações?"
          )
          setTimeout(() => {
            addBotMessage(
              <div className="flex justify-center">
                <Button className="bg-teal-800 hover:bg-teal-700 text-white mt-2" onClick={() => openWhatsApp("Olá! Gostaria de mais informações sobre as certificações da Werts.")}>
                  Saber Mais
                </Button>
              </div>
            )
          }, 1000)
        }, 1000)
      },
    },
    {
      id: "atendente",
      text: "Falar com atendente",
      action: () => {
        handleOptionSelect("Preciso falar com um atendente")
        setTimeout(() => {
          addBotMessage(
            "Você será atendido por um de nossos consultores. Clique no botão abaixo para iniciar uma conversa no WhatsApp."
          )
          setTimeout(() => {
            addBotMessage(
              <div className="flex flex-col items-center gap-2">
                <Button className="bg-teal-800 hover:bg-teal-700 text-white" onClick={() => openWhatsApp()}>
                  <Phone className="w-4 h-4 mr-2" />
                  Abrir WhatsApp
                </Button>
                <span className="text-xs text-gray-500">Horário de atendimento: Seg-Sex, 8h às 18h</span>
              </div>
            )
          }, 1000)
        }, 1000)
      },
    },
    {
      id: "contato",
      text: "Informações de contato",
      action: () => {
        handleOptionSelect("Preciso das informações de contato")
        setTimeout(() => {
          addBotMessage(
            "Aqui estão nossas informações de contato:\n\n" +
            "📞 Telefone: (11) 97830-4267\n" +
            "📧 Email: francisco@werts.com.br\n" +
            "📍 Endereço: Av. Tore Albert Munck, 116 - Cotia/SP\n" +
            "⏰ Horário: Segunda a Sexta, 8h às 18h\n\n" +
            "Como posso ajudar você?"
          )
        }, 1000)
      },
    },
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowLabel(true)
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [isOpen])

  const handleSendMessage = () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      isBot: false,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")

    setTimeout(() => {
      addBotMessage(
        "Entendi sua mensagem. Para melhor atendê-lo, um de nossos consultores entrará em contato em breve. " +
        "Você pode clicar em 'Falar com atendente' para um contato imediato via WhatsApp."
      )
    }, 1000)
  }

  const handleOptionSelect = (optionText: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: optionText,
      isBot: false,
    }

    setMessages((prev) => [...prev, userMessage])
  }

  const addBotMessage = (text: string | React.ReactElement) => {
    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: typeof text === "string" ? text : "",
      isBot: true,
      isOption: typeof text !== "string",
    }

    if (typeof text !== "string") {
      botMessage.jsx = text
    }

    setMessages((prev) => [...prev, botMessage])
  }

  const toggleChat = () => {
    setIsOpen(!isOpen)
    setIsMinimized(false)
    setShowLabel(false)
  }

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <div className="relative">
          <Button onClick={toggleChat} className="h-14 w-14 rounded-full bg-teal-800 hover:bg-teal-900 shadow-lg">
            <MessageCircle className="h-6 w-6" />
          </Button>

          {showLabel && (
            <div className="absolute bottom-16 right-0 bg-white text-gray-800 p-3 rounded-lg shadow-lg whitespace-nowrap animate-bounce">
              <div className="absolute -bottom-2 right-4 w-4 h-4 bg-white transform rotate-45"></div>
              Olá! Posso ajudar você?
            </div>
          )}
        </div>
      ) : (
        <Card className={cn("w-80 transition-all duration-300 shadow-lg flex flex-col", isMinimized ? "h-16" : "h-[500px]")}>
          <CardHeader className="p-3 border-b flex flex-row items-center justify-between shrink-0">
            <CardTitle className="text-sm font-medium">Chat da Werts</CardTitle>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" onClick={toggleMinimize} className="h-6 w-6">
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" size="icon" onClick={toggleChat} className="h-6 w-6">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>

          {!isMinimized && (
            <React.Fragment>
              <CardContent className="p-3 overflow-y-auto flex-1">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className={cn("flex", message.isBot ? "justify-start" : "justify-end")}>
                      <div
                        className={cn(
                          "max-w-[80%] rounded-lg p-3 whitespace-pre-wrap",
                          message.isBot ? "bg-gray-100 text-gray-900" : "bg-teal-800 text-white"
                        )}
                      >
                        {message.isOption ? message.jsx : message.text}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-2 border-t shrink-0">
                <div className="flex flex-col w-full gap-2">
                  <div className="flex flex-col gap-1">
                    {quickOptions.map((option) => (
                      <Button
                        key={option.id}
                        variant="outline"
                        size="sm"
                        className="h-7 text-xs border-teal-800 text-teal-800 hover:bg-teal-50 w-full justify-start"
                        onClick={option.action}
                      >
                        {option.text}
                      </Button>
                    ))}
                  </div>
                  <div className="flex w-full items-center gap-2">
                    <Input
                      placeholder="Digite sua mensagem..."
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleSendMessage()
                        }
                      }}
                      className="flex-1"
                    />
                    <Button size="icon" onClick={handleSendMessage} className="bg-teal-800 hover:bg-teal-900">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </React.Fragment>
          )}
        </Card>
      )}
    </div>
  )
}
