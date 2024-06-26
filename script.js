// Check Point one Script 

// D. Auto-changing country names
const placeNames = ["Iraq", "Pakistan", "China", "South Korea", "Afghanistan"];
let currentIndex = 0;

setInterval(() => {
    document.getElementById("place-name").innerText = placeNames[currentIndex];
    currentIndex = (currentIndex + 1) % placeNames.length;
}, 2000);  // Increased the interval to 2 seconds for better readability





// Checkpoint two script 

window.onload = function() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd; 
    document.getElementById('start-date').min = today;
};

function setMinEndDate() {
    var startDate = document.getElementById('start-date').value;
    document.getElementById('end-date').disabled = false;
    document.getElementById('end-date').min = startDate; 
}

function bookNow() {
    
    let destination = document.getElementById('destination').value;
    let people = document.getElementById('people').value;
    let startDate = document.getElementById('start-date').value;
    let endDate = document.getElementById('end-date').value;
    let description = document.getElementById('description').value.length;
     
    if (destination && people && startDate && endDate) {
        if(description<50 || description>500){
            alert('Description must be of length 50-500');
        }
        else{
            alert('Booking successful!'); 
            document.getElementById('destination').value = '';
            document.getElementById('people').value = '';
            document.getElementById('start-date').value = '';
            document.getElementById('end-date').value = '';
            document.getElementById('description').value = '';
        }
    } else {
        alert('Please fill in all fields.');
    }    
}

const packages = [
    {
        image: "https://hblimg.mmtcdn.com/content/hubble/img/gokarna/mmt/destination/m_destination_gokarna_landscape_l_400_640.jpg", 
        place: "Gokarna",
        description: "Lakshadweep is home to serene beaches. You can expect summer heat and the temperature rising upto 32°C. Lakshadweep is also very popular among relaxation-seekers.",
        rate: '100 $',
        rating: 5
    },
    {
        image: "https://hblimg.mmtcdn.com/content/hubble/img/lakshadweep/mmt/destination/m_Lakshadweep_l_580_870.jpg",
        place: "Lakshadweep",
        description: "Lakshadweep is home to serene beaches. You can expect summer heat and the temperature rising upto 32°C. Lakshadweep is also very popular among relaxation-seekers.",
        rate: "1030 $",
        rating: 2
    },
    {
        image: "https://hblimg.mmtcdn.com/content/hubble/img/srinagar/mmt/destination/m_landscape_l_400_640.jpg",
        place: "Srinagar",
        description: "A dreamy honeymoon awaits you at Srinagar. You will love sightseeing and the lively festivals. Don’t forget to sample the delicious cuisines at Srinagar.",
        rate: "130 $",
        rating: 1
    },
    {
        image: "https://hblimg.mmtcdn.com/content/hubble/img/pondicherry/mmt/destination/m_destination-pondicherry-landscape_l_400_640.jpg",
        place: "Pondicherry",
        description: "If you are a beach lover, you must head to Puducherry. You can expect the city is at its hottest during this time. Puducherry is a hot favourite among foodies too.",
        rate: "120 $",
        rating: 5
    },
    {
        image: "https://hblimg.mmtcdn.com/content/hubble/img/goa/mmt/destination/m_destination-goa-landscape_l_400_640.jpg",
        place: "Goa",
        description: "Rev up your spirits with the stunning adventures of Goa. You can expect heavy rainfall throughout the season, pleasant sea breeze. Humidity tends to be high. You can also sample delicious cuisines at Goa.",
        rate: "103 $",
        rating: 4
    },
    {
        image: "https://hblimg.mmtcdn.com/content/hubble/img/havelock/mmt/destination/m_destination_havelock_landscape_l_400_640.jpg",
        place: "Havelock Island",
        description: "Havelock is an absolute delight for romantic souls. You can expect extremely hot days with temperatures reaching up to 32°C. Don’t forget to indulge in adventure activities at Havelock.",
        rate: "230 $",
        rating: 3
    },
    {
        image: "https://hblimg.mmtcdn.com/content/hubble/img/manali/mmt/destination/m_Landscape_l_400_640.jpg",
        place: "Manali",
        description: "Manali is the perfect escape for romance-seekers. You will love the waterfalls and adventure sports. Additionally, you can try out various adventure activities at Manali.",
        rate: "2550 $",
        rating: 2
    },
    {
        image: "https://hblimg.mmtcdn.com/content/hubble/img/amritsar/mmt/destination/m_destination_Amritsar_l_367_623.jpg",
        place: "Amritsar",
        description: "Soak in the mystic hues of Amritsar, a famous pilgrimage spot! You will love exploring sightseeing attractions and attending various festivals. The local cuisines at Amritsar are worth trying out too.",
        rate: "280 $",
        rating: 4
    },
    {
        image: "https://hblimg.mmtcdn.com/content/hubble/img/rameshwaram/mmt/destination/m_destination_rameshwaram_landscape_l_400_640.jpg",
        place: "Rameshwaram",
        description: "Made famous by the epic Ramayana, Rameshwaram is a quaint beach town and a popular Hindu pilgrimage destination that also attracts nature lovers and adventure enthusiasts.",
        rate: "90 $",
        rating: 4
    },
]

