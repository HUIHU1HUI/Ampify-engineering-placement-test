const https = require('https');
var fs = require('fs');

let url = "https://api.ampifymusic.com/packs";
//get contents from url
https.get(url, (res) => {
    let body = "";
    res.on("data", (chunk) => {
        body += chunk;
    });
//On response end 
    res.on("end", () => {
        try {
            let json = JSON.parse(body);
            //get number of packs
            let numPacks = Object.keys(json.packs).length;

            console.dir("Number of packs = " + numPacks);

            listGenres(json, numPacks);
            listHipHopPacks(json, numPacks);
            saveToDisk("contents.json", body);



        } catch (error) {
            console.error(error.message);
        };
    });

}).on("error", (error) => {
    console.error(error.message);
});



function listGenres(file, numPacks) {
    let genresArray = [];

    //Iterate through list of packs adding the genre names to an array.  If the array already has that genre, it is skipped.
    for (i = 0; i < numPacks; i++) {
        if (!genresArray.includes(JSON.stringify(file.packs[i].genres))) {
            genresArray.push(JSON.stringify(file.packs[i].genres));
        }
    }
    //Sort genres alphabetically
    genresArray.sort();
    //Print
    console.log("Genres:");
    console.log(genresArray);
}

function listHipHopPacks(file, numPacks) {
    console.log("Hip-Hop packs");
    let hipHopPacks = [];
    //Iterate through the packs.  If the pack has hip-hop in it's genre key, it's name is pushed into an array, and it's entry is printed to the console
    for (i = 0; i < numPacks; i++) {
        if (file.packs[i].genres == 'hip-hop') {
            //push name into array
            hipHopPacks.push(file.packs[i].name);
            console.log(file.packs[i]);
        }
    }
    //Prints the names of the packs only
    //console.log(hipHopPacks);
}

function saveToDisk(filename, item) {
    //save contents to disk as a json file
    fs.writeFile(filename, item, function(err) {
        if (err) {
            console.log(err);
        }
    });
}
