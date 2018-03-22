def printDic(tmp):
    space = 4
    tab = 0
    ans = ""
    tmp = str(tmp)
    tmp = tmp.replace("{","{\n")
    tmp = tmp.replace("}","\n}")
    tmp = tmp.replace("\'","\"")
    tmp = tmp.replace(", ",",\n")
    for c in tmp:
        if c == "{" or c == "[":
            tab += 1
        elif c == "}" or c == "]":
            tab -= 1
        ans += c
        if c == "\n":
            ans += " "*tab*space
        elif c == "}":
            ans = ans[:-((tab+1)*space)-1]  #cut a space that too much
            ans += c
            #print(c)
    print(ans)
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
        line = _.replace("\n","").split(",")
        while len(line[0]) < 8:     #Add 0 for the missing one
            line[0] = "0"+line[0]
        dic[line[0]] = [str(i),line[1],line[3]]
        longDic[line[0]] = [str(i)]+line[1:]
printDic(dic)
