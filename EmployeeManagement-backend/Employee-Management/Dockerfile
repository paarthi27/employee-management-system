# Use Maven to build the application
FROM maven:3.9.6-eclipse-temurin-17 AS build
WORKDIR /app
COPY EmployeeManagement-backend/Employee-Management/pom.xml .
COPY EmployeeManagement-backend/Employee-Management/src ./src
RUN mvn -B clean package -DskipTests

# Use a lightweight JDK runtime image
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8082
ENTRYPOINT ["java","-jar","app.jar"]
