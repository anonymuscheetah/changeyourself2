export type AnalyticsEvent = 'page_view' | 'tool_use' | 'sign_in' | 'sign_up' | 'sign_out';

export interface AnalyticsParams {
  page_view: {
    page_path: string;
    page_title: string;
  };
  tool_use: {
    tool_id: string;
  };
  sign_in: undefined;
  sign_up: undefined;
  sign_out: undefined;
}