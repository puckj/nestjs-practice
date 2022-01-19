import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { StudentModule } from 'src/student/student.module';
import { TeacherModule } from 'src/teacher/teacher.module';

@Module({
  imports: [
    StudentModule, 
    TeacherModule,
    ConfigModule.forRoot()
  ]
})
export class AppModule { }
