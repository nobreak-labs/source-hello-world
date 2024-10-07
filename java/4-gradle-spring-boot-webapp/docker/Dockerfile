FROM amazoncorretto:17-alpine

WORKDIR /app

COPY build.gradle settings.gradle gradlew /app/
COPY gradle /app/gradle

COPY src /app/src

RUN ./gradlew build --no-daemon

EXPOSE 8080/tcp

CMD ["java", "-jar", "build/libs/springboot-0.0.1-SNAPSHOT.jar"]