package com.exam.model.exam;

import javax.persistence.*;

@Entity
public class Question {
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
    private Long quesId;
   @Column(length = 5000)
    private  String content;
    private String images;



    private  String options1;

    private  String options2;

    private  String options3;

    private  String options4;

    private  String answer;

    @Transient
    private String givenAnswer;


    @ManyToOne(fetch = FetchType.EAGER)

    private Quiz quiz;

    public Question() {
    }

    public Question(String content, String images, String options1, String options2, String options3, String options4, String answer, Quiz quiz) {
        this.content = content;
        this.images = images;
        this.options1 = options1;
        this.options2 = options2;
        this.options3 = options3;
        this.options4 = options4;
        this.answer = answer;
        this.quiz = quiz;
    }

    public Long getQuesId() {
        return quesId;
    }

    public void setQuesId(Long quesId) {
        this.quesId = quesId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getImages() {
        return images;
    }

    public void setImages(String images) {
        this.images = images;
    }

    public String getOptions1() {
        return options1;
    }

    public void setOptions1(String options1) {
        this.options1 = options1;
    }

    public String getOptions2() {
        return options2;
    }

    public void setOptions2(String options2) {
        this.options2 = options2;
    }

    public String getOptions3() {
        return options3;
    }

    public void setOptions3(String options3) {
        this.options3 = options3;
    }

    public String getOptions4() {
        return options4;
    }

    public void setOptions4(String options4) {
        this.options4 = options4;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public Quiz getQuiz() {
        return quiz;
    }

    public void setQuiz(Quiz quiz) {
        this.quiz = quiz;
    }

    public String getGivenAnswer() {
        return givenAnswer;
    }

    public void setGivenAnswer(String givenAnswer) {
        this.givenAnswer = givenAnswer;
    }
}

