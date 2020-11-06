// var course = new Object();

// var course={
// title = "JavaScript Practice",
// instructor = "Morten",
// level = 1,
// published = true,
// views = 0,
// updateViews: function(){
//     return ++course.views;
// }
// }

// console.log(course)

///Object Contructor function

function Course(title, instructor, level,published,views) {
    this.title = title;
    this,instructor = instructor;
    this.level=level;
    this.published=published;
    this.views=views;
    this.updateViews = function(){
        return ++this.views;
    }

}

//dot notation

//Object.property

//bracket notation

//Object["property"]