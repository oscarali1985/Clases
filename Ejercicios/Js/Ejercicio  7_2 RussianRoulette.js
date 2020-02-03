var bulletPosition = 3;

function spinChamber()
{
	var chamberPosition = Math.floor((Math.random() * 6) + 1);
	return chamberPosition;
}

function fireGun(chamberPosition)
{

	let camara=spinChamber();
	if (camara===bulletPosition){
	  console.log('True '+camara+'bala '+bulletPosition);
	  return false;
	  	}else{
	  	   console.log('false '+camara+'bala'+bulletPosition);
	  return true
	}
}

if(fireGun()) console.log('Keep playing :)');
else console.log('you are dead!');


function spinChamber()
{
	var chamberPosition = Math.floor((Math.random() * 6) + 1);
	return chamberPosition;
}

function fireGun(chamberPosition)
{
	if (bulletPosition ==spinChamber){
	  console.log('True bala '+bulletPosition);
	  return false;
	  	}else{
	  	   console.log('false ala'+bulletPosition);
	  return true
	}
}

if(fireGun()) console.log('Keep playing :)');
else console.log('you are dead!');
