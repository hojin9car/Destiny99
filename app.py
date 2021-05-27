from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('index.html')

# API 역할을 하는 부분
@app.route('/api/addResult?idx=1', methods=['GET']) #주소 적는 부분 모르겠음
def add_results():
    sample_receive = request.args.get('sample_give') #request 는 왜 빨간줄일까?
    print(sample_receive)

    doc = {'react': 0, 'spring': 0, 'node': 0}
    db.users.insert_one(doc) #users 왜 바꿔줘야 하는지? 그리고 무엇으로 바꿔야하는지?

    return jsonify({'msg': 'list 연결되었습니다!'})

app.run('0.0.0.0', port=5000, debug=True)
