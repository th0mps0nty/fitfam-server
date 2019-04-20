export const buildCustomerInfo = (info, providerName) => {
  let user = {
    email: "",
    firstName: "",
    lastName: "",
    avatarUrl: "",
    provider: {
      uid: "",
      type: ""
    }
  };

  if (providerName === "GOOGLE") {
    user.provider.uid = info.id;
    user.provider.type = provider;
    user.firstName = info.firstName;
    user.lastName = info.lastName;
    user.email = info.email;
    user.avatarUrl = info.picture;
  }
};
