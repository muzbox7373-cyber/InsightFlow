import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, BarChart2 } from 'lucide-react';
import { HERO_BG } from '../images/assets';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // Pass email to survey page via navigation state
      navigate('/survey', { state: { email } });
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Content Section */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12 z-10 bg-white relative">
        <div className="max-w-xl">
          <div className="flex items-center space-x-2 mb-6">
            <div className="bg-primary/10 p-2 rounded-lg">
              <BarChart2 className="w-6 h-6 text-primary" />
            </div>
            <span className="font-bold text-xl tracking-tight text-secondary">InsightFlow</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            고객 피드백 분석, <br />
            <span className="text-primary">50% 더 빠르게</span> 끝내세요.
          </h1>

          <h2 className="text-lg text-slate-600 mb-10 leading-relaxed">
            쏟아지는 VOC, 언제까지 엑셀로 정리하시겠습니까? <br />
            초기 스타트업 PM을 위한 AI 자동 분류 및 인사이트 도출 솔루션.
          </h2>

          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">이메일</label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="이메일을 입력하세요"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center group shadow-lg shadow-blue-500/30"
            >
              <span>무료로 분석 시작하기</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-10 flex items-center space-x-2 text-sm text-slate-500">
            <div className="flex -space-x-2">
              <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=1" alt="User" />
              <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=2" alt="User" />
              <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=3" alt="User" />
            </div>
            <p>이미 <strong className="text-slate-700">200+ 스타트업 팀</strong>이 사용 중입니다.</p>
          </div>
          
          <div className="mt-12 grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span className="text-slate-600">1분 설치</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span className="text-slate-600">자동 리포트 생성</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image Section (Hidden on mobile) */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent z-10 w-32"></div>
        <img
          src={HERO_BG}
          alt="Startup Team Analysis"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
      </div>
    </div>
  );
};

export default HomePage;