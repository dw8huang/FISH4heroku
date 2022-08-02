'''
data = open("rand100_collections.txt",'r')

#company = "26076"
#year = "2018"
'''
itemlist = ["Item1","Item1A","Item1B","Item2",
            "Item3","Item4","Item5","Item6","Item7",
            "Item7A","Item8","Item9","Item9A","Item9B",
            "Item10","Item11","Item12","Item13","Item14",
            "Item15"]
itemtitle = [
    "Item 1. Business",
    "Item 1A. Risk Factors",
    "Item 1B. Unresolved Staff Comments",
    "Item 2. Properties",
    "Item 3. Legal Proceedings",
    "Item 4. Mine Safety Disclosures",
    "Item 5. Market",
    "Item 6. Consolidated Financial Data",
    "Item 7. Management\&quot;s Discussion and Analysis of Financial Condition and Results of Operations",
    "Item 7A. Quantitative and Qualitative Disclosures about Market Risks",
    "Item 8. Financial Statements",
    "Item 9. Changes in and Disagreements With Accountants on Accounting and Financial Disclosure",
    "Item 9A. Controls and Procedures",
    "Item 9B. Other Information",
    "Item 10. Directors, Executive Officers and Corporate Governance",
    "Item 11. Executive Compensation",
    "Item 12. Security Ownership of Certain Beneficial Owners and Management and Related Stockholder Matters",
    "Item 13. Certain Relationships and Related Transactions, and Director Independence",
    "Item 14. Principal Accounting Fees and Services",
    "Item 15. Exhibits, Financial Statement Schedules Signatures"]

'''
textdic = {}
for line in data.readlines():
    line1 = line.split("\t")
    #line1[0]: id
    #line1[1]: sentence
    textdic[line1[0]] = line1[1]
'''
import os
import json



#print(dictData['type1'][1]['senA'],dictData['type1'][1]['senB'])

#sendic

def sendic():
    sendic_a2b = {}
    sendic_b2a = {}
    sendic_a2b['type1'] = {}
    sendic_a2b['type2'] = {}
    sendic_a2b['type3'] = {}
    sendic_b2a['type1'] = {}
    sendic_b2a['type2'] = {}
    sendic_b2a['type3'] = {}
    typename1 = ['type1','type2','type3']
    for typename in typename1:
        for i in range(0,len(dictData[typename])):
            sendic_b2a[typename][dictData[typename][i]['senB']] = dictData[typename][i]['senA']
            '''
            if type(dictData[typename][i]['senA'])==list:
                for j in range(0,len(dictData[typename][i]['senA'])):
                    #print(dictData[typename][i]['senA'])
                    sendic_a2b[typename][dictData[typename][i]['senA'][int(j)]] = dictData[typename][i]['senB']
            else:
                sendic_a2b[typename][dictData[typename][i]['senA']] = dictData[typename][i]['senB']
            '''
    return sendic_b2a
#print(sendic_b2a['type2'])








