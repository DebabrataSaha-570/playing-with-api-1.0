const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComments(data))
}
loadComments()

const displayComments = (comments) => {
    const commentContainer = document.getElementById('comments-container')
    for (let i = 0; i <= 50; i++) {
        const comment = comments[i];
        console.log(comment)
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">${comment.name}</h5>
                        <p class="card-text">${comment.body}</p>
                        <a onClick="commentDetail('${comment.id}')" href="#" class="btn btn-primary">Show Details</a>
                    </div>
                </div>
        
        `
        commentContainer.appendChild(div)
    }
}

const commentDetail = (id) => {
    const commentDetailContainer = document.getElementById('comment-detail');

    const url = `https://jsonplaceholder.typicode.com/comments/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            commentDetailContainer.innerHTML = `
            
            <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${data.name}</h5>
    <p class="card-text">${data.email}</p>
    <p class="card-text">${data.body}</p>
  </div>
</div>
            `
        })
}