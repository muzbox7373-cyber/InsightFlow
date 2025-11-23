import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import ProgressBar from '../components/ProgressBar';
import { SurveyStep, SurveyData } from '../types';

const SurveyPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [step, setStep] = useState<SurveyStep>(SurveyStep.TOOL_USAGE);
  
  // Initialize state, trying to get email from previous page
  const [formData, setFormData] = useState<SurveyData>({
    email: location.state?.email || '',
    tool: '',
    difficulty: '',
    willingness: 5,
  });

  // If no email provided (direct access), redirect home or ask for it. 
  // For this prototype, we'll just let them continue but log a warning.
  useEffect(() => {
    if (!formData.email) {
      // console.warn("No email provided via navigation state.");
    }
  }, [formData.email]);

  const handleNext = () => {
    if (step === SurveyStep.WILLINGNESS) {
      // Submit logic would go here (API call)
      navigate('/success');
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    } else {
      navigate('/');
    }
  };

  const isStepValid = () => {
    switch (step) {
      case SurveyStep.TOOL_USAGE:
        return formData.tool.length > 0;
      case SurveyStep.DIFFICULTY:
        return formData.difficulty.length > 0;
      case SurveyStep.WILLINGNESS:
        return true; // Default value exists
      default:
        return false;
    }
  };

  // --- Step Components ---

  const StepOne = () => (
    <div className="animate-fade-in-up">
      <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">
        현재 피드백 분석에 사용하는<br />주된 도구는 무엇인가요?
      </h3>
      <div className="space-y-3">
        {['엑셀/스프레드시트', '노션(Notion)', '전용 VOC 툴', '분석하지 않음'].map((option) => (
          <label
            key={option}
            className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${
              formData.tool === option
                ? 'border-primary bg-blue-50 text-primary'
                : 'border-slate-200 hover:border-blue-200 bg-white'
            }`}
          >
            <input
              type="radio"
              name="tool"
              value={option}
              checked={formData.tool === option}
              onChange={(e) => setFormData({ ...formData, tool: e.target.value })}
              className="w-5 h-5 text-primary focus:ring-primary border-gray-300"
            />
            <span className="ml-3 font-medium text-lg">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );

  const StepTwo = () => (
    <div className="animate-fade-in-up">
      <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
        피드백 수집 과정에서<br />가장 큰 어려움은 무엇인가요?
      </h3>
      <p className="text-slate-500 mb-8">자유롭게 작성해주시면 맞춤형 솔루션을 제안해드립니다.</p>
      <textarea
        className="w-full h-40 p-5 border-2 border-slate-200 rounded-xl text-lg focus:border-primary focus:ring-0 transition-colors resize-none"
        placeholder="예: 채널이 너무 분산되어 있어서 모으기가 힘들어요..."
        value={formData.difficulty}
        onChange={(e) => setFormData({ ...formData, difficulty: e.target.value })}
        autoFocus
      />
    </div>
  );

  const StepThree = () => (
    <div className="animate-fade-in-up">
      <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">
        피드백 분석 자동화 툴이 있다면<br />사용할 의향이 있으신가요?
      </h3>
      <div className="flex flex-col items-center">
        <div className="w-full flex justify-between text-sm text-slate-500 mb-2 font-medium">
          <span>전혀 없음 (1)</span>
          <span>매우 높음 (10)</span>
        </div>
        <input
          type="range"
          min="1"
          max="10"
          value={formData.willingness}
          onChange={(e) => setFormData({ ...formData, willingness: parseInt(e.target.value) })}
          className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
        />
        <div className="mt-8 text-center">
          <span className="text-6xl font-bold text-primary">{formData.willingness}</span>
          <span className="text-xl text-slate-400 ml-2">/ 10</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="max-w-3xl mx-auto w-full flex-1 px-6 py-12 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <button onClick={handleBack} className="text-slate-400 hover:text-slate-600 transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <span className="text-sm font-semibold text-slate-400">제품 피드백 수집</span>
          <div className="w-6 h-6"></div> {/* Spacer for alignment */}
        </div>

        {/* Progress */}
        <ProgressBar currentStep={step} totalSteps={3} />

        {/* Form Content */}
        <div className="flex-1 flex flex-col justify-center">
          {step === SurveyStep.TOOL_USAGE && <StepOne />}
          {step === SurveyStep.DIFFICULTY && <StepTwo />}
          {step === SurveyStep.WILLINGNESS && <StepThree />}
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 flex justify-end">
          <button
            onClick={handleNext}
            disabled={!isStepValid()}
            className={`flex items-center px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:-translate-y-0.5 ${
              isStepValid()
                ? 'bg-primary text-white shadow-lg shadow-blue-500/30 hover:bg-blue-700'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            <span>{step === SurveyStep.WILLINGNESS ? '제출하기' : '다음'}</span>
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SurveyPage;