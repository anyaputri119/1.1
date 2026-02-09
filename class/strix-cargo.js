var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
var cargo = {
    Post : function(){
        cargo.protocol = "POST";
    },
    Get : function(){
        cargo.protocol = "GET";
    },
    Put : function(){
        cargo.protocol = "PUT";
    },
    Patch : function(){
        cargo.protocol = "PATCH";
    },
    Delete : function(){
        cargo.protocol = "DELETE";
    },
    post : function(){
        cargo.protocol = "POST";
    },
    get : function(){
        cargo.protocol = "GET";
    },
    put : function(){
        cargo.protocol = "PUT";
    },
    patch : function(){
        cargo.protocol = "PATCH";
    },
    delete : function(){
        cargo.protocol = "DELETE";
    },
    getheaders : function(){
        return null;
    },
    onerror : function(){
    },
    send : async function(cargo_send_request){
        if(cargo_send_request){
            if(cargo.protocol == "GET"){
                let cargo_final_url = cargo_send_request.url;
                if(!cargo_send_request.headers)
                cargo_send_request.headers = cargo.getheaders();
                if(cargo_send_request.headers==null) {
                    console.log("%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;");
                    console.log(`Caution: headers not found`);
                    cargo_send_request.headers = {};
                }
                if(cargo_send_request.data){
                    cargo_final_url+="?"
                    if(typeof(cargo_send_request.data) === "string"){
                        cargo_final_url+=`${cargo_send_request.data.toString()}`;
                    }   else    {
                        for (var key in cargo_send_request.data) {
                            if(cargo_send_request.data[key]==null && typeof(cargo_send_request.data[key])==="object")
                            cargo_send_request.data[key] = "";
                            cargo_final_url+=`${key.toString()}=${cargo_send_request.data[key].toString()}&`;
                        }
                        cargo_final_url=cargo_final_url.substring(0,cargo_final_url.length-1);
                    }
                }
                return await fetch(cargo_final_url, {
                    method: cargo.protocol,
                    headers: cargo_send_request.headers ? cargo_send_request.headers : null,
                    body : cargo_send_request.body ? cargo_send_request.body : null
                }).then(async function (response) {
                    if(response.status===404){
                        console.log("%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;");
                        console.log(`%c${response.status} ${response.statusText}`,"font-size:32px; color:#ffb827");
                        console.log("🗃 PACKAGE "+cargo.indexpackage+" - COMMON ERROR");
                        console.log(`%c☒%c Cargo no pudo encontrar la URL, ${response.url}, comprobar si concuerdan las palabras`,"color:#ff6c3b; font-size:12px;");
                        console.log(`%c☒%c Posible controller: %c${response.url.split("/")[3]}%c`,"color:#ff6c3b; font-size:12px;","color:#ffb827; font-size:12px;");
                        console.log(`%c☒%c Posible función: %c${response.url.split("/")[4]}%c`,"color:#ff6c3b; font-size:12px;","color:#ffb827; font-size:12px;");
                        return {
                            error: "404 not found",
                            message: `Cargo couldn't found the controller`
                        };
                    }   else    {
                        cargo.indexpackage++;
                        cargo.globalindexpackage++;
                        sessionStorage.setItem("cargo__indexpackage",cargo.globalindexpackage);
                        cargo.container = await response.json().then(async function (data) {return data;});
                        if(cargo.log){
                            console.log("🗃 PACKAGE "+cargo.indexpackage+" ("+cargo.globalindexpackage+")");
                            console.log(cargo.container);
                        }
                        if(cargo_send_request.callback) cargo_send_request.callback(cargo.container);
                        cargo.protocol = "GET";
                        //🗃
                        return cargo.container;
                    }

                }).catch(function (err) {
                    console.log("%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;");
                    console.log(`error: ${err}`);
                });
            }   else    {
                //Solución provisional, la idea es no usar ajax
                if(!cargo_send_request.headers)
                cargo_send_request.headers = cargo.getheaders();
                
                if(cargo_send_request.headers==null) {
                    console.log("%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;");
                    console.log(`Caution: headers not found`);
                    cargo_send_request.headers = {};
                }
                await $.ajax({
                    url: cargo_send_request.url,
                    data: cargo_send_request.data,
                    type: cargo.protocol,
                    headers: cargo_send_request.headers,
                    cache: false,
                    success : function(response){
                        cargo.indexpackage++;
                        cargo.globalindexpackage++;
                        sessionStorage.setItem("cargo__indexpackage",cargo.globalindexpackage);
                        cargo.container = response;
                        if(cargo.log){
                            console.log("🗃 PACKAGE "+cargo.indexpackage+" ("+cargo.globalindexpackage+")");
                            console.log(cargo.container);
                        }
                        if(cargo_send_request.callback) cargo_send_request.callback(cargo.container);
                        cargo.protocol = "GET";
                        //🗃
                        return cargo.container;
                    },
                    error : function(err){
                        console.log("%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇%c▇","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;","color:#000;","color:#ffb827;");
                        console.log(`error: ${err}`);
                    }
                });
            }
        }   else    {
            return null;
        }
    },
    check : function(){
        if(cargo.container && !cargo.container.success){
            if(cargo.log){
                console.log("🗃 PACKAGE "+cargo.indexpackage+" - ERROR FROM HOST");
                console.log(cargo.container);
            }
            cargo.onerror(cargo.container);
            return false;
        }   else    {
            return true;
        }
    },
    indexpackage : -1,
    globalindexpackage : sessionStorage.getItem("cargo__indexpackage")!=null ? sessionStorage.getItem("cargo__indexpackage") : 0,
    container : null,
    protocol : "GET",
    log : true
}
}