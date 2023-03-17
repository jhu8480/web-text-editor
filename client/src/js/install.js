const butInstall = document.getElementById("buttonInstall");

window.addEventListener('beforeinstallprompt', (event) => {
window.deferredPrompt = event;
butInstall.style.display = 'block';
});

butInstall.addEventListener('click', async () => {
const promptEvent = window.deferredPrompt;
if (!promptEvent) {
return;
}
promptEvent.prompt();
window.deferredPrompt = null;

butInstall.setAttribute('disabled', true);
butInstall.textContent = 'Installed!';
});

window.addEventListener('appinstalled', (event) => {
// Clear prompt
window.deferredPrompt = null;
}); 
