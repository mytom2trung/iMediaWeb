import { createContext } from 'react';
import { ConfigData } from '@/iMedia/models';

interface IAppContext {
  configData: ConfigData | undefined;
}

const AppContext = createContext<IAppContext>({
  configData: undefined,
});

export default AppContext;
