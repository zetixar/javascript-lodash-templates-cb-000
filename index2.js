function postComment() {
  // alert("fs");
  var commenter = document.getElementById('commenterName').value;
  var comment = document.getElementById('commentText').value;

  var comments = document.getElementById('comments');

  var commentTemplate = document.getElementById("comment-template").innerHTML;

  var templateFn = _.template(commentTemplate);
  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });

  comments.innerHTML += templateHTML;

}

// templateFn Function:
/*
function (obj){
  obj|| (obj = {}) ;
  var __t,__p ='';
  with(obj) {
    __p+=''+( (__t=( comment ))== null?'':__t)+' Posted By: '+((__t=( commenter ))==null?'':__t)+'';
  }
  return __p
}
*/
