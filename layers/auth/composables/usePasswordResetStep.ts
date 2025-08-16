export enum PasswordResetRouteNames {
  SEND_RECOVERY_MAIL = "send_recovery_mail",
  CHANGE_PASSWORD = "change_password",
  VERIFY_EMAIL = "verify_email",
}

export const usePasswordResetStep = () => {
  const states = {
    routeActivity: useState<Record<PasswordResetRouteNames, boolean>>(
      "usePasswordResetStep.routeActivity",
      () => ({
        send_recovery_mail: true,
        change_password: false,
        verify_email: false,
      })
    ),
  };

  const actions = {
    setRouteActivity: (
      routeName: PasswordResetRouteNames,
      value: boolean = true
    ) => {
      actions.deactivateAllRouteActivity();
      states.routeActivity.value[routeName] = value;
    },

    deactivateAllRouteActivity: () => {
      Object.keys(states.routeActivity.value).forEach((key) => {
        states.routeActivity.value[key as PasswordResetRouteNames] = false;
      });
    },
    getCurrentStep: () => {
      let currentStep = "";
      Object.keys(states.routeActivity.value).forEach((key) => {
        if (
          states.routeActivity.value[key as PasswordResetRouteNames] === true
        ) {
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
