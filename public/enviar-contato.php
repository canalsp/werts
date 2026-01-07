<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Configurações
$para_email = 'francisco@werts.com.br'; // E-mail de destino
$assunto_site = 'Novo contato do site Werts';
$assunto_resposta = 'Recebemos sua mensagem - Werts';
$mensagem_resposta = "Olá {nome},\n\nAgradecemos pelo seu contato!\n\nSua mensagem foi recebida com sucesso. Em breve retornaremos o contato.\n\nAtenciosamente,\nEquipe Werts";

// Verifica se é uma requisição POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método não permitido']);
    exit;
}

// Obtém os dados do formulário
$dados = json_decode(file_get_contents('php://input'), true);

// Validação dos campos obrigatórios
$camposObrigatorios = ['nome', 'email', 'telefone', 'assunto', 'mensagem'];
$erros = [];

foreach ($camposObrigatorios as $campo) {
    if (empty($dados[$campo])) {
        $erros[] = "O campo " . ucfirst($campo) . " é obrigatório.";
    }
}

// Validação de e-mail
if (!filter_var($dados['email'], FILTER_VALIDATE_EMAIL)) {
    $erros[] = "O e-mail informado não é válido.";
}

// Se houver erros, retorna os erros
if (!empty($erros)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'errors' => $erros]);
    exit;
}

// Prepara a mensagem do e-mail
$mensagem = "Novo contato recebido através do site:\n\n";
$mensagem .= "Nome: " . htmlspecialchars($dados['nome']) . "\n";
$mensagem .= "E-mail: " . htmlspecialchars($dados['email']) . "\n";
$mensagem .= "Telefone: " . htmlspecialchars($dados['telefone']) . "\n";
$mensagem .= "Assunto: " . htmlspecialchars($dados['assunto']) . "\n";
$mensagem .= "Mensagem:\n" . htmlspecialchars($dados['mensagem']) . "\n";

// Cabeçalhos do e-mail
$headers = "From: " . $dados['email'] . "\r\n";
$headers .= "Reply-To: " . $dados['email'] . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Envia o e-mail para a Werts
$enviado_werts = mail($para_email, $assunto_site, $mensagem, $headers);

// Prepara e envia cópia para o remetente
if (!empty($dados['email']) && !empty($dados['nome'])) {
    $mensagem_remetente = str_replace('{nome}', htmlspecialchars($dados['nome']), $mensagem_resposta);
    $assunto_remetente = 'Re: ' . (!empty($dados['assunto']) ? htmlspecialchars($dados['assunto']) : 'Contato Werts');
    $headers_remetente = "From: $para_email\r\n";
    $headers_remetente .= "Reply-To: $para_email\r\n";
    $headers_remetente .= "X-Mailer: PHP/" . phpversion();
    
    $enviado_remetente = mail($dados['email'], $assunto_remetente, $mensagem_remetente, $headers_remetente);
}

if ($enviado_werts) {
    echo json_encode(['success' => true, 'message' => 'Mensagem enviada com sucesso! Em breve retornaremos o contato.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Erro ao enviar mensagem. Por favor, tente novamente mais tarde.']);
}
