function copyCode() {
  /* grab each copy button in DOM */
  const copyButton = document.querySelectorAll('.js-copy-to-clipboard-button');
  /* loop through each copyButton */
  copyButton.forEach(e => {
    /* listen for click event */ 
    e.addEventListener('click', function() {
      /* grab code from copyButton sibling */
      const codeToCopy = this.nextElementSibling.innerHTML;
      /* create textarea */
      let textArea = document.createElement('textarea');
      /* grab copy button text */
      let copyText = this.getElementsByClassName('js-copy-text')[0];
      /* add textarea to DOM */
      document.body.appendChild(textArea);
      /* set textarea value as code */
      textArea.value = codeToCopy;
      /* focus the text */
      textArea.focus();
      /* select the text */
      textArea.select();
      /* If navigator clipboard unsupported */
      if (!navigator.clipboard) {
        try {
            /* try deprecated execCommand approach */
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Fallback: Copying text command was ' + msg);
            /* else log error message */
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
        }
        return;
      }
      /* Copy text inside textarea */
      navigator.clipboard.writeText(textArea.value).then(function() {
        /* if successful log success message */
        console.log('Async: Copying to clipboard was successful!');
        /* else log error message */
      }, function(err) {
          console.error('Async: Could not copy text: ', err);
      });
      /* update copyButton text */
      copyText.innerHTML = 'Copied';
      /* log copied text to console */
      // console.log(codeToCopy);
      /* remove textarea from DOM */
      document.body.removeChild(textArea);
      /* grab hidden alert from DOM */
      const alert = document.querySelector('.js-alert');
      /* show hidden alert */
      alert.classList.add('is-active');
      /* after 3 seconds */
      setTimeout(function() {
        /* hide alert */
        alert.classList.remove('is-active');
        /* replace original button text */
        copyText.innerHTML = 'Copy';
      }, 3000);
    });
  });
}
/* init function */
copyCode();