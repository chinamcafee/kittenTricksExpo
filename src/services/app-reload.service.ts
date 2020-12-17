import * as Updates from 'expo-updates';

export class AppReloadService  {

  static reload = (): void => {
    Updates.reloadAsync();
  };
}
