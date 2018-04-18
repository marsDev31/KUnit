unitPM = eval(open("unitPM.json").read())
#print(unitPM)
def unitOf(majorID):
    return unitPM[str(majorID)]
