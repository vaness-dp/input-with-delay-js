const label = document.createElement('label');
label.textContent = 'Введите текст:';

const input = document.createElement('input');
input.type = 'text';

const output = document.createElement('h2');

document.body.append(label, input, output);

let timeout;

input.addEventListener('input', () => {
	clearTimeout(timeout);
	timeout = setTimeout(() => {
		output.textContent = input.value;
	}, 300);
});
