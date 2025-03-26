var posts=["2025/03/05/hello-world/","2025/02/02/morning/","2025/02/23/slider-image2/","2025/02/23/slider-img3/","2025/02/23/slider-img4/","2025/02/23/slider-img5/","2025/02/23/slider-img6/","2025/02/23/math1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };