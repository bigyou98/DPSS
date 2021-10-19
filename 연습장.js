let newId = "123_.def&&*%^..";
let reg = /.{2,}/g;
if (reg.test(newId)) {
  newId = newId.replace(reg, ".");
}
console.log(reg);
console.log(newId);
