
const userNameInput = document.getElementById('userName');
const showDetailsButton = document.getElementById('showDetails');
const profileInfoDiv=document.getElementById('profileInfo');
const reposInfoDiv=document.getElementById('reposInfo');
const showStar=document.getElementById('star');
const forksort=document.getElementById('repoSort');
let count=0;

showDetailsButton.addEventListener('click',async () => {
    count=1 
    const userName = userNameInput.value;
    
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data=await res.json();  
    showProfile(data);
    showReposInfo(userName);
})

function showProfile(data){
   
    profileInfoDiv.innerHTML=` <div class="card">
    <div class="card-img">
         <img src=${data.avatar_url} alt=${data.name}>
     </div>
     <div class="card-body">
         <div class="card-title">${data.name}</div>
         <div class="card-subHeading">${data.login}</div>
         <div class="card-text">
             <p class="para1">${data.bio}</p>
             <p class="para1">${data.followers} followers ${data.following} following
             <button style="border:none;background:none">
             <a href=${data.html_url}>
             Do Checkout Profile
             </a>
            
             </button>
         </div>    
     </div>
 </div>`

}
async function showReposInfo(userName){
    const res= await fetch(`https://api.github.com/users/${userName}/repos`)
           const projects = await res.json();
           //const sortedProjects = projects.sort((a, b) => b.stargazers_count - a.stargazers_count);
     //console.log(projects);
    
     reposInfoDiv.innerHTML = '';
       
        for(let i=0;i<projects.length;i++){
            reposInfoDiv.innerHTML += `<div class="card1" >
             <div class="card-body1">
                 <div class="card-title1"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADMCAMAAAAI/LzAAAAAYFBMVEX///8DAwMAAABFRUXNzc3h4eFMTEzR0dE0NDTBwcFkZGTv7+96enqcnJzZ2dlQUFCurq739/fo6OhfX1+4uLgWFhYaGhqOjo48PDwqKiqGhobHx8ckJCSUlJRqamqmpqaeFkiQAAAEc0lEQVR4nO3d65qaMBCAYRhFQM4HEWGV+7/LIscENSyubGfY+f7VRytvIxFUUk3r8nIAXWryx3eDU1JqPyl2L/2mAOyqaPYBTjClfAxTbwF4P7DYF3HTAJJ47hHn6abDa8xyJFjvj02cyM8HcF74iE/3g6Gxrek/821maMzDypjr+Eo30jA1ZgTRPgy7wUyzKSbw1Q/e755gPucTdxo7OYGepMrNiYt6NsqLZgQeR+ZgfhDzxj5zsftnMndwL1ftRNG5uQ+4Dez4PgZWyetfZfftbJ7FVcywfjt9ATRDU1rdX7IYswolGcZFM27tEykn2LS7D4TtY9wvUfNtDBznds0f5gfdEwWKJwp7jDQHGt3rjTGrxJg2xqwaY9r+NAa2hNnUyDBmUb+HgS1hNjUyPJstizFtWDGwJcymRuZvYWBLGB6ZPmyY742M48R1zvTjRIoYoyrcpmvqSA8niDGS8SPTs6S5Y4AWJhg/T4dTJd6R3sgY0neDN3Fo6GFSCSNNcPROAUwJs9sLd6Q3Mpq+JUyaCV/ZUMdoaXKwTrARjBb5abAZjKbFNwWG0Gwm37SFkWHM5/o9DPA+syjGtDFm1RjTxphVY0wbY1aNMW2MWTXGtDFm1RjTxphV2z7Gv7rSlWSEMXF7gcl+5NDFmEl3EUoxfPtFFROleXvD/TK/fnCIYpzr+AUYgFU5hDG+K10dCllhkMXY0ytdAQKbJibyLg9X7dYvtTNBTLIv4PEK5GYeiFJqmOwi7voCCyA7EsPoIFqy/CRqhrtQwYgvrHrrwocL+Eli4OQ2s3TyZDYghqlfYl77Tumcv4A2BmA3XrIdTt52yGFu4uXw/k0+ICCFAbjKVzg7XgZEMQDp9LeikS29/ZDB1LvLsxUXnKOgQY4Zfu0CL5fCuPbvmv0l9F34MJrXnVdmr5cI8b+6H2nr0o9iEWL8Y3PGf1AtohG7zQ/jTrIXIUbzi0N+cNULlERVstsllXwjRkzNKWfWWqmL9/vpLoUT82aMwRpjsMYYrDEGa4zBGmOwxhisMQZrjMEaY7DGGKwxBmuMwRpjsMYYrDEGa4zBGmOwxhisMQZrjMEaY7DGGKwxBmuMwRpjsMYYrDEGa4zBGmOwxhisMQZrjMEaY7DGGKwxBmuMwRpjsLYck5gO1sxkKca6uVi7XRZidMCcvhBDIMZgbRYTJ4Qwx1iNidxn6/OhDKCI1Jj7skNUCoZX2SuMVroHi0KBO1peYjTHtClkiksevcRQjDFYm8HELxYdw5kSE9YzX6ZarAtZKozXTuTVk4fhTIGJ++XrXi8KhywFJhzOaarpKopIU2Cq/vAMwKOhUWD2w7HmsCAs8hQYZydqKIyNajYzrVHzRUGjfJ8px1WGJ/8ZOs7URwClMDYEZuiZw5laM85p6Mdm7kCzzAUN/nT1UXOay2vco06fwdzHRieW4nzGtqhpVCdn5XQdeOwJnws+0RAbG0hU55TlhZIG9LPCUh90WkDlM856Q4OZw2KjuPzvrfxeAPnw5v4PvVGgetk2F3sAAAAASUVORK5CYII=" height="30px" width="30px"/>${projects[i].name}</div>
                    <div class="card-text1">
                    
                    <a href=${projects[i].html_url}> Do checkout Project</a>
                    
                 </div>    
                     <div class="lan">
                              
                              <div class="card-subHeading1"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAV1BMVEUAAAD////v7+9bW1t1dXWjo6Onp6fR0dG5ubmsrKyGhoYzMzMeHh4SEhIGBgbFxcVkZGTk5OQoKCgjIyNISEj19fWdnZ3Ly8tWVlY7Ozt8fHwtLS1vb28/4iBzAAACv0lEQVRogcWbCWKCMBBFf8IuIooibfX+5yxBKVTCEgj57wA+hMk2mYEwR0ZxcvC99JidTtkx9fxDEkdyxQ/B1Bt6RQYNWeEFpk9gIr8kXqrzdqRectlDLgNvWtziBYv//0J5/lxmfvHMLcqTq4lacU3syMu7NsDmyO7ldnlYrFErinCjvLqtVStuM99+Ui79LWqFPxn5U/J4q1oRr5KXZxtu4DweeKPy6mHHDTwqU3loS60YC/sR+Y9Ndx13JvIvu27ga7Fczqxda0h1Y04jv3zbdwPfmrV2KN/HrbUP5HInd20fvPmBfIfv3ZLOya3HeZ/PmP+QWx7fn/hTcqvzmo5wXF7t7QaqMXlpbS0ZpyhH5JbW0GnOermVvcM8sU4u3bgBqZFv3q8txR/KHUR6SzWQb9ojm3H7lO8+vfQJ/8vL1eeSNbSD/S2/u3QD93/yVWfB9WR9eeLWDSQ9ufH5eyvXTp67dgP5n9wo52GHZyt3Nqv3kW95wJAHb/nCHJddvJf8wnADl0budFrvSBo55a037x27nEmXUJ9bISKOG4hqOWWgKcJaTvrk6qNDON1G9CkEpOOlvCOToMVbHXFwdE7REcP5JqYjwYEnP8DZKWmID9owrwc6SDO7IsWRJz+CNsfUswxOPPmJK6e+dmrAUYcadZKhTq/UhYW6pFI3E9RtFHUDSd06cw8NtONSwD4oUo/I1OQAKy0S8hNC1FQYNwlITX9SE7/clDc12c+95qBe8HCvtqiXetTrTO5Frssr7Hwgd3d5/xRDObVsgVqwwS1VcVKk8xgr0qGWJ3ELs3Yfb5MladxiPG4ZIrcAk1p6yi265ZYbC2qhteCWmHOL6222FRTGbQXchgpBbSUR3CYaQW0fUhAbpwS3ZUzBa5ZrILYJKogNkg3zraGPnVpDX8gomGiKrXZsiu2ewFI78C8eFR728SbSfwAAAABJRU5ErkJggg==" height="8px" width="8px" class="img2"/>${projects[i].language}</div>

                              <div class="card-subHeading1"><img src="https://t3.ftcdn.net/jpg/01/65/62/92/240_F_165629234_RU2TizwObXvESLAXGnSH76JjUsNsaQKr.jpg" height="15px" width="15px" class="img1"/>${projects[i].stargazers_count}</div>

                              <div class="card-subHeading1"><img src="data:image/png;base64,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" height="12px" width="12px" class="img3">${projects[i].forks}</div>
                              <div class="card-subHeading1">${projects[i].size}KB</div>
                     </div>
                 
             </div>
     
         </div>`
        
        }
      
 }

 showStar.addEventListener('click',() => {
  const userName=userNameInput.value;
    fetch(`https://api.github.com/users/${userName}/repos`).then((res) => res.json()).then((data) => {
      if(count === 1){
        reposInfoDiv.innerHTML = '';
        //console.log(data);
            const sortedProjects = data.sort((a, b) =>{ return b.stargazers_count - a.stargazers_count});
        // console.log(sortedProjects);
    
          
            for(let i=0;i<sortedProjects.length;i++){
                reposInfoDiv.innerHTML += `<div class="card1" >
                 <div class="card-body1">
                     <div class="card-title1"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADMCAMAAAAI/LzAAAAAYFBMVEX///8DAwMAAABFRUXNzc3h4eFMTEzR0dE0NDTBwcFkZGTv7+96enqcnJzZ2dlQUFCurq739/fo6OhfX1+4uLgWFhYaGhqOjo48PDwqKiqGhobHx8ckJCSUlJRqamqmpqaeFkiQAAAEc0lEQVR4nO3d65qaMBCAYRhFQM4HEWGV+7/LIscENSyubGfY+f7VRytvIxFUUk3r8nIAXWryx3eDU1JqPyl2L/2mAOyqaPYBTjClfAxTbwF4P7DYF3HTAJJ47hHn6abDa8xyJFjvj02cyM8HcF74iE/3g6Gxrek/821maMzDypjr+Eo30jA1ZgTRPgy7wUyzKSbw1Q/e755gPucTdxo7OYGepMrNiYt6NsqLZgQeR+ZgfhDzxj5zsftnMndwL1ftRNG5uQ+4Dez4PgZWyetfZfftbJ7FVcywfjt9ATRDU1rdX7IYswolGcZFM27tEykn2LS7D4TtY9wvUfNtDBznds0f5gfdEwWKJwp7jDQHGt3rjTGrxJg2xqwaY9r+NAa2hNnUyDBmUb+HgS1hNjUyPJstizFtWDGwJcymRuZvYWBLGB6ZPmyY742M48R1zvTjRIoYoyrcpmvqSA8niDGS8SPTs6S5Y4AWJhg/T4dTJd6R3sgY0neDN3Fo6GFSCSNNcPROAUwJs9sLd6Q3Mpq+JUyaCV/ZUMdoaXKwTrARjBb5abAZjKbFNwWG0Gwm37SFkWHM5/o9DPA+syjGtDFm1RjTxphVY0wbY1aNMW2MWTXGtDFm1RjTxphV2z7Gv7rSlWSEMXF7gcl+5NDFmEl3EUoxfPtFFROleXvD/TK/fnCIYpzr+AUYgFU5hDG+K10dCllhkMXY0ytdAQKbJibyLg9X7dYvtTNBTLIv4PEK5GYeiFJqmOwi7voCCyA7EsPoIFqy/CRqhrtQwYgvrHrrwocL+Eli4OQ2s3TyZDYghqlfYl77Tumcv4A2BmA3XrIdTt52yGFu4uXw/k0+ICCFAbjKVzg7XgZEMQDp9LeikS29/ZDB1LvLsxUXnKOgQY4Zfu0CL5fCuPbvmv0l9F34MJrXnVdmr5cI8b+6H2nr0o9iEWL8Y3PGf1AtohG7zQ/jTrIXIUbzi0N+cNULlERVstsllXwjRkzNKWfWWqmL9/vpLoUT82aMwRpjsMYYrDEGa4zBGmOwxhisMQZrjMEaY7DGGKwxBmuMwRpjsMYYrDEGa4zBGmOwxhisMQZrjMEaY7DGGKwxBmuMwRpjsMYYrDEGa4zBGmOwxhisMQZrjMEaY7DGGKwxBmuMwRpjsLYck5gO1sxkKca6uVi7XRZidMCcvhBDIMZgbRYTJ4Qwx1iNidxn6/OhDKCI1Jj7skNUCoZX2SuMVroHi0KBO1peYjTHtClkiksevcRQjDFYm8HELxYdw5kSE9YzX6ZarAtZKozXTuTVk4fhTIGJ++XrXi8KhywFJhzOaarpKopIU2Cq/vAMwKOhUWD2w7HmsCAs8hQYZydqKIyNajYzrVHzRUGjfJ8px1WGJ/8ZOs7URwClMDYEZuiZw5laM85p6Mdm7kCzzAUN/nT1UXOay2vco06fwdzHRieW4nzGtqhpVCdn5XQdeOwJnws+0RAbG0hU55TlhZIG9LPCUh90WkDlM856Q4OZw2KjuPzvrfxeAPnw5v4PvVGgetk2F3sAAAAASUVORK5CYII=" height="30px" width="30px" class="img4"/>${sortedProjects[i].name}</div>
                        <div class="card-text1">
                        
                        <a href=${sortedProjects[i].html_url}> Do checkout Project</a>
                        
                     </div>    
                         <div class="lan">
                                  
                                  <div class="card-subHeading1"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAV1BMVEUAAAD////v7+9bW1t1dXWjo6Onp6fR0dG5ubmsrKyGhoYzMzMeHh4SEhIGBgbFxcVkZGTk5OQoKCgjIyNISEj19fWdnZ3Ly8tWVlY7Ozt8fHwtLS1vb28/4iBzAAACv0lEQVRogcWbCWKCMBBFf8IuIooibfX+5yxBKVTCEgj57wA+hMk2mYEwR0ZxcvC99JidTtkx9fxDEkdyxQ/B1Bt6RQYNWeEFpk9gIr8kXqrzdqRectlDLgNvWtziBYv//0J5/lxmfvHMLcqTq4lacU3syMu7NsDmyO7ldnlYrFErinCjvLqtVStuM99+Ui79LWqFPxn5U/J4q1oRr5KXZxtu4DweeKPy6mHHDTwqU3loS60YC/sR+Y9Ndx13JvIvu27ga7Fczqxda0h1Y04jv3zbdwPfmrV2KN/HrbUP5HInd20fvPmBfIfv3ZLOya3HeZ/PmP+QWx7fn/hTcqvzmo5wXF7t7QaqMXlpbS0ZpyhH5JbW0GnOermVvcM8sU4u3bgBqZFv3q8txR/KHUR6SzWQb9ojm3H7lO8+vfQJ/8vL1eeSNbSD/S2/u3QD93/yVWfB9WR9eeLWDSQ9ufH5eyvXTp67dgP5n9wo52GHZyt3Nqv3kW95wJAHb/nCHJddvJf8wnADl0budFrvSBo55a037x27nEmXUJ9bISKOG4hqOWWgKcJaTvrk6qNDON1G9CkEpOOlvCOToMVbHXFwdE7REcP5JqYjwYEnP8DZKWmID9owrwc6SDO7IsWRJz+CNsfUswxOPPmJK6e+dmrAUYcadZKhTq/UhYW6pFI3E9RtFHUDSd06cw8NtONSwD4oUo/I1OQAKy0S8hNC1FQYNwlITX9SE7/clDc12c+95qBe8HCvtqiXetTrTO5Frssr7Hwgd3d5/xRDObVsgVqwwS1VcVKk8xgr0qGWJ3ELs3Yfb5MladxiPG4ZIrcAk1p6yi265ZYbC2qhteCWmHOL6222FRTGbQXchgpBbSUR3CYaQW0fUhAbpwS3ZUzBa5ZrILYJKogNkg3zraGPnVpDX8gomGiKrXZsiu2ewFI78C8eFR728SbSfwAAAABJRU5ErkJggg==" height="8px" width="8px" class="img2"/>${sortedProjects[i].language}</div>
                                  <div class="card-subHeading1"><img src="https://t3.ftcdn.net/jpg/01/65/62/92/240_F_165629234_RU2TizwObXvESLAXGnSH76JjUsNsaQKr.jpg" height="15px" width="15px" class="img1"/>${sortedProjects[i].stargazers_count}</div>

                                  <div class="card-subHeading1"><img src="data:image/png;base64,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" height="12px" width="12px" class="img3">${sortedProjects[i].forks}</div>
                                  <div class="card-subHeading1">${sortedProjects[i].size}KB</div>
                         </div>
                     
                 </div>
         
             </div>`
            
            }
            

      }
    
  

    });

 })

 
 forksort.addEventListener('click',() => {
    const userName=userNameInput.value;
      fetch(`https://api.github.com/users/${userName}/repos`).then((res) => res.json()).then((data) => {
       if(count === 1){
        reposInfoDiv.innerHTML = '';
  
        // console.log(data);
             const sortedProjects = data.sort((a, b) =>{ return b.forks - a.forks});
          //console.log(sortedProjects);
         
             
             for(let i=0;i<sortedProjects.length;i++){
                 reposInfoDiv.innerHTML += `<div class="card1" >
                  <div class="card-body1">
                      <div class="card-title1"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADMCAMAAAAI/LzAAAAAYFBMVEX///8DAwMAAABFRUXNzc3h4eFMTEzR0dE0NDTBwcFkZGTv7+96enqcnJzZ2dlQUFCurq739/fo6OhfX1+4uLgWFhYaGhqOjo48PDwqKiqGhobHx8ckJCSUlJRqamqmpqaeFkiQAAAEc0lEQVR4nO3d65qaMBCAYRhFQM4HEWGV+7/LIscENSyubGfY+f7VRytvIxFUUk3r8nIAXWryx3eDU1JqPyl2L/2mAOyqaPYBTjClfAxTbwF4P7DYF3HTAJJ47hHn6abDa8xyJFjvj02cyM8HcF74iE/3g6Gxrek/821maMzDypjr+Eo30jA1ZgTRPgy7wUyzKSbw1Q/e755gPucTdxo7OYGepMrNiYt6NsqLZgQeR+ZgfhDzxj5zsftnMndwL1ftRNG5uQ+4Dez4PgZWyetfZfftbJ7FVcywfjt9ATRDU1rdX7IYswolGcZFM27tEykn2LS7D4TtY9wvUfNtDBznds0f5gfdEwWKJwp7jDQHGt3rjTGrxJg2xqwaY9r+NAa2hNnUyDBmUb+HgS1hNjUyPJstizFtWDGwJcymRuZvYWBLGB6ZPmyY742M48R1zvTjRIoYoyrcpmvqSA8niDGS8SPTs6S5Y4AWJhg/T4dTJd6R3sgY0neDN3Fo6GFSCSNNcPROAUwJs9sLd6Q3Mpq+JUyaCV/ZUMdoaXKwTrARjBb5abAZjKbFNwWG0Gwm37SFkWHM5/o9DPA+syjGtDFm1RjTxphVY0wbY1aNMW2MWTXGtDFm1RjTxphV2z7Gv7rSlWSEMXF7gcl+5NDFmEl3EUoxfPtFFROleXvD/TK/fnCIYpzr+AUYgFU5hDG+K10dCllhkMXY0ytdAQKbJibyLg9X7dYvtTNBTLIv4PEK5GYeiFJqmOwi7voCCyA7EsPoIFqy/CRqhrtQwYgvrHrrwocL+Eli4OQ2s3TyZDYghqlfYl77Tumcv4A2BmA3XrIdTt52yGFu4uXw/k0+ICCFAbjKVzg7XgZEMQDp9LeikS29/ZDB1LvLsxUXnKOgQY4Zfu0CL5fCuPbvmv0l9F34MJrXnVdmr5cI8b+6H2nr0o9iEWL8Y3PGf1AtohG7zQ/jTrIXIUbzi0N+cNULlERVstsllXwjRkzNKWfWWqmL9/vpLoUT82aMwRpjsMYYrDEGa4zBGmOwxhisMQZrjMEaY7DGGKwxBmuMwRpjsMYYrDEGa4zBGmOwxhisMQZrjMEaY7DGGKwxBmuMwRpjsMYYrDEGa4zBGmOwxhisMQZrjMEaY7DGGKwxBmuMwRpjsLYck5gO1sxkKca6uVi7XRZidMCcvhBDIMZgbRYTJ4Qwx1iNidxn6/OhDKCI1Jj7skNUCoZX2SuMVroHi0KBO1peYjTHtClkiksevcRQjDFYm8HELxYdw5kSE9YzX6ZarAtZKozXTuTVk4fhTIGJ++XrXi8KhywFJhzOaarpKopIU2Cq/vAMwKOhUWD2w7HmsCAs8hQYZydqKIyNajYzrVHzRUGjfJ8px1WGJ/8ZOs7URwClMDYEZuiZw5laM85p6Mdm7kCzzAUN/nT1UXOay2vco06fwdzHRieW4nzGtqhpVCdn5XQdeOwJnws+0RAbG0hU55TlhZIG9LPCUh90WkDlM856Q4OZw2KjuPzvrfxeAPnw5v4PvVGgetk2F3sAAAAASUVORK5CYII=" height="30px" width="30px"/>${sortedProjects[i].name}</div>
                         <div class="card-text1">
                         
                         <a href=${sortedProjects[i].html_url}> Do checkout Project</a>
                         
                      </div>    
                          <div class="lan">
                                   
                                   <div class="card-subHeading1"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAV1BMVEUAAAD////v7+9bW1t1dXWjo6Onp6fR0dG5ubmsrKyGhoYzMzMeHh4SEhIGBgbFxcVkZGTk5OQoKCgjIyNISEj19fWdnZ3Ly8tWVlY7Ozt8fHwtLS1vb28/4iBzAAACv0lEQVRogcWbCWKCMBBFf8IuIooibfX+5yxBKVTCEgj57wA+hMk2mYEwR0ZxcvC99JidTtkx9fxDEkdyxQ/B1Bt6RQYNWeEFpk9gIr8kXqrzdqRectlDLgNvWtziBYv//0J5/lxmfvHMLcqTq4lacU3syMu7NsDmyO7ldnlYrFErinCjvLqtVStuM99+Ui79LWqFPxn5U/J4q1oRr5KXZxtu4DweeKPy6mHHDTwqU3loS60YC/sR+Y9Ndx13JvIvu27ga7Fczqxda0h1Y04jv3zbdwPfmrV2KN/HrbUP5HInd20fvPmBfIfv3ZLOya3HeZ/PmP+QWx7fn/hTcqvzmo5wXF7t7QaqMXlpbS0ZpyhH5JbW0GnOermVvcM8sU4u3bgBqZFv3q8txR/KHUR6SzWQb9ojm3H7lO8+vfQJ/8vL1eeSNbSD/S2/u3QD93/yVWfB9WR9eeLWDSQ9ufH5eyvXTp67dgP5n9wo52GHZyt3Nqv3kW95wJAHb/nCHJddvJf8wnADl0budFrvSBo55a037x27nEmXUJ9bISKOG4hqOWWgKcJaTvrk6qNDON1G9CkEpOOlvCOToMVbHXFwdE7REcP5JqYjwYEnP8DZKWmID9owrwc6SDO7IsWRJz+CNsfUswxOPPmJK6e+dmrAUYcadZKhTq/UhYW6pFI3E9RtFHUDSd06cw8NtONSwD4oUo/I1OQAKy0S8hNC1FQYNwlITX9SE7/clDc12c+95qBe8HCvtqiXetTrTO5Frssr7Hwgd3d5/xRDObVsgVqwwS1VcVKk8xgr0qGWJ3ELs3Yfb5MladxiPG4ZIrcAk1p6yi265ZYbC2qhteCWmHOL6222FRTGbQXchgpBbSUR3CYaQW0fUhAbpwS3ZUzBa5ZrILYJKogNkg3zraGPnVpDX8gomGiKrXZsiu2ewFI78C8eFR728SbSfwAAAABJRU5ErkJggg==" height="8px" width="8px" class="img2"/>${sortedProjects[i].language}</div>
                                   <div class="card-subHeading1"><img src="https://t3.ftcdn.net/jpg/01/65/62/92/240_F_165629234_RU2TizwObXvESLAXGnSH76JjUsNsaQKr.jpg" height="15px" width="15px" class="img1"/>${sortedProjects[i].stargazers_count}</div>

                                   <div class="card-subHeading1"><img src="data:image/png;base64,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" height="12px" width="12px" class="img3">${sortedProjects[i].forks}</div>
                                   <div class="card-subHeading1">${sortedProjects[i].size}KB</div>
                          </div>
                      
                  </div>
          
              </div>`
             
             }
         
       

       }
  
      });
  
   })