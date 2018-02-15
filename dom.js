console.log('Script Loaded');



// Remove Item 
/*const btn = document.querySelectorAll('#book-list .delete');

Array.from(btn).forEach(function(data){
    
    data.addEventListener('click',function(e){
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    });
});*/



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












































