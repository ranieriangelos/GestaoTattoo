-- Cria o banco de dados GestaoTattoo
CREATE DATABASE GestaoTattoo;

-- Seleciona o banco de dados recém-criado
USE GestaoTattoo;

-- Tabela de Abertura de Caixa
CREATE TABLE AberturaDeCaixa (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    DataHoraAbertura DATETIME,
    ValorInicial DECIMAL(10, 2),
    ResponsavelAbertura VARCHAR(255)
);

-- Tabela de Fechamento de Caixa
CREATE TABLE FechamentoDeCaixa (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    DataHoraFechamento DATETIME,
    ValorFinal DECIMAL(10, 2),
    ResponsavelFechamento VARCHAR(255),
    Observacoes TEXT
);

-- Tabela de Movimentações de Caixa
CREATE TABLE MovimentacoesDeCaixa (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    IDAberturaDeCaixa INT,
    TipoMovimentacao ENUM('entrada', 'saida'),
    DescricaoMovimentacao VARCHAR(255),
    ValorMovimentacao DECIMAL(10, 2),
    FOREIGN KEY (IDAberturaDeCaixa) REFERENCES AberturaDeCaixa(ID)
);


-- Tabela Comanda
CREATE TABLE Comanda (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    IDArtista INT,
    IDCliente INT,
    IDAgendamento INT,
    SinalPago DECIMAL(10, 2),
    ValorTotalBruto DECIMAL(10, 2),
    ValorRestante DECIMAL(10, 2),
    FormaDePagamento VARCHAR(255),
    ValorLiquido DECIMAL(10, 2),
    StatusDaComanda VARCHAR(255),
    Responsavel VARCHAR(255),
    CodigoPromocional VARCHAR(50)
);

-- Tabela de Formas de Pagamento Recebidas
CREATE TABLE FormasDePagamentoRecebidas (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    IDMovimentacaoDeCaixa INT,
    IDFormaDePagamento INT,
    ValorRecebido DECIMAL(10, 2),
    NumeroParcelas INT,
    FOREIGN KEY (IDMovimentacaoDeCaixa) REFERENCES MovimentacoesDeCaixa(ID)
);

-- Tabela de Produtos
CREATE TABLE Produtos (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(255),
    Descricao TEXT,
    ValorPago DECIMAL(10, 2),
    ValorRevenda DECIMAL(10, 2),
    Quantidade INT,
    QuantidadeMinima INT,
    QuantidadeMaxima INT
);

-- Tabela Itens de Comanda
CREATE TABLE ItensDeComanda (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    IDComanda INT,
    IDProduto INT,
    Quantidade INT,
    PrecoUnitario DECIMAL(10, 2),
    FOREIGN KEY (IDComanda) REFERENCES Comanda(ID)
);

-- Tabela Artistas
CREATE TABLE Artistas (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(255),
    WhatsApp VARCHAR(20),
    Email VARCHAR(255),
    Comissao DECIMAL(5, 2)
);


-- Tabela Produtos Vendidos
CREATE TABLE ProdutosVendidos (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(255),
    Descricao TEXT,
    Preco DECIMAL(10, 2),
    Quantidade INT
);

-- Tabela Forma de pagamento
CREATE TABLE FormaDePagamento (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    FormaDePagamento VARCHAR(255),
    TaxaIntermediacao DECIMAL(5, 2),
    TaxaParcelamento DECIMAL(5, 2)
);

-- Tabela Clientes
CREATE TABLE Clientes (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(255),
    Sobrenome VARCHAR(255),
    Cidade VARCHAR(255),
    Celular VARCHAR(20),
    Email VARCHAR(255),
    Instagram VARCHAR(255),
    Nascimento DATE,
    RG VARCHAR(20),
    IDAnamnese INT,
    Recorrencia VARCHAR(255),
    TrabalhosRealizados INT,
    TrabalhosAgendados INT,
    TrabalhosCancelados INT,
    TotalInvestido DECIMAL(10, 2);

);

-- Tabela Atendimento
CREATE TABLE Atendimento (
    IDServico INT,
    NomeServico VARCHAR(255),
    DescricaoServico TEXT,
    PrecoServico DECIMAL(10, 2),
    IDComanda INT,
    IDAgendamento INT
);

-- Tabela Histórico de Pagamentos
CREATE TABLE HistoricoDePagamentos (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    IDComanda INT,
    DataDoPagamento DATE,
    ValorPago DECIMAL(10, 2)
);

-- Tabela Agenda
CREATE TABLE Agenda (
    IDAgendamento INT AUTO_INCREMENT PRIMARY KEY,
    IDCliente INT,
    IDArtista INT,
    DataDoAgendamento DATE,
    HoraDoAgendamento TIME,
    AberturaDeAgendaDataHora DATETIME,
    SinalPago DECIMAL(10, 2),
    StatusAgenda VARCHAR(255)
);

-- Tabela Tatuagens Realizadas
CREATE TABLE TatuagensRealizadas (
    IDTrabalho INT AUTO_INCREMENT PRIMARY KEY,
    IDAgendamento INT,
    ValorCompleto DECIMAL(10, 2),
    ValorRecebido DECIMAL(10, 2),
    SinalPago DECIMAL(10, 2),
    FormaDePagamento VARCHAR(255),
    IDArtista INT,
    Data DATE,
    Descricao TEXT,
    Foto VARCHAR(255),
    Estilo VARCHAR(255),
    IDComanda VARCHAR (255),
    IDCliente VARCHAR (255)
);

-- Tabela Avaliação e Feedback
CREATE TABLE AvaliacaoEFeedback (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    IDCliente INT,
    Comentario TEXT,
    Classificacao INT
);

-- Tabela Promoção e Descontos
CREATE TABLE PromocaoEDescontos (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    DescricaoPromocao VARCHAR(255),
    TipoPromocao VARCHAR(255),
    ValorPromocao DECIMAL(10, 2),
    CodigoPromocional VARCHAR(50)
);

-- Tabela Funcionarios/Equipe
CREATE TABLE FuncionariosEquipe (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(255),
    Cargo VARCHAR(255),
    Salario DECIMAL(10, 2),
    HorarioDeTrabalho VARCHAR(255),
    Contrato VARCHAR(255)
);

-- Tabela Registro de Equipamento
CREATE TABLE RegistroDeEquipamento (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    NomeEquipamento VARCHAR(255),
    DataDeCompra DATE,
    DataDeManutencao DATE,
    VidaUtilRestante INT
);

-- Tabela Anamnese
CREATE TABLE Anamnese (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    IDCliente INT,
    DataDeCadastro DATE,
    LinkPDF VARCHAR(255)
);


-- Adicione a tabela de Saídas (Saidas)
CREATE TABLE Saidas (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Fornecedor VARCHAR(255),
    Data DATE,
    Descricao TEXT,
    Valor DECIMAL(10, 2),
    Categoria VARCHAR(255),
    FormaDePagamento VARCHAR(255),
    Notas TEXT
);

-- Adicione a tabela de Entradas (Entradas)
CREATE TABLE Entradas (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Data DATE,
    Descricao TEXT,
    Valor DECIMAL(10, 2),
    Tipo VARCHAR(255), -- Tattoo, Piercing, Produto, Outros
    Detalhes TEXT,
    FormaDePagamento VARCHAR(255),
    Artista INT, -- Chave estrangeira para a tabela Artistas
    Cliente INT, -- Chave estrangeira para a tabela Clientes
    Categoria VARCHAR(255) -- Categoria, Recorrente, Eventual
);
-- FIM DO SCRIPT
