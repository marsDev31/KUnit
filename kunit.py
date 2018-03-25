CONFIG = eval(open("config.kunit.json").read())
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

def print_list(table):
    #for console debug
    nog = CONFIG["NumberOfGroup"]
    groupName = open("NameOfGroup.txt").read().split("\n")
    print("Sum of all credit =",table[0][0])
    for i in range(1,nog+1):
        print()
        if table[0][i] == 0:
            print("No subject in",groupName[i-1])
            continue
        print(f"You have {table[0][i]} credit in {groupName[i-1]} group")
        for sid in table[i]:    #Subject ID
            name = LONGREF[sid][1]
            credit = LONGREF[sid][3]
            longCredit = LONGREF[sid][4]
            print(f"{sid} {name:40} {credit} {longCredit}")
            