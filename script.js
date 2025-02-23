let currentIndex = 0;

function openModal(projectId) {
    const modal = document.getElementById(`modal-${projectId}`);
    modal.style.display = 'flex';
    currentIndex = 0;
    showMedia(projectId);
}

function closeModal(projectId) {
    const modal = document.getElementById(`modal-${projectId}`);
    modal.style.display = 'none';
}

function changeMedia(projectId, direction) {
    const modal = document.getElementById(`modal-${projectId}`);
    const media = modal.getElementsByClassName('modal-media');
    currentIndex = (currentIndex + direction + media.length) % media.length;
    showMedia(projectId);
}

function showMedia(projectId) {
    const modal = document.getElementById(`modal-${projectId}`);
    const media = modal.getElementsByClassName('modal-media');
    for (let i = 0; i < media.length; i++) {
        media[i].style.display = i === currentIndex ? 'block' : 'none';
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
