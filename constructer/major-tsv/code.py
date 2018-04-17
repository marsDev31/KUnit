import json
x=open("upm.tsv").read()
y=open("stdl.tsv").read()
alx=x.split()
aly=y.split()
ansx=[]
for i in range (len(alx)):
	if(len(alx[i]))<=2:
		alx[i]=int(alx[i])
i=12
while i<len(alx):
	lis=[]
	if type(alx[i+1])!=type(alx[i]):
		for j in range (6):
			lis.append(alx[i+j])
		ansx.append(lis)
		i+=6
	else:
		ansx.append([alx[i]])
		i+=1	

dicx={}
for i in range (len(ansx)):
	if len(ansx[i])==1:
		dicx[ansx[i][0]]=[-1,-1,-1,-1,-1]
	else:
		pp=[]
		for j in range (0,(len(ansx[i])-1)):
			pp.append(ansx[i][j+1])	
		dicx[ansx[i][0]]=pp
print(json.dumps(dicx,indent=4, separators=(',', ': ')))

