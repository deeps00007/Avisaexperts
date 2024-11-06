document.getElementById("profile").addEventListener("click", function () {
    const profileCard = document.querySelector(".profile-card");
    profileCard.style.display = (profileCard.style.display === "none" || profileCard.style.display === "") ? "block" : "none";
});
// Hide profile card when clicking outside of it
document.addEventListener("click", function (event) {
    const profileCard = document.querySelector(".profile-card");
    const profileButton = document.getElementById("profile");

    if (!profileCard.contains(event.target) && !profileButton.contains(event.target)) {
        profileCard.style.display = "none";
    }
});



function showTab(tabName, element) {
        const tabs = document.querySelectorAll('.tabs-con-list');
        tabs.forEach(tab => {
            tab.classList.add('tabs-con-hidden');
        });
        document.getElementById(tabName).classList.remove('tabs-con-hidden');

        const icons = document.querySelectorAll('.tabs-con-icon-button');
        icons.forEach(icon => {
            icon.classList.remove('active');
        });
        element.classList.add('active');
    }
    const history_con=document.getElementById("history-con");
    history_con.addEventListener("click",()=>{
        function toggleTabsContainer() {
        const container = document.querySelector('.tabs-con-container');
        container.classList.toggle('hidden-vedio-con');
    }
    toggleTabsContainer();
    })