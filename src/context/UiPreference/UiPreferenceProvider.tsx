import { FC, ReactNode, useState } from "react";
import { UiPreferenceContext } from "./uiPreferenceContext";

interface IUiPreferenceProviderProps {
  children: ReactNode;
}

const UiPreferenceProvider: FC<IUiPreferenceProviderProps> = ({ children }) => {
  const [status, setStatus] = useState<boolean>(true);

  const changePreference = (value: boolean) => {
    setStatus(value);
  };

  return (
    <UiPreferenceContext.Provider
      value={{ isSingleGrid: status, changePreference }}
    >
      {children}
    </UiPreferenceContext.Provider>
  );
};

export default UiPreferenceProvider;
