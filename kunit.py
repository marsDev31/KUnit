REF = eval(open("short.json").read())
LONGREF = eval(open("long.json").read())
tbl = [[0,0,0,0,0,0],[],[],[],[],[]]  #Ex [[5,2,0,0,3,0],["01175161","01173151"],[],[],["01999021"],[]] -> [[sumOfCredit,g1's credit,...],[g1],[g2],...]
def add(table,subject):
    group = int(REF[subject][0])
    name = REF[subject][1]
    credit = int(REF[subject][2])

    if subject not in table[group]:
        table[0][0] += credit
        table[0][group] += credit
        table[group].append(subject)
        print(f"{name} [{subject}] was added")
    else:
        print(f"{name} [{subject}] already added")
    return table
def remove(table,subject):
    #...
    return table

