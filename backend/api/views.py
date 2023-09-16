from django.shortcuts import render
from firebase_admin import credentials, initialize_app, firestore
from django.http import HttpResponse
from django.http import JsonResponse
import os, json
import requests
from bs4 import BeautifulSoup
SecretKey_path="C:/collage work/AI-TOOLS-DIRECTORY/backend/api/secretKey.json"

cred = credentials.Certificate(SecretKey_path)

initialize_app(cred)
db = firestore.client()

root_ref_user = db.collection("users")
root_ref_tool = db.collection("tools") 

def authentication(request):
    auth=request.GET
    # print(auth.u_email)
    print(auth)

    user_id=[doc.id for doc in root_ref_user.stream()]
    if (not auth.get("u_email") in user_id):
        root_ref_user.document(auth.get("u_email")).set(
            {
                "u_email":auth.get("u_email"),
                "u_name":auth.get("u_name"),
                "u_image":auth.get("u_profile_uri"),
                "u_favourite_tool":[]
            }
         )
    else:
        pass
    
    return JsonResponse({"status":True,"u_email":auth.get("u_email"),
            "u_name":auth.get("u_name"),
            "u_image":auth.get("u_profile_uri")})



def migrations(request):

    l=[]
    for j in range(1,5):
        website="https://easywithai.com/ai-image-generators/"+"page/"+str(j) #url
        result=requests.get(website) #response
        content=result.text
        soup=BeautifulSoup(content,'html.parser')

    
        block1=soup.find_all('article',class_="elementor-post")
        print(len(block1))
        for i in range(len(block1)):
            d={}
            goToLink=block1[i].find("a",href=True).get("href")
            name=block1[i].find("h3",class_="elementor-post__title").text.strip()
            print(name)
            

            result=requests.get(goToLink) #response
            content2=result.text
            # url=goToLink
            # page=urllib.request.urlopen(url)
            soup2=BeautifulSoup(content2,'html.parser')

            box3=soup2.find_all("div",class_="elementor-widget-container")
            # print(box3[4].prettify())
            sitelink=box3[4].find("a").get("href")
            try:
                imagelink=box3[4].find("a").find("img").get("src")
            except Exception as e:
                print(e)
                continue
            print(sitelink)
            print(imagelink)
            description=box3[4].find("p").text
            print(description)
            d={"tool_name":name,"tool_link":sitelink,"image_link":imagelink,"tool_description":description,'tool_count':0}
            l.insert(0,d)

    root_ref_tool.document("image").update({
        "imageGenerators": l
    })
    
    return HttpResponse("ok")

def data(request):
    array=root_ref_tool.document("image").get(field_paths={'imageupscalers'}).to_dict()
    print(array)
    return HttpResponse(json.dumps(array))