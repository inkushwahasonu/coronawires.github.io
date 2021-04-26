
const container = document.querySelector('.container');

const request = new XMLHttpRequest();
request.open('GET', "info.json");
request.send();

request.addEventListener('load', function(){
  // console.log(this.responseText);

  const [data] = JSON.parse(this.responseText);
  
  const htmlData = `
    <div><h1>${data.country[0].name}</h1></div>
  `;

  container.insertAdjacentHTML("afterbegin", htmlData);
});
