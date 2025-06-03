let desvioCount = 1;
let desviosSelecionados = [];

// Recuperar desvios armazenados no localStorage
let desviosPersonalizados = JSON.parse(localStorage.getItem('desviosPersonalizados')) || [];

document.addEventListener('DOMContentLoaded', function () {
    // Preencher o seletor de desvios ao carregar a página
    preencherSelectGlobal();
    carregarDesviosPersonalizados();
});

// Função para preencher as opções do seletor de desvios
function preencherSelectGlobal(filtro = "") {
    const seletor = document.getElementById("seletorDesvio");
    seletor.innerHTML = '<option value="">Selecione um desvio</option>';

    // Adicionar desvios personalizados ao seletor
    desviosPersonalizados.forEach((desvio, index) => {
        if (desvio.DESVIO.toLowerCase().includes(filtro.toLowerCase())) {  // Filtro no nome do desvio
            const option = document.createElement("option");
            option.value = `custom-${index}`;
            option.textContent = desvio.DESVIO;
            seletor.appendChild(option);
        }
    });

    // Adicionar desvios globais ao seletor, se ainda não foram selecionados
    DESVIOS.forEach((desvio, index) => {
        if (!desviosSelecionados.includes(index) && !desviosPersonalizados.some(d => d.DESVIO === desvio.DESVIO)) {
            if (desvio.DESVIO.toLowerCase().includes(filtro.toLowerCase())) {  // Filtro no nome do desvio
                const option = document.createElement("option");
                option.value = index;
                option.textContent = desvio.DESVIO;
                seletor.appendChild(option);
            }
        }
    });
}


// Função para filtrar desvios com base no texto do filtro
function filtrarDesvios(valor) {
    preencherSelectGlobal(valor);  // Preenche as opções com base no filtro
}

// Função para adicionar um desvio selecionado à lista de desvios
function adicionarDesvioSelecionado() {
    const select = document.getElementById("seletorDesvio");
    const index = select.value;

    if (index === "") return;

    // Verificar se é um desvio personalizado ou global
    let desvioSelecionado;
    if (index.startsWith('custom-')) {
        const customIndex = parseInt(index.replace('custom-', ''));
        // Verifique se o índice é válido para desvios personalizados
        if (desviosPersonalizados[customIndex]) {
            desvioSelecionado = desviosPersonalizados[customIndex];
        } else {
            console.error('Desvio personalizado não encontrado!');
            return;
        }
    } else {
        // Verifique se o índice é válido para DESVIOS
        if (DESVIOS[index]) {
            desvioSelecionado = DESVIOS[index];
        } else {
            console.error('Desvio global não encontrado!');
            return;
        }
    }

    // Verificar se o desvio já foi adicionado
    if (desviosSelecionados.includes(index)) {
        alert("Esse desvio já foi adicionado.");
        return;
    }

    desviosSelecionados.push(index);

    const container = document.getElementById("lista-desvios-adicionados");
    const item = document.createElement("div");
    item.className = "desvio-item";
    item.dataset.index = index;

    item.innerHTML = `
        <div class="form-group">
            <label>Desvio:</label>
            <input type="text" value="${desvioSelecionado.DESVIO}"  />
        </div>
        <div class="form-group">
            <label>O QUE DEVE SER FEITO:</label>
            <textarea class="resolucao-text">${desvioSelecionado.RESOLUCAO}</textarea>
        </div>
        <button type="button" id='cancel-button' onclick="removerDesvioItem(this)">❌</button>
    `;

    container.appendChild(item);
    preencherSelectGlobal();  // Atualiza o seletor após adicionar um desvio
}


// Função para remover um desvio da lista de desvios
function removerDesvioItem(botao) {
    const item = botao.closest(".desvio-item");
    const index = item.dataset.index;

    // Remover o desvio da lista de selecionados
    desviosSelecionados = desviosSelecionados.filter(i => i !== index);

    // Remove o item do DOM
    item.remove();

    preencherSelectGlobal();  // Atualiza o seletor após a remoção
}

// Função para preencher as opções do select de desvios
function preencherSelectOpcoesDesvio(select) {
    DESVIOS.forEach((desvio, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.textContent = desvio.DESVIO;
        select.appendChild(option);
    });
}

