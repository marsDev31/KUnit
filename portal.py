import kunit
from flask import Flask
app = Flask(__name__)

@app.route('/')
def root():
    return "I'm WORKING"

#inp = [[5,3,0,2,0,0],['01999012'],[],['01999111'],[],[]]a01999021
@app.route('/add/<inp>')
def add_to_table(inp):
    try:
        table = inp[:inp.index('a')]
        subject = inp[inp.index('a')+1:]
        listOfTable = eval(table)
        #print(lt,subject)
        return str(kunit.add(listOfTable,subject)).replace(" ","")
    except:
        return "invalid syntax (read API DOC in trello)"
    #return "still alive"

@app.route('/remove/<inp>')
def del_from_table(inp):
    table = inp[:inp.index('d')]
    subject = inp[inp.index('d')+1:]
    listOfTable = eval(table)
    return str(kunit.remove(listOfTable,subject)).replace(" ","")


if __name__ == "__main__":
    app.run(debug = True,host="0.0.0.0")
