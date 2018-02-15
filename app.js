console.log('Script Loaded');

const wrap = document.getElementById('wrapper');
console.log(wrap);

const ul = document.getElementById('book-list');
console.log(ul);



//getting elements by class name is not returning array 
const tit = document.getElementsByClassName('title');
//console.log(tit);
//Array.form function convert html elements into array 
//than we can use foreach loop to access array
Array.from(tit).forEach(function(hed){
    console.log(hed);
});

//first it get elements by class name which are list then it covert this data
//into array and, run for loop and print all the lists tags 

const listName = document.getElementsByClassName('name');
for(let i=0; i<Array.from(listName).length; i++){
//const wmf =  document.querySelector('#book-list li:nth-child(i) .name');
console.log(listName[i]);
}



//get element by tages
console.log('getElementByTag');
const getTag = document.getElementsByTagName('li');

//going to covert into array and then run foreach loop 
Array.from(getTag).forEach(function(tags){
console.log(tags);    
});
console.log('tags end');



//selecting elements by using 'Query Selector'
const wrap1 = document.querySelector('#wrapper');
console.log(wrap1);
console.log('end');

console.log("Query Selector example 2");

//query select example 2
const book1 = document.querySelector('#book-list ul li:nth-child(2) .name');
console.log(book1);

//Example of QuerySelectAll 
console.log('Example of QuerySelectAll');
const book2 = document.querySelectorAll('#book-list li .name');
console.log(book2);

//convert into array and .textContent will display the text inside tags
Array.from(book2).forEach(function(listitems){
    //console.log(listitems.textContent);
    
    // it can change the actually heading of lists
    //listitems.textContent = 'text has been changes';
    //listitems.textContent += '(book title)';
});


console.log('Node Example');
const bookList = document.querySelector('#book-list');

console.log(bookList.nodeType);
const bookNode = bookList.nodeName;
console.log(bookNode);
//const nodeChild = bookList.hasChildNodes;
//const cloneBook = bookList.cloneNode(true);
//const cloneBook = bookList.cloneNode(false);
//console.log(cloneBook);

//console.log(bookListinnerHTML);
//bookList.innerHTML = '<h2>Books and more books </h2>';


console.log('Get book-list parent Element', bookList.parentElement.parentElement.parentElement);
console.log(' Child Nodes', bookList.childNodes);


bookList.previousElementSibling.querySelector('p').innerHTML += '<br /><h3> This is really magic</h3>';




// if page heading click it show alert msg and change heading 
const headSel = document.querySelector('#page-banner .title');
headSel.addEventListener('click',function(e){
   if(e.target == onclick);
    headSel.textContent = 'New Heading';
    alert('hello');
});


// Remove Item 
/*const btn = document.querySelectorAll('#book-list .delete');

Array.from(btn).forEach(function(data){
    
    data.addEventListener('click',function(e){
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    });
});*/

//prevent to default functionlity

const getLink = document.querySelector('#page-banner a');

getLink.addEventListener('click',function(e){
    e.preventDefault();
    console.log('Navigation', e.target.textContent, 'was prevented');
    //alert('Cannot go to page');
});


// Bubbling method , removing items 

const getLi = document.querySelector('#book-list ul');

getLi.addEventListener('click',function(e){
    if(e.target.className == 'delete'){
    const li = e.target.parentElement;
        getLi.removeChild(li);
    }
    
});

//get value from form text box

const addBook = document.forms['add-book'];

addBook.addEventListener('submit',function(e){
    e.preventDefault();
    const getText = addBook.querySelector('input[type="text"]').value;
    
    
    //create Elements
    
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deletBtn = document.createElement('span');
    
    //add content
    
    bookName.textContent = getText;
    deletBtn.textContent = 'delete';
    
    //add class name
    bookName.classList.add('name')
    deletBtn.classList.add('delete');
    
    
    //append to DOM
    
    li.appendChild(bookName);
    li.appendChild(deletBtn);
    const getLi1 = document.querySelector('#book-list ul');
    getLi1.appendChild(li);
    
});


//search form 
/*const searchText = document.forms['search-books'].querySelector('input');

searchText.addEventListener('keyup',function(e){
    
    //convert value into lowercase
    const term = e.target.value.toLowerCase();

    // grab the whole book elements need to search 
    const bookList = document.querySelector('#book-list ul');
    
    //grab book Names 
    const books = bookList.getElementsByTagName('li');
    
    //convert these book titles into array
    Array.from(books).forEach(function(book){
        
        //get book title text
        const title = book.firstElementChild.textContent;
        
        if(title.toLowerCase().indexOf(term) !== -1){
            book.style.display = 'block';
        }else{
            book.style.display = 'none';
        }
    });
    
    
});*/


const searchText = document.forms['search-books'].querySelector('input');

searchText.addEventListener('keyup',function(e){
    
    const term = e.target.value.toLowerCase();
    
    const searchArea = document.querySelector('#book-list ul');
    const books = searchArea.getElementsByTagName('li');
    
    Array.from(books).forEach(function(bookNames){
        
        const title = bookNames.firstElementChild.textContent;
        
        if(title.toLowerCase().indexOf(term) !== -1){
            bookNames.style.display = 'block';
        }else {
            bookNames.style.display = 'none';
        }
        
        
    });
    
});












































