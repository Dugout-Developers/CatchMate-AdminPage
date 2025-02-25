import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import apiService from '../../services/apiService.js';

const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
const CALLBACK_URL = process.env.REACT_APP_NAVER_CALLBACK_URL; // 로그인 성공 후 돌아올 페이지

const LoginPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!window.naver) {
      console.error('❌ 네이버 로그인 SDK 로드 실패!');
      return;
    }

    // ✅ 네이버 로그인 초기화
    const naverLogin = new window.naver.LoginWithNaverId({
      clientId: NAVER_CLIENT_ID,
      callbackUrl: CALLBACK_URL,
      isPopup: false,
    });

    naverLogin.init();

    // ✅ 페이지가 로드될 때 자동으로 로그인 상태 확인
    setTimeout(() => {
      naverLogin.getLoginStatus((status) => {
        console.log('✅ 네이버 로그인 상태:', status);
        if (status) {
          console.log('✅ 네이버 유저 정보:', naverLogin.user);
          localStorage.setItem('naverUser', JSON.stringify(naverLogin.user));
        }
      });
    }, 500);
  }, []);

  const handleNaverLogin = () => {
    console.log('네이버 로그인 버튼 클릭됨!');

    const naverLogin = new window.naver.LoginWithNaverId({
      clientId: NAVER_CLIENT_ID,
      callbackUrl: CALLBACK_URL,
      isPopup: false,
    });

    naverLogin.init();
    setTimeout(() => {
      console.log('✅ 네이버 로그인 요청 시작...');
      naverLogin.getLoginStatus(async (status) => {
        console.log('✅ 네이버 로그인 상태:', status);
        if (status) {
          console.log('✅ 네이버 유저 정보:', naverLogin.user);

          // ✅ 로그인 정보 저장
          localStorage.setItem('naverUser', JSON.stringify(naverLogin.user));

          handleLogin(naverLogin.user);
        } else {
          console.error('❌ 네이버 로그인 상태가 false 입니다.');
        }
      });
    }, 500);
  };
  // ✅ 네이버 로그인 성공 후 백엔드 로그인 처리
  const handleLogin = async (user) => {
    if (!user) {
      console.error('❌ 네이버 로그인 실패: 사용자 정보 없음');
      return;
    }

    const userEmail = user.email;
    const providerId = user.id;

    console.log('🔹 백엔드로 보낼 데이터:', {
      email: userEmail,
      providerId,
      provider: 'naver',
      picture: '',
      fcmToken: '',
    });

    try {
      const { accessToken, refreshToken, isFirstLogin } =
        await apiService.postLogin({
          email: userEmail,
          providerId: providerId,
          provider: 'naver',
          picture: '',
          fcmToken: '',
        });

      if (isFirstLogin) {
        alert('등록된 아이디가 아닙니다.');
      } else {
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('❌ 네이버 로그인 후 백엔드 요청 실패:', error);
    }
  };

  return (
    <div>
      <h2>네이버 로그인</h2>
      <button
        id="naverIdLogin"
        onClick={handleNaverLogin}
        style={{ padding: '10px', backgroundColor: 'green', color: 'white' }}
      >
        네이버 로그인
      </button>
    </div>
  );
};

export default LoginPage;
