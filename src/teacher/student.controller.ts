import { Controller, Get, Param, ParseUUIDPipe, Put } from '@nestjs/common';
import { StudentService } from 'src/student/student.service';
import { FindStudentResponseDto, StudentResponseDto } from '../student/dto/student.dto'

@Controller('teachers/:teacherId/students')
export class TeacherStudentController {
    constructor(private readonly studentService: StudentService) { }

    @Get()
    getStudents(
        @Param("teacherId", new ParseUUIDPipe()) teacherId: string
    ): FindStudentResponseDto[] {
        return this.studentService.getStudentByTeacherId(teacherId)
    }

    @Put('/:studentId')
    updateStudentTeacher(
        @Param("teacherId", new ParseUUIDPipe()) teacherId: string,
        @Param("studentId", new ParseUUIDPipe()) studentId: string,
    ): StudentResponseDto {
        return this.studentService.updateStudentTeacher(teacherId, studentId)
    }
}
