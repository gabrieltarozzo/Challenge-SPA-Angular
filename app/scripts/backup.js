/* Ignorar, testes em JS 
var form = document.getElementById("myForm")

form.addEventListener('submit', function(e){
    e.preventDefault()

    var search = document.getElementById("search").value;

    var originalName = search.split(' ').join('');

    fetch("https://api.github.com/users/" + originalName)
    .then((result) => result.json())
    .then((data) => {
        console.log(data)

        document.getElementById("result").innerHTML = '<h1>'+ data.name + '</h1><a target="_blank" href="https://www.github.com/'+originalName+'"> <img src="'+data.avatar_url+'"/>'
    })

})

const ul = document.querySelector('ul')

function getApiGitHub() {
  fetch('https://api.github.com/users/WilliamDosSantos/repos')
    .then(async res => {

      if(!res.ok) {
        throw new Error(res.status)
      }

      var data = await res.json()

      data.map(item => {
        let li = document.createElement('li')

        li.innerHTML = `
        <strong>${item.name.toUpperCase()}</strong>
        <span>URL: ${item.url}</span>
        <span>Data Criação: 
          ${Intl.DateTimeFormat('pt-BR')
            .format(new Date(item.created_at))}
        </span>
      `
      ul.appendChild(li)

      })

    }).catch(e => console.log(e))
}

getApiGitHub()

*/
