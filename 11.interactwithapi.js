function getAllPokemons(){
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100')
    .then((res)=>{return res.json()})
    .then((data)=>{
        var i=1;
        document.getElementsByClassName('row')[3].innerHTML = ''
        data.results.map((item)=>{
            document.getElementsByClassName('row')[3].innerHTML += 
            `
            <div class="pokemon-container col-md-2 col-sm-3 col-xs-4">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" alt="" class="pokemon-image">
                    <div class="pokemon-number">#${i}</div>
                    <div class="pokemon-name">${item.name}</div>
            </div>
            `
            i++
        })
    })
}