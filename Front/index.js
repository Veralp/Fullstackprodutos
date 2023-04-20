
const vendedores = document.querySelector("#vendedores");
const produtos = document.querySelector("#vendas");
const vendas = document.querySelector("#vendas")

function listar() {
    let vendedores = {
        "Id": Id.value,
        "nome": nome.value,
        "matricula": matricula.value,
        
    }

    let options = {
        "method": "POST",
        "headers": {
            "Content-Type":"application/json"
        },
        "body": JSON.stringify(data)
    }

    fetch("http://localhost:3000/login", options)
    .then(resp => { return resp.json() })
    .then(info => {
        if(info.id != undefined) {
            localStorage.setVendedores("vendedores", JSON.stringify(info));

            
        }else {
            alert(info.msg);
        }
    });
}
function alterar() {
    let vendedores = {
        "Id": Id.value,
        "nome": nome.value,
        "matricula": matricula.value,
        
    }

    let options = {
        "method": "POST",
        "headers": {
            "Content-Type":"application/json"
        },
        "body": JSON.stringify(data)
    }

    fetch("http://localhost:3000/login", options)
    .then(resp => { return resp.json() })
    .then(info => {
        if(info.id != undefined) {
            localStorage.setVendedores("vendedores", JSON.stringify(info));

            
        }else {
            alert(info.msg);
        }
    });
}
function listar() {
    let vendas = {
        "Id": Id.value,
        "nome": nome.value,
        "valor": valor.value,
        
    }

    let options = {
        "method": "POST",
        "headers": {
            "Content-Type":"application/json"
        },
        "body": JSON.stringify(data)
    }

    fetch("http://localhost:3000/login", options)
    .then(resp => { return resp.json() })
    .then(info => {
        if(info.id != undefined) {
            localStorage.setProdutos("vendas", JSON.stringify(info));

            
        }else {
            alert(info.msg);
        }
    });
}
function alterar() {
    let vendas = {
        "Id": Id.value,
        "nome": nome.value,
        "valor": valor.value,
        
    }

    let options = {
        "method": "POST",
        "headers": {
            "Content-Type":"application/json"
        },
        "body": JSON.stringify(data)
    }

    fetch("http://localhost:3000/login", options)
    .then(resp => { return resp.json() })
    .then(info => {
        if(info.id != undefined) {
            localStorage.setProdutos("vendas", JSON.stringify(info));

            
        }else {
            alert(info.msg);
        }
    });
}


function lançar() {
    let vendas = {
        "data": data.value,
        "quantidade": quantidade.value,
        "produto": produto.value,
        
    }

    let options = {
        "method": "POST",
        "headers": {
            "Content-Type":"application/json"
        },
        "body": JSON.stringify(data)
    }

    fetch("http://localhost:3000/login", options)
    .then(resp => { return resp.json() })
    .then(info => {
        if(info.id != undefined) {
            localStorage.setVendas("vendas", JSON.stringify(info));

            
        }else {
            alert(info.msg);
        }
    });
}

