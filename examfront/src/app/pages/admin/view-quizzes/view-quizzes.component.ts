import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {
quizzes=[
  {
  qId:'',
  title:"",
  description:"",
  maxMarks:'',
  numberOfQuestions:'',
   category:{
    title:"",
  }
  }
  ];

  constructor(public _quiz:QuizService) { }

  ngOnInit(): void {
    this._quiz.quizzes().subscribe(
      (data:any)=>{
      this.quizzes=data;
      console.log(this.quizzes);
      
    },
    (error)=>{
      console.log(error);
      Swal.fire('Error','Error in loading Data','error');
      
    }
    );
  }

  //delete quiz
  deleteQuiz(qId: any){
    Swal.fire({
icon: 'info',
title:'are you sure',
confirmButtonText:'delete',
showCancelButton:true,
  }).then((result)=>{
    if(result.isConfirmed){

      this._quiz.deleteQuiz(qId).subscribe(
        (data)=>{
        this.quizzes=this.quizzes.filter((quiz) => quiz.qId !=qId);
        Swal.fire('success','Quiz deleted ','success');
      },
      (error)=>{
        Swal.fire('Error','Error in loading Data','error');
      }
      );
    
    }
  });
    
  }
}
