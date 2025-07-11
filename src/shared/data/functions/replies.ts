const API_URL = 'https://fesp-api.koyeb.app/market'
const CLIENT_ID = 'febc13-final05-emjf'

// 일반 유저 (1번) 인증 토큰
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIsInR5cGUiOiJzZWxsZXIiLCJuYW1lIjoi64Sk7JikIiwiZW1haWwiOiJzMUBtYXJrZXQuY29tIiwiaW1hZ2UiOiIvZmlsZXMvZmViYzEzLWZpbmFsMDUtZW1qZi91c2VyLW5lby5wbmciLCJsb2dpblR5cGUiOiJlbWFpbCIsImlhdCI6MTc1MjE5NzI0OCwiZXhwIjoxNzUyMjgzNjQ4LCJpc3MiOiJGRUJDIn0.9LIJV9KkT_099ySlrNebTDe4QoS-yXvqRZskBVMpyns"

// CHECKLIST
 // [x] 내 구매 후기 목록
 // [x] 상품 구매 후기 목록
 // [x] 구매 후기 목록
 // [x] 구매 후기 상세
 // [x] 판매자 구매 후기 목록
 

//  1. 내 구매 후기 목록 [사용자 전용 토큰이 필요함]
export async function getMyReplies() {
  try{
    const res = await fetch(`${API_URL}/replies`, {
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Client-Id': CLIENT_ID,
      },

    });
    return res.json();
  }catch(error){ // 네트워크 오류 처리
    console.error(error);
    return { ok: 0, message: '일시적인 네트워크 문제로 로드에 실패했습니다.' };
  }
}

//  2. 상품 구매 후기 목록 [해당 상품 전체 리뷰 리스트]
export async function getProductReplies(_id : number) {
  try{
    const res = await fetch(`${API_URL}/replies/products/${_id}`, {
      headers: {
        'Client-Id': CLIENT_ID,
      },

    });
    return res.json();
  }catch(error){ // 네트워크 오류 처리
    console.error(error);
    return { ok: 0, message: '일시적인 네트워크 문제로 로드에 실패했습니다.' };
  }
}

//  3. 모든 상품 구매 후기 목록 
export async function getALLReplies() {
  try{
    const res = await fetch(`${API_URL}/replies/all`, {
      headers: {
        'Client-Id': CLIENT_ID,
      },

    });
    return res.json();
  }catch(error){ // 네트워크 오류 처리
    console.error(error);
    return { ok: 0, message: '일시적인 네트워크 문제로 로드에 실패했습니다.' };
  }
}

// 4. 구매 후기 상세
export async function getReplie(_id : number) {
  try{
    const res = await fetch(`${API_URL}/replies/${_id}`, {
      headers: {
        'Client-Id': CLIENT_ID,
      },

    });
    return res.json();
  }catch(error){ // 네트워크 오류 처리
    console.error(error);
    return { ok: 0, message: '일시적인 네트워크 문제로 로드에 실패했습니다.' };
  }
}

// 5. 판매자 구매 후기 목록
export async function getSellerReplies(seller_id : number) {
  try{
    const res = await fetch(`${API_URL}/replies/seller/${seller_id}`, {
      headers: {
        'Client-Id': CLIENT_ID,
      },

    });
    return res.json();
  }catch(error){ // 네트워크 오류 처리
    console.error(error);
    return { ok: 0, message: '일시적인 네트워크 문제로 로드에 실패했습니다.' };
  }
}