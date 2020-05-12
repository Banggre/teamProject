package com.hufsSchedule.hufsScheduleSystem.GrdCond;

import com.hufsSchedule.hufsScheduleSystem.Entity.Course;
import com.hufsSchedule.hufsScheduleSystem.Entity.Instruction;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class GrdCondEct {
    public static String getStudentYear(String studentNumber) {
        if (studentNumber.length() != 9) { return null; }
        return studentNumber.substring(0, 4);
    }

    public static Integer getInteger(String str) {
        try {
            return Integer.parseInt(str);
        } catch (Exception e) {
            System.out.println(str);
            System.out.println("Error occured while parsing String into Integer");
            return getInteger(str);
        }
    }

    public static Boolean getStudentBool(String str) {
        if (str == null || str.equals("0") || str.length() == 0) { // or length == 0?
            return false;
        } else {
            return true;
        }
    }

    public static String getEngFromKorMajor(String korMajorName) {

        String engMajorName = Stream.of(departments.values())
                .filter(s -> korMajorName.equals(s.getKorName()))
                .map(s->s.getEngName())
                .findFirst()
                .orElse(null);

        return engMajorName;
    }

    public static List<CourseEnums> removeCourseListByNumber(List<CourseEnums> courseList, List<String> removeList) {
        List<CourseEnums> resultCourseList;

        resultCourseList = courseList.stream()
                .filter(x -> !removeList.contains(x.getCourseNumber()))
                .collect(Collectors.toList());

        return resultCourseList;
    }


    public static List<String> extractCourseNumber(List<Instruction> userInstructions) {
        List<String> courseNumbers = new ArrayList<String>();
        userInstructions.stream().forEach(i -> courseNumbers.add(i.getInstructionNumber().substring(0,6)));

        return courseNumbers;
    }

    public static List<String> extractUserFieldCredit( List<Instruction> userInstructions) {
        List<String> userAreas = new ArrayList<>();
        userInstructions.stream().forEach(x -> userAreas.add(x.getArea()));

        List<String> userUniqueAreas = new ArrayList<String>();
        userAreas.stream().distinct().forEach(x -> userUniqueAreas.add(x));

        return userUniqueAreas;

    }

    public static List<String> extractStringFromEnums(List<CourseEnums> courses) {
        ArrayList<String> strings = new ArrayList<>();

        courses.stream().forEach(x -> strings.add(x.getKorName() + " " + x.getEngName()));

        return strings;
    }
}
