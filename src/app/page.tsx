import Category from '@/components/layouts/Category/Category';
import { createReplie, deleteReplie, updateReplie } from '@/shared/data/actions/replies';
import {  getReplie, getSellerReplies } from '@/shared/data/functions/replies';




export default async function Home() {

 /*  const res = await getPost(3);
  console.log(res);
  const res1 = await getPostReplies(1);
  console.log(res1);
  const res2 = await createPost({
    "type": "qna",
     "title": "농촌체험은 얼마인가요?"
  });
  console.log(res2);
  const res3 = await updatePost(20, {
     "title": "농촌체험은 얼마인가요 수정 테스트"
  });
  console.log(res3); 
  const res = await deletePost(7);
  console.log(res);
  const res = await createPostReplies(19,{content: '3일 일정으로 오만원입니다.'})
  console.log(res);
  const res = await updatePostReplies(19,8,{content: '3일 일정으로 백만원입니다. 수정 테스트'})
  console.log(res);
  const res = await deletePostReplies(19,8);
  console.log(res);
  const res = await getMyRelies();
  console.log(res);
  */
  // const res = await createReplie({
  //   'order_id' : 3,
  //   'product_id' : 6,
  //   'content' : '보드게임 너무 재밌었어요.',
  // });
  // console.log(res);

  const res = await deleteReplie(11)
  console.log(res);



  return (
    <>
      <h1>Final-Project-oguogu v02</h1>
      <Category />
    </>
  );
}
