console.log(Math.ceil(4.2)); // 5

const obj1 = {};
obj1.name = 'Ball';
console.log(obj1.name); // Ball

function Obj(name) {
  this.name = name;
  this.exec = function() {
    console.log('Exec...');
  }
}

const obj2 = new Obj('Chair');
const obj3 = new Obj('Table');
console.log(obj2.name);
obj3.exec();
