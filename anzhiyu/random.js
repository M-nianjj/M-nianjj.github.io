var posts=["2026/03/20/Test2/h","2026/03/20/Test3/h","2026/03/20/hello-world/h","2026/04/07/Sci-VLA/h","2026/03/24/数模/h","2026/04/01/ToolRosetta/h"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };