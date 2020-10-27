export const clipboardCopy = (value) => {
  let isClipboardCopySuccess = false;

  if (document != null) {
    const textareaElement = document.createElement('textarea');
    textareaElement.value = value;

    document.body.appendChild(textareaElement);
    textareaElement.select();
    document.execCommand('copy');
    document.body.removeChild(textareaElement);

    isClipboardCopySuccess = true;
  }

  return isClipboardCopySuccess;
};
