import {getCommonHttpRequestProps, getCommonJsonRequestProps, throwHttpErrors} from "../common";

export const getAllUsers = (history) =>
  fetch(`/hr-rest/employees`, {
    method: "GET",
    ...getCommonJsonRequestProps(),
  })
    .then(response => throwHttpErrors(response, history))
    .then(response => response.json())
    .then(users => users || []);

export const updateEmail = (history, email) =>
  fetch(`/hr-rest/employees/current/update-email`, {
    method: "POST",
    ...getCommonJsonRequestProps(),
    body: email,
  })
    .then(response => throwHttpErrors(response, history))
    .then(response => response.text());

export const findUser = (history, login) =>
  fetch(`/hr-rest/employees/${login}`, {
    method: "GET",
    ...getCommonJsonRequestProps(),
  })
    .then(response => throwHttpErrors(response, history))
    .then(response => response.json());

export const getEmployeeFullNameByLogin = (employeeLogin, history) =>
  fetch(`/hr-rest/employees/${employeeLogin}/fullName`, {
    method: "GET",
      ...getCommonJsonRequestProps(),
    })
    .then(response => throwHttpErrors(response, history))
    .then(response => response.text());

export const loadAvatar = (history) =>
  fetch(`/hr-rest/employees/current/avatar`, {
    method: "GET",
    ...getCommonJsonRequestProps(),
  })
    .then(response => throwHttpErrors(response, history))
    .then(response => response.blob())
    .then(image => image.size > 0 ? window.URL.createObjectURL(image) : null);

export const uploadAvatar = (history, formData) =>
  fetch(`/hr-rest/employees/current/avatar`, {
    method: "POST",
    body: formData,
    ...getCommonHttpRequestProps(),
  })
    .then(response => throwHttpErrors(response, history))
    .then(response => response.text())

export const generateSecuredPassword = (history) =>
  fetch(`/hr-rest/employees/generate-pass`, {
    method: "GET",
    ...getCommonJsonRequestProps(),
  })
    .then(response => throwHttpErrors(response, history))
    .then(response => response.text());

export const getEmployeeWithRole = history =>
  fetch(`/hr-rest/employees/employee-with-role`, {
    method: "GET",
    ...getCommonJsonRequestProps(),
  })
    .then(response => throwHttpErrors(response, history))
    .then(response => response.json())
    .then(users => users || []);

export const getEmployeeCountByRole = history =>
  fetch(`/hr-rest/employees/employee-count-by-role`, {
    method: "GET",
    ...getCommonJsonRequestProps(),
  })
    .then(response => throwHttpErrors(response, history))
    .then(response => response.json())
    .then(users => users || []);