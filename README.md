🛒 PromoHunter

PromoHunter é um aplicativo Android que permite aos usuários postarem fotos de produtos em promoção (de supermercados, farmácias, pet shops e hortifrutis), ajudando a comparar preços de maneira fácil, prática e colaborativa.

O aplicativo é uma rede social de promoções, onde os usuários podem pesquisar por categoria, visualizar promoções no mapa e receber alertas sobre novas promoções.

📱 Funcionalidades

🔐 Autenticação de usuários (cadastro e login com senha de 6 dígitos)

📸 Postagem de promoções com foto, nome do produto e preço

🗺️ Mapa interativo mostrando a localização das promoções

🗂️ Pesquisa por categorias (Supermercado, Farmácia, Pet Shop, Hortifrúti)

🔔 Alertas de promoções notificando o estabelecimento e a oferta

🛡️ Segurança: apenas usuários autenticados podem postar

🛠️ Tecnologias Utilizadas
React Native + Expo

 ==>Firebase Authentication (Login e cadastro)

 ==>Firebase Firestore (Banco de dados de promoções)

 ==>Firebase Storage (Upload de imagens)

 ==>Expo ImagePicker (para capturar ou escolher fotos)

 ==>Expo Location (para capturar localização)

 ==>React Navigation (navegação entre telas)

 ==>React Native Paper (componentes de UI)

 ==>React Native Maps (mapas interativos)

🗂 Estrutura do Projeto:
bash/
├── App.js
├── screens/
│   ├── HomeScreen.js
│   ├── LoginScreen.js
│   ├── RegisterScreen.js
│   ├── PostPromotionScreen.js
│   ├── PromotionsMapScreen.js
├── services/
│   ├── firebaseConfig.js
│   └── auth.js
├── assets/
├── .env
└── README.md
📦 Como Instalar e Rodar o Projeto
Pré-requisitos
Node.js e npm instalados

Expo CLI instalado (npm install -g expo-cli)

Conta no Firebase

App Expo Go no seu celular (para rodar o app)

Passos para rodar:
bash
# Clone o repositório
git clone https://github.com/seu-usuario/promohunter.git

# Acesse o diretório do projeto
cd promohunter

# Instale as dependências
npm install

# Crie o arquivo .env na raiz do projeto
touch .env
No .env, adicione suas chaves:
env/
GOOGLE_MAPS_API_KEY=sua_chave_do_google_maps
FIREBASE_API_KEY=sua_chave_do_firebase
Depois, execute:

bash
npx expo start
Escaneie o QR Code com o app Expo Go e use o aplicativo no seu celular 📱.

📷 Telas do App
(Adicione screenshots aqui futuramente!)

🛡️ Licença
Este projeto está sob a licença MIT.
Sinta-se livre para usar, modificar e compartilhar!

🙋‍♂️ Autor
Feito com ❤️ por Marcos Silva.

📣 Vamos caçar promoções juntos!
