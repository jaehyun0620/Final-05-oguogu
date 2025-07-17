const API_URL = 'https://fesp-api.koyeb.app/market';
const CLIENT_ID = 'febc13-final05-emjf';

// 일반 유저 (2번) 인증 토큰
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIsInR5cGUiOiJzZWxsZXIiLCJuYW1lIjoi64Sk7JikIiwiZW1haWwiOiJzMUBtYXJrZXQuY29tIiwiaW1hZ2UiOiIvZmlsZXMvZmViYzEzLWZpbmFsMDUtZW1qZi91c2VyLW5lby5wbmciLCJsb2dpblR5cGUiOiJlbWFpbCIsImlhdCI6MTc1MjE5NzI0OCwiZXhwIjoxNzUyMjgzNjQ4LCJpc3MiOiJGRUJDIn0.9LIJV9KkT_099ySlrNebTDe4QoS-yXvqRZskBVMpyns';

// CHECKLIST
// [x] 북마크 목록 조회
// [x] 북마크 한건 조회

// 1. 북마크 목록 조회
export async function getBookmarks(type: string) {
  try {
    const res = await fetch(`${API_URL}/bookmarks/${type}`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        'Client-Id': CLIENT_ID,
      },
    });
    return res.json();
  } catch (error) {
    // 네트워크 오류 처리
    console.error(error);
    return { ok: 0, message: '일시적인 네트워크 문제로 로드에 실패했습니다.' };
  }
}

// 2. 북마크 한건 조회 (id는 북마크한 상품 id를 나타냄)
export async function getBookmark(type: string, target_id: number) {
  try {
    const res = await fetch(`${API_URL}/bookmarks/${type}/${target_id}`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        'Client-Id': CLIENT_ID,
      },
    });
    return res.json();
  } catch (error) {
    // 네트워크 오류 처리
    console.error(error);
    return { ok: 0, message: '일시적인 네트워크 문제로 로드에 실패했습니다.' };
  }
}
