const DESVIOS = [
    {
        DESVIO: 'Desconexão indevida - Encerra ligação de forma indevida com o cliente em linha',
        RESOLUCAO: 'A desconexão indevida prejudica a imagem da empresa, visto que o cliente entrará em contato novamente insatisfeito para buscar a solução de sua solicitação.'
    },
    {
        DESVIO: 'Não cumprimento do procedimento',
        RESOLUCAO: 'Seguir corretamente os procedimentos estabelecidos para garantir a qualidade do atendimento e satisfação do cliente.'
    },
    {
        DESVIO: 'Atendimento incompleto',
        RESOLUCAO: 'Garantir que todas as necessidades do cliente sejam atendidas antes de encerrar a ligação.'
    },
    {
        DESVIO: 'Falta de empatia',
        RESOLUCAO: 'Demonstrar compreensão e preocupação com as necessidades do cliente durante todo o atendimento.'
    },
    {
        DESVIO: "Desconexão indevida - Encerra ligação de forma indevida com o cliente em linha",
        RESOLUCAO: "A desconexão indevida prejudica a imagem da empresa, visto que o cliente entrará em contato novamente insatisfeito para buscar a solução de sua solicitação.",
    },
    {
        DESVIO: "Não registra o atendimento (Informação).",
        RESOLUCAO: "Atender o cliente de acordo com o script sendo cortês e solicito com o cliente. Compreender toda a solicitação ou informação do cliente e realizar o registro no sistema para concluir o atendimento.",
    },
    {
        DESVIO: "Mute em demasiado (Tempo que ficou em mute)",
        RESOLUCAO: "Sinalizar ao cliente sempre a cada 30 segundos, para que o mesmo não se sinta abandonado. Caso for se ausentar além do tempo estimado, informar o cliente o procedimento que será realizado e o motivo da ausência.",
    },
    {
        DESVIO:  "Não informou o protocolo. ",
        RESOLUCAO: "No art. 195 da ANEEL, devemos informar o protocolo em todos os atendimentos telefônicos e presenciais. Sempre que repassar uma informação ao cliente deve ser registrado no sistema SAP uma informação para que possa ser identificado futuramente por outros atendentes ou para futuras auditorias.",
    },
    {
        DESVIO:  "Rispidez em atendimento.",
        RESOLUCAO: "Atender o cliente de forma humanizada, de maneira educada, amigável e com empatia, seguindo as normas de qualidade fornecidas pela empresa e sendo atencioso (a) com o cliente. Compreender completamente todas as solicitações ou informações do cliente e executar o procedimento conforme solicitado pelo cliente, quando for possível realizar em atendimento.",
    },
    {
        DESVIO: "Não Realizou registro de atendimento.",
        RESOLUCAO: "Inclua todas as informações sobre a solicitação do cliente. Caso seja referente à falta de energia, verifique se já existe uma solicitação em aberto. Se houver, gere uma re-chamada e sempre registre todas as informações na solicitação.",
    },
    {
        DESVIO: "Não Utiliza todos os critérios de busca da unidade.",
        RESOLUCAO: "Compreender toda a solicitação ou informação do cliente e realizar a busca pela UC ou Conta Contrato abordando os seguintes critérios: Conta Contrato, CPF, Número do medidor (encontre-se na fatura no campo de leitura) e Endereço.",
    },
    {
        DESVIO: "Registra solicitação na tipologia incorreta.",
        RESOLUCAO: "Compreender toda a solicitação ou informação do cliente e realizar o registro de forma correta. Em casos de informação sobre prazos de religação, deve-se registrar na tipologia 1111- Atendimento e Estrutura de Atendimento.",
    },
    {
        DESVIO: "Não preenche corretamente a solicitação",
        RESOLUCAO: "colocar todas as informações sobre a solicitação do cliente, caso seja risco a vida, sempre informar no registro da solicitação",
    },
    {
        DESVIO: "Não recepcionou prontamente a ligação em até 3 segundos.",
        RESOLUCAO: "Recepcionar todas as ligações prontamente em até 3 segundos, atender o cliente de acordo com o script, compreender toda a solicitação ou informação do cliente e realizar o registro no sistema para concluir o atendimento.",
    },
    {
        DESVIO: "Realiza procedimento incorreto de abertura de nota de forma indevida.",
        RESOLUCAO: "Ter atenção na abertura de notas, não registrar desligamento temporário, pois, esse serviço é realizado apenas pela agência de atendimento.",
    },
    {
        DESVIO: "Não informou valores de taxas ou prazos",
        RESOLUCAO: "Sempre deve-se repassar claramente todas as informações ao cliente de suas solicitações, sendo de forma correta e completas, assim como taxas e prazos.",
    },
    {
        DESVIO: "Não Confirma Dados Completosdo Titular",
        RESOLUCAO: "Deve-se confirmar e registrar todas as informações do cliente durante o atendimento. Tais como, nome completo, telefone de contato, RG e CPF, data de nascimento e nome da mãe (caso necessário), nas solicitações.",
    },
    {
        DESVIO: "Realiza abertura de nota de forma incorreta.",
        RESOLUCAO: "Ter atenção na abertura de notas. Sempre reativar uma O.S de acordo com a solicitação do cliente, caso haja nota rejeitada realizar a reativação conforme orientado, sempre seguindo o script padrão.",
    },
    {
        DESVIO: "Não realizou transferência para a central de negociações.",
        RESOLUCAO: "Quando o cliente entrar em contato solicitando informações a respeito dos seus débitos, gentilmente informe sobre a transferência para a central de negociações. Essa opção é uma maneira ágil e conveniente para o cliente resolver sua situação financeira, evitando, dessa forma, a necessidade de entrar em contato com o atendimento ao cliente novamente. Vale ressalvar que é de suma importância realizar a confirmação positiva dos dados do titular, antes de realizar a transferência para a central de negociações.",
    },
    {
        DESVIO: "Omissão de atendimento.",
        RESOLUCAO: "RESOLUÇÃO 1000 / Art. 412. A distribuidora deve considerar, na avaliação da procedência ou improcedência da reclamação, a legislação, o mérito, a fundamentação, os direitos e deveres do consumidor e demais usuários, os contratos, a existência de nexo causal, a ação ou omissão, negligência ou imprudência da distribuidora ou de seus contratados.",
    },
    {
        DESVIO: "Não confirma dados do titular na transferência.",
        RESOLUCAO: "Deve-se confirmar todas as informações do cliente como, nome completo, RG e CPF, data de nascimento e nome da mãe durante o atendimento, antes de transferir para a central de negociações.",
    },
    {
        DESVIO: "Firmeza no repasse de informações.",
        RESOLUCAO: "Deve-se repassar com convicção todas as informações registradas e disponíveis em sistema, quando o colaborador evitando longas pausas ou entrar em contradição na informação repassada anteriormente.",
    },
    {
        DESVIO: "Transferência indevida para pesquisa de satisfação.",
        RESOLUCAO: "Conforme o informativo 02/2025 Todas as ligações enviadas para pesquisa devem seguir script, que irá compor a Nova Ficha de Monitoria, e as ligações que não seguirem o script poderão ser classificadas como omissão de atendimento e desconexão indevida, podendo ocasionar medidas disciplinares.",
    },
    {
        RESOLUCAO: "Deve-se repassar de forma clara e transparente o protocolo do atendimento prestado.",
        DESVIO: "Transparência no repasse de informações. ",
    },
    {
        DESVIO: "Não realiza script de desconexão",
        RESOLUCAO: "Ao concluir o atendimento, é importante se mostrar disponível, perguntar ao cliente se há algo mais em que se possa auxiliar e se restaram dúvidas Durante a interação, seja empático, é fundamental que o colaborador tenha certo “sorriso” na voz — claro, desde que a situação que está sendo tratada permita.",
    },
    {
        DESVIO: "Não preenche script corretamente.",
        RESOLUCAO: "Ao registrar o atendimento, é fundamental inserir com precisão todas as informações fornecidas durante a ligação no script, conforme passado no treinamento inicial.  ",
    },
    {
        DESVIO: "Não realizou o registro de informação tela ágil",
        RESOLUCAO: "Quando for enviar 2º via de fatura via Aplicativo WhatsApp (tela ágil) deve-se registrar o atendimento prestado em INFORMAÇÃO Categoria 1111 – ATENDIMENTO/ESTRUTURA DE ATENDIMENTO REGISTRO DE ATENDIMENTO: Atendimento realizado ao cliente [NOME DO TITULAR OU REPRESENTANTE] que solicitou o envio da (s) fatura (s) [REFERÊNCIA (S) DA (S) FATURA (S)] ao WhatsApp de número [XX 9999-9999].",
    },
    {
        DESVIO: "Não realiza corretamente o script de ligação muda",
        RESOLUCAO: "Deve-se chamar o cliente 3 vezes entre curtos intervalos; caso não haja resposta do cliente, realiza-se o script de desconexão e encerra-se a chamada. Script de desconexão: Senhor ou Senhora a ligação está muda peço que desligue e ligue novamente (3x), por falta de comunicação a equatorial finaliza o contato (3x), e Encerrar de imediato, de modo a estar pronto para atender prontamente o próximo cliente.",
    },
    {
        DESVIO: "Não realiza o CALL BACK (RETORNO DE CHAMADAS)",
        RESOLUCAO:  "De acordo com a RESOLUÇÃO NORMATIVA ANEELNº1.000. Art. 388. A distribuidora não pode finalizar a ligação telefônica antes de concluir o atendimento ao consumidor e demais usuários. ",
    },
    {
        DESVIO: "Repasse de Informação incompleto ao cliente",
        RESOLUCAO: "Sempre que uma solicitação não puder ser atendida pela central, verifique a possibilidade de encaminhar o cliente para outros canais disponíveis (WhatsApp (clara), site e agência), evitando assim que o cliente precise entrar em contato com a central de atendimento. No caso de atualização cadastral, este procedimento poderá ser feito pelo site (Equatorial Energia, Acesso Rápido, Sua Conta, atualizar dados do titular) ou na agência, fornecendo todas as informações necessárias e anexando os documentos do titular da conta contrato.",
    },
    {
        DESVIO: "TROTE",
        RESOLUCAO: "Quando receber uma ligação de trote ou de um cliente que usa linguagem inapropriada, siga o procedimento de encerramento conforme as diretrizes e finalize a chamada imediatamente.",
    },
    {
        DESVIO: "Registra solicitação na tipologia incorreta.",
        RESOLUCAO: "Entender inteiramente as solicitações e informações fornecidas pelo cliente, registrando-as de maneira precisa. Caso haja necessidade de reativação de notas rejeitadas, é importante verificar se o cliente resolveu o problema antes de reativar a ordem de serviço e comunicar o novo prazo estabelecido. Quando se tratar da substituição do medidor de energia no local, o prazo é de 5 dias úteis. O registro deve ser feito na categoria 1116 - Prazos e Acompanhamento de solicitação.",
    },
    {
        DESVIO: "Realiza procedimento incorreto de abertura religação de confiança.",
        RESOLUCAO: "Ter atenção na abertura da solicitação de religação, confirmar os valores pagos, data, hora e banco arrecadador ( utilizar script de religação em confiança padrão), em caso de não confirmação, orientar o cliente a solicitar a religação em agência.",
    },
    {
        DESVIO: "Não Enviou Para Pesquisa de Satisfação",
        RESOLUCAO: "finalizar qualquer atendimento comercial, orientamos que os colaboradores encaminhem proativamente o cliente para avaliar a qualidade do serviço prestado por meio da pesquisa de satisfação apenas as sextas-feiras, após realizar fraseologia. Esta prática é essencial para garantir a excelência no atendimento e manter um alto padrão de qualidade em nossos serviços.",
    },
    {
        DESVIO: "Não pergunta se pode ajudar em algo a mais. ",
        RESOLUCAO: "Sempre que concluir toda e qualquer solicitação, é de suma importância perguntar se pode ajudar em algo a mais, deixando-se sempre à disposição para oferecer um atendimento humanizado e de qualidade conforme os padrões da empresa. ",
    },
    {
        DESVIO: "Não realiza script de desconexão",
        RESOLUCAO: "Ao concluir o atendimento, é importante se mostrar disponível, perguntar ao cliente se há algo mais em que se possa auxiliar e se restaram dúvidas Durante a interação, seja empático, é fundamental que o colaborador tenha certo “sorriso” na voz — claro, desde que a situação que está sendo tratada permita.",
    },
    {
        DESVIO: "Não se identifica no início do atendimento",
        RESOLUCAO: "Identificar-se no início de uma ligação é fundamental para criar uma conexão com o cliente, transmitindo confiança e profissionalismo. Essa simples ação torna o atendimento mais transparente e acolhedor, além de facilitar a comunicação. Ela demonstra respeito ao cliente e contribui para uma experiência mais positiva e eficiente.",
    },
    {
        DESVIO: "Não se atentou as informações repassadas pelo cliente. ",
        RESOLUCAO: "É importante estar atento às informações fornecidas pelo cliente ao solicitar o serviço desejado, evitando o uso do celular durante o atendimento e as conversas paralelas, que podem interferir e prejudicar a qualidade do atendimento oferecido.",
    },
    
    {
        RESOLUCAO: "Se você receber uma chamada em que não consegue reconhecer ou encontrar os dados da unidade consumidora, é recomendado utilizar a ferramenta ATC do estado correspondente. Dessa forma, asseguramos uma maior eficácia e precisão no serviço oferecido.",
        DESVIO: "Realizou procedimento na Conta Contrato errada.",
    },
    {
        DESVIO: "Repasse de Informações Geradas em Sistema Auxiliar ATC.",
        RESOLUCAO: "Assim que o uso do sistema auxiliar ATC for autorizado, o colaborador deve proceder com o atendimento e, ao final, comunicar que está utilizando um sistema auxiliar devido à instabilidade no sistema comercial. Lembre-se de informar o número do 'Registro de Atendimento'.",
    },
    {
        DESVIO: "Realiza abertura de reclamação de forma incorreta.",
        RESOLUCAO: "Ter atenção na abertura dos serviços de reclamação solicitado pelo cliente. Sempre verificar se a unidade é grupo “B”. Caso a conta contrato do cliente for “Geradora” ou “Beneficiária” encaminhar o cliente para o setor de Geração distribuída, Caso cliente seja grupo ”A” encaminhar o mesmo para o setor de Grandes Clientes. Sempre repassar o número das centrais de atendimento para o cliente.",
    },
    {
        DESVIO: "Não preenche o script de informação corretamente",
        RESOLUCAO: "Ao finalizar o atendimento, é essencial preencher o script de informações de maneira adequada. Isso garante que, em situações de auditoria, tenhamos à disposição os dados necessários, que ficam documentados no protocolo, evitando qualquer inconsistência nas informações.",
    },
    {
        DESVIO: "Não Finalizou a Chamada (tempo em ligação 20 minutos)",
        RESOLUCAO: "Segurar o cliente em linha impacta diretamente no atendimento dos clientes que estão aguardando ser atendidos, sendo caracterizado uma conduta que inflige os paramentos da qualidade na prestação de serviço.  Ao prestar o atendimento realizar o script de Desconexão. Script de desconexão: Senhor ou Senhora a ligação está muda peço que desligue e ligue novamente (3x), por falta de comunicação a equatorial finaliza o contato (3x), e Encerrar de imediato, de modo a estar pronto para atender prontamente o próximo cliente.",
    },
    {
        DESVIO: "Informar Prazo de solicitação incluindo hora de conclusão.",
        RESOLUCAO: "Quanto aos prazos, pedimos que não indique um prazo em horas. Caso ocorra uma situação que exija a realocação da equipe com urgência, o atendimento ao cliente não poderá ser feito no horário previamente estabelecido.",
    },
    {
        DESVIO: "Não Tabulou a chamada Recepcionada.",
        RESOLUCAO: "Conforme informativo comercial nº 083/2024, A tabulação deve ser realizada durante o atendimento de acordo com a solicitação do cliente. Ao finalizar a chamada, a categoria selecionada será classificada automaticamente.",
    },
    {
        DESVIO: "Interrompe o cliente demasiadamente.",
        RESOLUCAO:  "Interromper um cliente pode ser desagradável e prejudicar a relação com ele.Para lidar com clientes difíceis, é importante ouvir ativamente e evitar interrupções. Assim você consegue repassar uma informação ou orientação de forma assertiva.",
    },
]