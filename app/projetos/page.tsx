"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function ProjetosPage() {
  const [filtro, setFiltro] = useState<"todos" | "residencial" | "comercial">("todos")

  const projetos = [
    {
      nome: "Obra ACIRP",
      tipo: "comercial",
      desc: "Forro, painel ripado acústico nas colunas, cortinas blackout motorizadas e painel acústico na parede da logo da empresa",
      imagem: "projetos/EM_Obras_ACIRP/001obras_acirp.jpg/?height=600&width=800",
    },
    {
      nome: "Casa Residencial",
      tipo: "residencial",
      desc: "Cortina rolô com tela solar manual",
      imagem: "projetos/EM_Obras_Casa/001obras_casa1.jpg/?height=600&width=800",
    },
    {
      nome: "Casa 1",
      tipo: "residencial",
      desc: "Cortina rolô solar motorizada, cortina em tecido, cortina duette lavabo e papel de parede lavabo e sala (verde)",
      arquiteto: "Eng. Bianca Barbieri",
      imagem: "projetos/EM_Obras_Casa 1/001obras_casa.jpg/?height=600&width=800",
    },
    {
      nome: "Consultório Médico",
      tipo: "comercial",
      desc: "Papel de parede, cortinas rolô e rodapé dourado",
      arquiteto: "Arq. Erica Marina",
      imagem: "projetos/EM_Obras_Consultório/001obras_consultorio.jpg/?height=600&width=800",
    },
    {
      nome: "HUB Unaerp",
      tipo: "comercial",
      desc: "Piso vinílico vermelho, piso carpete azul, piso manta colorida, rodapé branco, painel ripado acústico, cortina rolô, forro acústico teto",
      arquiteto: "Arq. Edson Salerno e Arq. Jéssica Reis",
      imagem: "projetos/EM_Obras_Hub Unaerp/001obras_unaerp.jpg/?height=600&width=800",
    },
    {
      nome: "Apartamento",
      tipo: "residencial",
      desc: "Cortina rolô motorizada varanda, cortina rolô quarto e cortinas em tecido",
      arquiteto: "Arq. Par Projetos",
      imagem: "projetos/EM_Obras_Apartamento/001obras_apartamento.jpg/?height=600&width=800",
    },
  ]

  const projetosFiltrados = filtro === "todos" ? projetos : projetos.filter((p) => p.tipo === filtro)

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/50 z-10" />
          <img
            src="projetos/EM_Obras_ACIRP/001obras_acirp.jpg/?height=1080&width=1920"
            alt="Projetos"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 container mx-auto px-4 text-center text-white">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6 text-balance">Nossos Projetos</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Transformando espaços com excelência e sofisticação
            </p>
          </div>
        </section>

        {/* Filtros */}
        <section className="py-12 bg-secondary border-b">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant={filtro === "todos" ? "default" : "outline"} onClick={() => setFiltro("todos")}>
                Todos os Projetos
              </Button>
              <Button
                variant={filtro === "residencial" ? "default" : "outline"}
                onClick={() => setFiltro("residencial")}
              >
                Residenciais
              </Button>
              <Button variant={filtro === "comercial" ? "default" : "outline"} onClick={() => setFiltro("comercial")}>
                Comerciais
              </Button>
            </div>
          </div>
        </section>

        {/* Grid de Projetos */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projetosFiltrados.map((projeto, index) => (
                <div key={index} className="group">
                  <div className="relative h-80 overflow-hidden mb-4">
                    <img
                      src={projeto.imagem || "/placeholder.svg"}
                      alt={projeto.nome}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-accent text-accent-foreground text-xs font-medium px-3 py-1 uppercase">
                        {projeto.tipo}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-serif text-2xl mb-2">{projeto.nome}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-2">{projeto.desc}</p>
                  {projeto.arquiteto && <p className="text-xs text-accent font-medium">{projeto.arquiteto}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Pronto para iniciar seu projeto?</h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Entre em contato e descubra como podemos transformar seu espaço
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <a href="/contato">Solicitar Orçamento</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
