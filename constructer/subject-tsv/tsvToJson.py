import json
CONFIG = eval(open("config.kunit.json").read())
facTH = eval(open("facultyTH.json").read())
fileName = "GenEdList - "   #1.csv
group = CONFIG["NumberOfGroup"]
tblHeader = 2
dic = {}        #For finding the group of subject
longDic = {}    #For detail the subject
thDic = {}    #Dic with TH/EN name only
for i in range(1,group+1):
    f = open(fileName+str(i)+".tsv")
    header = tblHeader
    #print(f.read())
    for _ in f:
        if header > 0:
            header -= 1
            continue
        #print(i,line)
        line = _.replace("\n","").split("\t")
        while len(line[0]) < 8:     #Add 0 for the missing one
            line[0] = "0"+line[0]
        dic[line[0]] = [str(i),line[1],line[3]]
        longDic[line[0]] = [str(i)]+line[1:]
#        print(i)
        thDic[line[0]] = [line[1],line[2],line[5],facTH[line[5]]]
print(json.dumps(thDic,indent=4, separators=(',', ': ')))
#print(thDic)
