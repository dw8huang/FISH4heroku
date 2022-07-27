from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.shortcuts import render
import random

from . import read_allitem_function
from . import read_allitem_function_ar
from . import read_item7_function
import os
import json
from os.path import exists

# Create your views here.


#from . import test
itemlist = ["Item1","Item1A","Item1B","Item2",
            "Item3","Item4","Item5","Item6","Item7",
            "Item7A","Item8","Item9","Item9A","Item9B",
            "Item10","Item11","Item12","Item13","Item14",
            "Item15"]


module_dir = os.path.dirname(__file__)
def buildtextdic(company):
    
        
    file_path = os.path.join(module_dir,"dataset","bycompany",company,"rand200_collections.txt")
    data = open(file_path,'r')

    textdic = {}

    for line in data.readlines():
        line1 = line.split("\t")
        textdic[line1[0]] = line1[1]
    return textdic

def companydicfun():
    
    file_path = os.path.join(module_dir,"dataset","companydic.json")
    with open(file_path) as d:
        companydic = json.load(d)
    #print(companydic)
    #a = {'type1': [{'senA': '1001250_11_ITEM1_P0_S0', 'senB': '1001250_12_ITEM1_P0_S0', 'prob': [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}], 'type2': [{'senA': '1001250_11_ITEM1_P1_S0', 'senB': '1001250_12_ITEM1_P1_S0', 'prob': [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}, {'senA': ['1001250_11_ITEM1_P0_S2', '1001250_11_ITEM1_P0_S1'], 'senB': '1001250_12_ITEM1_P0_S2', 'prob': [1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9, 0.7, 0.4, 0.5, 1, 0.6, 0.7, 1, 0.6, 1, 0.4, 1, 0.1, 1, 1, 0.6,0.5,0.4]}],'type3': [{'senA': '1001250_11_ITEM1A_P1_S1', 'senB': '1001250_12_ITEM1A_P1_S1', 'prob': [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]},{'senA': '1001250_11_ITEM1A_P1_S2', 'senB': '1001250_12_ITEM1A_P1_S2', 'prob': [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]},{'senA': '1001250_11_ITEM1_P0_S0', 'senB': '1001250_12_ITEM1_P0_S0', 'prob': [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}]}
    return companydic
#print(type(companydicfun()))

def result(year,company):
    filename = str(year)+".json"
    file_path = os.path.join(module_dir,"dataset","resultparse",company,filename)
    with open(file_path) as d:
        dictData = json.load(d)
    #a = {'type1': [{'senA': '1001250_11_ITEM1_P0_S0', 'senB': '1001250_12_ITEM1_P0_S0', 'prob': [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}], 'type2': [{'senA': '1001250_11_ITEM1_P1_S0', 'senB': '1001250_12_ITEM1_P1_S0', 'prob': [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}, {'senA': ['1001250_11_ITEM1_P0_S2', '1001250_11_ITEM1_P0_S1'], 'senB': '1001250_12_ITEM1_P0_S2', 'prob': [1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9, 0.7, 0.4, 0.5, 1, 0.6, 0.7, 1, 0.6, 1, 0.4, 1, 0.1, 1, 1, 0.6,0.5,0.4]}],'type3': [{'senA': '1001250_11_ITEM1A_P1_S1', 'senB': '1001250_12_ITEM1A_P1_S1', 'prob': [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]},{'senA': '1001250_11_ITEM1A_P1_S2', 'senB': '1001250_12_ITEM1A_P1_S2', 'prob': [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]},{'senA': '1001250_11_ITEM1_P0_S0', 'senB': '1001250_12_ITEM1_P0_S0', 'prob': [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}]}
    return dictData
#print(type(result(2012,'1001250')))
# create test article


    
    
def filecontent(textdic,company,year,item):
    
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
            #print("here")
            id1 = company+"_"+str(year).split("20")[1]+"_"+item.upper()+"_P"+str(0)+"_S"+str(0)
            textkeys = list(textdic.keys())
            for i in range(textkeys.index(id1),len(textkeys)):    
                articleid.append(textkeys[i])
        #elif (item=="Item15"):
            #id1 = company+"_"+str(year).split("20")[1]+"_"+item.upper()+"_P"+str(0)+"_S"+str(0)
            #id2 = company+"_"+str(int(year)+1).split("20")[1]+"_"+itemlist[0].upper()+"_P"+str(0)+"_S"+str(0)
            #for i in range(textkeys.index(id1),len(textkeys)):
            #    articleid.append(textkeys[i])
            #   if (textkeys[i+1].split("_")[2]!=item.upper()):
            #        break
        else:
            item1 = item
            #item2 = itemlist[itemlist.index(item)+1]
            id1 = company+"_"+str(year).split("20")[1]+"_"+item1.upper()+"_P"+str(0)+"_S"+str(0)
            #id2 = company+"_"+str(year).split("20")[1]+"_"+item2.upper()+"_P"+str(0)+"_S"+str(0)
            for i in range(textkeys.index(id1),len(textkeys)):
                articleid.append(textkeys[i])
                if (textkeys[i+1].split("_")[2]!=item.upper()):
                    break

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

def index(request):
    
    return render(request, 'index.html', {'companydic':companydicfun()})


def report_revised(request):
    if request.method == "POST":
        module_dir = os.path.dirname(__file__)
        company = request.POST.get("company")
        #print(company)
        #print(type(company))
        year2 = int(request.POST.get("year"))
        year1 = year2-1
        item = request.POST.get("item")
        
        
        
        textdic = buildtextdic(company)
        cpdic = companydicfun()

        testarti = {}
        sen2id = {}
        ar = {}
        
        testarti[str(year1)] = " ".join(read_allitem_function_ar.read_allitem_fun(textdic,company,str(year1),1)[0])
        sen2id[str(year1)] = read_allitem_function_ar.read_allitem_fun(textdic,company,str(year1),1)[1]
        ar[str(year1)] = read_allitem_function_ar.read_allitem_fun(textdic,company,str(year1),1)[2]

        testarti[str(year2)] = " ".join(read_allitem_function_ar.read_allitem_fun(textdic,company,str(year2),0)[0])
        sen2id[str(year2)] = read_allitem_function_ar.read_allitem_fun(textdic,company,str(year2),0)[1]
        ar[str(year2)] = read_allitem_function_ar.read_allitem_fun(textdic,company,str(year2),0)[2]
        sendic = read_allitem_function_ar.sendic()
        
        #testarti[str(year)] = readitem7fun(textdic, company, year, "item7")[0]
        #print(testarti)
        #highlight
        result1 = result(year2,company)
        #senA = result['senA']
        #senB = result['senB']
        #keywordsB = result['keywordsB']
        #labels = result['labels']
        #'senA':senA, 'senB':senB, 'keywordsB':keywordsB,'labels':labels
        #'arti':arti
        '''
        a = "&lt;span id=\&quot;108\&quot; style=\&quot;background-color:yellow\&quot;&gt;Net sales of skin care products increased 12%, or $341.1 million, to $3,227.1 million, primarily reflecting our strategic focus on growing this category through creativity and innovation, particularly high growth segments, such as products that address the visible signs of aging.&lt;/span&gt;"
        x = ''
        y = ''
        for i in range(0,3000):
            x = x + a
            y = y + a
        ar['2011'] = x
        ar['2012'] = y
        '''
        context = {'result':result1, 'testarti' :testarti, 'sen2id':sen2id, 'ar':ar, 'sendic':sendic, 'companydic':cpdic}
        return render(request, 'report1.html',context)
    
    return render(request, 'report1.html')


