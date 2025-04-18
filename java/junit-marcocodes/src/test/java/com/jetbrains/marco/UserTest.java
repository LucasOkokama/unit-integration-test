package com.jetbrains.marco;

import com.jetbrains.util.Resources;
import com.jetbrains.util.Xml;
import org.junit.jupiter.api.*;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvFileSource;
import org.junit.jupiter.params.provider.ValueSource;
import org.mockito.junit.jupiter.MockitoExtension;
import org.xmlunit.assertj.XmlAssert;

import java.time.LocalDate;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

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

    @ParameterizedTest
    @ValueSource(ints = {20, 50, 80})
    void allFriendsShouldAtLeastBe18(int age){
        assertThat(age).isGreaterThanOrEqualTo(18);
    }

    @ParameterizedTest
    @CsvFileSource(resources = "/friends.csv", numLinesToSkip = 1)
    void allFriendsShouldAtLeastBe18FromCSV(String name, int age){
        assertThat(age).isGreaterThanOrEqualTo(18);
    }

    @TestFactory
    Collection<DynamicTest> dynamicTestsCreatedThroughCode(){
        List<Xml> xmls = Resources.toStrings("users.*\\.xml");

        return xmls.stream().map(xml -> DynamicTest.dynamicTest(xml.name(), () -> {
            XmlAssert.assertThat(xml.content()).hasXPath("/users/user/name");
        })).collect(Collectors.toList());
    }
}
