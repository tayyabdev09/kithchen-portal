import { userPermissions } from "./UserPermissions";
import { getStorage } from "../storage";

export const checkPermissions = () => {
  const perIndex = userPermissions;
  const userInfo = getStorage("userInfo");

  // courses
  const adminPerCourse = userInfo.user_info.type && userInfo.user_info.user_permissions && userInfo.user_info.user_permissions.role_name === "admin" ? userInfo.user_info.type && perIndex[0].module_name && perIndex[0].permission === "crud" : "--";
  const companyPerCourse = userInfo.user_info.type && userInfo.user_info.user_permissions && userInfo.user_info.user_permissions.role_name === "company" ? userInfo.user_info.type && perIndex[0].module_name && perIndex[0].permission === "r" : "--";
  const trainerPerCourse = userInfo.user_info.type && userInfo.user_info.user_permissions && userInfo.user_info.user_permissions.role_name === "trainer" ? userInfo.user_info.type && perIndex[0].module_name && perIndex[0].permission === "r" : "--";
  const privatePerCourse = userInfo.user_info.type && userInfo.user_info.user_permissions && userInfo.user_info.user_permissions.role_name === "private" ? userInfo.user_info.type && perIndex[0].module_name && perIndex[0].permission === "r" : "--";

  // candidates
  const adminPerCandi = userInfo.user_info.type && userInfo.user_info.user_permissions && userInfo.user_info.user_permissions.role_name === "admin" ? userInfo.user_info.type && perIndex[1].module_name && perIndex[1].permission === "crud" : "--";
  const companyPerCandi = userInfo.user_info.type && userInfo.user_info.user_permissions && userInfo.user_info.user_permissions.role_name === "company" ? userInfo.user_info.type && perIndex[1].module_name && perIndex[1].permission === "crud" : "--";
  const trainerPerCandi = userInfo.user_info.type && userInfo.user_info.user_permissions && userInfo.user_info.user_permissions.role_name === "trainer" ? userInfo.user_info.type && perIndex[1].module_name && perIndex[1].permission === "r" : "--";
  const privatePerCandi = userInfo.user_info.type && userInfo.user_info.user_permissions && userInfo.user_info.user_permissions.role_name === "private" ? userInfo.user_info.type && perIndex[1].module_name && perIndex[1].permission === "r" : "--";

  // batches
  const adminPerBatch = userInfo.user_info.type && userInfo.user_info.user_permissions && userInfo.user_info.user_permissions.role_name === "admin" ? userInfo.user_info.type && perIndex[2].module_name && perIndex[2].permission === "crud" : "--";
  const companyPerBatch = userInfo.user_info.type && userInfo.user_info.user_permissions && userInfo.user_info.user_permissions.role_name === "company" ? userInfo.user_info.type && perIndex[2].module_name && perIndex[2].permission === "r" : "--";
  const trainerPerBatch = userInfo.user_info.type && userInfo.user_info.user_permissions && userInfo.user_info.user_permissions.role_name === "trainer" ? userInfo.user_info.type && perIndex[2].module_name && perIndex[2].permission === "crud" : "--";
  const privatePerBatch = userInfo.user_info.type && userInfo.user_info.user_permissions && userInfo.user_info.user_permissions.role_name === "private" ? userInfo.user_info.type && perIndex[2].module_name && perIndex[2].permission === "r" : "--";

  // Attendance
  const adminPerAttendance = userInfo.user_info.type && userInfo.user_info.user_permissions && userInfo.user_info.user_permissions.role_name === "admin" ? userInfo.user_info.type && perIndex[3].module_name && perIndex[3].permission === "crud" : "--";
  const companyPerAttendance = userInfo.user_info.type && userInfo.user_info.user_permissions && userInfo.user_info.user_permissions.role_name === "company" ? userInfo.user_info.type && perIndex[3].module_name && perIndex[3].permission === "r" : "--";
  const trainerPerAttendance = userInfo.user_info.type && userInfo.user_info.user_permissions && userInfo.user_info.user_permissions.role_name === "trainer" ? userInfo.user_info.type && perIndex[3].module_name && perIndex[3].permission === "crud" : "--";
  const privatePerAttendance = userInfo.user_info.type && userInfo.user_info.user_permissions && userInfo.user_info.user_permissions.role_name === "private" ? userInfo.user_info.type && perIndex[3].module_name && perIndex[3].permission === "r" : "--";

  // driver report
  const adminPerReport = userInfo.user_info.type && userInfo.user_info.user_permissions && userInfo.user_info.user_permissions.role_name === "admin" ? userInfo.user_info.type && perIndex[4].module_name && perIndex[4].permission === "crud" : "--";
  const companyPerReport = userInfo.user_info.type && userInfo.user_info.user_permissions && userInfo.user_info.user_permissions.role_name === "company" ? userInfo.user_info.type && perIndex[4].module_name && perIndex[4].permission === "r" : "--";
  const trainerPerReport = userInfo.user_info.type && userInfo.user_info.user_permissions && userInfo.user_info.user_permissions.role_name === "trainer" ? userInfo.user_info.type && perIndex[4].module_name && perIndex[4].permission === "crud" : "--";
  const privatePerReport = userInfo.user_info.type && userInfo.user_info.user_permissions && userInfo.user_info.user_permissions.role_name === "private" ? userInfo.user_info.type && perIndex[4].module_name && perIndex[4].permission === "r" : "--";

  // Evaluation
  const adminPerEval = userInfo.user_info.type && userInfo.user_info.user_permissions && userInfo.user_info.user_permissions.role_name === "company" ? userInfo.user_info.type && perIndex[5].module_name && perIndex[5].permission === "crud" : "--";
  const companyPerEval = userInfo.user_info.type && userInfo.user_info.user_permissions && userInfo.user_info.user_permissions.role_name === "company" ? userInfo.user_info.type && perIndex[5].module_name && perIndex[5].permission === "r" : "--";
  const trainerPerEval = userInfo.user_info.type && userInfo.user_info.user_permissions && userInfo.user_info.user_permissions.role_name === "trainer" ? userInfo.user_info.type && perIndex[5].module_name && perIndex[5].permission === "crud" : "--";
  const privatePerEval = userInfo.user_info.type && userInfo.user_info.user_permissions && userInfo.user_info.user_permissions.role_name === "private" ? userInfo.user_info.type && perIndex[5].module_name && perIndex[5].permission === "r" : "--";

  // Tests
  const adminPerTest = userInfo.user_info.type && userInfo.user_info.user_permissions && userInfo.user_info.user_permissions.role_name === "company" ? userInfo.user_info.type && perIndex[6].module_name && perIndex[6].permission === "crud" : "--";
  const companyPerTest = userInfo.user_info.type && userInfo.user_info.user_permissions && userInfo.user_info.user_permissions.role_name === "company" ? userInfo.user_info.type && perIndex[6].module_name && perIndex[6].permission === "r" : "--";
  const trainerPerTest = userInfo.user_info.type && userInfo.user_info.user_permissions && userInfo.user_info.user_permissions.role_name === "trainer" ? userInfo.user_info.type && perIndex[6].module_name && perIndex[6].permission === "crud" : "--";
  const privatePerTest = userInfo.user_info.type && userInfo.user_info.user_permissions && userInfo.user_info.user_permissions.role_name === "private" ? userInfo.user_info.type && perIndex[6].module_name && perIndex[6].permission === "r" : "--";

  // Certificates
  const adminPerCerti = userInfo.user_info.type && userInfo.user_info.user_permissions && userInfo.user_info.user_permissions.role_name === "company" ? userInfo.user_info.type && perIndex[7].module_name && perIndex[7].permission === "crud" : "--";
  const companyPerCerti = userInfo.user_info.type && userInfo.user_info.user_permissions && userInfo.user_info.user_permissions.role_name === "company" ? userInfo.user_info.type && perIndex[7].module_name && perIndex[7].permission === "r" : "--";
  const trainerPerCerti = userInfo.user_info.type && userInfo.user_info.user_permissions && userInfo.user_info.user_permissions.role_name === "trainer" ? userInfo.user_info.type && perIndex[7].module_name && perIndex[7].permission === "crud" : "--";
  const privatePerCerti = userInfo.user_info.type && userInfo.user_info.user_permissions && userInfo.user_info.user_permissions.role_name === "private" ? userInfo.user_info.type && perIndex[7].module_name && perIndex[7].permission === "r" : "--";

  return {
    // courses
    adminPerCourse,
    companyPerCourse,
    trainerPerCourse,
    privatePerCourse,

    // Candidates
    adminPerCandi,
    companyPerCandi,
    trainerPerCandi,
    privatePerCandi,

    // batches
    adminPerBatch,
    trainerPerBatch,
    privatePerBatch,
    companyPerBatch,

    // attendance
    adminPerAttendance,
    companyPerAttendance,
    trainerPerAttendance,
    privatePerAttendance,

    // driver report
    adminPerReport,
    companyPerReport,
    trainerPerReport,
    privatePerReport,

    // Evaluation
    adminPerEval,
    companyPerEval,
    trainerPerEval,
    privatePerEval,

    // Test
    adminPerTest,
    companyPerTest,
    trainerPerTest,
    privatePerTest,

    // certificaate
    adminPerCerti,
    companyPerCerti,
    trainerPerCerti,
    privatePerCerti,
  };
};
