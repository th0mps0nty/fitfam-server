import axios from "axios";

const FIELDS = "email,name,picture";

const BASE_URL = `https://graph.facebook.com/me?fields=${FIELDS}`;

export const authAsync = async token => {
  try {
    const res = await axios.get(`${BASE_URL}&access_token=${token}`);

    if (res.status === 200) {
      return res.data;
    }
    throw new Error("No Success with Facebook Auth");
  } catch (error) {
    throw error;
  }
};

export const Facebook = {
  authAsync
};
