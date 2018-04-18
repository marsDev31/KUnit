import json
f = open("stdList.tsv").read()
f = f.split("\n")
dic = {}
for line in f:
    l = line.split("\t")
    dic[l[0]] = l[1:]
print(json.dumps(dic,indent=4, separators=(',', ': ')))
