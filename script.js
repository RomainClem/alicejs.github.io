function showLinks() {
	var x = document.getElementById("link");
	if (x.style.display == "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function showList() {
	var x = document.getElementById("characters");
	if (x.style.display == "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function closeChar() {
	var w = document.getElementById("random-char");
	w.style.display = "none";
}

function compareCloseChar() {
	var w = document.getElementById("compare-char");
	w.style.display = "none";
}

function playGameOver() {
	var p = document.getElementById("button-play");
	p.style.backgroundImage = "url('images/button-cat.gif')"
}

function playGameOut() {
	var p = document.getElementById("button-play");
	p.style.backgroundImage = "url('images/cheshire-cat.png')"
}

function compareOver() {
	var p = document.getElementById("button-compare");
	p.style.backgroundImage = "url('images/button-tea.gif')"
}

function compareOut() {
	var p = document.getElementById("button-compare");
	p.style.backgroundImage = "url('images/tea-party.gif')"
}

function slide() {
 var x = document.getElementById("like").value;
 if (x>80) {
 document.getElementById("opinion").innerHTML = "You love it!";
 document.getElementById("like-picture").src = "images/alice-laughing.gif";
 }
 else if (x>50) {
 document.getElementById("opinion").innerHTML = "You like it.";
 document.getElementById("like-picture").src = "images/alice-flowers.gif";
 } 
 else if (x>20) {
 document.getElementById("opinion").innerHTML = "Not your favorite Disney.";
 document.getElementById("like-picture").src = "images/alice-bored.gif";
 }
 else {
 document.getElementById("opinion").innerHTML = "Oh no.";
 document.getElementById("like-picture").src = "images/crying-alice.gif";
 }
}

function playGame() {
	var g = Math.floor((Math.random()*18)+1);
	if (g == 1) {
	var character = "Alice";
	var alignment = "Good";
	var quote = "'Curiouser and curiouser.' 'If I had a world of my own, everything would be nonsense. Nothing would be what it is, because everything would be what it isn't.'";
	var description = "Alice is the protagonist of the 1951 Disney animated feature film, Alice in Wonderland. She is a young girl who uses her surreal imagination to escape her practical and mundane life. Alice's curiosity and yearn for something new leads her to a mysterious realm know on as Wonderland. As she traverses through the wacky world, however, Alice finds herself appreciating the normality that she once rejected.";
	document.getElementById("picture").src = "images/alice.gif";
	} else if (g == 2) {
	  var character = "Bill the Lizard";
	  var alignment = "Neutral";
	  var quote = "'At your service, gov'nah!'";
      var description = "Bill is first seen walking with a ladder. He was eventually asked by the Dodo and the White Rabbit to get rid of the monster inside the White Rabbit's house. It was actually Alice who had grown large because of a cookie that she ate, and Bill refuses at first. When Bill is forced down the chimney by the Dodo, the smoke causes Alice to sneeze sending him blasting off into the sky. What became of him afterward is unknown.";
	  document.getElementById("picture").src = "images/bill-the-lizzard.gif";
	} else if (g == 3) {
	  var character = "King of Hearts";
	  var alignment = "Neutral";
	  var quote = "'Why, my dear, today is your unbirthday, too!'";
      var description = "The King of Hearts is the consort of the Queen of Hearts, and, unlike most instances, is generally the lesser of the two monarchs. He is much smaller than his wife, as well as meeker. While he tries to please his wife, at the same time, he is one of the few people who is able to change her mind about anything, such as altering Alice's beheading to a trial instead. He seems to act more like a son to his wife than a husband, as he asks her to put Alice on trial in a childlike manner, and she pats him on the head like he were a child after taking his suggestion for the trial, as well as using him as a shield against an oversized Alice.";
	  document.getElementById("picture").src = "images/king-of-hearts.gif";
	} else if (g == 4) {
	  var character = "Card Soldier";
	  var alignment = "Bad";
	  var quote = "'I heard the Queen say only yesterday you deserved to be beheaded.'";
      var description = "The Card Soldiers are the loyal servants of the Queen of Hearts, and the secondary antagonists in Alice in Wonderland. They make up the Queen's military force and always obey her orders. However, this is mostly due to their tremendous fear of her rather than loyalty.";
	  document.getElementById("picture").src = "images/card-soldiers.gif";
	} else if (g == 5) {
	  var character = "Caterpillar";
	  var alignment = "Neutral";
	  var quote = "'Who are you?'";
      var description = "He is a resident of Wonderland, known for smoking a hookah from which colorful smoke rises, forming letters, words, and even images that he refers to while speaking. The Caterpillar often over-enunciates certain words such as 'exactly' and 'correctly'. He has a passion for recitation and grammar, and unlike most of the residents of Wonderland, he appears more calm and collected and was one of the few willing to give Alice useful advice. He also has a rather short temper, which can easily be set off, if his height is mocked or someone fails to understand his hints. He appears to have rather poor memory, as he did not recall who Alice was during their second meeting.";
	  document.getElementById("picture").src = "images/caterpillar.gif";
	} else if (g == 6) {
	  var character = "Cheshire Cat";
	  var alignment = "Neutral";
	  var quote = "'Most everyone's mad here.'";
      var description = "The Cheshire Cat has a permanent smile on his face and he can disappear at will. He is a very odd being able to reshape his body to either amuse or frighten his visitors. He's very mysterious, and in his own way, very dark. Like all members of Wonderland, he is mad, but unlike the others, he admits it with pride. All of Wonderland's inhabitants appear to hold fear over him, even the Queen of Hearts, most likely due to the fact that he is the maddest and craziest of them all, or it could be due to his unique abilities.";
	  document.getElementById("picture").src = "images/cheshire-cat.gif";
	} else if (g == 7) {
	  var character = "Curious Oysters";
	  var alignment = "Good";
	  var quote = "'Feed?!'";
      var description = "They are featured in 'The Walrus & The Carpenter or The Tale of the Curious Oysters' segment wherein the little oysters are tricked by The Walrus and the Carpenter into going for a walk when in actuality they planned to eat them.";
	  document.getElementById("picture").src = "images/curious-oysters.gif";
	} else if (g == 8) {
	  var character = "Mad Hatter";
	  var alignment = "Neutral";
	  var quote = "'This is an unbirthday party!'";
      var description = "Named for his dotty demeanor and oversized, green tophat, he is an elderly man that Alice encounters in Wonderland. The Hatter and his best friend, the March Hare, are known for throwing frequent tea parties in celebration of their 'unbirthdays'.While the Hatter is loud, eccentric, and insane like the rest of Wonderland's residents, he is also rather charming and can be mild-mannered from time to time, particularly when dealing with visitors such as Alice. He tends to use terms such as 'my dear' when referring to Alice, is shown to be courteous, and is overall the warmer side of the duo that is himself and the March Hare, who is far more rambunctious and outspoken.";
	  document.getElementById("picture").src = "images/mad-hatter.gif";
	} else if (g == 9) {
	  var character = "March Hare";
	  var alignment = "Neutral";
	  var quote = "'Birthday?! Ha! My dear child, this is not a birthday party!' 'I have an excellent idea! Let's change the subject.' 'Veeeeerry interesting!' 'Nothing whatever!'";
      var description = "The March Hare—just like everyone else in Wonderland—is mad. The Hare is best friends with the Mad Hatter and enjoys tea just as much as him. Although they are close and both insane, March Hare seems to be a bit more loud, rude, and energetic than the Hatter, who is a bit more gentleman-like. In relation to this, the Hare often carries around an oversized mallet with him. He also tends to start his sentences with an elongated, 'Ah!', typically before making a proclamation. He also appears to be antisocial to some degree, as he loses his patience with Alice rather quickly. His biggest pet peeve seems to be talking before you think.";
	  document.getElementById("picture").src = "images/march-hare.gif";
	} else if (g == 10) {
	  var character = "Dinah";
	  var alignment = "Good ";
	  var quote = "'Meow'";
      var description = "In the film, Dinah is Alice's cat. She is first seen sitting with Alice in a tree and listening to Alice's sister read from a history book. Alice then makes a crown out of flowers and puts them on Dinah's head, crowning her the flower girl cat. Alice tells Dinah that in her world, everything would be nonsense, because everything would be what it isn't. For example, animals would talk and live in houses because Alice's World would be a ''Wonderland.'' Suddenly, Dinah and Alice spot a White Rabbit with a coat on and a pocket watch and they chase after him to the Rabbit Hole";
	  document.getElementById("picture").src = "images/dinah.gif";
	} else if (g == 11) {
	  var character = "Dodo";
	  var alignment = "Good, mostly neutral";
	  var quote = "'We'll smoke the monster out!'";
      var description = "He is in charge of handling the Caucus Race, an event in which everyone runs at an equal pace and in a circle in an attempt to get dry. He plays a much larger role than in the book. He is a mixture between the Dodo and Pat the Gardener.";
	  document.getElementById("picture").src = "images/dodo.gif";
	} else if (g == 12) {
	  var character = "The Doorknob";
	  var alignment = "Good";
	  var quote = "'One good turn deserves another!''No, impassible. Nothing's impossible.'";
      var description = "The Doorknob is the main entrance to Wonderland. He lies at the very end of the rabbit hole that Alice fell through. Due to his small size, the only way to enter him is to drink from a special bottle of multi-flavored liquid that will shrink the drinker in size. The drinker also needs the key to unlock the Doorknob which is located on the same table as the liquid.";
	  document.getElementById("picture").src = "images/doorknob.gif";
	} else if (g == 13) {
	  var character = "Dormouse";
	  var alignment = "Good";
	  var quote = "'Twinkle, twinkle, little bat!'";
      var description = "The Dormouse sat between the March Hare and the Mad Hatter. They were using him, while he slept, as a cushion when Alice arrives at the start of the chapter.The Dormouse is always falling asleep during the scene, waking up every so often, for example to say.";
	  document.getElementById("picture").src = "images/dormouse.gif";
	} else if (g == 14) {
	  var character = "Queen of Hearts";
	  var alignment = "Bad";
	  var quote = "'Off with their heads!''I warn you, child. If I lose my temper, you lose your head! Understand?!''Somebody's head is going to roll for this!'";
      var description = "The Queen of Hearts is the main antagonist. She is the tyrannical and deranged ruler of Wonderland with a sadistic penchant for beheadings. When Alice arrives in the kingdom and inadvertently humiliates the monarch, the Queen of Hearts becomes obsessed with decapitating the girl.Among Disney's animated rogues gallery, the Queen of Hearts is easily recognized by her red, black, and gold color scheme—as well as her motif of hearts and playing cards. Backed by her iconography, and catchphrase, 'Off with their heads!', she serves as one of the primary members of the Disney Villains franchise.";
	  document.getElementById("picture").src = "images/queen-of-hearts.gif";
	} else if (g == 15) {
	  var character = "Tweedle Dee and Tweedle Dum";
	  var alignment = "Neutral";
	  var quote = "'Button! Button! Who's got the button?!''That's logic!'";
      var description = "The Tweedles are identical twins and two fat brothers dressed in schoolboy uniforms and wearing propeller caps. They take particular delight in reciting poems and songs. They're playful and jolly which can seem a little annoying. They enjoy company and will always insist in a little game. They also have the ability to multiply. When they move the sound of a honking noise can be heard.";
	  document.getElementById("picture").src = "images/tweedle-brothers.gif";
	} else if (g == 16) {
	  var character = "Flowers of Wonderland";
	  var alignment = "Good, later neutral";
	  var quote = "'Do you suppose she is a wildflower'";
      var description = "The Flowers of Wonderland who live near the White Rabbit's House are sentient beings who love to sing. While Alice is chasing after the White Rabbit after being shrunk, she runs into a flower garden where she meets a large group of beautiful flowers. During her attempt to befriend them, the child flowers exclaim they can sing and want to sing about themselves.";
	  document.getElementById("picture").src = "images/flowers-of-wonderland.gif";
	} else if (g == 17) {
	  var character = "The Walrus and the Carpenter";
	  var alignment = "Neutral";
	  var quote = "'The time has come to talk of many things: Of shoes and ships - and sealing wax - of cabbages and kings'";
      var description = "The Walrus and The Carpenter are minor characters. The Walrus acts as the leader of the duo. He is in many ways like Honest John from the film Pinocchio: he is a conniving moocher who resorts to trickery to get what he wants. While the Carpenter believes that finding employment will better improve their lives.";
	  document.getElementById("picture").src = "images/walrus-and-carpenter.gif";
	} else if (g == 18) {
	  var character = "White Rabbit";
	  var alignment = "Neutral";
	  var quote = "'I'm late! I'm late for a very important date!'";
      var description = "The White Rabbit is a major character. He is an anthropomorphic rabbit that serves as the Queen of Hearts's royal herald, an obligation to which he is often late. While hurrying to work one day, the White Rabbit catches the attention of a young girl named Alice, who follows the rabbit into Wonderland to find out why he was late.";
	  document.getElementById("picture").src = "images/white-rabbit.gif";
	}
	document.getElementById("name").innerHTML = character;
	document.getElementById("title-name").innerHTML = character;
	document.getElementById("alignment").innerHTML = alignment;
	document.getElementById("quote").innerHTML = quote;
	document.getElementById("description").innerHTML = description;
	var show = document.getElementById("random-char");
	show.style.display = "flex";
	var input = document.getElementById("choice").value;
	if (input.toLowerCase() == character.toLowerCase()) {
	alert("You won!");
	}
}

function compare() {
	var show = document.getElementById("compare-char");
	var input = document.getElementById("choice").value;
	if (input.toLowerCase() == "alice") {
   	var character = "Alice";
	var alignment = "Good";
	var quote = "'Curiouser and curiouser.' 'If I had a world of my own, everything would be nonsense. Nothing would be what it is, because everything would be what it isn't.'";
	var description = "Alice is the protagonist of the 1951 Disney animated feature film, Alice in Wonderland. She is a young girl who uses her surreal imagination to escape her practical and mundane life. Alice's curiosity and yearn for something new leads her to a mysterious realm know on as Wonderland. As she traverses through the wacky world, however, Alice finds herself appreciating the normality that she once rejected.";
	document.getElementById("compare-picture").src = "images/alice.gif";
	show.style.display = "flex";
	} else if (input.toLowerCase() == "bill the lizard") {
 	  var character = "Bill the Lizard";
	  var alignment = "Neutral";
	  var quote = "'At your service, gov'nah!'";
      var description = "Bill is first seen walking with a ladder. He was eventually asked by the Dodo and the White Rabbit to get rid of the monster inside the White Rabbit's house. It was actually Alice who had grown large because of a cookie that she ate, and Bill refuses at first. When Bill is forced down the chimney by the Dodo, the smoke causes Alice to sneeze sending him blasting off into the sky. What became of him afterward is unknown.";
	  document.getElementById("compare-picture").src = "images/bill-the-lizzard.gif";
	  show.style.display = "flex";
	} else if (input.toLowerCase() == "king of hearts") {
	  var character = "King of Hearts";
	  var alignment = "Neutral";
	  var quote = "'Why, my dear, today is your unbirthday, too!'";
      var description = "The King of Hearts is the consort of the Queen of Hearts, and, unlike most instances, is generally the lesser of the two monarchs. He is much smaller than his wife, as well as meeker. While he tries to please his wife, at the same time, he is one of the few people who is able to change her mind about anything, such as altering Alice's beheading to a trial instead. He seems to act more like a son to his wife than a husband, as he asks her to put Alice on trial in a childlike manner, and she pats him on the head like he were a child after taking his suggestion for the trial, as well as using him as a shield against an oversized Alice.";	
	  document.getElementById("compare-picture").src = "images/king-of-hearts.gif";
	  show.style.display = "flex";
	} else if (input.toLowerCase() == "card soldier") {
	  var character = "Card Soldier";
	  var alignment = "Bad";
	  var quote = "'I heard the Queen say only yesterday you deserved to be beheaded.'";
      var description = "The Card Soldiers are the loyal servants of the Queen of Hearts, and the secondary antagonists in Alice in Wonderland. They make up the Queen's military force and always obey her orders. However, this is mostly due to their tremendous fear of her rather than loyalty.";	
	  document.getElementById("compare-picture").src = "images/card-soldiers.gif";
	  show.style.display = "flex";
	} else if (input.toLowerCase() == "caterpillar") {
	  var character = "Caterpillar";
	  var alignment = "Neutral";
	  var quote = "'Who are you?'";
      var description = "He is a resident of Wonderland, known for smoking a hookah from which colorful smoke rises, forming letters, words, and even images that he refers to while speaking. The Caterpillar often over-enunciates certain words such as 'exactly' and 'correctly'. He has a passion for recitation and grammar, and unlike most of the residents of Wonderland, he appears more calm and collected and was one of the few willing to give Alice useful advice. He also has a rather short temper, which can easily be set off, if his height is mocked or someone fails to understand his hints. He appears to have rather poor memory, as he did not recall who Alice was during their second meeting.";	
	  document.getElementById("compare-picture").src = "images/caterpillar.gif";
	  show.style.display = "flex";
	} else if (input.toLowerCase() == "cheshire cat") {
	  var character = "Cheshire Cat";
	  var alignment = "Neutral";
	  var quote = "'Most everyone's mad here.'";
      var description = "The Cheshire Cat has a permanent smile on his face and he can disappear at will. He is a very odd being able to reshape his body to either amuse or frighten his visitors. He's very mysterious, and in his own way, very dark. Like all members of Wonderland, he is mad, but unlike the others, he admits it with pride. All of Wonderland's inhabitants appear to hold fear over him, even the Queen of Hearts, most likely due to the fact that he is the maddest and craziest of them all, or it could be due to his unique abilities.";	
	  document.getElementById("compare-picture").src = "images/cheshire-cat.gif";
	  show.style.display = "flex";
	} else if (input.toLowerCase() == "curious oysters") {
	  var character = "Curious Oysters";
	  var alignment = "Good";
	  var quote = "'Feed?!'";
      var description = "They are featured in 'The Walrus & The Carpenter or The Tale of the Curious Oysters' segment wherein the little oysters are tricked by The Walrus and the Carpenter into going for a walk when in actuality they planned to eat them.";	
	  document.getElementById("compare-picture").src = "images/curious-oysters.gif";
	  show.style.display = "flex";
	} else if (input.toLowerCase() == "mad hatter") {
	  var character = "Mad Hatter";
	  var alignment = "Neutral";
	  var quote = "'This is an unbirthday party!'";
      var description = "Named for his dotty demeanor and oversized, green tophat, he is an elderly man that Alice encounters in Wonderland. The Hatter and his best friend, the March Hare, are known for throwing frequent tea parties in celebration of their 'unbirthdays'.While the Hatter is loud, eccentric, and insane like the rest of Wonderland's residents, he is also rather charming and can be mild-mannered from time to time, particularly when dealing with visitors such as Alice. He tends to use terms such as 'my dear' when referring to Alice, is shown to be courteous, and is overall the warmer side of the duo that is himself and the March Hare, who is far more rambunctious and outspoken.";	
	  document.getElementById("compare-picture").src = "images/mad-hatter.gif";
	  show.style.display = "flex";
	} else if (input.toLowerCase() == "march hare") {
	  var character = "March Hare";
	  var alignment = "Neutral";
	  var quote = "'Birthday?! Ha! My dear child, this is not a birthday party!' 'I have an excellent idea! Let's change the subject.' 'Veeeeerry interesting!' 'Nothing whatever!'";
      var description = "The March Hare—just like everyone else in Wonderland—is mad. The Hare is best friends with the Mad Hatter and enjoys tea just as much as him. Although they are close and both insane, March Hare seems to be a bit more loud, rude, and energetic than the Hatter, who is a bit more gentleman-like. In relation to this, the Hare often carries around an oversized mallet with him. He also tends to start his sentences with an elongated, 'Ah!', typically before making a proclamation. He also appears to be antisocial to some degree, as he loses his patience with Alice rather quickly. His biggest pet peeve seems to be talking before you think.";	
	  document.getElementById("compare-picture").src = "images/march-hare.gif";
	  show.style.display = "flex";
	} else if (input.toLowerCase() == "dinah") {
	  var character = "Dinah";
	  var alignment = "Good ";
	  var quote = "'Meow'";
      var description = "In the film, Dinah is Alice's cat. She is first seen sitting with Alice in a tree and listening to Alice's sister read from a history book. Alice then makes a crown out of flowers and puts them on Dinah's head, crowning her the flower girl cat. Alice tells Dinah that in her world, everything would be nonsense, because everything would be what it isn't. For example, animals would talk and live in houses because Alice's World would be a ''Wonderland.'' Suddenly, Dinah and Alice spot a White Rabbit with a coat on and a pocket watch and they chase after him to the Rabbit Hole";	
	  document.getElementById("compare-picture").src = "images/dinah.gif";
	  show.style.display = "flex";
	} else if (input.toLowerCase() == "dodo") {
	  var character = "Dodo";
	  var alignment = "Good, mostly neutral";
	  var quote = "'We'll smoke the monster out!'";
      var description = "He is in charge of handling the Caucus Race, an event in which everyone runs at an equal pace and in a circle in an attempt to get dry. He plays a much larger role than in the book. He is a mixture between the Dodo and Pat the Gardener.";	
	  document.getElementById("compare-picture").src = "images/dodo.gif";
	  show.style.display = "flex";
	} else if (input.toLowerCase() == "the doorknob") {
	  var character = "The Doorknob";
	  var alignment = "Good";
	  var quote = "'One good turn deserves another!''No, impassible. Nothing's impossible.'";
      var description = "The Doorknob is the main entrance to Wonderland. He lies at the very end of the rabbit hole that Alice fell through. Due to his small size, the only way to enter him is to drink from a special bottle of multi-flavored liquid that will shrink the drinker in size. The drinker also needs the key to unlock the Doorknob which is located on the same table as the liquid.";	
	  document.getElementById("compare-picture").src = "images/doorknob.gif";
	  show.style.display = "flex";
	} else if (input.toLowerCase() == "dormouse") {
	  var character = "Dormouse";
	  var alignment = "Good";
	  var quote = "'Twinkle, twinkle, little bat!'";
      var description = "The Dormouse sat between the March Hare and the Mad Hatter. They were using him, while he slept, as a cushion when Alice arrives at the start of the chapter.The Dormouse is always falling asleep during the scene, waking up every so often, for example to say.";	
	  document.getElementById("compare-picture").src = "images/dormouse.gif";
	  show.style.display = "flex";
	} else if (input.toLowerCase() == "queen of hearts") {
	  var character = "Queen of Hearts";
	  var alignment = "Bad";
	  var quote = "'Off with their heads!''I warn you, child. If I lose my temper, you lose your head! Understand?!''Somebody's head is going to roll for this!'";
      var description = "The Queen of Hearts is the main antagonist. She is the tyrannical and deranged ruler of Wonderland with a sadistic penchant for beheadings. When Alice arrives in the kingdom and inadvertently humiliates the monarch, the Queen of Hearts becomes obsessed with decapitating the girl.Among Disney's animated rogues gallery, the Queen of Hearts is easily recognized by her red, black, and gold color scheme—as well as her motif of hearts and playing cards. Backed by her iconography, and catchphrase, 'Off with their heads!', she serves as one of the primary members of the Disney Villains franchise.";	
	  document.getElementById("compare-picture").src = "images/queen-of-hearts.gif";
	  show.style.display = "flex";
	} else if (input.toLowerCase() == "tweedle dee and tweedle dum") {
	  var character = "Tweedle Dee and Tweedle Dum";
	  var alignment = "Neutral";
	  var quote = "'Button! Button! Who's got the button?!''That's logic!'";
      var description = "The Tweedles are identical twins and two fat brothers dressed in schoolboy uniforms and wearing propeller caps. They take particular delight in reciting poems and songs. They're playful and jolly which can seem a little annoying. They enjoy company and will always insist in a little game. They also have the ability to multiply. When they move the sound of a honking noise can be heard.";	
	  document.getElementById("compare-picture").src = "images/tweedle-brothers.gif";
	  show.style.display = "flex";
	} else if (input.toLowerCase() == "flowers of wonderland") {
	  var character = "Flowers of Wonderland";
	  var alignment = "Good, later neutral";
	  var quote = "'Do you suppose she is a wildflower'";
      var description = "The Flowers of Wonderland who live near the White Rabbit's House are sentient beings who love to sing. While Alice is chasing after the White Rabbit after being shrunk, she runs into a flower garden where she meets a large group of beautiful flowers. During her attempt to befriend them, the child flowers exclaim they can sing and want to sing about themselves.";
	  document.getElementById("compare-picture").src = "images/flowers-of-wonderland.gif";
	  show.style.display = "flex";
	} else if (input.toLowerCase() == "the walrus and the carpenter") {
	  var character = "The Walrus and the Carpenter";
	  var alignment = "Neutral";
	  var quote = "'The time has come to talk of many things: Of shoes and ships - and sealing wax - of cabbages and kings'";
      var description = "The Walrus and The Carpenter are minor characters. The Walrus acts as the leader of the duo. He is in many ways like Honest John from the film Pinocchio: he is a conniving moocher who resorts to trickery to get what he wants. While the Carpenter believes that finding employment will better improve their lives.";	
	  document.getElementById("compare-picture").src = "images/walrus-and-carpenter.gif";
	  show.style.display = "flex";
	} else if (input.toLowerCase() == "white rabbit") {
	  var character = "White Rabbit";
	  var alignment = "Neutral";
	  var quote = "'I'm late! I'm late for a very important date!'";
      var description = "The White Rabbit is a major character. He is an anthropomorphic rabbit that serves as the Queen of Hearts's royal herald, an obligation to which he is often late. While hurrying to work one day, the White Rabbit catches the attention of a young girl named Alice, who follows the rabbit into Wonderland to find out why he was late.";	
	  document.getElementById("compare-picture").src = "images/white-rabbit.gif";
	  show.style.display = "flex";
	}
	document.getElementById("compare-name").innerHTML = character;
	document.getElementById("compare-title-name").innerHTML = character;
	document.getElementById("compare-alignment").innerHTML = alignment;
	document.getElementById("compare-quote").innerHTML = quote;
	document.getElementById("compare-description").innerHTML = description;
}

function alice() {
	document.getElementById("choice").value = "Alice";
}

function bill() {
	document.getElementById("choice").value = "Bill the Lizard";
}

function king() {
	document.getElementById("choice").value = "King of Hearts";
}

function card() {
	document.getElementById("choice").value = "Card Soldier";
}

function catterpillar() {
	document.getElementById("choice").value = "Caterpillar";
}

function cat() {
	document.getElementById("choice").value = "Cheshire Cat";
}

function oysters() {
	document.getElementById("choice").value = "Curious Oysters";
}

function hatter() {
	document.getElementById("choice").value = "Mad Hatter";
}

function hare() {
	document.getElementById("choice").value = "March Hare";
}

function dinah() {
	document.getElementById("choice").value = "Dinah";
}

function dodo() {
	document.getElementById("choice").value = "Dodo";
}

function doorknob() {
	document.getElementById("choice").value = "The Doorknob";
}

function dormouse() {
	document.getElementById("choice").value = "Dormouse";
}

function queen() {
	document.getElementById("choice").value = "Queen of Hearts";
}

function tweedles() {
	document.getElementById("choice").value = "Tweedle Dee and Tweedle Dum";
}

function flowers() {
	document.getElementById("choice").value = "Flowers of Wonderland";
}

function walrus() {
	document.getElementById("choice").value = "The Walrus and the Carpenter";
}

function rabbit() {
	document.getElementById("choice").value = "White Rabbit";
}