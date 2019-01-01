import sys
REF = eval(open("long.json").read())
for count in range(1,6):
	print(count)
	for i in REF:
		if int(REF[i][0]) == count:
			print("{ "+f"value: '{i}', label: '{i} {REF[i][2]} ({REF[i][1]})'"+"},")