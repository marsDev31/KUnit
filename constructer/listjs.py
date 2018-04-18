import sys
REF = eval(open(sys.argv[1]).read())
for i in REF:
	print("{ value: \'"+i+"', ",end="")
	print("label: '"+i+" "+REF[i][1]+"' },")

