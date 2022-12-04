date = new Date();
layout = '';
day = 0;

for (i = 0; i < 6; i++) {
	layout += '<div class="row">';

	for (j = 0; j < 4; j++) {

		++day;
		
		layout += '<div class="col-3 mb-5">';
		
		if (date.getMonth() == 11 && date.getDate() >= day) {
			layout += '<div class="card h-100">';
			layout += '<div class="card-body">';
			layout += '<img class="img-fluid" src="images/' + day + '.png">';
		}
		else {
			layout += '<div class="card border-white h-100 unopened">';
			layout += '<div class="card-body">';
			layout += '<img class="img-fluid" src="images/pixel.png"><div class="position-absolute num">' + day + '</div>';
		}
		
		layout += '</div>';
		layout += '</div>';
		layout += '</div>';
		
	}
	
	layout += '</div>';
}

document.getElementById('calendar').innerHTML = layout;