#file_path = os.path.join(module_dir,"dataset","rand100_collections.txt")
'''
data = open("rand100_ITEM7_collections.txt",'r')

company = "768835"
year = "2018"
item = "item7"
idx = company+"_"+str(year).split("20")[1]+"_"+item.upper()+"_P"+str(0)+"_S"+str(0)

textdic = {}
for line in data.readlines():
    line1 = line.split("\t")
    #line1[0]: id
    #line1[1]: sentence
    textdic[line1[0]] = line1[1]

textkeys = list(textdic.keys())
#print(textkeys[len(textkeys)-1])
'''


def readitem7fun(textdic,company,year,item):

    #file name should change

    #textdic = {id:sentence}
    #articleid = selected year and company's id
    #article = sentence combination correspond to articleid

    textkeys = list(textdic.keys())
    lastone = textkeys[len(textkeys)-1]
    lastcompany = lastone.split("_")[0]
    lastyear = lastone.split("_")[1]
    lastitem = lastone.split("_")[2].upper()
    id = company+"_"+str(year).split("20")[1]+"_"+item.upper()+"_P"+str(0)+"_S"+str(0)
    if (id not in textkeys):
        return ["there is no "+str(item)+" in "+str(year)]
    else:
        articleid=[]
        article=[]
    
        if (item.upper()==lastitem and str(year).split("20")[1]==lastyear and company==lastcompany):

            id1 = company+"_"+str(year).split("20")[1]+"_"+item.upper()+"_P"+str(0)+"_S"+str(0)
            textkeys = list(textdic.keys())
            for i in range(textkeys.index(id1),len(textkeys)):
                articleid.append(textkeys[i])

        else:
            item1 = item
            #item2 = itemlist[itemlist.index(item)+1]
            id1 = company+"_"+str(year).split("20")[1]+"_"+item1.upper()+"_P"+str(0)+"_S"+str(0)
            #id2 = company+"_"+str(year).split("20")[1]+"_"+item2.upper()+"_P"+str(0)+"_S"+str(0)
            for i in range(textkeys.index(id1),len(textkeys)):
                articleid.append(textkeys[i])
                if (textkeys[i+1].split("_")[1]!=str(year).split("20")[1]):
                    break
        #all report including the "\n\n"
        for i in range(0,len(articleid)):
            a = textdic[articleid[i]].strip("\n")
            a = a.replace('"',"")
            a = a.replace("'","")
            article.append(a)
            nowp = articleid[i].split("_")[3]
            if (i!=(len(articleid)-1)):
                nextp = articleid[i+1].split("_")[3]
                if(nextp!=nowp):
                    article.append("\\n")
                    article.append("\\n")


        return article
        #want to return 1. all report 2. articleid
#print(readitem7fun(textdic,company,2012,item)[0])
