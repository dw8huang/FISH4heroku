from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.shortcuts import render
import random

from . import read_allitem_function
from . import read_item7_function
import os
import json
from os.path import exists

# Create your views here.
def index(request):
    names = ["abc", "dan", "jack", "lizzy", "susan"]
    return render(request, 'index.html', {'names':names})


#from . import test
itemlist = ["Item1","Item1A","Item1B","Item2",
            "Item3","Item4","Item5","Item6","Item7",
            "Item7A","Item8","Item9","Item9A","Item9B",
            "Item10","Item11","Item12","Item13","Item14",
            "Item15"]

def teammate():
    sen = {
    "2012":
    {
    "Item1":
    [
        {"senA":"Item 1 . We are an emerging global regenerative medicine company focused on the development and commercialization of non-invasive, biological response activating devices for the repair and regeneration of tissue, musculoskeletal and vascular structures.","senB":"Item 1 . We are an emerging global regenerative medicine company focused on the development and commercialization of noninvasive, biological response activating devices for the repair and regeneration of tissue, musculoskeletal and vascular structures.","keywordsA":[],"keywordsB":["structures"],"prob":[0,0,0,1]},
        {"senA":"The Company was incorporated on May 6, 2004.","senB":"The patients in the study were followed for a total of 24 weeks.","keywordsA":[],"keywordsB":["patients","weeks"],"prob":[0,0,0,1,0,0.67,0.5,0,1,0,0,0,0]},
        {"senA":"Of these 28 full-time employees, 12 were engaged in research and development, including clinical, regulatory and quality. None of our employees are represented by a labor union or covered by a collective bargaining agreement. We believe our relationship with our employees is good.","senB":"Treatment with dermaPACE increased the proportion of diabetic foot ulcers that closed within 12 weeks by 36%, although the rate of complete wound closure between dermaPACE and Sham-control at 12 weeks in the Intent-to-Treat ( ITT ) population was not statistically significant at the 95% confidence level used throughout the study (p=0.363).","prob":[0,0,0,0.5,0.3,0.4,0.8,0.9,0.1,0.5,0.3,0.4,0.8,0.9,0.1,0.5,0.3,0.4,0.8,0.9,0.1,0.5,0.3,0.4,0.8,0.9,0.1,0.3,0.4,0.8,0.9,0.1,0.3,0.4,0.8,0.9,0.1,0.3,0.4,0.8,0.9,0.1,0.9,0.1,0.3,0.4,0.8,0.9,0.1,0.3,0.4,0.8]},
        {"senA":"However, we cannot predict the impact and costs those future statutes, regulations and policies will have on our business.","senB":"Some of these statutes and regulations impose strict liability for the costs of cleaning up, and for damages resulting from, sites of spills, disposals, or other releases of contaminants, hazardous substances and other materials and for the investigation and remediation of environmental contamination at properties leased or operated by us and at off-site locations where we have arranged for the disposal of hazardous substances.","prob":[1,0,0,0.4,0.3]}
    ],
    "Item1A":
    [
        {"senA":"Current economic conditions could adversely affect our operations.","senB":"Current economic conditions could adversely affect our operations.","prob":[0,0,0,0,1,1,0.5,1]}
    ],
    "Item1B":
    [
        {"senA":"there is no Item1B in 2011","senB":"there is no Item1B in 2012","prob":[0,0,0,0,1,1]}
    ]},

    "2013":
    {
        "Item1":
    [
        {"senA":"Item 1 . We are an emerging global regenerative medicine company focused on the development and commercialization of noninvasive, biological response activating devices for the repair and regeneration of tissue, musculoskeletal and vascular structures.","senB":"Item 1 . We are a shockwave technology company using noninvasive, high-energy, acoustic shockwaves for regenerative medicine and other applications.","prob":[1,0,0,0,1]}
    ]
    }
    
    }
    
    return sen
module_dir = os.path.dirname(__file__)
def buildtextdic(company):
    
        
    file_path = os.path.join(module_dir,"dataset","bycompany",company,"rand200_collections.txt")
    data = open(file_path,'r')

    textdic = {}

    for line in data.readlines():
        line1 = line.split("\t")
        textdic[line1[0]] = line1[1]
    return textdic
'''
with open(file_path) as d:
    textdic = json.load(d)
print(textdic)
'''
def result(year,company):
    filename = str(year)+".json"
    file_path = os.path.join(module_dir,"dataset","resultparse",company,filename)
    with open(file_path) as d:
        dictData = json.load(d)
    #a = {'type1': [{'senA': '1001250_11_ITEM1_P0_S0', 'senB': '1001250_12_ITEM1_P0_S0', 'prob': [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}], 'type2': [{'senA': '1001250_11_ITEM1_P1_S0', 'senB': '1001250_12_ITEM1_P1_S0', 'prob': [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}, {'senA': ['1001250_11_ITEM1_P0_S2', '1001250_11_ITEM1_P0_S1'], 'senB': '1001250_12_ITEM1_P0_S2', 'prob': [1, 1, 1, 1, 1, 1, 1, 1, 1, 0.9, 0.7, 0.4, 0.5, 1, 0.6, 0.7, 1, 0.6, 1, 0.4, 1, 0.1, 1, 1, 0.6,0.5,0.4]}],'type3': [{'senA': '1001250_11_ITEM1A_P1_S1', 'senB': '1001250_12_ITEM1A_P1_S1', 'prob': [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]},{'senA': '1001250_11_ITEM1A_P1_S2', 'senB': '1001250_12_ITEM1A_P1_S2', 'prob': [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]},{'senA': '1001250_11_ITEM1_P0_S0', 'senB': '1001250_12_ITEM1_P0_S0', 'prob': [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}]}
    return dictData
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


