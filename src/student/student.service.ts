import { Injectable } from '@nestjs/common';
import { students } from 'src/db';
import { CreateStudentDto, FindStudentResponseDto, StudentResponseDto, UpdateStudentDto } from './dto/student.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class StudentService {

    private students = students

    getStudents(): FindStudentResponseDto[] {
        return this.students
    }

    getStudentById(studentId: string): FindStudentResponseDto {
        const studentFound = this.students.find(student => student.id === studentId)
        return studentFound
    }

    createStudent(payload: CreateStudentDto): StudentResponseDto {
        const newStudent = {
            id: uuidv4(),
            ...payload
        }
        console.log(newStudent);
        this.students.push(newStudent)
        return newStudent
    }

    updateStudentById(studentId: string, payload: UpdateStudentDto) {
        let updatedStudent: StudentResponseDto;
        const updatedStudentList = this.students.map(student => {
            if (student.id === studentId) {
                updatedStudent = {
                    id: studentId,
                    ...payload
                }
            return updatedStudent
            } else return student

        })
        this.students = updatedStudentList;
        return updatedStudent
    }

    getStudentByTeacherId(teacherId: string): FindStudentResponseDto[] {
        return this.students.filter(student => student.teacher === teacherId)
    }

    updateStudentTeacher(teacherId: string, studentId: string): StudentResponseDto {
        let updatedStudent: StudentResponseDto;
        const updatedStudentList = this.students.map(student => {
            if (student.id === studentId) {
                updatedStudent = {
                    ...student,
                    teacher: teacherId
                }
                return updatedStudent
            } else return student

        })
        this.students = updatedStudentList;
        return updatedStudent
    }
}