// Função para preencher a resolução do desvio selecionado
function preencherResolucao(index) {
    const select = document.getElementById(`desvio${index}`);
    const textarea = document.getElementById(`resolucao${index}`);

    const selectedIndex = select.value;
    if (selectedIndex !== "") {
        textarea.value = DESVIOS[selectedIndex].RESOLUCAO;
    } else {
        textarea.value = '';
    }
}

// Função para copiar o formulário preenchido para a área de transferência
function copiarFormulario() {
    const formulario = document.getElementById('meuFormulario');
    let textoParaCopiar = '';

    // Adicionar EQTL
    const eqtlSelecionado = formulario.querySelector('input[name="eqtl"]:checked');
    if (eqtlSelecionado) {
        textoParaCopiar += `EQTL: ${eqtlSelecionado.value}\n`;
    }

    // Adicionar outros campos básicos
    const campos = [
        { id: 'mapadeligacao', label: 'MAPA DA LIGAÇÃO' },
        { id: 'telefone', label: 'TELEFONE' },
        { id: 'cc_uc', label: 'CC / UC' },
        { id: 'protocolo', label: 'PROTOCOLO' },
        { id: 'servico', label: 'SERVIÇO' },
        { id: 'idChamada', label: 'ID CHAMADA' }
    ];

    campos.forEach(campo => {
        const valor = document.getElementById(campo.id)?.value;
        if (valor) {
            textoParaCopiar += `${campo.label}: ${valor}\n`;
        }
    });

    // Adicionar desvios (de ambas as fontes)
    const desviosComSelect = formulario.querySelectorAll('.desvio-item .desvio-select');
    const desviosAdicionados = document.querySelectorAll('#lista-desvios-adicionados .desvio-item');

    if (desviosComSelect.length > 0 || desviosAdicionados.length > 0) {
        textoParaCopiar += '\nDESVIOS IDENTIFICADOS:\n';
        textoParaCopiar += '----------------------------------------\n';

        // Desvios com select
        desviosComSelect.forEach((select, index) => {
            const resolucao = select.closest('.desvio-item').querySelector('.resolucao-text');
            if (select.value !== "" && resolucao) {
                textoParaCopiar += `DESVIO ${index + 1}:\n`;
                textoParaCopiar += `Desvio: ${DESVIOS[select.value].DESVIO}\n`;
                textoParaCopiar += `O que deve ser feito: ${resolucao.value}\n`;
                textoParaCopiar += '----------------------------------------\n';
            }
        });

        // Desvios adicionados via botão verde
        desviosAdicionados.forEach((item, index) => {
            const input = item.querySelector('input[type="text"]');
            const textarea = item.querySelector('textarea');
            if (input && textarea) {
                const numeroDesvio = desviosComSelect.length + index + 1;
                textoParaCopiar += `DESVIO ${numeroDesvio}:\n`;
                textoParaCopiar += `Desvio: ${input.value}\n`;
                textoParaCopiar += `O que deve ser feito: ${textarea.value}\n`;
                textoParaCopiar += '----------------------------------------\n';
            }
        });
    }

    // Adicionar data e hora
    const agora = new Date();
    textoParaCopiar += `\n\nCaso queira ouvir a gravação, solicite a supervisão antes de contestar o SisFeedback. 
Caso concorde com os dados apresentados, clique abaixo na opção "SIM". 
Caso discorde dos dados apresentados após ouvir a gravação, clique em "NÃO" e justifique sua resposta.`;
    textoParaCopiar += `\n\nRegistro gerado em: ${agora.toLocaleDateString()} às ${agora.toLocaleTimeString()}`;

    // Copiar para a área de transferência
    navigator.clipboard.writeText(textoParaCopiar).then(() => {
        alert('Formulário copiado para a área de transferência!\n\nVocê pode agora colar o conteúdo em qualquer aplicativo.');
    }).catch(err => {
        console.error('Erro ao copiar: ', err);
        const fallback = document.createElement('textarea');
        fallback.value = textoParaCopiar;
        document.body.appendChild(fallback);
        fallback.select();
        document.execCommand('copy');
        document.body.removeChild(fallback);
        alert('Formulário copiado para a área de transferência!\n\nVocê pode agora colar o conteúdo em qualquer aplicativo.');
    });
}



