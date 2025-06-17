import { useParams } from 'react-router-dom'
import { posts } from '../data/posts'

export const Article = () => {
  const { id } = useParams();
  const articleDetail = posts.find((post) => post.id === Number(id));

  if (!articleDetail) {
    return <div>記事が見つかりません。</div>;
  }

  return (
    <div className="container max-w-3xl mx-auto">
      <div className="articleContents mt-14 px-4">
        <div className="articleThumbnail">
          <img src={articleDetail.thumbnailUrl} alt="" />
        </div>
        <div className="articleDetail p-4">
          <div className="flex justify-between">
            <p className="postDate text-gray-500 text-xs">{new Date(articleDetail.createdAt).toLocaleDateString()}</p>
            <div className="flex gap-x-2 items-center">
              {articleDetail.categories.map((category) => {
                return(
                  <p key={category} className="category text-sm text-fuchsia-600 border-1 rounded-sm p-1">{category}</p>
                );
              })}
            </div>
          </div>
          <div className="articleTitle text-2xl font-medium mt-3">APIで取得した{articleDetail.title}</div>
          <p className="articleText mt-3" dangerouslySetInnerHTML={{ __html:articleDetail.content}} />    
        </div>
      </div>
    </div>
  );
}


