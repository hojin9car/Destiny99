from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('index.html')

# API 역할을 하는 부분
@app.route('/api/addResult', methods=['GET'])
def add_results():
    index = request.args.get('idx')
    print(index)

    if (index==0):
        react +1;
    elif (index==1):
        spring +1;
    else:
        node +1;

    return jsonify({'msg': '저장되었습니다.'})

@app.route('/api/postResult', methods=['GET'])
def post_results():
    results = list(db.results.find({},{'_id':False}))
    return jsonify({'react': react, 'spring': spring, 'node': node})

app.run('0.0.0.0', port=5000, debug=True)