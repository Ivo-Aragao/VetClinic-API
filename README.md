
# VetClinic API

Descrição
A VetClinic API é uma aplicação Node.js para gerenciar informações sobre tutores e seus pets. Ela permite acessar, criar, atualizar e excluir dados relacionados a tutores e pets.

Tecnologias utilizadas
-Node.js
-Express
-Cors
-Middlewares

Rotas

Tutor
GET /tutor: Retorna todas as informações dos tutores cadastrados.
POST /tutor: Cria um novo tutor com as informações fornecidas no corpo da requisição.
GET /tutor/:id: Retorna as informações do tutor com o ID especificado.
PATCH /tutor/:id: Atualiza as informações do tutor com o ID especificado.
PUT /tutor/:id: Substitui todas as informações do tutor com o ID especificado.
DELETE /tutor/:id: Exclui o tutor com o ID especificado.

Pet
GET /pet: Retorna todas as informações dos pets cadastrados.
POST /pet/:tutorId: Adiciona um novo pet ao tutor com o ID especificado.
PUT /pet/:petId/tutor/:tutorId: Atualiza as informações do pet com o ID especificado, pertencente ao tutor com o ID especificado.
DELETE /pet/:petId/tutor/:tutorId: Exclui o pet com o ID especificado, pertencente ao tutor com o ID especificado.

Usuário-ID
GET /usuario-Id: Acessa a administração geral.
GET /usuario-Id/:id: Acessa a administração com o ID de usuário especificado.
POST /usuario-Id: Acessa a administração via método POST.
PATCH /usuario-Id/:id: Acessa a administração com o ID de usuário especificado via método PATCH.
PUT /usuario-Id/:id: Acessa a administração com o ID de usuário especificado via método PUT.
DELETE /usuario-Id/:id: Acessa a administração com o ID de usuário especificado via método DELETE.

Instalação e Execução
1-Certifique-se de ter o Node.js instalado em seu sistema.
2-Abra o terminal e navegue até o diretório raiz do projeto.
3-Execute o comando npm install para instalar as dependências.
4-Execute o comando node app.js para iniciar o servidor.
5-O servidor estará em execução em http://localhost:3000.

Uso
*Use o Postman ou qualquer outra ferramenta de teste de API(REST.CLIENT) para enviar requisições para as rotas disponíveis.
*Certifique-se de enviar as requisições corretamente formatadas e com os dados necessários no corpo ou nos parâmetros, conforme especificado em cada rota. Ex:
{
  "id": 1,
  "name": "Jon doe",
  "phone": "987654321",
  "email": "jondoe@example.com",
  "date_of_birth": "1990-05-25 09:15",
  "zip_code": "12345678",
  "pets": [
    {
      "id": 1,
      "name": "Fluffy",
      "species": "cat",
      "carry": "p",
      "weight": 4,
      "date_of_birth": "2015-10-02 11:30"
    }
  ]
}
*Verifique as respostas retornadas pelo servidor para obter as informações solicitadas ou confirmar o sucesso das operações.

Observações
*Certifique-se de fornecer os dados corretos e válidos ao fazer requisições. Ex: http://localhost:3000/tutor.
*Alguns endpoints requerem IDs para identificar recursos específicos. Verifique a documentação para obter os IDs corretos. Ex: http://localhost:3000/tutor/{id}.
*Em caso de erros, o servidor retornará as mensagens apropriadas e o código de status correspondente.
*Lembre-se de que esta API é apenas para fins de demonstração e pode não estar pronta para uso em produção.