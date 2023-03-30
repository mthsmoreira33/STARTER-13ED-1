interface CreateStudentDTO {
	name: string;
	enrollment: string;
}

function createStudent(studentData: CreateStudentDTO) {}

// default
// export default createStudent;

// no-default
export { CreateStudentDTO, createStudent };
