import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NewSubjectComponent } from './new-subject/new-subject.component';
import { NewTopicComponent } from './new-topic/new-topic.component';
import { NewExamComponent } from './new-exam/new-exam.component';
import { NewQuestionComponent } from './new-question/new-question.component';

export const routes: Routes = [
    { path: "signup", component: SignupComponent },
    { path: "login", component: LoginComponent },
    { path: "", component: LoginComponent },
    { path: "home", component: HomeComponent },
    { path: "newsubject", component: NewSubjectComponent },
    { path: "newtopic", component: NewTopicComponent },
    { path: "newexam", component: NewExamComponent },
    { path: "newquestion", component: NewQuestionComponent },



];
