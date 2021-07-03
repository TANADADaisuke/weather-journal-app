/* Global Variables */

const apiKey = '03aac2c9ce137a6ff101afe37adf3c15';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


// Get project data
const getProjectData = async (url) => {
    const res = await fetch(url);
    try {
        const projectData = await res.json();
        console.log(projectData);
        return projectData;
    } catch (error) {
        console.log('error', error);
    }
}

getProjectData('/all');
