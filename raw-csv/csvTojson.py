fileName = "GenEdList - "   #1.csv
group = 5
tblHeader = 2
for i in range(1,group+1):
    f = open(fileName+str(i)+".csv")
    header = tblHeader
    #print(f.read())
    for line in f:
        if header > 0:
            header -= 1
            continue
        print(i,line)
