const chunkArray=(a,b,c=false)=>{//array,chunk,conservative
	const m=[],x=c?Array.from(a):a;
	while(x.length){m[m.length]=x.splice(0,b)};
	return m
};

/*
//#
const testChunk=(n,i,o=false)=>{
	const c=console,x=Array(n).fill().map((v,x)=>x),f=JSON.stringify;
	c.log(f(chunkArray(x,i,o),null,'\t'));
	c.log('input:',x.length!==0?f(x):'destroyed');
};
//
console.group('chuncked');
testChunk(20,8,true)
testChunk(20,8);
testChunk(10,2);
console.groupEnd();
*/