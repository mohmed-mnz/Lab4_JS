function Find()
{
    var CTag = document.getElementById("Tag"); 
    var CClass = document.getElementById("class"); 
    var CId = document.getElementById("id"); 
    var CName = document.getElementById("name"); 


    var tag = document.getElementsByTagName(CTag.value);
    var cls = document.getElementsByClassName(CClass.value);
    var id = document.getElementById(CId.value);
    var name = document.getElementsByName(CName.value);

    
    if(id == null)
    {
        document.getElementById("result").value = "{all : "+ tag.length + " , Class : "+cls.length + " , Id : False  , Name : "+name.length + "}"; 
    }
    else
    {
        document.getElementById("result").value = "{all : "+ tag.length + " , Class : "+cls.length + " , Id : True  , Name : "+name.length + "}"; 
    }
    
}