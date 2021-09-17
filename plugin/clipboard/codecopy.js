$(function () {
	var snippets = document.querySelectorAll('pre.line-numbers');

	var htmlCopyBtn = `
  <button class="codecopy-btn tooltipped tooltipped-sw" aria-label="Copy">
    <i class="far fa-copy" aria-hidden="true"></i>
  </button>`;

	var copyContainerId = 'copy-nav';

	snippets.forEach(snippet => {
		var parent = snippet.parentNode;
		var wrapper = document.createElement('div');

		parent.replaceChild(wrapper, snippet);
		wrapper.appendChild(snippet);

		wrapper.classList.add('code-highlight');
		wrapper.firstChild.insertAdjacentHTML('beforebegin', " <nav class='" + copyContainerId + "'><i class='code-language'></i></nav> " + htmlCopyBtn);
	});

	$('#article-content').find('.line-numbers').each(function () {
		var language = $(this).children('code').attr('class') != null ? $(this).children('code').attr('class').substr(9) : '';
		$(this).parent().first().find('.code-language').text(language);
	});

	var clipboard = new ClipboardJS('.codecopy-btn', {
		target: trigger => {
			return trigger.nextSibling;
		},
	});

	clipboard.on('success', e => {
		e.trigger.setAttribute('aria-label', 'Copied!');
		setTimeout(e.clearSelection(), 500);;
	});

	var btns = document.querySelectorAll('.codecopy-btn');

	btns.forEach(btn => {
		btn.addEventListener('mouseleave', e => {
			e.target.setAttribute('aria-label', 'Copy');
			e.target.blur();
		});

		btn.addEventListener('click', e => {
			e.preventDefault();
		});
	});

});