let cardsContainer = document.getElementById('main-container-2'); 
for(let i=0;i<packages.length;i++){
    let ratingStar = '';
    for(let stars = 0; stars<packages[i].rating; stars++){
        ratingStar+='⭐';
    }
    cardsContainer.innerHTML += 
    `<div class="card">
        <img src="${packages[i].image}" alt="">
        <h2>${packages[i].place}</h2>
        <p>${packages[i].description}</p>
        <div class='rateRating'>
            <h3>${packages[i].rate}</h3>
            <h3 class='stars'>${ratingStar}</h3>
        </div>
        <button class='service'>Book Nows</button>
    </div>` 
}




const services = [
    {
        image: "https://b.zmtcdn.com/data/pictures/9/19359199/9e8ffca566cfa94eb4dd1a009c931743_featured_v2.jpg?output-format=webp", 
        place: "Affordable Hotel", 
        rate: '100$ - 1000$' 
    },
    {
        image: "https://b.zmtcdn.com/data/pictures/chains/0/19091260/0fada51155b5fff789bf182ea730a0d0_featured_v2.jpg?output-format=webp", 
        place: "Food & Drinks", 
        rate: '10$ - 50$' 
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Tourguide2.jpg/220px-Tourguide2.jpg", 
        place: "Safety Guide", 
        rate: '100 $' 
    },
    {
        image: "https://b.zmtcdn.com/data/pictures/6/3400346/886efb75864d1e6edf6d7411b332eaf6_featured_v2.jpg", 
        place: "Access to Library",
        rate: '5$ - 20$' 
    },
    {
        image: "https://b.zmtcdn.com/data/pictures/8/20697478/2f5a1e49824432905827abe457c4ad12_featured_v2.jpg", 
        place: "Wifi Access",
        rate: '5$ - 10$' 
    },
    {
        image: "https://b.zmtcdn.com/data/pictures/1/19493951/2f897a835cdf0accd2426a1a576287aa_featured_v2.jpg", 
        place: "Pub",
        rate: '50$ - 500$'
    }
]


    let cardsContainer2 = document.getElementById('main-container-3'); 
    for(let i=0;i<services.length;i++){ 
        cardsContainer2.innerHTML += 
        `<div class="card" style="background-color: rgb(6, 227, 6);">
            <img src="${services[i].image}" alt="">
            <h3>${services[i].place}</h3> 
            <h4>${services[i].rate}</h4> 
            <button class='service' style="background-color: rgb(0, 67, 0);">Try Now</button>
        </div>` 
    }



                                // Check point 4 script 
                                
                                
                                // Register Model box
                                // Get the modal
                                var registerModal = document.getElementById("register-myModal");
                                
                                // Get the button that opens the modal
                                var btn = document.getElementById("submit-btn");

                                // When the user clicks the button, open the modal
                                btn.onclick = function() {
    registerModal.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close2")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    registerModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == registerModal) {
        registerModal.style.display = "none";
    }
}

// Handle form submission
function setMinDOB() {
var minDate = new Date(new Date().getFullYear() - 18, new Date().getMonth(), new Date().getDate()).toISOString().split('T')[0]; 
// document.getElementById('checkpoint-4-dob').value = minDate; 
document.getElementById('checkpoint-4-dob').max = minDate; 
}
document.getElementById('checkpoint-4-dob').addEventListener('click', setMinDOB);
document.getElementById("checkpoint-4-registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Perform validation and registration logic here  
    // Calculate the date 18 years ago 
    // Set the initial value to the minimum date
   
    let fullname = document.getElementById('checkpoint-4-fullName');
    let contact = document.getElementById('checkpoint-4-contact');
    let email = document.getElementById('checkpoint-4-email');
    let password = document.getElementById('checkpoint-4-password');  
    if(fullname.value!='' && contact.value!='' && email.value!='' && password.value!=''){
        alert('Registered Successfully Bro👍');
        fullname.value = '';
        contact.value = '';
        email.value = '';
        password.value = '';
        registerModal.style.display = "none";
    }
    else{
        alert('Bro fill the fields Correctly 🤔');
    }
});
 


                                                        // Login Model Box 
// Get the modal
var loginModal = document.getElementById("login-myModal");

// Get the button that opens the modal
var btn = document.getElementById("login-btn");

// When the user clicks the button, open the modal
btn.onclick = function() {
    loginModal.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    loginModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == loginModal) {
    loginModal.style.display = "none";
  }
}

// Handle form submission
document.getElementById("checkpoint-4-loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  // Perform validation and registration logic here
  let email = document.getElementById('checkpoint-4-email2');
  let password = document.getElementById('checkpoint-4-password2');
  if(email.value!=='' && password.value!==''){
    alert('LogedIn Bro👍');
    email.value='';
    password.value='';
    loginModal.style.display = "none";
  }
  else{
    alert('Bro fill the things correctly🫡')
  }
});