var posts=["2026/03/20/Test2/h","2026/03/20/Test3/h","2026/03/20/hello-world/h","2026/03/24/数模/h"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };