// fetch('http://localhost:3000')
fetch('https://gaming-laptops-api.herokuapp.com/')
  .then(response => response.json())
  .then(json => {
    for (let i = 0; i < json.length; i++) {
      var x = document.createElement('li')
      var content = `<div class="card" style="width: 350px">
                      <img src="imageSource" class="card-img-top"/>
                      <div class="card-body">                      
                        <h6 class="card-title">lapName</h6>
                        <p class="card-text">CPU: cpu</p>
                        <p class="card-text">GPU: gpu</p>
                        <p class="card-text">RAM: ram</p>
                        <p class="card-text">Screen: screenInfo</p>
                        <p class="card-text">Storage: storageInfo</p>
                      </div>
                    </div>`
      var rp = content.replace('lapName', (i + 1) + '. ' + json[i].name)
      rp = rp.replace('imageSource', json[i].image)
      rp = rp.replace('cpu', json[i].CPU)
      rp = rp.replace('gpu', json[i].GPU)
      rp = rp.replace('ram', json[i].RAM)
      rp = rp.replace('screenInfo', json[i].screen)
      rp = rp.replace('storageInfo', json[i].storage)
      x.className = 'list-group-item'
      x.innerHTML = rp
      document.getElementById('myul').appendChild(x)
    }
  })