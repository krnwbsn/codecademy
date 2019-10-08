const getSleepHours = day => {
  if (day === 'monday') {
    return 8;
  } else if (day === 'tuesday') {
    return 7;
  } else if (day === 'wednesday') {
    return 6;
  } else if (day === 'thursday') {
    return 5;
  } else if (day === 'friday') {
    return 4;
  } else if (day === 'saturday') {
    return 3;
  } else if (day === 'sunday') {
    return 2;
  }

  /*switch (day) {
    case 'monday':
    return 8;
    break;

    case 'tuesday':
    return 7;
    break;

    case 'wednesday':
    return 6;
    break;

    case 'thursday':
    return 5;
    break;

    case 'friday':
    return 4;
    break;

    case 'saturday':
    return 3;
    break;

    case 'sunday':
    return 2;
    break;

    default:
    return 'Error';
    break;
  }*/
}

const getActualSleepHours = () => getSleepHours ('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

console.log(getSleepHours('monday'));
console.log(getActualSleepHours());

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
}
console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
 	const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

if (actualSleepHours === idealSleepHours) {
  console.log('Perfect sleep');
	} else if (actualSleepHours > idealSleepHours) {
  console.log('You\'ve got' + (idealSleepHours - actualSleepHours) + 'Get more sleep');
	} else if (actualSleepHours < idealSleepHours) {
  console.log('You\'ve got ' + (idealSleepHours - actualSleepHours) + ' Get some rest');
	} else {
  console.log('Error!');
  }
}
calculateSleepDebt();
