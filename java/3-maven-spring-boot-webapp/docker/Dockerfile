FROM maven:3-amazoncorretto-17-alpine AS mbuilder
COPY . /usr/src/hello/
WORKDIR /usr/src/hello
RUN mvn package

FROM tomcat:9-jre21
COPY --from=mbuilder /usr/src/hello/target/spring-webapp-0.0.1.jar /usr/src/
CMD ["java", "-jar", "/usr/src/spring-webapp-0.0.1.jar", "--server.port=8080"]
EXPOSE 8080/tcp
