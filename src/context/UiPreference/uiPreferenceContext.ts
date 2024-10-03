import { createContext } from "react";

export interface IUiPreference {
  isSingleGrid: boolean;
  changePreference?: (value: boolean) => void;
}

export const initialUiPreference: IUiPreference = {
  isSingleGrid: true,
  changePreference: () => {},
};

export const UiPreferenceContext =
  createContext<IUiPreference>(initialUiPreference);
