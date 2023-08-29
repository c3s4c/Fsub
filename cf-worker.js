addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
    })

    async function handleRequest(request) {
      const { pathname } = new URL(request.url)
      const PASSWORD = "YUORPASS";

        if (pathname === '/') {
            return new Response('ok', { status: 200 })
              }
        else if (pathname === '/v2') {
            const DBresponse = await fetch("https://api.jsonbin.io/v3/b/64e6f2e59d312622a395b893");
            const jsonV2 =await DBresponse.json();
            const encodedV2 = jsonV2.record.servers ;
            const decodedV2 = atob(encodedV2);
            return new Response(decodedV2, { status: 200 })
                    } 
        else if (pathname === '/admin'){
          const resData = await (await fetch("https://raw.githubusercontent.com/c3s4c/Fsub/main/admin/index.html")).text();
          return new Response(resData,{'headers':{'Content-Type': 'text/html'}});
        }
        else if (pathname === '/replace.html'){
          const resData = await (await fetch("https://raw.githubusercontent.com/c3s4c/Fsub/main/admin/replace.html")).text();
          return new Response(resData,{'headers':{'Content-Type': 'text/html'}});
        }
        else if (pathname === '/add.html'){
          const resData = await (await fetch("https://raw.githubusercontent.com/c3s4c/Fsub/main/admin/add.html")).text();
          return new Response(resData,{'headers':{'Content-Type': 'text/html'}});
        }
        else if (pathname === '/del.html'){
          const resData = await (await fetch("https://raw.githubusercontent.com/c3s4c/Fsub/main/admin/del.html")).text();
          return new Response(resData,{'headers':{'Content-Type': 'text/html'}});
        }
        else if(pathname == '/replace.js'){
          const resData = await (await fetch("https://raw.githubusercontent.com/c3s4c/Fsub/main/admin/js/replace.js")).text();
          return new Response(resData,{'headers':{'Content-Type': 'text/html'}});
        }
        else if(pathname == '/add.js'){
          const resData = await (await fetch("https://raw.githubusercontent.com/c3s4c/Fsub/main/admin/js/add.js")).text();
          return new Response(resData,{'headers':{'Content-Type': 'text/html'}});
        }
        else if(pathname == '/del.js'){
          const resData = await (await fetch("https://raw.githubusercontent.com/c3s4c/Fsub/main/admin/js/del.js")).text();
          return new Response(resData,{'headers':{'Content-Type': 'text/html'}});
        }
        else if (pathname === '/api/v1/replace'){
          if (request.method === "POST") {
            const reqBody = await request.text();
            if (reqBody.length < 5){
              return new Response("Bad Request", { status: 400 })
           }else{
            const splitedData = reqBody.split(",");
            if(splitedData[0] == PASSWORD){
            const options = {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': 'XXXXXXXXXXXXXX'
              },
              body: JSON.stringify({ "servers": splitedData[1] }),
            };
            try {
              const response = await fetch("https://api.jsonbin.io/v3/b/64e6f2e59d312622a395b893", options);
          
              if (response.ok) {
                return new Response('ok');
              }
              else {
                return new Response('failed', { status: response.status });
              }
            } catch (error) {
              return new Response(error.stack || error);
            }
           }else{
            return new Response("no Bro",{status:401});
           }
          }
          }else{
          return new Response('Method Not Allowed', { status: 405 })}
                          }
        else if(pathname === '/api/v1/add'){
          if(request.method === 'POST'){
            const reqBody = await request.text();
            if (reqBody.length < 5){
              return new Response("Bad Request", { status: 400 })
           }else{
            const splitedData = reqBody.split(",");
            if(splitedData[0] == PASSWORD){
            const DBresponse = await fetch("https://api.jsonbin.io/v3/b/64e6f2e59d312622a395b893");
            const jsonV2 =await DBresponse.json();
            const encodedV2 = jsonV2.record.servers ;
            const decodedV2 = atob(encodedV2);
            const compV2 = btoa(atob(splitedData[1])+"\n"+decodedV2)
            
            const options = {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': 'XXXXXXXXXXXXXX'
              },
              body: JSON.stringify({ "servers": compV2 }),
            };
            try {
              const response = await fetch("https://api.jsonbin.io/v3/b/64e6f2e59d312622a395b893", options);
          
              if (response.ok) {
                return new Response('ok');
              }
              else {
                return new Response('failed', { status: response.status });
              }
            } catch (error) {
              return new Response(error.stack || error);
            }
            }else{
              return new Response("no Bro",{status:401});
            }
           }
          }else{
            return new Response('Method Not Allowed', { status: 405 })
          }
        }
        else if(pathname === '/api/v1/del'){
          if(request.method === 'POST'){
            const reqBody = await request.text();
            if (reqBody.length < 5){
              return new Response("Bad Request", { status: 400 })
           }else{
            const splitedData = reqBody.split(",");
            if(splitedData[0] == PASSWORD){
            const DBresponse = await fetch("https://api.jsonbin.io/v3/b/64e6f2e59d312622a395b893");
            const jsonV2 =await DBresponse.json();
            const encodedV2 = jsonV2.record.servers ;
            const decodedV2 = atob(encodedV2);
            const compV2 = btoa(decodedV2.replace(atob(splitedData[1]),''))
            
            const options = {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': 'XXXXXXXXXXXXXX'
              },
              body: JSON.stringify({ "servers": compV2 }),
            };
            try {
              const response = await fetch("https://api.jsonbin.io/v3/b/64e6f2e59d312622a395b893", options);
          
              if (response.ok) {
                return new Response('ok');
              }
              else {
                return new Response('failed', { status: response.status });
              }
            } catch (error) {
              return new Response(error.stack || error);
            }
            }else{
              return new Response("no Bro",{status:401});
            }
           }
          }else{
            return new Response('Method Not Allowed', { status: 405 })
          }
        }
        else if (pathname === '/yebekhe/mix') {
          return new Response(await (await fetch("https://raw.githubusercontent.com/yebekhe/TelegramV2rayCollector/main/sub/mix")).text(),{status:200});
        }
        else if (pathname === '/yebekhe/r') {
          return new Response(await (await fetch("https://raw.githubusercontent.com/yebekhe/TelegramV2rayCollector/main/sub/reality")).text(),{status:200});
        }
        else if (pathname === '/yebekhe/vless') {
          return new Response(await (await fetch("https://raw.githubusercontent.com/yebekhe/TelegramV2rayCollector/main/sub/vless")).text(),{status:200});
        }
                          }
