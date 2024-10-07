FROM maven:3-amazoncorretto-17-alpine AS mbuilder
COPY . /usr/src/hello/
WORKDIR /usr/src/hello
RUN mvn package

FROM tomcat:9-jre21
COPY --from=mbuilder /usr/src/hello/target/hello-world.war /usr/local/tomcat/webapps/ROOT.war

EXPOSE 8080/tcp
