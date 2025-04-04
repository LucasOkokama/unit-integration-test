package com.jetbrains.marco;

import org.junit.jupiter.api.*;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.xmlunit.assertj.XmlAssert;

import java.time.LocalDate;

import static net.javacrumbs.jsonunit.assertj.JsonAssertions.assertThatJson;
import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@ExtendWith(MockitoExtension.class)
class UserTest {

    User user;

    @BeforeEach
    void setup(){
        user =  new User("Marco", 37, false, LocalDate.now().minusYears(37));}

    @AfterEach
    void cleanup(){
        user = null;
    }

    @Test
    @DisplayName("User should be at least 18")
    void userShouldBeAtLeast18(){
        assertThat(user.age()).isGreaterThanOrEqualTo(18);

        assertThat(user.blocked())
                .as("User %s should be blocked", user.name())
                .isFalse();

        assertThatJson(user).isEqualTo("{\"name\":\"Marco\",\"age\":37,\"blocked\":false,\"birthDate\":[1988,4,4]}");

        assertThat("<a><b attr=\"abc\"></b></a>").contains("attr=\"abc\"");
    }

    @Test
    void userShouldBeMarco(){
        assertThat(user.name()).startsWith("Mar");
    }
}
