function AssingCourseEs5(courseName, publishedBy) {
  courseName = courseName || "Master Javscript";
  publishedBy = publishedBy || "SkillBakery";
  console.log(courseName);
}

AssingCourseEs5();

const sum = (...args) => {
  let result = 0;
  for (i = 0; i < args.length; i++) {
    result += args[i];
  }
  return result;
};

const sum2 = (...args) => {
  let result = 0;
  args.forEach(function (args) {
    result += args;
  });
  return result;
};
