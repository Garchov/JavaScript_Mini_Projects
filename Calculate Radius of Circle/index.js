const pi=3.14159;
let radius;

let circumference;





radius=window.prompt('enter the radius of a cricle');
radius=Number(radius);

circumference=2*pi*radius;


document.getElementById('aa').textContent = 'The circumference is: ' + circumference;