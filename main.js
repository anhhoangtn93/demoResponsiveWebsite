const elements = document.querySelectorAll('.dropdown');
elements.forEach(element => {
    element.addEventListener('click', event => {
        let dropdown = event.target.closest('.dropdown');
        let dropdownContent = dropdown.querySelector('.dropdown-content');
        elements.forEach((otherItem) => {
            if (otherItem !== element) {
                otherItem.querySelector(".dropdown-content").classList.remove("show");
            }
        });
        if (dropdownContent.classList.contains('show')) {
            dropdownContent.classList.remove('show');
        } else {
            dropdownContent.classList.add('show');
        }
    });
});
//click outstite dropdown-content then close it
document.addEventListener('click', event => {
    let dropdownContents = document.querySelectorAll('.dropdown-content');
    dropdownContents.forEach(dropdownContent => {
        let dropdown = dropdownContent.closest('.dropdown');
        if (dropdown && !dropdown.contains(event.target)) {
            dropdownContent.classList.remove('show');
        }
    });
});
//open sideBar
document.querySelector('.menu_bar').addEventListener('click', () => {
    document.getElementById("sideBar").classList.add('active');
});
//close sideBar
document.querySelector('.closeSideBar').addEventListener('click', () => {
    document.getElementById("sideBar").classList.remove('active');
});
