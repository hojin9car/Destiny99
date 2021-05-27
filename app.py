from pymongo import MongoClient

from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

client = MongoClient('localhost', 27017)
db = client.destiny99

@app.route('/')
def home():
    return render_template('index.html')

# API 역할을 하는 부분
@app.route('/api/addResult', methods=['GET'])
def add_results():
    index = request.args.get('idx')
    print(index)

    if (index==0):
        results = db.result.find_one({'name': "react"})
        current_count = results['count']
        new_count = current_count + 1

        db.result.update_one({'name': "react"}, {'$set': {'count': new_count}})

    elif (index==1):
        results = db.result.find_one({'name': "spring"})
        current_count = results['count']
        new_count = current_count + 1

        db.result.update_one({'name': "spring"}, {'$set': {'count': new_count}})

    else:
        results = db.result.find_one({'name': "node"})
        current_count = results['count']
        new_count = current_count + 1

        db.result.update_one({'name': "node"}, {'$set': {'count': new_count}})

    return jsonify({'msg': '제정신이 아닙니다'})

@app.route('/api/postResult', methods=['GET'])
def post_results():
    results = list(db.results.find({},{'_id':False}))
    return jsonify({'result': results})

app.run('0.0.0.0', port=5000, debug=True)