data = [
  {
    image: "https://cdn.discordapp.com/attachments/905020513104060416/1078279913561399376/image.png",
    title: "TheSadSoul Portfolio Web",
    links: "",
  },
  {
    image: "../images/tss.jpg",
    title: "Episode Two",
    links: "",
  },
  {
    image: "../images/sungarden.png",
    title: "Episode Three",
    links: "",
  },
];

let projecter = document.getElementById("projector");
function generate() {
  data.forEach((datas, index) => {
    projecter.innerHTML =
      projecter.innerHTML +
      `
    
    <div class="blackbox" data-aos="fade-up" onclick='window.location.href="${
      datas["links"]
    }"'>
    <div id="project-image" style="--img:url(${datas["image"]}")></div>
    <div id="project-index">${index + 1}</div>
    <div id="project-name">${datas["title"]}</div>
    </div>

    `;
  });
}

generate();
