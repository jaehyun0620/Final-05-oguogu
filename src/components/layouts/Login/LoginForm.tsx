'use client';

import CheckButton from '@/components/elements/CheckButton/CheckButton';
import CommonButton from '@/components/elements/CommonButton/CommonButton';
import LoginInput from '@/components/elements/LoginItem/LoginInput';
import ProductLinkItem from '@/components/elements/ProductLink/ProductLink';
import { loginUser } from '@/shared/data/actions/user';
import { useAuthStore, userInfo } from '@/shared/store/authStore';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function LoginForm() {
  const [email, setEmail] = useState('seller1@gmail.com');
  const [password, setPassword] = useState('seller1!!');
  const [autoLogin, setAutoLogin] = useState(false);
  const router = useRouter();

  const setToken = useAuthStore(state => state.setToken);
  const setUserInfo = useAuthStore(state => state.setUserInfo);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const loginRes = await loginUser({ email, password });

      if (loginRes?.item?.token?.accessToken) {
        toast.success('로그인 되었습니다🥕');

        // Zustand에 토큰 저장
        setToken(loginRes.item.token.accessToken);

        // Zustand에 유저 정보 저장
        const userInfo: userInfo = {
          _id: loginRes.item._id,
          name: loginRes.item.name,
          type: loginRes.item.type,
        };
        setUserInfo(userInfo);

        /* 자동 로그인 체크 여부에 따라 스토리지 타입 설정 */
        useAuthStore.getState().setStorageType(autoLogin);

        /* 로그인 성공 후 페이지를 강제로 새로고침하여 InitAuthStore의 useEffect가 다시 실행되도록 */
        // INFO type 이 seller 인 경우, 홈으로 이동하지 않고 백오피스로 이동하도록 수정
        // INFO seller 검증 기능 삭제, 모두 홈으로 이동하도록
        // if (userInfo.type === 'seller') {
        //   router.push('/office');
        // } else {
        //   router.push('/');
        // }
        router.push('/');
      } else {
        router.refresh();
        toast.error('로그인 정보가 일치하지 않습니다.');
        setEmail('');
        setPassword('');
      }
    } catch (error) {
      console.error('로그인 중 오류:', error);
      toast.error('오류가 생겼습니다. 서버를 확인해주세요');
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <fieldset className="flex flex-col gap-2">
          <legend className="sr-only">로그인 정보</legend>
          <div>
            <label htmlFor="email" className="sr-only">
              이메일
            </label>
            {/* 이메일 */}
            <LoginInput type="text" placeholder="이메일" value={email} onChange={setEmail} id="email" />
          </div>

          {/* 비밀번호 */}
          <div>
            <label htmlFor="password" className="sr-only">
              비밀번호
            </label>
            <LoginInput
              type="password"
              placeholder="비밀번호 (영문 + 숫자 + 특수문자)"
              onChange={setPassword}
              value={password}
              id="password"
            />
          </div>
        </fieldset>

        {/* 자동 로그인 & 아이디/비밀번호 찾기 */}
        <div className="flex flex-row items-center justify-between mt-2">
          <CheckButton size={14} gap={2} checked={autoLogin} onChange={() => setAutoLogin(prev => !prev)}>
            자동 로그인
          </CheckButton>
        </div>

        {/* 로그인 버튼 */}
        <CommonButton
          feature="로그인"
          textSize="text-[16px]"
          width="w-[288px]"
          height="h-[43px]"
          type="submit"
          cursorPointer
        />

        {/* 회원가입 링크 */}
        <ProductLinkItem link="/register" linkTitle="회원가입" subTxt="하러 가기" mode="loginPage" />
      </form>
    </section>
  );
}
