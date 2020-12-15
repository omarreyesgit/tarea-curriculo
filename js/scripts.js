// text-efect
// Wrap every letter in a span
anime
  .timeline({ loop: true })
  .add({
    targets: ".ml5 .line",
    opacity: [0.5, 1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 700,
  })
  .add({
    targets: ".ml5 .line",
    duration: 600,
    easing: "easeOutExpo",
    translateY: (el, i) => -0.625 + 0.625 * 2 * i + "em",
  })
  .add({
    targets: ".ml5 .ampersand",
    opacity: [0, 1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: "-=600",
  })
  .add({
    targets: ".ml5 .letters-left",
    opacity: [0, 1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: "-=300",
  })
  .add({
    targets: ".ml5 .letters-right",
    opacity: [0, 1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: "-=600",
  })
  .add({
    targets: ".ml5",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });
// text-efect

// firebase
 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBEzCJXhUlKhqNrinkVnLHetUJp15h3CZ0",
    authDomain: "contact-form-e5bca.firebaseapp.com",
    projectId: "contact-form-e5bca",
    storageBucket: "contact-form-e5bca.appspot.com",
    messagingSenderId: "148095057487",
    appId: "1:148095057487:web:434ef4a5e1a98fa5d0743a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
// firebase


// Reference contactInfo collection
let contactInfo = firebase.database().ref('infos');




//listen sumbmit
document.querySelector('form').addEventListener('submit', submitForm);

function submitForm(e) { 
  e.preventDefault();
  //get input values
  let name = document.getElementById('formGroupExampleInput').value;
  let mail = document.getElementById('exampleFormControlInput1').value;
  let text = document.getElementById('exampleFormControlTextarea1').value;
  console.log(name,mail,text);

  saveContactInfo(name,mail,text);

  document.querySelector('form').reset();

  //show alert
  document.querySelector('.alert').style.display ='block';


  //hide alert after 3 seconds
  setTimeout(() => {
      document.querySelector('.alert').style.display ='none';

  }, 3000);
  
 }

//  Save infos to firebase
  function saveContactInfo(name,mail,text) {  
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
      name: name,
      mail: mail,
      text: text
    })
  }



