/* eslint-disable @typescript-eslint/no-explicit-any */

export type Owner = {
  avatar_url: string;
  login: string;
  [key: string]: any;
};

export type Repo = {
  name?: string;
  owner?: Owner;
  description?: string;
  svn_url?: string;
  [key: string]: any;
};

export type ResultAPI = {
  message?: string;
  total_count?: number;
  items?: Repo[];
  incomplete_results?: boolean;
  errors: any;
  documentation_url: string;
};
