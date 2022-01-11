const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

let personTeam = document.querySelector('.team-container');

for (let key in team){
  personTeam.innerHTML += `
  <div class="team-card">
    <div class="card-image">
      <img src="img/${team[key].image}" alt="${team[key].name}"/>
    </div>
    <div class="card-text">
      <h3>${team[key].name}</h3>
      <p>${team[key].role}</p>
    </div>
  </div>`

}
console.log(personTeam)

//bonus
const addBtn = document.getElementById('addMemberButton')

addBtn.addEventListener("click",addCard)

function addCard(){
  const newCard = {
    name: document.getElementById('name').value, 
    role: document.getElementById('role').value, 
    image: document.getElementById('image').value 
  }
  team.push(newCard)
  getCardCode(newCard)
}

function getCardCode(cardobj){
  document.querySelector('.team-container').innerHTML +=`
  <div class="team-card">
    <div class="card-image">
      <img src="${cardobj.image}" alt="${cardobj.name}"/>
    </div>
    <div class="card-text">
      <h3>${cardobj.name}</h3>
      <p>${cardobj.role}</p>
    </div>
  </div>`
}