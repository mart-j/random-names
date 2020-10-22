function choose(){
    var chosenOne = "Error"
    if (todaysParticipants.length === 0) 
        chosenOne = "Nav Uzvarētāju!"
    else {
        chosenOne = todaysParticipants[Math.floor(Math.random() * todaysParticipants.length)];
    }
    document.getElementById("chosen-field").innerHTML = chosenOne
}

var allParticipants = new Map()
var todaysParticipants = []

allParticipants.set('checkbox--1','Aina')
allParticipants.set('checkbox--2','Andris')
allParticipants.set('checkbox--3','Artūrs')
allParticipants.set('checkbox--4','Artyom')
allParticipants.set('checkbox--5','Beāte')
allParticipants.set('checkbox--6','Estere')
allParticipants.set('checkbox--7','Gatis C')
allParticipants.set('checkbox--8','Gatis M')
allParticipants.set('checkbox--9','Guna')
allParticipants.set('checkbox--10','Ieva')
allParticipants.set('checkbox--11','Ilze')
allParticipants.set('checkbox--12','Jānis')
allParticipants.set('checkbox--13','Ketija')
allParticipants.set('checkbox--14','Kristaps D')
allParticipants.set('checkbox--15','Kristaps ?')
allParticipants.set('checkbox--16','Mairis')
allParticipants.set('checkbox--17','Mārtiņš')
allParticipants.set('checkbox--18','Mikus')
allParticipants.set('checkbox--19','Sandris')
allParticipants.set('checkbox--20','Vitālijs')
allParticipants.set('checkbox--21','Viesis?')

document.getElementById("checkbox--1").addEventListener('click', updateNames);
document.getElementById("checkbox--2").addEventListener('click', updateNames);
document.getElementById("checkbox--3").addEventListener('click', updateNames);
document.getElementById("checkbox--4").addEventListener('click', updateNames);
document.getElementById("checkbox--5").addEventListener('click', updateNames);
document.getElementById("checkbox--6").addEventListener('click', updateNames);
document.getElementById("checkbox--7").addEventListener('click', updateNames);
document.getElementById("checkbox--8").addEventListener('click', updateNames);
document.getElementById("checkbox--9").addEventListener('click', updateNames);
document.getElementById("checkbox--10").addEventListener('click', updateNames);
document.getElementById("checkbox--11").addEventListener('click', updateNames);
document.getElementById("checkbox--12").addEventListener('click', updateNames);
document.getElementById("checkbox--13").addEventListener('click', updateNames);
document.getElementById("checkbox--14").addEventListener('click', updateNames);
document.getElementById("checkbox--15").addEventListener('click', updateNames);
document.getElementById("checkbox--16").addEventListener('click', updateNames);
document.getElementById("checkbox--17").addEventListener('click', updateNames);
document.getElementById("checkbox--18").addEventListener('click', updateNames);
document.getElementById("checkbox--19").addEventListener('click', updateNames);
document.getElementById("checkbox--20").addEventListener('click', updateNames);
document.getElementById("checkbox--21").addEventListener('click', updateNames);


function updateNames(){
    if (this.checked) {
        if (!todaysParticipants.includes(allParticipants.get(this.id)))
            todaysParticipants.push(allParticipants.get(this.id))
    }
    else {
        if (todaysParticipants.includes(allParticipants.get(this.id))) {
            var index = todaysParticipants.indexOf(allParticipants.get(this.id))
            if (index >= 0) {
                todaysParticipants.splice(index,1)
            }
        }
    }
    document.getElementById("liste").innerHTML = "Piedalās: " + todaysParticipants
}

const btn = document.querySelector('.btn')
const winner = document.querySelector('.chose-wrapper')
btn.addEventListener('click' , bounce)

function bounce() {

    winner.className = 'chose-wrapper animate__animated animate__wobble'
    setTimeout(function org() {
        winner.className = 'chose-wrapper'
    },1000)
console.log('bounce')

}