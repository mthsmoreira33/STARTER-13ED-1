// importa todos os modulos desta entidade
import { createStudent, CreateStudentDTO } from './create-student';
import updateStudent from './update-student';
import deleteStudent from './delete-student';
import listaAllStudents from './list-students';
import listaStudentByUid from './list-student-by-uid';

// exporta tudo em um objeto só
export {
	updateStudent,
	CreateStudentDTO,
	createStudent,
	deleteStudent,
	listaAllStudents,
	listaStudentByUid,
};
