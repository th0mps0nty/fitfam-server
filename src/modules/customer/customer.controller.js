import * as Yup from "yup";
import { PROVIDER_ENUM } from "./customer.model";

export const create = async (req, res) => {
  const { token, provider } = req.body;

  const bodySchema = Yup.object().shape({
    token: Yup.string().required(),
    provider: Yup.object()
      .oneOf(PROVIDER_ENUM)
      .required()
  });

  try {
    await bodySchema.validate({ token, provider });
    res.status(201).json({ message: "success" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
