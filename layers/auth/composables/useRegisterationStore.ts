export enum UserTypes {
  CUSTOMERS = "customers",
  ARTISANS = "artisans",
}
export const useRegisterationStore = () => {
  const states = {
    selectedUserType: useState<UserTypes>(
      "useRegisterationStore.userType",
      () => {
        return UserTypes.CUSTOMERS;
      }
    ),
  };

  const actions = {
    toggleUserTypes: () => {
      if (states.selectedUserType.value === UserTypes.CUSTOMERS) {
        states.selectedUserType.value = UserTypes.ARTISANS;
      } else {
        states.selectedUserType.value = UserTypes.CUSTOMERS;
      }
    },

    setUserType: (userType: UserTypes) => {
      states.selectedUserType.value = userType;
    },
  };
  return {
    ...states,
    ...actions,
  };
};
