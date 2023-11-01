# We are technically using jdk 20.0.1
FROM amazoncorretto:21-alpine-jdk

WORKDIR /backend

ARG JAR_FILE=build/libs/*.jar

COPY ./build/libs/bowl-mates-backend-0.0.1-SNAPSHOT-plain.jar app.jar

ENTRYPOINT ["java", "-jar", "/backend/app.jar"]