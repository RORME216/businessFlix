export const logos = [
    {
        "link": "https://ebmac.com.br/novo/",
        "path": "/photos/nossosParceiros/EBMAC.png",
        "alt": "Logo da empresa EBMAC - Sustentável em todos os caminhos"
    },
    {
        "link": "https://www.pblopes.com.br/",
        "path": "/photos/nossosParceiros/pbl_lopes_scania_02.png",
        "alt": "Logo da empresa P.B. Lopes | Scania"
    },
    {
        "link": "https://uplab.sp.senai.br/",
        "path": "/photos/nossosParceiros/up_labs_pic.jpg",
        "alt": "Logo da empresa UpLab"
    },
    {
        "link": "https://www.vetro.com.br/",
        "path": "/photos/nossosParceiros/vetro_solucoes.png",
        "alt": "Logo da empresa Vetro - Soluções Inteligentes em Tubos e Conexões"
    },
    {
        "link": "https://www.correios.com.br/",
        "path": "/photos/nossosParceiros/correios_logo.png",
        "alt": "Logo da empresa Correios - Empresa Brasileira de Correios e Telégrafos"
    }
  ]


  /*
 * Tutorial: Como Adicionar uma Nova Logo ao Projeto
 *
 * Siga os passos abaixo para adicionar uma nova logo à lista de logos.
 * Não é necessário conhecimento em programação, apenas atenção aos detalhes.
 *
 * ----------------------------------------------------------------------------
 *
 * Passo 1: Prepare a Imagem da Logo
 * 1. Escolha a imagem da logo que deseja adicionar.
 * 2. Salve a imagem na pasta correta do projeto. No exemplo, as imagens estão na pasta `/photos/nossosParceiros/`.
 *    - Se você não souber onde salvar, peça ajuda a alguém que conheça a estrutura do projeto.
 * 3. Anote o caminho da imagem (por exemplo: `/photos/nossosParceiros/nova_logo.png`).
 *
 * ----------------------------------------------------------------------------
 *
 * Passo 2: Adicione a Nova Logo ao Arquivo JavaScript
 * 1. Localize a lista de logos no arquivo JavaScript. Ela começa com `export const logos = [` e termina com `];`.
 * 2. No final da lista, antes do `];`, adicione uma vírgula (`,`) na última logo da lista, se ainda não houver.
 * 3. Abaixo da última logo, adicione um novo bloco com as informações da nova logo. O formato é o seguinte:
 *
 *    {
 *        "link": "COLE_AQUI_O_LINK_DA_EMPRESA",
 *        "path": "COLE_AQUI_O_CAMINHO_DA_IMAGEM",
 *        "alt": "COLE_AQUI_A_DESCRIÇÃO_DA_LOGO"
 *    }
 *
 * 4. Substitua os valores pelos dados da nova logo:
 *    - `"COLE_AQUI_O_LINK_DA_EMPRESA"`: Coloque o link do site da empresa.
 *    - `"COLE_AQUI_O_CAMINHO_DA_IMAGEM"`: Coloque o caminho da imagem que você salvou no Passo 1.
 *    - `"COLE_AQUI_A_DESCRIÇÃO_DA_LOGO"`: Escreva uma breve descrição da logo (por exemplo: "Logo da empresa XYZ - Soluções em Tecnologia").
 *
 *    Exemplo:
 *    {
 *        "link": "https://www.novaempresa.com.br",
 *        "path": "/photos/nossosParceiros/nova_logo.png",
 *        "alt": "Logo da empresa Nova Empresa - Soluções em Tecnologia"
 *    }
 *
 * 5. Certifique-se de que o novo bloco esteja dentro da lista `logos`, antes do `];`.
 *
 * ----------------------------------------------------------------------------
 *
 * Passo 3: Salve o Arquivo
 * 1. Depois de adicionar a nova logo, salve o arquivo JavaScript.
 * 2. Pronto! A nova logo foi adicionada ao projeto.
 *
 * ----------------------------------------------------------------------------
 *
 * Dicas Importantes:
 * - Sempre use vírgulas para separar os itens da lista.
 * - Verifique se o caminho da imagem está correto e se a imagem realmente existe na pasta.
 * - Se tiver dúvidas, peça ajuda a alguém com experiência em programação.
 *
 * ----------------------------------------------------------------------------
 *
 * Exemplo Completo da Lista de Logos:
 *
 * export const logos = [
 *     {
 *         "link": "https://ebmac.com.br/novo/",
 *         "path": "/photos/nossosParceiros/EBMAC.png",
 *         "alt": "Logo da empresa EBMAC - Sustentável em todos os caminhos"
 *     },
 *     {
 *         "link": "https://www.pblopes.com.br/",
 *         "path": "/photos/nossosParceiros/pbl_lopes_scania_02.png",
 *         "alt": "Logo da empresa P.B. Lopes | Scania"
 *     },
 *     {
 *         "link": "https://uplab.sp.senai.br/",
 *         "path": "/photos/nossosParceiros/up_labs_pic.jpg",
 *         "alt": "Logo da empresa UpLab"
 *     },
 *     {
 *         "link": "https://www.vetro.com.br/",
 *         "path": "/photos/nossosParceiros/vetro_solucoes.png",
 *         "alt": "Logo da empresa Vetro - Soluções Inteligentes em Tubos e Conexões"
 *     },
 *     {
 *         "link": "https://www.correios.com.br/",
 *         "path": "/photos/nossosParceiros/correios_logo.png",
 *         "alt": "Logo da empresa Correios - Empresa Brasileira de Correios e Telégrafos"
 *     },
 *     {
 *         "link": "https://www.novaempresa.com.br",
 *         "path": "/photos/nossosParceiros/nova_logo.png",
 *         "alt": "Logo da empresa Nova Empresa - Soluções em Tecnologia"
 *     }
 * ];
 */