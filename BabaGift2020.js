function createCircle(radius){
	return {
		draw(){
			console.log('draw')
		}
	};
}

const abc = {
	radius: 1,
	draw(){console.log('hello')}
}

const another = { ...abc };
console.log(another);

