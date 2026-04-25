<Helmet>
        <title>Full-Stack React Blog</title>
        <meta
          name='description'
          content='A blog full of articles about full-stack
React development.'
        />
      </Helmet>

      //We will add truncate
      function truncate(str, max = 160) {
  if (!str) return str
  if (str.length > max) {
    return str.slice(0, max - 3) + '...'
  } else {
    return str
  }
}

//And use it here
{post && (
        <Helmet>
          <title>{post.title} | Full-Stack React Blog</title>
        <meta name='description' content={truncate(post.contents)} />

    </Helmet>
)}
