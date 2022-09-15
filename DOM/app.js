document.addEventListener('DOMContentLoaded', function () {
    // Adding Objective 1 Header
    let obj1 = document.createElement('h2');
    obj1.id = 1;
    let obj1text = document.createTextNode('Objective 1');
    obj1.appendChild(obj1text);
    let inpId = document.getElementById("inptext");
    document.body.insertBefore(obj1, inpId);
    // Adding Objective 1
    let input = document.createElement('input');
    let inptext = document.createTextNode('input');
    input.type = 'submit';
    input.appendChild(inptext);
    document.body.insertBefore(input, inpId);
    input.addEventListener('click', function() {
        alert("You look great today!");
    })

    // Adding Objective 2 Header
    let obj2 = document.createElement('h2');
    obj2.id = 2;
    let obj2text = document.createTextNode('Objective 2');
    obj2.appendChild(obj2text);
    document.body.insertBefore(obj2, inpId);
    // Adding Objective 2
    submitbtn = document.getElementById('submitbtn');
    submitbtn.addEventListener('click', function () {
        let alertText = document.getElementById('inptext').value;
        alert(alertText);
    })

    // Adding Objective 3 Header
    let obj3 = document.createElement('h2');
    obj3.id = 3;
    let obj3text = document.createTextNode('Objective 3');
    obj3.appendChild(obj3text);
    let div = document.getElementById("obj3div");
    document.body.insertBefore(obj3, div);
    // Adding Objective 3
    div.addEventListener('mouseover', function (e) {
        e.currentTarget.style.backgroundColor = "blue";
    })
    div.addEventListener('mouseout', function (e) {
        e.currentTarget.style.backgroundColor = "white";
    })

    // Adding Objective 4 Header
    let obj4 = document.createElement('h2');
    obj4.id = 4;
    let obj4text = document.createTextNode('Objective 4');
    obj4.appendChild(obj4text);
    // document.body.append(obj4);
    let inplistId = document.getElementById("listbtn");
    document.body.insertBefore(obj4, inplistId);
    // Adding Objective 4
    let para = document.createElement('p');
    let paratext = document.createTextNode('This is the paragraph text for objective 4!!');
    para.appendChild(paratext);
    // document.body.appendChild(para);
    document.body.insertBefore(para, inplistId);
    para.addEventListener('click', function(e) {
        // e.currentTarget.style.color = "red";
        rColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, 0);
        e.currentTarget.style.color = rColor;
    })

    // Adding Objective 5 Header
    let obj5 = document.createElement('h2');
    obj5.id = 5;
    let obj5text = document.createTextNode('Objective 5');
    obj5.appendChild(obj5text);
    // document.body.append(obj5);
    document.body.insertBefore(obj5, inplistId);
    // Adding Objective 5
    let inputspan = document.createElement('input');
    inputspan.type = 'submit';
    inputspan.id = 'inputSpan';
    // document.body.appendChild(inputspan);
    document.body.insertBefore(inputspan, inplistId);
    let divspan = document.createElement('div');
    // document.body.appendChild(divspan);
    document.body.insertBefore(divspan, inplistId);
    inputspan.addEventListener('click', function(e) {
        let span = document.createElement('span');
        let name = document.createTextNode('Michael');
        span.appendChild(name);
        divspan.appendChild(span);
    })

    // Adding Objective 6 Header
    let obj6 = document.createElement('h2');
    obj6.id = 6;
    let obj6text = document.createTextNode('Objective 6');
    obj6.appendChild(obj6text);
    // document.body.append(obj6);
    document.body.insertBefore(obj6, inplistId);
    // Adding Objective 6
    let friendarr = ['Nicole', 'David', 'Alyssa', 'Jared', 'John', 'Kevin', 'Tim', 'Jack', 'Harry', 'Will'];
    console.log(friendarr);
    let listbtn = document.getElementById('listbtn');
    listbtn.addEventListener('click', function(e) {
        for(let i = 0; i < friendarr.length; i++) {
            let ul = document.getElementById('list');
            let li = document.createElement('li');
            let liText = document.createTextNode(friendarr[i]);
            li.appendChild(liText);
            ul.appendChild(li)
            } 
    })
})