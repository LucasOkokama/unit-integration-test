package com.lucasokokama;

public class Grader {
  public char determineLetterGrader(int numberGrade){
    if(numberGrade < 0){
      throw new IllegalArgumentException("Number grande cannot be a negative value");
    }
    if(numberGrade < 60){
      return 'F';
    }
    if(numberGrade <70){
      return 'D';
    }
    if(numberGrade < 80){
      return 'C';
    }
    if(numberGrade < 90){
      return 'B';
    }
    else {
      return 'A';
    }
  }
}
