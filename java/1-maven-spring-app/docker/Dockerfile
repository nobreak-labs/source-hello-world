FROM maven:3-amazoncorretto-17-alpine AS mbuilder
COPY . /usr/src/hello/
WORKDIR /usr/src/hello
RUN mvn package

FROM amazoncorretto:17-alpine
COPY --from=mbuilder /usr/src/hello/target/spring-hello-0.0.1.jar /usr/src/
CMD ["java", "-jar", "/usr/src/spring-hello-0.0.1.jar"]
