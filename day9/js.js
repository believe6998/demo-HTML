var student1 = {
    rollNumber: 'A001',
    name: 'Nguyễn Thiện Minh',
    avatar: 'img/1.jpg',
    phone: '0984471190',
    address: '11a/36 Hoàng Quốc Việt',
};
var student2 = {
    rollNumber: 'A002',
    name: 'Phạm Thanh Hoa',
    avatar: 'img/2.jpg',
    phone: '0394075235',
    address: '16/3/58 Trần Bình',
};
var student3 = {
    rollNumber: 'A002',
    name: 'Phạm Thanh Hoa',
    avatar: 'img/3.jpg',
    phone: '0394075235',
    address: '16/3/58 Trần Bình',
};
var student4 = {
    rollNumber: 'A002',
    name: 'Phạm Thanh Hoa',
    avatar: 'img/4.jpg',
    phone: '0394075235',
    address: '16/3/58 Trần Bình',
};
var student5 = {
    rollNumber: 'A002',
    name: 'Phạm Thanh Hoa',
    avatar: 'img/5.jpg',
    phone: '0394075235',
    address: '16/3/58 Trần Bình',
};
var student6 = {
    rollNumber: 'A002',
    name: 'Phạm Thanh Hoa',
    avatar: 'img/6.jpg',
    phone: '0394075235',
    address: '16/3/58 Trần Bình',
};
var listStudent = new Array();
listStudent.push(student1);
listStudent.push(student2);
listStudent.push(student3);
listStudent.push(student4);
listStudent.push(student5);
listStudent.push(student6);

classMainContent = document.getElementsByClassName('main-content');
if (classMainContent != null && classMainContent.length > 0) {
    var mainContent = classMainContent[0];
    for (var i = 0; i < listStudent.length; i++) {
        var itemContent = '<div class = "personal-infor">';
        itemContent += '<div class = "avatar" style = "background-image: url(\'' + listStudent[i].avatar + '\'); background-size: cover">';
        itemContent += '</div>';
        itemContent += '<div class = "line-infor">';
        itemContent += '<label>Rollnumber</label>';
        itemContent += '<div>' + listStudent[i].rollNumber + '</div>';
        itemContent += '<div class = "line-infor">';
        itemContent += '<label>Name</label>';
        itemContent += '<div>' + listStudent[i].name + '</div>';
        itemContent += '<div class = "line-infor">';
        itemContent += '<label>Phone</label>';
        itemContent += '<div>' + listStudent[i].phone + '</div>';
        itemContent += '<div class = "line-infor">';
        itemContent += '<label>Address</label>';
        itemContent += '<div>' + listStudent[i].address + '</div>';
        itemContent += '</div>';
        itemContent += '</div>';
        mainContent.innerHTML += itemContent;
    }
}