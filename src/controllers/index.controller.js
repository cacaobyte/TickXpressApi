import { NODE_ENV } from '../config.js';

const messages = {
  local: "Welcome to the API in the local development environment - LOCAL",
  pre: "Welcome to the API in the pre-production environment- PRE",
  pru: "Welcome to the API in the testing environment- PRU",
  uat: "Welcome to the API in the user acceptance testing environment - UAT",
  pro: "Welcome to the API in the production environment - PRO"
};

const environmentMessage = messages[NODE_ENV] || "Welcome to the API";

export const index = (req, res) => res.json({
  message: environmentMessage,
  documentation: "",
  github: ""
});
