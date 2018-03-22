fileName = "GenEdList - "   #1.csv
group = 5
for i in range(1,group+1):
    f = open(fileName+str(i)+".csv")
    #print(f.read())
    for line in f:
        print(i,line)
