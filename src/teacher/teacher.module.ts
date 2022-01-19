import { Module } from '@nestjs/common';
import { StudentModule } from 'src/student/student.module';
import { TeacherStudentController } from './student.controller';
import { TeacherController } from './teacher.controller';
import { TeacherService } from './teacher.service';

@Module({
    imports: [StudentModule],
    controllers: [
        TeacherController,
        TeacherStudentController
    ],
    providers: [TeacherService]
})
export class TeacherModule { }
