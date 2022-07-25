import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

import * as ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
 public Editor=ClassicEditorBuild;
  qId: any;
  qTitle:any;
  question = {
  quiz: {
     qId:'',
  },
  content:'',
  options1:'',
  options2:'',
  options3:'',
  options4:'',
  answer:'',
  };
  constructor( private _route:ActivatedRoute, private _question: QuestionService) { }

  ngOnInit(): void {

    this.qId = this._route.snapshot.params['qid'];
    this.qTitle = this._route.snapshot.params['title'];
    this.question.quiz['qId'] =this.qId;
  }
  formSubmit(){
    if (this.question.content.trim()=='' || this.question.content==null){
    return;
    }
    if (this.question.options1.trim() ==''|| this.question.options1==null){

    return;
    }
    if (this.question.options2.trim()=='' || this.question.options2==null) {
    return;
    }
    if (this.question.answer.trim()=='' || this.question.answer==null) {
      return;
      }
    //form submit
    this._question.addQuestion(this.question).subscribe(
    (data: any) => {
    Swal.fire('Success ', 'Question Added', 'success');
    this.question.content ='';
    this.question.options1='';
    this.question.options2 ='';
    this.question.options3='';
    this.question.options4='';
    this.question.answer='';
    },
    (error) => {
      Swal.fire('Error', 'Error in adding question', 'error');
    }
    );
   
  
  }
}
