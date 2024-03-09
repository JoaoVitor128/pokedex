const pokemonName = document.querySelector(".pokemon-name")
const pokemonNumber = document.querySelector(".pokemon-number")
const pokemonImage = document.querySelector(".pokemon-image")
const form = document.querySelector(".form")
const input = document.querySelector(".input-search")
const prev = document.querySelector(".btn-prev")
const next = document.querySelector(".btn-next")

let search = 1

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    if (APIResponse.status == 200) {
        const data = await APIResponse.json()
        return data
    }
}

const renderPokemon = async (pokemon) => {

    pokemonName.innerHTML = 'loading...'
    pokemonNumber.innerHTML = ' '

    const data = await fetchPokemon(pokemon)

    if (data) {
        pokemonName.innerHTML = data.name
        pokemonNumber.innerHTML = data.id
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']

        console.log(data);
    } else{
        alert('Not Found :c')
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    renderPokemon(input.value.toLowerCase())
    input.value = ''
})

prev.addEventListener('click', () => {
  search -= 1
  renderPokemon(search)
})

next.addEventListener('click', () => {
    search += 1
    renderPokemon(search)
  })
renderPokemon(search)