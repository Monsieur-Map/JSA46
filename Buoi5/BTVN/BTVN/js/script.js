// DOM elements
const profileForm = document.getElementById("profileForm");
const profileDisplay = document.getElementById("profileDisplay");
const profileName = document.getElementById("profileName");
const profileEmail = document.getElementById("profileEmail");
const profilePhone = document.getElementById("profilePhone");
const profileAddress = document.getElementById("profileAddress");
const profileAvatar = document.getElementById("profileAvatar");
const editProfileButton = document.getElementById("editProfile");

// Load profile from localStorage
function loadProfile() {
  const profile = JSON.parse(localStorage.getItem("profile"));
  if (profile) {
    profileName.textContent = profile.name;
    profileEmail.textContent = profile.email;
    profilePhone.textContent = profile.phone;
    profileAddress.textContent = profile.address;
    profileAvatar.src = profile.avatar;
    profileForm.style.display = "none";
    profileDisplay.style.display = "block";
  } else {
    profileForm.style.display = "block";
    profileDisplay.style.display = "none";
  }
}

// Save profile to localStorage
function saveProfile(event) {
  event.preventDefault();
  const profile = {
    name: profileForm.name.value,
    email: profileForm.email.value,
    phone: profileForm.phone.value,
    address: profileForm.address.value,
    avatar: profileForm.avatar.value,
  };
  localStorage.setItem("profile", JSON.stringify(profile));
  loadProfile();
}

// Edit profile
function editProfile() {
  const profile = JSON.parse(localStorage.getItem("profile"));
  if (profile) {
    profileForm.name.value = profile.name;
    profileForm.email.value = profile.email;
    profileForm.phone.value = profile.phone;
    profileForm.address.value = profile.address;
    profileForm.avatar.value = profile.avatar;
  }
  profileForm.style.display = "block";
  profileDisplay.style.display = "none";
}

// Event listeners
profileForm.addEventListener("submit", saveProfile);
editProfileButton.addEventListener("click", editProfile);

// Load profile on page load
loadProfile();
