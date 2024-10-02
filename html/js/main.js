document.addEventListener('DOMContentLoaded', () => {
    const postList = document.getElementById('post-list');
    const postForm = document.getElementById('post-form');
    const postFormSubmit = document.getElementById('post-form-submit');
    let editingPostId = null;
    let posts = [];

    function savePosts() {
        localStorage.setItem('posts', JSON.stringify(posts));
    }

    function loadPosts() {
        const savedPosts = localStorage.getItem('posts');
        posts = savedPosts ? JSON.parse(savedPosts) : [];
        renderPosts();
    }

    function renderPosts() {
        postList.innerHTML = '';
        posts.forEach(post => {
            const postItem = document.createElement('div');
            postItem.classList.add('post-item');
            postItem.innerHTML = `
                <h2>${post.title}</h2>
                ${post.thumbnail ? `<img src="${post.thumbnail}" alt="Thumbnail">` : ''}
                <p>${post.content}</p>
                <div class="post-buttons">
                    <button onclick="editPost(${post.id})">edit</button>
                    <span class="button-separator">|</span>
                    <button onclick="deletePost(${post.id})">delete</button>
                </div>
            `;
            postList.appendChild(postItem);
        });
    }

    window.editPost = function(id) {
        const post = posts.find(p => p.id === id);
        if (post) {
            document.getElementById('title').value = post.title;
            document.getElementById('content').value = post.content;
            const thumbnailPreview = document.getElementById('thumbnail-preview');
            if (post.thumbnail) {
                thumbnailPreview.src = post.thumbnail;
                thumbnailPreview.style.display = 'block';
            } else {
                thumbnailPreview.style.display = 'none';
            }
            postFormSubmit.textContent = 'Update Post';
            editingPostId = id;
            postForm.scrollIntoView({ behavior: 'smooth' });
        }
    };

    window.deletePost = function(id) {
        if (confirm('게시물을 삭제하시겠습니까?')) {
            posts = posts.filter(p => p.id !== id);
            savePosts();
            renderPosts();
        }
    };

    postForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const thumbnail = document.getElementById('thumbnail').files[0];
        let thumbnailUrl = null;

        if (thumbnail) {
            const reader = new FileReader();
            reader.onload = function(e) {
                thumbnailUrl = e.target.result;
                savePost(title, content, thumbnailUrl);
            };
            reader.readAsDataURL(thumbnail);
        } else {
            savePost(title, content, thumbnailUrl);
        }
    });

    function savePost(title, content, thumbnailUrl) {
        if (editingPostId) {
            const post = posts.find(p => p.id === editingPostId);
            post.title = title;
            post.content = content;
            post.thumbnail = thumbnailUrl || post.thumbnail;
            editingPostId = null;
            postFormSubmit.textContent = 'Add Post';
        } else {
            const newPost = {
                id: Date.now(),
                title,
                content,
                thumbnail: thumbnailUrl
            };
            posts.push(newPost);
        }
        savePosts();
        renderPosts();
        postForm.reset();
        document.getElementById('thumbnail-preview').style.display = 'none';
    }

    document.getElementById('thumbnail').addEventListener('change', function(e) {
        const file = e.target.files[0];
        const thumbnailPreview = document.getElementById('thumbnail-preview');
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                thumbnailPreview.src = e.target.result;
                thumbnailPreview.style.display = 'block';
            };
            reader.readAsDataURL(file);
        } else {
            thumbnailPreview.style.display = 'none';
        }
    });

    loadPosts();
});
