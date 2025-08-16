export enum RegisterRouteNames {
  SELECT_USER_TYPE = "select_user_type",
  SUBMIT_DATA = "submit_data",
  VERIFY_EMAIL = "verify_email",
}

export const useRegisterationStep = () => {
  const states = {
    routeActivity: useState<Record<RegisterRouteNames, boolean>>(
      "useRegisterationStep.routeActivity",
      () => ({
        select_user_type: true,
        submit_data: false,
        verify_email: false,
      })
    ),
  };

  const actions = {
    setRouteActivity: (routeName: RegisterRouteNames, value: boolean) => {
      actions.deactivateAllRouteActivity();
      states.routeActivity.value[routeName] = value;
    },

    deactivateAllRouteActivity: () => {
      Object.keys(states.routeActivity.value).forEach((key) => {
        states.routeActivity.value[key as RegisterRouteNames] = false;
      });
    },
    getCurrentStep: () => {
      let currentStep = "";
      Object.keys(states.routeActivity.value).forEach((key) => {
        if (states.routeActivity.value[key as RegisterRouteNames] === true) {
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
