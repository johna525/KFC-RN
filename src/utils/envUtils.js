import Utils from './utils';
import envConfigs from '../configs/env/default.json';

const EnvUtils = {
  getEnvParam: (param) => {
    const str = Utils.getParamFromObject(envConfigs.default, param, false);
    return str;
  }
};

export default EnvUtils;
