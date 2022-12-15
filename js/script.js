function openMenu(){
    if(menuItems.style.display === 'block'){
        closeMenu()
    }else{
        menuItems.style.display = 'block';
        header.style.margin = '22rem 0 0 0';
    };
};

function closeMenu(){
    menuItems.style.display = 'none';
    header.style.margin = '0';
}