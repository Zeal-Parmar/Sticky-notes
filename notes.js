// Basic JS to show/hide the note modal
document.getElementById('add-note-btn').addEventListener('click', function() {
    document.getElementById('note-modal').classList.remove('hidden');
  });

  document.getElementById('cancel-btn').addEventListener('click', function() {
    document.getElementById('note-modal').classList.add('hidden');
  });

  document.getElementById('save-btn').addEventListener('click', function() {
    const noteText = document.getElementById('note-text').value;
    if (noteText) {
      const noteContainer = document.createElement('div');
      noteContainer.classList.add('bg-yellow-200', 'p-4', 'rounded-lg', 'shadow-md', 'text-gray-900');
      
      const noteContent = `
        <h3 class="text-lg font-semibold">New Note</h3>
        <p class="text-sm mt-2">${noteText}</p>
      `;
      noteContainer.innerHTML = noteContent;

      document.getElementById('notes-grid').appendChild(noteContainer);
      document.getElementById('note-modal').classList.add('hidden');
      document.getElementById('note-text').value = '';
    }
  });