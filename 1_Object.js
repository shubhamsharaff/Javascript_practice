const obj = {
  name: 'shubham',
  company: 'flipkart',
  details: function () {
    return `This is ${this.name}! Company ${this.company}`;
  },
  detailed: function () {
    return `This is ${obj.name}! Company ${obj.company}`;
  },
};

// To print function of object
console.log(obj.detailed());