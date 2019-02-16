# API Micro Service: Exercise Tracker Microservice

## Description

This project is part of the **FCC Apis And Microservices Certification**.

## User stories

1. I can `POST` to `https://fcc-exercise-tracker-project.herokuapp.com/api/exercise/new-user` to create a new _user_.

2. I can `POST` to `https://fcc-exercise-tracker-project.herokuapp.com/api/exercise/add` to create a new _exercise_.

   Parameters are:

   - `userId` (Required);
   - `description` (Required);
   - `duration` (Required);
   - `date` (Optional; `yyyy-mm-dd` format - defaults to `Date.now()`);

3. I can `GET` `https://fcc-exercise-tracker-project.herokuapp.com/api/exercise/log?{userId}[&from][&to][&limit]` to retrieve a full `exercise log` of the specified `userId`.

   Optional parameters are:

   - `from`(`yyyy-mm-dd` format);
   - `to`(`yyyy-mm-dd` format);
   - `limit`(`integer`);

Coded with music, coffe and love by _Claudio Cortese_
