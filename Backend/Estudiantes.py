
from flask import Flask,request, redirect, url_for, flash
from flask_mysqldb import MySQL
from flask_cors import CORS
import requests
import json

app = Flask(__name__)
app.config['MYSQL_HOST'] = '35.238.17.71'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'usac2022_Vacas'
app.config['MYSQL_DB'] = 'Estudiante'
mysql = MySQL(app)
CORS(app)


@app.route('/')
def home():
   return '¡Hola Mundo!'

@app.route('/Registro', methods=['POST'])
def Registro():
    if request.method == 'POST':
        content = request.get_json()

        nombre = content['nombre'],
        correo = content['correo'],
        contraseña = content['contraseña'],
        fechanacimiento = content['fechanacimiento']

        cur = mysql.connection.cursor()
        cur.execute('INSERT INTO Estudiante1 (nombre, correo,contraseña,fechanacimiento) VALUES (%s, %s, %s, %s)', (nombre, correo, contraseña,fechanacimiento))
        mysql.connection.commit()


        return {'res': 'Estudiante Registrado', 'code': 200}

@app.route('/Login', methods=['POST'])
def Login():
    if request.method == 'POST':
        content = request.get_json()

        
        correo = content['correo'],
        contra = content['contraseña']
        cur = mysql.connection.cursor()
        cur.execute('SELECT  * from Estudiante1 WHERE correo = %s AND contraseña = %s', (correo, contra))

        estudiante = cur.fetchone()

        if estudiante:
            return {'res': 'Session Iniciada', 'code': 200}
        else:
            return {'res': 'Error Contraseña y/o usuario', 'code' : 404}

    return ''


if __name__ == '__main__':
   app.run(host='0.0.0.0', port=3000, debug=True)