// Função para limpar o formulário
function limparFormulario() {
    if (confirm('Tem certeza que deseja limpar todo o formulário?')) {
        location.reload(); // Recarrega a página
    }
}



document.getElementById('meuFormulario').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede envio real, mas só será chamado se o formulário for válido
    copiarFormulario();
});


//-------------------------add Desvios e Exportar Desvios--------------------------------------

// Função para carregar os desvios personalizados ao iniciar a página
function carregarDesviosPersonalizados() {
    const container = document.getElementById('lista-desvios-visualizacao');
    container.innerHTML = '';

    if (desviosPersonalizados.length === 0) {
        container.innerHTML = '<p>Nenhum desvio personalizado adicionado.</p>';
    } else {
        desviosPersonalizados.forEach((desvio, index) => {
            const div = document.createElement('div');
            div.className = 'desvio-personalizado-item';
            div.innerHTML = `
                <p><strong>Desvio:</strong> ${desvio.DESVIO}</p>
                <p><strong>Resolução:</strong> ${desvio.RESOLUCAO}</p>
                <button onclick="deletarDesvio(${index})" style='position: absolute;right: 0;top: 0;border-radius: 15px;color: red;'>🗑️ Excluir</button>
            `;
            container.appendChild(div);
        });
    }
}


// Função para adicionar desvio personalizado
document.getElementById('btn-add-desvio').addEventListener('click', () => {
    const desvio = prompt("Digite o título do novo desvio:");
    if (!desvio) return;

    const resolucao = prompt("Digite a resolução do desvio:");
    if (!resolucao) return;

    // Adicionar ao array
    desviosPersonalizados.push({ DESVIO: desvio, RESOLUCAO: resolucao });

    // Salvar no localStorage
    localStorage.setItem('desviosPersonalizados', JSON.stringify(desviosPersonalizados));

    alert("Desvio adicionado. Você pode exportar depois para salvar.");
    carregarDesviosPersonalizados(); // Atualiza a visualização no popup
});

// Função para exportar desvios como arquivo JS
function exportarDesviosComoJS() {
    const timestamp = Date.now();
    const conteudo = JSON.stringify(desviosPersonalizados, null, 2);
    const blob = new Blob([conteudo], { type: "application/javascript" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `desvios-personalizados_${timestamp}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Função para visualizar os desvios personalizados no popup
function visualizarDesvios() {
    const container = document.getElementById('lista-desvios-visualizacao');
    container.innerHTML = '';

    if (desviosPersonalizados.length === 0) {
        container.innerHTML = '<p>Nenhum desvio personalizado adicionado.</p>';
    } else {
        desviosPersonalizados.forEach((desvio, index) => {
            const div = document.createElement('div');
            div.className = 'desvio-personalizado-item';
            div.innerHTML = `
                <p><strong>Desvio:</strong> ${desvio.DESVIO}</p>
                <p><strong>Resolução:</strong> ${desvio.RESOLUCAO}</p>
                <button style="right: 5px;top: 4px;margin: auto;display: block;position: absolute;border-radius: 15px;padding-right: 10px;padding-left: 5px;color: red;" onclick="deletarDesvio(${index})">🗑️ Excluir</button>
                <hr>
            `;
            container.appendChild(div);
        });
    }

    document.getElementById('popup-visualizacao').style.display = 'flex';
}

// Função para fechar o popup
function fecharPopup() {
    document.getElementById('popup-visualizacao').style.display = 'none';
}

// Função para deletar um desvio personalizado
function deletarDesvio(index) {
    // Remove o desvio do array
    desviosPersonalizados.splice(index, 1);

    // Atualiza o localStorage
    localStorage.setItem('desviosPersonalizados', JSON.stringify(desviosPersonalizados));

    // Atualiza a visualização dos desvios no popup
    carregarDesviosPersonalizados();

    // Atualiza o seletor de desvios, pois a lista foi alterada
    preencherSelectGlobal();
}