def report(request):
    if request.method == "POST":
        module_dir = os.path.dirname(__file__)
        company = request.POST.get("company")
        print(company)
        #print(type(company))
        year2 = int(request.POST.get("year"))
        year1 = year2-1
        item = request.POST.get("item")
        print(year2,item)
        
        #article1 = filecontent(module_dir,company,year1,item)
        #article2 = filecontent(module_dir,company,year2,item)
        #2011~2018
        #arti = {}
        #for year in range(2011,2012):
        #    arti["year"+str(year)] = filecontent(module_dir, company, year, item)
        testarti = {}
        for year in range(year1,year2+1):
            testarti[str(year)] = {}
            testarti[str(year)][item] = filecontent(textdic, company, year, item)
        #print(testarti)
        #filename = company + '.txt'
        #file_path1 = os.path.join(module_dir,"dataset",str(year1),filename)   #full path to text.
        #file_path2 = os.path.join(module_dir,"dataset",str(year2),filename)
        #data_file1 = open(file_path1,'r')
        #data_file2 = open(file_path2,'r')
        #data1 = data_file1.read() #selected year-1
        #data2 = data_file2.read() #selected year 

        #highlight
        result = teammate()
        #senA = result['senA']
        #senB = result['senB']
        #keywordsB = result['keywordsB']
        #labels = result['labels']
        #'senA':senA, 'senB':senB, 'keywordsB':keywordsB,'labels':labels
        #'arti':arti
        context = {'result':result, 'testarti' :testarti, 'curryear':year2, 'company':company, 'item':item}
        return render(request, 'report.html',context)
    
    return render(request, 'report.html')

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


        testarti = {}
        sen2id = {}
        ar = {}
        for year in range(year1,year2+1):
            testarti[str(year)] = " ".join(read_allitem_function.read_allitem_fun(textdic,company,str(year))[0])
            sen2id[str(year)] = read_allitem_function.read_allitem_fun(textdic,company,str(year))[1]
            ar[str(year)] = read_allitem_function.read_allitem_fun(textdic,company,str(year))[2]
        
        
        #testarti[str(year)] = readitem7fun(textdic, company, year, "item7")[0]
        #print(testarti)
        #highlight
        result1 = result(year,company)
        #senA = result['senA']
        #senB = result['senB']
        #keywordsB = result['keywordsB']
        #labels = result['labels']
        #'senA':senA, 'senB':senB, 'keywordsB':keywordsB,'labels':labels
        #'arti':arti

        
        
        context = {'result':result1, 'testarti' :testarti, 'sen2id':sen2id, 'ar':ar}
        return render(request, 'report1.html',context)
    
    return render(request, 'report1.html')



def report_switch_between_items(request):
    if request.method == "POST":
        module_dir = os.path.dirname(__file__)
        company = request.POST.get("company")
        #print(company)
        #print(type(company))
        year2 = int(request.POST.get("year"))
        year1 = year2-1
        item = request.POST.get("item")
        #print(year2,item)
        
        #article1 = filecontent(module_dir,company,year1,item)
        #article2 = filecontent(module_dir,company,year2,item)
        #2011~2018
        #arti = {}
        #for year in range(2011,2012):
        #    arti["year"+str(year)] = filecontent(module_dir, company, year, item)
        testarti = {}
        for year in range(year1,year2+1):
            testarti[str(year)] = {}
            for item in itemlist:
                testarti[str(year)][item] = filecontent(textdic, company, year, item)
        #print(testarti)
        #print(testarti)
        #filename = company + '.txt'
        #file_path1 = os.path.join(module_dir,"dataset",str(year1),filename)   #full path to text.
        #file_path2 = os.path.join(module_dir,"dataset",str(year2),filename)
        #data_file1 = open(file_path1,'r')
        #data_file2 = open(file_path2,'r')
        #data1 = data_file1.read() #selected year-1
        #data2 = data_file2.read() #selected year 

        #highlight
        result = teammate()
        #senA = result['senA']
        #senB = result['senB']
        #keywordsB = result['keywordsB']
        #labels = result['labels']
        #'senA':senA, 'senB':senB, 'keywordsB':keywordsB,'labels':labels
        #'arti':arti
        context = {'result':result, 'testarti' :testarti, 'curryear':year2, 'company':company, 'item':item}
        return render(request, 'report2.html',context)
    
    return render(request, 'report2.html')