def read_allitem_fun(textdic,company,year,lastyear1):
    #find the first one id
    global dictData
    module_dir = os.path.dirname(__file__)
    if lastyear1==1:
        fileyear = int(year)+1
    else:
        fileyear=year
    file_path = os.path.join(module_dir,"dataset","resultparse",company,str(fileyear)+".json")
    with open(file_path) as d:
        dictData = json.load(d)
    global type1senb
    global type1sena
    global type2senb
    global type2sena1
    global type2sena
    global type3senb
    global type3sena
    type1senb = [dictData['type1'][i]['senB'] for i in range(0,len(dictData['type1']))]
    type2senb= [dictData['type2'][i]['senB'] for i in range(0,len(dictData['type2']))]
    type3senb = [dictData['type3'][i]['senB'] for i in range(0,len(dictData['type3']))]
    
    
    type1sena = [dictData['type1'][i]['senA'] for i in range(0,len(dictData['type1']))]
    type2sena1 = [dictData['type2'][i]['senA'] for i in range(0,len(dictData['type2']))]
    type3sena = [dictData['type3'][i]['senA'] for i in range(0,len(dictData['type3']))]
    type2sena = []
    for i in type2sena1:
        for j in i:
            type2sena.append(j)
    
    
    articleid = []
    article = []
    sen2id = {}
    ar = ''
    textkeys = list(textdic.keys())
    firstidx = company+"_"+str(year).split("20")[1]+"_"+"item1".upper()+"_P"+str(0)+"_S"+str(0)
    if firstidx not in textkeys:
        for item in itemlist[1:len(itemlist)]:
            firstidx = company+"_"+str(year).split("20")[1]+"_"+item.upper()+"_P"+str(0)+"_S"+str(0)
            if firstidx in textkeys:
                firstline_item = item

                break
    else:
        firstline_item = itemlist[0]

    lastone = textkeys[len(textkeys)-1]
    lastcompany = lastone.split("_")[0]
    lastyear = lastone.split("_")[1]
    #print(lastyear,lastcompany)
    #if it is the last company or year
    if company==lastcompany and year.split("20")[1]==lastyear:
        for item in itemlist[itemlist.index(firstline_item):len(itemlist)]:
            idx = company+"_"+str(year).split("20")[1]+"_"+item.upper()+"_P"+str(0)+"_S"+str(0)
            if idx not in textkeys:
                #print(idx)
                articleid.append("no item"+"_"+str(year).split("20")[1]+"_"+item)
            else:
                for i in range(textkeys.index(idx),len(textkeys)):
                    articleid.append(textkeys[i])
    else:
        for item in itemlist[itemlist.index(firstline_item):len(itemlist)]:
            idx = company+"_"+str(year).split("20")[1]+"_"+item.upper()+"_P"+str(0)+"_S"+str(0)
            if idx not in textkeys:
                #print(idx)
                #a="no item"+"_"+item+"_"+str(year)
                #print(a.split("_"))
                articleid.append("no item"+"_"+str(year).split("20")[1]+"_"+item)
            else:
                for i in range(textkeys.index(idx),len(textkeys)):
                    articleid.append(textkeys[i])
                    if (textkeys[i+1].split("_")[2]!=item.upper()):
                        break
    if firstline_item != itemlist[0]:
        for item in itemlist[0:itemlist.index(firstline_item)]:
            s = "There is no "+str(item)+" in "+str(year)
            item = item.capitalize()
            item = item[:-1] + item[-1].upper()
            s1 = itemtitle[itemlist.index(item)]
            sid = company+"_"+str(year).split("20")[1]+"_"+item.upper()+"_P_S"
            sentence = "&lt;span id=\&quot;" + sid +"\&quot; style = \&quot; font-weight:750 \&quot;&gt;" + str(s1) +"&lt;/span&gt;"
            style = "\&quot;background-color:yellow\&quot;"
            #article.append(a)
            sen2id[sid] = s
            #article.append("\\n")
            #article.append("\\n")
            ar += sentence
            ar += '\\n\\n'
            sen2id[sid] = s1
    #print(textdic[articleid[404]])
    #textdic["no item"] ==?
    
    for i in range(0,len(articleid)):
        #print(articleid[i])
        #short year
        year = articleid[i].split("_")[1]
        item = articleid[i].split("_")[2]
        firstsid = company+"_"+str(year)+"_"+item.upper()+"_P"+str(0)+"_S"+str(0)
        #print(firstsid)
        
        if articleid[i].split("_")[0] == "no item":
            year = articleid[i].split("_")[1]
            item = articleid[i].split("_")[2]
            #change sid => company_year_item_P_S
            sid = company+"_"+str(year)+"_"+item.upper()+"_P_S"

            #s = "There is no "+str(item)+" in "+str(year)
            item = item.capitalize()
            item = item[:-1] + item[-1].upper()
            s1 = itemtitle[itemlist.index(item)]
            sentence = "&lt;span id=\&quot;" + sid +"\&quot; style = \&quot; font-weight:750 \&quot; &gt;" + str(s1) +"&lt;/span &gt;"
            #article.append(a)
            #sen2id[sid] = s
            #article.append("\\n")
            #article.append("\\n")
            ar += sentence
            ar += '\\n\\n'
            sen2id[sid] = s1
        else:
            a = textdic[articleid[i]].strip("\n")
            a = a.replace('"',"")
            a = a.replace("'","")
            
            #findfirstline
            
            if articleid[i] == firstsid:
                
                #print("here")
                sid1 = company+"_"+str(year)+"_"+item.upper()+"_P_S"
                item = item.capitalize()
                item = item[:-1] + item[-1].upper()
                #print(type(item))
                s1 = itemtitle[itemlist.index(item)]
                #print(articleid[i],s1)
                sentence = "&lt;span id=\&quot;" + sid1 +"\&quot;style = \&quot; font-weight:750 \&quot; &gt;" + s1 +"&lt;/span &gt;"
                #print(ar)
                ar += sentence
                ar += "\\n"
                sen2id[sid1] = s1
            


            classstrr = classstr(articleid[i],lastyear1)
            sentence = "&lt;span id=\&quot;" + articleid[i] +"\&quot;"+ classstrr +"&gt;" + a +"&lt;/span&gt;"

            #style = "\&quot; background-color:yellow \&quot; class= \&quot; classname \&quot;"
            #article.append(a)
            ar += sentence + " "
            sen2id[str(articleid[i])] = a
            nowp = articleid[i].split("_")[3]
            nowi = articleid[i].split("_")[2]
            if (i!=(len(articleid)-1)):
                nexti = articleid[i+1].split("_")[2]
                if articleid[i+1].split("_")[0] == "no item":
                    #article.append("\\n")
                    #article.append("\\n")
                    ar += '\\n\\n'
                elif nexti != nowi:
                    #article.append("\\n")
                    #article.append("\\n")
                    ar += '\\n\\n'
                else:
                    nextp = articleid[i+1].split("_")[3]
                    if(nextp!=nowp):
                        #article.append("\\n")
                        #article.append("\\n")
                        ar += '\\n\\n'
        
    return [article, sen2id, ar]
