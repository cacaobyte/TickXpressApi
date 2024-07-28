import { NODE_ENV } from '../config.js';

const messages = {
  local: "Welcome to the API in the local development environment",
  pre: "Welcome to the API in the pre-production environment",
  pru: "Welcome to the API in the testing environment",
  uat: "Welcome to the API in the user acceptance testing environment",
  pro: "Welcome to the API in the production environment"
};

const environmentMessage = messages[NODE_ENV] || "Welcome to the API";

export const index = (req, res) => res.json({
  message: environmentMessage,
  documentation: "",
  github: ""
});
