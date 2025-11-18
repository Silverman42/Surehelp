export const useMainConfig = () => {
  const states = {
    avatarUrl: useState<string>(
      "mainConfig.avatarUrl",
      () => "https://ui-avatars.com/api/"
    ),
  };

  const actions = {
    getPlaceholderImg: (name: string) => {
      return `${states.avatarUrl.value}?background=F0F6FF&color=2275E6&name=${name}`;
    },
  };
  return {
    ...states,
    ...actions,
  };
};
