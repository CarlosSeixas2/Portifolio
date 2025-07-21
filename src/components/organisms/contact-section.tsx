import type React from "react";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import AnimatedWrapper from "../atoms/animated-wrapper";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_PUBLIC_KEY
      );

      setIsLoading(false);

      console.log("Email enviado com sucesso:", result.text);

      // Limpa o formulário
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Erro ao enviar email:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedWrapper className="transition-delay-700ms">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Entre em <span className="text-green-400">Contato</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Vamos conversar sobre seu próximo projeto? Estou sempre aberto a
              novas oportunidades e desafios.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto mt-4"></div>
          </AnimatedWrapper>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <AnimatedWrapper className="transition-delay-700ms">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Informações de Contato
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/20">
                      <Mail className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-white">carlosseixasof@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/20">
                      <Phone className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Telefone</p>
                      <p className="text-white">+55 (86) 99465-7885</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/20">
                      <MapPin className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Localização</p>
                      <p className="text-white">Parnaíba, PI</p>
                    </div>
                  </div>
                </div>
              </AnimatedWrapper>
            </div>

            <div>
              <AnimatedWrapper className="transition-delay-700ms">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Redes Sociais
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/carlos-seixas-050b4724a/"
                    target="_blank"
                    className="w-12 h-12 bg-gray-800 hover:bg-green-500 rounded-full flex items-center justify-center transition-all duration-300 group"
                  >
                    <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-black" />
                  </a>
                  <a
                    href="https://github.com/CarlosSeixas2"
                    target="_blank"
                    className="w-12 h-12 bg-gray-800 hover:bg-green-500 rounded-full flex items-center justify-center transition-all duration-300 group"
                  >
                    <Github className="w-5 h-5 text-gray-400 group-hover:text-black" />
                  </a>
                </div>
              </AnimatedWrapper>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
            <AnimatedWrapper className="transition-delay-700ms">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Nome
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-black/50 border-gray-700 text-white focus:border-green-500 focus:ring-green-500"
                      placeholder="Seu nome"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-black/50 border-gray-700 text-white focus:border-green-500 focus:ring-green-500"
                      placeholder="Seu email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Assunto
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-black/50 border-gray-700 text-white focus:border-green-500 focus:ring-green-500"
                    placeholder="Assunto da mensagem"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="bg-black/50 border-gray-700 text-white focus:border-green-500 focus:ring-green-500 resize-none"
                    placeholder="Sua mensagem..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-black font-semibold py-3 rounded-full shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 group"
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="mr-3 w-5 h-5 animate-spin text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        ></path>
                      </svg>
                      Enviando…
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                      Enviar Mensagem
                    </>
                  )}
                </Button>
              </form>
            </AnimatedWrapper>
          </div>
        </div>
      </div>

      <div className="mt-20 pt-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2025 Carlos Seixas. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
