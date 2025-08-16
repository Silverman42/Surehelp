export enum LoginRouteNames {
  LOGIN = "login",
  VERIFY_EMAIL = "verify_email",
}
export const useLoginStep = () => {
  const states = {
    routeActivity: useState<Record<LoginRouteNames, boolean>>(
      "useLoginStep.routeActivity",
      () => ({
        login: true,
        verify_email: false,
      })
    ),
  };

  const actions = {
    setRouteActivity: (routeName: LoginRouteNames, value: boolean = true) => {
      actions.deactivateAllRouteActivity();
      states.routeActivity.value[routeName] = value;
    },

    deactivateAllRouteActivity: () => {
      Object.keys(states.routeActivity.value).forEach((key) => {
        states.routeActivity.value[key as LoginRouteNames] = false;
      });
    },

    getCurrentStep: () => {
      let currentStep = "";
      Object.keys(states.routeActivity.value).forEach((key) => {
        if (states.routeActivity.value[key as LoginRouteNames] === true) {
          return (currentStep = key);
        }
      });
      return currentStep;
    },
  };
  return {
    ...states,
    ...actions,
  };
};
