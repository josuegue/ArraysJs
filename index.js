const url = 'https://jsonplaceholder.typicode.com/users';

const panel = {
    element: document.getElementById('panel'),
    userIdSpan: document.getElementById('userId'),
    userNameSpan: document.getElementById('userName'),
    userEmailSpan: document.getElementById('userEmail'),
    userWebsiteSpan: document.getElementById('userWebsite'),
    userCitySpan: document.getElementById('userCity'),
    userPhoneSpan: document.getElementById('userPhone'),
    prevButton: document.getElementById('prevButton'),
    nextButton: document.getElementById('nextButton'),
};

const usersData = {
    users: [],
    currentUserIndex: 0,
};

const displayUser = (index) => {
    const user = usersData.users[index];
    panel.userIdSpan.textContent = user.id;
    panel.userNameSpan.textContent = user.name;
    panel.userEmailSpan.textContent = user.email;
    panel.userWebsiteSpan.textContent = user.website;
    panel.userCitySpan.textContent = user.address.city;
    panel.userPhoneSpan.textContent = user.phone;
};

const handlePrevButtonClick = () => {
    if (usersData.currentUserIndex > 0) {
        usersData.currentUserIndex--;
        displayUser(usersData.currentUserIndex);
    }
};

const handleNextButtonClick = () => {
    if (usersData.currentUserIndex < usersData.users.length - 1) {
        usersData.currentUserIndex++;
        displayUser(usersData.currentUserIndex);
    }
};
const getUsers = async (url)=>{
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        return data;
    }
    catch(err){
        console.log(err);
    }
}

getUsers(url)
.then((data)=>{
    console.log(data);
    usersData.users = data;
    displayUser(usersData.currentUserIndex);
}).catch((err)=>{
    console.log(err);
}
);

panel.prevButton.addEventListener('click', handlePrevButtonClick);
panel.nextButton.addEventListener('click', handleNextButtonClick);

getUsers(url);
