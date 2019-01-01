f = open("stdList.tsv").readlines()
obj  = ""
data = []
for txtLine in f:
    data = txtLine.split('\t')
    obj += "{value:'" + data[0] + "', label:'"+ data[0] + " " + data[2] + " (" + data[1] + " " + data[3].replace('\n','') + ")'}," + "\n"
print(obj)
obj = str('['+ obj +']').replace(',]',']')
save = open("mahor_th_en.js", "w")
save.write(obj)
