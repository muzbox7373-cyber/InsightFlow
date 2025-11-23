export interface SurveyData {
  email: string;
  tool: string;
  difficulty: string;
  willingness: number;
}

export enum SurveyStep {
  TOOL_USAGE = 0,
  DIFFICULTY = 1,
  WILLINGNESS = 2,
}
