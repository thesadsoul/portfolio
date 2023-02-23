
// change as per requirement
let projects = 27;
let clients = 12;
let years = 4;
// COLLETING PRO CLIENT AND YEARS ID
let pro = document.getElementById("p");
let cli = document.getElementById("c");
let year = document.getElementById("y");
let loc = document.getElementById("project");
let pulled = 0;

async function sleep(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

// LOAD DATA WHILE OFFSET = {} : loadProjects();




// TO CHANGE PROJECT DATAS AS PER TIME
async function loadProjects() {
    for (k = 0; k <= projects; k++) {
        await sleep(0.1);
        pro.innerHTML = k;

    }
    for (k = 0; k <= clients; k++) {
        await sleep(0.1);

        cli.innerHTML = k;
    }
    for (k = 0; k <= years; k++) {
        await sleep(0.1);

        year.innerHTML = k;
    }

}

// window.addEventListener('scroll', () => {
//     const scrolled = window.scrollY;


//     if (pulled == 0) {
//         if (scrolled >= (loc.offsetTop - window.innerHeight)) {
//             pulled = 1;
//             loadProjects();
//         }
//     }


// });

loadProjects();
