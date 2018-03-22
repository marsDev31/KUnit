def printDic():
    tmp = str(dic)
    tmp = tmp.replace("\'","\"")
    tmp = tmp.replace(",",",\n")
    print(tmp)
fileName = "GenEdList - "   #1.csv
group = 5
tblHeader = 2
dic = {}        #For finding the group of subject
longDic = {}    #For detail the subject
for i in range(1,group+1):
    f = open(fileName+str(i)+".csv")
    header = tblHeader
    #print(f.read())
    for _ in f:
        if header > 0:
            header -= 1
            continue
        #print(i,line)
        line = _.split(",")
        while len(line[0]) < 8:     #Add 0 for the missing one
            line[0] = "0"+line[0]
        dic[line[0]] = str(i)
printDic()
