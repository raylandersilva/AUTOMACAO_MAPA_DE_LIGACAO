# Automação de Mapa de Ligação

Este é um projeto de automação para gerenciamento de mapa de ligação, desenvolvido com JavaScript puro, HTML e CSS.

## 📋 Descrição

Desenvolvido para o setor de Qualidade de Atendimento da Equatorial Serviços, este projeto tem como objetivo principal auxiliar na auditoria das gravações de atendimento realizadas pelos atendentes. 

O sistema web permite a visualização e gerenciamento de desvios e rotas em um mapa de ligação, fornecendo uma interface intuitiva que facilita a cópia e colagem de informações, eliminando a necessidade de edições manuais e reduzindo a possibilidade de erros.

Com esta ferramenta, a equipe de qualidade pode acessar rapidamente as informações necessárias para os atendimentos, garantindo maior eficiência e padronização nas respostas fornecidas.

## 🚀 Funcionalidades

- Visualização interativa do mapa de ligação
- Gerenciamento de desvios
- Interface responsiva
- Interatividade com elementos do mapa
- **Desvios Personalizados**
  - Adicione desvios personalizados que não existam no banco de desvios atual
  - Os desvios criados são salvos automaticamente no cache do navegador
  - Persistência dos desvios entre sessões (permanecem salvos mesmo após fechar o navegador)
  - Exportação/Importação de desvios personalizados:
    - Salve seus desvios em um arquivo para backup
    - Importe o arquivo em outra máquina ou compartilhe com outros auditores
    - Ideal para padronização entre a equipe ou ao trocar de computador

> **Gerenciamento de Desvios Personalizados:**
> - Os desvios personalizados ficam disponíveis apenas no navegador onde foram criados/importados
> - Você pode remover desvios individuais diretamente pela interface do sistema
> - A remoção é feita em tempo real e atualiza automaticamente a lista de desvios disponíveis
> - As alterações são salvas automaticamente no navegador
> - Para limpar todos os desvios personalizados de uma vez, você pode limpar o cache do navegador

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)

## 📁 Estrutura do Projeto

- `index.html` - Estrutura principal da aplicação
- `styles.css` - Estilos da aplicação
- `script.js` - Lógica principal da aplicação
- `desvios.js` - Módulo para gerenciamento de desvios

## 🚀 Como Executar

1. Clone este repositório
2. Abra o arquivo `index.html` em um navegador web moderno

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido por [Seu Nome] - 2025
