var quotes = [

	'Two ethicists working with Australian universities argue in the latest online edition of the Journal of Medical Ethics that if abortion of a fetus is allowable, so to should be the termination of a newborn.',
	'The intense controversy that this question engenders is remarkable. On the left, critics of assertive American foreign, military, and economic policies depict these policies as aggressively immoral by branding them “imperial.” On the right, advocates for an even more forceful application of American “hard power,” such as Niall Ferguson and the other members of his self-described “neo-imperialist gang,” argue that the United States should use its immense wealth and military might to impose order and stability on an increasingly chaotic world.',
	'And I say to mankind, Be not curious about God, / For I who am curious about each am not curious about God, /  (No array of terms can say how much I am at peace about God and about death.) /  I hear and behold God in every object, yet understand God not in the least. (Walt Whitman, Leaves of Grass)'
]

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}