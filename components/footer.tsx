import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Clock, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Image
                src="/logo.svg"
                alt="Werts Logo"
                width={120}
                height={40}
                className="invert"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Especialistas em painéis elétricos de baixa tensão, comandos e automação industrial.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Produtos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#servicos" className="text-gray-400 hover:text-white">
                  Quadros de Distribuição
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="text-gray-400 hover:text-white">
                  Banco de Capacitores
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="text-gray-400 hover:text-white">
                  Automação Industrial
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="text-gray-400 hover:text-white">
                  Padrões PTTA e TTA
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#sobre" className="text-gray-400 hover:text-white">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#valores" className="text-gray-400 hover:text-white">
                  Nossos Valores
                </Link>
              </li>
              <li>
                <Link href="#normas" className="text-gray-400 hover:text-white">
                  Normas
                </Link>
              </li>
              <li>
                <Link href="#contato" className="text-gray-400 hover:text-white">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-teal-500 mr-2 mt-0.5" />
                <span className="text-gray-400">
                  Av. Tore Albert Munck, 116
                  <br />
                  Cotia - SP
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-teal-500 mr-2" />
                <span className="text-gray-400">+55 11 97830-4267</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-teal-500 mr-2" />
                <span className="text-gray-400">francisco@werts.com.br</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-teal-500 mr-2 mt-0.5" />
                <span className="text-gray-400">
                  Segunda a Sexta-feira
                  <br />
                  7:00 às 17:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Werts. Todos os direitos reservados. Desenvolvido por{" "}
            <a
              href="https://www.leaderti.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:text-teal-400"
            >
              #TeamLeader
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
