// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
//    - Select the second button by using an "id"

let btn1 = document.querySelector('button'); //body.childNodes[5].childNodes[9];
let btn2 = document.getElementById('btn-2');

const para1 =  document.body.children[2].children[1];
let para3 =  document.body.children[2].children[3];

// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored
//    - Output the second button WITHOUT using the variable in which it's stored

function btn1Click() {

    para3.remove();
    console.dir(btn1);
} 
btn1.addEventListener('click', btn1Click);


function btn2Click(event) {

    para1.classList.add('blue-bg');    
    document.childNodes[1].childNodes[2].childNodes[5].childNodes[3].style.backgroundColor = 'blue';
    //console.dir(document.body.childNodes[5].childNodes[13]);
    console.dir(event.target);

} 
btn2.addEventListener('click', btn2Click);

// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!

//let para1 =  document.body.childNodes[5].childNodes[3].firstChild.textContent;


//let para3 = document.body.childNodes[5].childNodes[7].lastChild.textContent;

console.log(para3);
// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
//    - The second button changes the background color of the first paragraph to blue


// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!

const loggedInUser = {
    name: 'Max',
    age: 32,
    isAdmin: true
};

let result = [];

function myTest() {

        for ( const propertyName in loggedInUser) {
            const propName = propertyName;
            const valueResult = loggedInUser[propertyName];

            result = propName + ':' + valueResult;
               
                    
        }
        document.getElementById('myResult').innerHTML = result; 
}
