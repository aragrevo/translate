//traductor
function translate(text) {
    for (const t of diccionary) {
        text = recursiva(t);
    }
    return text;

    function recursiva(t) {
        if (text.includes(t.english)) {
            text = text.replace(t.english, t.spanish);
            recursiva(t);
        }
        return text;
    }
}

function extraeText(rule, text) {
    let array = [];
    for (let i=0; i<titles.length; i++) {
        let init = rule.search( titles[i] );
        let end = rule.indexOf(".",init)+1;
        
        if( init!==-1 ){
            
            text.push(rule.substring(init,end)+"\n");
            rule = rule.substring(end,rule.length);
            array.push( true );

            break;    
        } 

        if(titles[i+1] == undefined && init == -1 ){
            array.push( false );
        }
    }
    array.push(text);
    array.push(rule);
    return array;
}

// elementos html
const app = document.getElementById("app");


//traducir
for (let index = 0; index < rules.length; index++) {
    //console.log(rules.length);
    
    let rule = rules[index];
    let text = [];
    let next;

    do {
        [next, text , rule] = extraeText(rule, text);
        console.log(next);
    }while ( next );
        
    text.forEach(element => {
        app.innerText += element;
    });
    
}







