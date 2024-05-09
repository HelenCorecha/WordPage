from flask import Flask, request, jsonify

app = Flask(__name__)


users = []


@app.route('/cadastro', methods=['POST'])
def cadastrar_usuario():
    data = request.json  
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    
    if not username or not email or not password:
        return jsonify({'error': 'Todos os campos são obrigatórios'}), 400

    
    if any(user['email'] == email for user in users):
        return jsonify({'error': 'E-mail já cadastrado'}), 400

    
    new_user = {
        'username': username,
        'email': email,
        'password': password
    }
    users.append(new_user)

    return jsonify({'message': 'Usuário cadastrado com sucesso'}), 201

if __name__ == '__main__':
    app.run(debug=True)