def classstr(articleid,lastyear):
    #suppose lastyear==true find 2012's senA
    #find
    #style = "\&quot; background-color:yellow \&quot; class= \&quot; classname \&quot;"

    
    classname = ''
    click = ''
    style = ''
    mouse = ''
    if lastyear==1:
        

        if articleid in type2sena:
            classname = classname + 'type2 '
        if articleid in type3sena:
            classname = classname + 'type3 '    

        '''if articleid in type1sena:
            if 'type2' in classname:
                classname = classname + ''
            elif 'type3' in classname:
                classname = classname + ''
            else:
                classname = classname + 'type1 '''
        
        classname = 'senA ' + classname
        style = 'style = \&quot;border-radius: 25px;padding:0.02em 0;\&quot;'
    else:
        
        if articleid in type2senb:
            classname = classname + 'type2 '
            click = 'onclick = \&quot; click_b(this) \&quot;'
            mouse = 'onmouseover = \&quot; onmouse(this) \&quot; onmouseout = \&quot; outmouse(this) \&quot;'
        
        if articleid in type3senb:
            classname = classname + 'type3 '
            click = 'onclick = \&quot; click_b(this) \&quot;'
        if articleid in type1senb:
            if 'type2' in classname:
                classname = classname + ''
            elif 'type3' in classname:
                classname = classname + ''
            else:
                classname = classname + 'type1 '
        classname = 'senB ' + classname
        style = 'style= \&quot; cursor:pointer;border-radius: 25px;padding:0.02em 0;\&quot;'

    return "class = \&quot;" + classname +"\&quot;" + click + style + mouse
   