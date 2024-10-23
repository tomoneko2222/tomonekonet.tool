const buttons = document.querySelectorAll('.cool-button');
const urls = [
    "https://github.com/tomoneko2222/discord-webhookspam",
    "https://tomoneko2222.github.io/github.io/",
    "https://github.com/tomoneko2222/Token-Checker/tree/main",
    "https://97.gigafile.nu/0914-d6f07293c3af0e31bc4e0407bfc56eeb8",
    "https://github.com/tomoneko2222/youtube-video-downloader/tree/main",
    "https://raw.githubusercontent.com/tomoneko2222/Dinosour-Game/main/cheat.user.js",
    "https://github.com/tomoneko2222/discord-bot-nuker",
    "https://tomoneko2222.github.io/discord-nuker/",
    "https://github.com/tomoneko2222/discord-selfbot/tree/main?tab=readme-ov-file"
];

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        window.location.href = urls[index];
    });
});

function toggleMark(containerId, markType) {
    const container = document.getElementById(containerId);
    
    if (!container) {
        console.error(`Container with ID ${containerId} not found.`);
        return;
    }

    const newMark = container.querySelector('.mark.new');
    const modifiedMark = container.querySelector('.mark.modified');

    if (markType === 'new') {
        newMark.classList.toggle('hidden');
        modifiedMark.classList.add('hidden');
    } else if (markType === 'modified') {
        modifiedMark.classList.toggle('hidden');
        newMark.classList.add('hidden');
    } else {
        newMark.classList.add('hidden');
        modifiedMark.classList.add('hidden');
    }
}

// Example usage:
toggleMark('container9', 'new'); // Correctly toggles 'NEW' mark on container9
// toggleMark('container2', 'modified'); // Correctly toggles 'Modified' mark on container2
