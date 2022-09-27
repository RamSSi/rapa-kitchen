FROM ubuntu:20.04
MAINTAINER "heejaeRO Spring Container"
LABEL "purpose"="testing make Spring Container"
RUN apt-get -y update && apt-get -y install default-jre && \
        apt-get clean -y && \
        apt-get autoremove -y && \
        rm -rfv /tmp/* /var/lib/apt/lists/* /var/tmp/*

ADD  rapakitchen.jar app.jar
EXPOSE 8080/TCP
ENTRYPOINT ["java","-jar","app.jar"]
