let Attendance = [
  { studentID: 1, name: "Beloxxi", status: "present" },
  { studentID: 2, name: "Deloxxi", status: "absent" },
  { studentID: 3, name: "Teloxxi", status: "present" },
  { studentID: 4, name: "Feloxxi", status: "absent" },
];

//create Attendance Logic

let addAttendance = {
  studentID: Attendance.length + 1,
  name: "Peloxxi",
  status: "present",
};

export const createAttendanceLogic = (
  data: Array<{ studentID: number; name: string; status: string }>,
  value: { studentID: number; name: string; status: string }
): { studentID: number; name: string; status: string } => {
  data.push(value);

  return value;
};

//view All Attendance Logic

export const viewAllAttendanceLogic = (
  data: Array<{
    studentID: number;
    name: string;
    status: string;
  }>
): Array<{
  studentID: number;
  name: string;
  status: string;
}> => {
  return data;
};

//view One Attendance Logic

export const viewOneAttendanceLogic = (
  data: Array<{
    studentID: number;
    name: string;
    status: string;
  }>,
  studentID: number
): { studentID: number; name: string; status: string } => {
  let getAttendance = data?.find((el: any) => {
    return el.studentID === studentID;
  })!;

  return getAttendance;
};

//Update One Attendance Logic

export const updateOneAttendanceLogic = (
  data: Array<{
    studentID: number;
    name: string;
    status: string;
  }>,
  studentID: number
): { studentID: number; name: string; status: string } => {
  let getOneAttendance = data?.find((el: any) => {
    return el.studentID === studentID;
  })!;

  return getOneAttendance;
};

createAttendanceLogic(Attendance, addAttendance);
viewAllAttendanceLogic(Attendance);
viewOneAttendanceLogic(Attendance, 3);
updateOneAttendanceLogic(Attendance, 3);
console.log();
