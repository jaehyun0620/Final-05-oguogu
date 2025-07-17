import RegisterCardItem from '@/components/elements/RegisterItem/RegisterCardItem';

// 통합 회원가입 페이지
export default function Register() {
  return (
    <div>
      <h1>회원가입 사용자/판매자 선택 페이지</h1>
      <RegisterCardItem type="seller" />
      <RegisterCardItem type="user" />
    </div>
  );
}
