package com.lucasokokama;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class GraderTest {
  @Test
  void zeroShouldReturnF(){
    var grader = new Grader();
    assertEquals('F', grader.determineLetterGrader(0));
  }

  @Test
  void fiftyNineShouldReturnF(){
    var grader = new Grader();
    assertEquals('F', grader.determineLetterGrader(59));
  }

  @Test
  void sixtyShouldReturnD(){
    var grader = new Grader();
    assertEquals('D', grader.determineLetterGrader(60));
  }

  @Test
  void sixtyNineShouldReturnD(){
    var grader = new Grader();
    assertEquals('D', grader.determineLetterGrader(69));
  }

  @Test
  void seventyShouldReturnC(){
    var grader = new Grader();
    assertEquals('C', grader.determineLetterGrader(70));
  }

  @Test
  void seventyNineShouldReturnC(){
    var grader = new Grader();
    assertEquals('C', grader.determineLetterGrader(79));
  }

  @Test
  void eightyShouldReturnB(){
    var grader = new Grader();
    assertEquals('B', grader.determineLetterGrader(80));
  }

  @Test
  void eightyNineShouldReturnB(){
    var grader = new Grader();
    assertEquals('B', grader.determineLetterGrader(89));
  }

  @Test
  void ninetyShouldReturnA(){
    var grader = new Grader();
    assertEquals('A', grader.determineLetterGrader(90));
  }

  @Test
  void ninetyNineShouldReturnA(){
    var grader = new Grader();
    assertEquals('A', grader.determineLetterGrader(99));
  }

  @Test
  void negativeOneShouldReturnIllegalArgumentException(){
    var grader = new Grader();
    assertThrows(IllegalArgumentException.class,
            () -> {
              grader.determineLetterGrader(-1);
            });
  }
}