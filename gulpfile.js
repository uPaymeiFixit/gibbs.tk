const Gulp = require("gulp");
const rename = require("gulp-rename");
const mustache = require("gulp-mustache");
const fs = require("fs");

// remove single occurrence of 'item' from array
Array.prototype.remove = function (item) {
  this.splice(this.indexOf(item), 1);
  return this;
};

// import json from 'location'
function readJSONFile(location) {
  return JSON.parse(fs.readFileSync(location));
}

// Build and store a list of all projects in the following format:
/**
 * {
 *   projects: [
 *      {
 *        title: 'Title',
 *        ...
 *        location: 'Folder Name'
 *      }
 *   ]
 * }
 */
// This will run once no matter which task is called, because every task needs
// to access the global json variable it creates.
let json;
function buildMasterJSON() {
  console.log("Pre-tasks: Building master JSON");
  // init json file we will fill up with all project details
  json = { projects: [] };
  // get a string array of all project directories
  let projects_directories = fs.readdirSync("src/portfolio/");
  // remove files we don't care about
  projects_directories.remove("index.html");
  projects_directories.remove("index.mustache");
  projects_directories.remove("{{project_name}}");
  projects_directories.remove(".DS_Store");

  // loop through those project directories to read the json from them
  for (let i = 0; i < projects_directories.length; i++) {
    // read json file for current project
    const project_json = readJSONFile(
      `src/portfolio/${projects_directories[i]}/${projects_directories[i]}.json`
    );
    // Store it and the project location in the new json file
    json.projects[i] = project_json;
    json.projects[i].location = projects_directories[i];
  }
}
buildMasterJSON();

///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// TASKS ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// Create a separate gulp task for each project
function buildGulpTasksForProjects() {
  let gulp_tasks = [];
  // Loop through each project to create a separate task for it
  json.projects.forEach((project) => {
    // Create a task name out of each one
    const task_name = `build:projects:${project.location}`;
    // Create the actual task
    exports[task_name] = function () {
      console.log(`Compiling ${project.location}`);

      return Gulp.src("src/portfolio/{{project_name}}/index.mustache")
        .pipe(rename("index-mustache.html"))
        .pipe(mustache(project))
        .pipe(Gulp.dest(`src/portfolio/${project.location}`));
    };
    // Assign a name to the task
    exports[task_name].displayName = task_name;
    // Add this to an array of tasks we can use to create a parent with
    gulp_tasks.push(exports[task_name]);
  });
  // Create a parent task that contains all of these tasks
  exports["build:projects"] = Gulp.parallel(gulp_tasks);
}
buildGulpTasksForProjects();

// Compile /index.html
exports["build:home"] = function () {
  console.log("Building HOME Page");

  let index_json = {};

  // Move featured projects to the front of the array
  json.projects.sort((a, b) => b.featured - a.featured);
  // Now put the first six (featured) projects in index_json.featured
  index_json.featured = json.projects.slice(0, 6);

  // Sort projects by date
  json.projects.sort((a, b) => new Date(b.date) - new Date(a.date));
  // Now put the first four (newest) projects in index_json.latest
  index_json.latest = json.projects.slice(0, 4);

  // Run gulp processes including mustache
  return Gulp.src("src/index.mustache")
    .pipe(rename("index.html"))
    .pipe(mustache(index_json))
    .pipe(Gulp.dest("src"));
};
exports["build:home"].displayName = "build:home";

// Compile /portfolio/index.html
exports["build:portfolio"] = function () {
  console.log("Building PORTFOLIO Page");

  // Sort projects by date
  json.projects.sort((a, b) => new Date(b.date) - new Date(a.date));

  return Gulp.src("src/portfolio/index.mustache")
    .pipe(rename("index.html"))
    .pipe(mustache(json))
    .pipe(Gulp.dest("src/portfolio"));
};
exports["build:portfolio"].displayName = "build:portfolio";

// Upload files to web server
exports.upload = function () {
  console.log("Updating gibbs.tk server");
};
exports.upload.displayName = "upload";

// Define parent tasks
exports.build = Gulp.parallel(
  exports["build:home"],
  exports["build:portfolio"],
  exports["build:projects"]
);
exports.default = Gulp.series(exports.build, exports.upload);
