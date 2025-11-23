import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Home, PlayCircle } from 'lucide-react';
import { SUCCESS_IMG } from '../images/assets';

const SuccessPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col md:flex-row">
        
        {/* Left Content */}
        <div className="p-10 md:p-14 flex flex-col justify-center flex-1">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-8">
            <CheckCircle className="w-8 h-8 text-accent" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            소중한 의견 감사합니다!
          </h1>
          
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            작성해주신 내용을 바탕으로 <span className="font-semibold text-primary">맞춤형 분석 리포트 샘플</span>을 
            메일로 보내드렸습니다. <br/><br/>
            InsightFlow가 어떻게 복잡한 피드백 데이터를 1분 만에 시각화하는지 확인해보세요.
          </p>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <button 
              className="flex items-center justify-center px-6 py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors font-medium"
              onClick={() => window.open('https://www.youtube.com', '_blank')}
            >
              <PlayCircle className="w-5 h-5 mr-2" />
              데모 영상 보러가기
            </button>
            <button 
              className="flex items-center justify-center px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 transition-colors font-medium"
              onClick={() => navigate('/')}
            >
              <Home className="w-5 h-5 mr-2" />
              홈으로 돌아가기
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden md:block md:w-2/5 relative">
           <img 
            src={SUCCESS_IMG} 
            alt="Success" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;