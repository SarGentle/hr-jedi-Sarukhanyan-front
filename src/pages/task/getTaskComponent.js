import VacationApprovalPrepareRequest from "./tasksComponents/VacationApprovalPrepareRequest";
import VacationApprovalApproveRequest from "./tasksComponents/VacationApprovalApproveRequest";
import TaskStub from "./TaskStub";
import BusinessTripApprovalPrepareRequest from "./tasksComponents/BusinessTripApprovalPrepareRequest";

const taskComponentByFormKey = {
  "vacation-approval:prepare-request": VacationApprovalPrepareRequest,
  "vacation-approval:approve-request": VacationApprovalApproveRequest,
  "business-trip-approval:prepare-request": BusinessTripApprovalPrepareRequest,
  "business-trip-approval:approve-request": VacationApprovalApproveRequest,
};

export default (task) => {
  const {formKey} = task;
  return  taskComponentByFormKey[formKey] || TaskStub;
};
