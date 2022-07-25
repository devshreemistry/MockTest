import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {
quesId: any;
question: any;
quizzes:any;

  constructor(private _route:ActivatedRoute,private _question:QuestionService, private _router:Router,private _quiz:QuizService) { }

  ngOnInit(): void {

    this.quesId = this._route.snapshot.params['quesId'];
    
   
//alert (this.qId);
this._question.getQuestion(this.quesId).subscribe(
  (data:any)=>{
    this.question=data;
    console.log(this.question);
  },
  (error:any)=>{
    console.log(error);
    
  }
);










}

  
 


//update form submit for question form

public updateQuestion(){

  this._question.updateQuestion(this.question).subscribe(
  (data:any)=>{
   
    Swal.fire("success!!","Quetion successfully updated",'success')
  
  },
  (error:any)=>{
    Swal.fire("error!!"," error in updating question",'error');
  }
 
  );
}



}
