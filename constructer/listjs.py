REF = eval(open("short.json").read())
for i in REF:
	print("{ value: \'"+i+"', ",end="")
	print("label: '"+i+" "+REF[i][1]+"' },")

