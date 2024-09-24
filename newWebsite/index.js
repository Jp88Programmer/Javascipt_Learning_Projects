// api-key : 
// 9fdd81ad274e405e92d3b485ee0fb5c3

console.log('this is the news app ')

let source = 'bbc-news'
let apiKey = '9fdd81ad274e405e92d3b485ee0fb5c3'
let xhr = new XMLHttpRequest()

// xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`,true)
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true)

let newsAccrodin = document.getElementById('newsAccrodin')

xhr.onload = function () {
  if (this.status === 200) {
    json = JSON.parse(this.responseText)

    let articles = json.articles
    console.log(articles)

    let newsArticles = ''
    articles.forEach((element, index) => {

      let newDeploye = `
            <div class="accordion-item">
                    <h2 class="accordion-header" id="heading${index}">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}"
                            aria-expanded="true" aria-controls="collapse${index}">
                            ${index + 1} : ${element["title"]}
                        </button>
                    </h2>
                    <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}"
                        data-bs-parent="#newsAccrodin">
                        <div class="accordion-body">
                            ${element["description"]} <a href=${element['url']} target="_blank">Read More.</a>
                        </div>
                    </div>
                </div>
            </div>`
      newsArticles += newDeploye
    })

    newsAccrodin.innerHTML = newsArticles
  }else {
    alert(xhr.status + ' ' + xhr.statusText)
  }
}

xhr.send()
