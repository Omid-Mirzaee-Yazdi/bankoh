import envVars from './envVars'

export const config = {
  allowedDomains: envVars.allowedDomains?.split(',') ?? [],
}

export default config
