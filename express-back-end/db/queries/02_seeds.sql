INSERT INTO users (name, email, password, bio, age, gender_id, location, height_in_cm, education,
 occupation, drink_id, exercise_id, dating_goal_id, is_active)
VALUES
  ('Brennan Padilla','a@a.com', '1111', 'I have never seen a straight banana.', 25, 1, 'Vancouver', 180 , 'high school', 'student', 3, 3, 2, true),
  ('Belle Hendrick','b@b.com', '1111', 'lorem bio', 30, 0, 'Toronto', 155 , 'University', 'Barista', 1, 2, 1, true),
  ('dfasdf Hendrick','fddfsdf@hotmail.couk', '1111', 'lorem bio', 22, 1, 'Vancouver', 145 , 'high school', 'student', 1, 2, 1, true),
  ('new person','c@c.com', '1111', 'lorem bio', 50, 1, 'Vancouver', 199 , 'high school', 'Plumber', 1, 2, 1, true),
  ('New User 5','fddfsdf@hotmail.couk', '1111', 'lorem bio', 22, 1, 'Vancouver', 145 , 'high school', 'student', 1, 2, 1, true);


INSERT INTO user_photos (user_id, url, is_profile)
VALUES 
(1, 'https://images.genius.com/51f5c16c628a0d96dd7285f7fdf26348.1000x1000x1.jpg', true),
(2, 'https://pbs.twimg.com/media/ENLQQLJVUAATN8a.jpg', false),
(2, 'http://d17zbv0kd7tyek.cloudfront.net/wp-content/uploads/2015/06/leonardo-dicaprio-fb.jpg', true),
(2, 'https://d1jyxxz9imt9yb.cloudfront.net/person/1571/detail_image/mobile/LDC-High-Res-Headshot.jpg', false),
(3, 'https://www.xtrafondos.com/wallpapers/vertical/ana-de-armas-en-photoshoot-5501.jpg', true),
(3, 'https://www.xtrafondos.com/wallpapers/vertical/ana-de-armas-2020-6113.jpg', false),
(3, 'https://images.hola.com/us/images/025b-0ee0dbb57971-3e4d042ce881-1000/vertical-800/ana-de-armas-luciendo-sus-looks-de-cabello-oscuro.jpg', false),
(4, 'https://www.xtrafondos.com/wallpapers/vertical/ana-de-armas-en-photoshoot-5501.jpg', false),
(4, 'https://www.xtrafondos.com/wallpapers/vertical/ana-de-armas-2020-6113.jpg', true),
(4, 'https://images.hola.com/us/images/025b-0ee0dbb57971-3e4d042ce881-1000/vertical-800/ana-de-armas-luciendo-sus-looks-de-cabello-oscuro.jpg', false),
(5, 'https://media.vogue.co.uk/photos/5e81ba5e138bdd00089677d9/2:3/w_2560%2Cc_limit/shutterstock_editorial_10576430d.jpg', true),
(5, 'https://media.glamour.com/photos/617ed8cd81d28bb722b6812b/master/pass/1194078278', false);


INSERT INTO messages (from_user_id, to_user_id, message, message_seen, date_sent) 
VALUES 
(1, 2, 'hey - seen by id2', true, CURRENT_TIMESTAMP),
(2, 1, 'hey back - seen by id1', true, CURRENT_TIMESTAMP),
(1, 2, 'hey - seen by id2', true, CURRENT_TIMESTAMP),
(2, 1, 'hey - seen by id1', true, CURRENT_TIMESTAMP),
(1, 2, 'hey - seen by id2', true, CURRENT_TIMESTAMP),
(2, 1, 'set seen true', false, CURRENT_TIMESTAMP),

(1, 4, 'hey - seen by id4', true, CURRENT_TIMESTAMP),
(4, 1, 'hey back - seen by id1', true, CURRENT_TIMESTAMP),
(1, 4, 'hey - seen by id4', true, CURRENT_TIMESTAMP),
(4, 1, 'hey - seen by id1', true, CURRENT_TIMESTAMP),
(1, 4, 'read from list, received has not seen', false, CURRENT_TIMESTAMP),

(1, 5, 'hey - seen by id5', true, CURRENT_TIMESTAMP),
(5, 1, 'hey back - seen by id1', true, CURRENT_TIMESTAMP),
(1, 5, 'hey - seen by id5', true, CURRENT_TIMESTAMP),
(5, 1, 'hey - seen by id1', true, CURRENT_TIMESTAMP),
(1, 5, 'hey - seen by id5', true, CURRENT_TIMESTAMP),
(5, 1, 'set seen true', false, CURRENT_TIMESTAMP);


INSERT INTO matchings (from_user_id, to_user_id, like_value, seen, matched_date) 
VALUES 

(2, 1, true, true, CURRENT_TIMESTAMP),

(4, 1, true, true, CURRENT_TIMESTAMP),

(5, 1, true, true, CURRENT_TIMESTAMP),

(3, 1, true, false, CURRENT_TIMESTAMP);

INSERT INTO genders (value) 
VALUES 
  ('Woman'), ('Man'), ('Everyone');
  
INSERT INTO drinks (value) 
VALUES 
  ('Never'), ('Sometimes'), ('Socially'), ('Yes');

INSERT INTO exercises (value) 
VALUES 
  ('Never'), ('Sometimes'), ('Often'), ('Everyday');

INSERT INTO dating_goals (value) 
VALUES 
  ('Not sure yet'), ('Short-term / Casual'), ('Long-term'), ('Life partner');


  INSERT INTO preferences 
  (user_id, gender_id, drink_id, exercise_id, dating_goal_id) 
VALUES 
(1, 1, 1, 1, 1),
(2,2,2,2,2),
(3,3,3,3,3),
(4,1,1,1,1);


insert into users (name, email, password, bio, age, gender_id, location, height_in_cm, education, occupation, drink_id, exercise_id, dating_goal_id, is_active) values ('Papageno Harcase', 'pharcase0@npr.org', '1ldVqX30lib', 'scale innovative users', 33, 1, 'Vancouver', 180, 'University of the Philippines Baguio', 'Analyst Programmer', 1, 2, 3, true);
insert into users (name, email, password, bio, age, gender_id, location, height_in_cm, education, occupation, drink_id, exercise_id, dating_goal_id, is_active) values ('Cynde Ketcher', 'cketcher1@latimes.com', '7FyWZ7DsS', 'cultivate global functionalities', 72, 2, 'Vancouver', 173, 'The Art Institute of Boston', 'Operator', 3, 1, 2, false);
insert into users (name, email, password, bio, age, gender_id, location, height_in_cm, education, occupation, drink_id, exercise_id, dating_goal_id, is_active) values ('Isa Linneman', 'ilinneman2@harvard.edu', 'LtZMDpmr', 'implement 24/7 schemas', 24, 2, 'Vancouver', 183, 'China Academy of Art', 'Analog Circuit Design manager', 2, 2, 2, true);
insert into users (name, email, password, bio, age, gender_id, location, height_in_cm, education, occupation, drink_id, exercise_id, dating_goal_id, is_active) values ('Taite Bosse', 'tbosse3@ucsd.edu', 'fVOnwP', 'integrate enterprise solutions', 67, 2, 'Vancouver', 158, 'Sterlitamak State Pedagogical Institute', 'Mechanical Systems Engineer', 1, 3, 3, false);
insert into users (name, email, password, bio, age, gender_id, location, height_in_cm, education, occupation, drink_id, exercise_id, dating_goal_id, is_active) values ('Lisbeth Harmar', 'lharmar4@cbslocal.com', 'fRa0tX', 'synergize e-business metrics', 65, 2, 'Turku', 145, 'Manhattan School of Music', 'Actuary', 3, 3, 1, false);
insert into users (name, email, password, bio, age, gender_id, location, height_in_cm, education, occupation, drink_id, exercise_id, dating_goal_id, is_active) values ('Orazio Blanch', 'oblanch5@sohu.com', '7xV4TonTnPBK', 'matrix best-of-breed models', 41, 1, 'Vancouver', 158, 'Seisen University', 'Business Systems Development Analyst', 1, 3, 1, true);
insert into users (name, email, password, bio, age, gender_id, location, height_in_cm, education, occupation, drink_id, exercise_id, dating_goal_id, is_active) values ('Gerhardine Bugdall', 'gbugdall6@opensource.org', '3YyBsZd', 'monetize scalable channels', 46, 1, 'Vancouver', 159, 'Southern Polytechnic State Univerisity', 'Senior Cost Accountant', 2, 2, 1, true);
insert into users (name, email, password, bio, age, gender_id, location, height_in_cm, education, occupation, drink_id, exercise_id, dating_goal_id, is_active) values ('Garrett Readings', 'greadings7@nba.com', 'lbDs8Dla8', 'syndicate cross-platform convergence', 62, 2, 'Vancouver', 140, 'Universidad Intercontinental', 'Business Systems Development Analyst', 2, 2, 3, true);
insert into users (name, email, password, bio, age, gender_id, location, height_in_cm, education, occupation, drink_id, exercise_id, dating_goal_id, is_active) values ('Bing Spencers', 'bspencers8@prweb.com', 'lyr626LN', 'visualize cross-media vortals', 49, 2, 'Vancouver', 197, 'Katsina University', 'VP Accounting', 3, 3, 3, true);
insert into users (name, email, password, bio, age, gender_id, location, height_in_cm, education, occupation, drink_id, exercise_id, dating_goal_id, is_active) values ('Irwin Stott', 'istott9@yellowbook.com', 'zRWi0EykTU', 'incentivize web-enabled functionalities', 68, 2, 'Vancouver', 153, 'Comenius University in Bratislava', 'Recruiter', 3, 3, 3, false);

insert into users (name, email, password, bio, age, gender_id, location, height_in_cm, education, occupation, drink_id, exercise_id, dating_goal_id, is_active) values ('Dehlia Minchenton', 'dminchenton10@weather.com', 'oNXBq1Wk8', 'harness holistic interfaces', 38, 2, 'Vancouver', 182, 'Universidade Gama Filho', 'Analog Circuit Design manager', 1, 1, 1, false);
insert into users (name, email, password, bio, age, gender_id, location, height_in_cm, education, occupation, drink_id, exercise_id, dating_goal_id, is_active) values ('Katinka Pridding', 'kpridding11@wufoo.com', 'MzJXLVNQ', 'cultivate dot-com models', 71, 1, 'Vancouver', 146, 'Estonian Academy of Music and Theatre', 'Developer III', 1, 1, 1, true);
insert into users (name, email, password, bio, age, gender_id, location, height_in_cm, education, occupation, drink_id, exercise_id, dating_goal_id, is_active) values ('Joshua Winsome', 'jwinsome12@ftc.gov', 'LObKNsDFt', 'incubate collaborative e-commerce', 73, 1, 'Vancouver', 194, 'Wittenborg University', 'Environmental Specialist', 1, 1, 1, false);
insert into users (name, email, password, bio, age, gender_id, location, height_in_cm, education, occupation, drink_id, exercise_id, dating_goal_id, is_active) values ('Ethelred Shuttle', 'eshuttle13@apache.org', 'GNbldtHUadL', 'reintermediate virtual synergies', 40, 1, 'Vancouver', 157, 'St. Joseph University Beirut', 'Marketing Assistant', 1, 1, 1, true);
insert into users (name, email, password, bio, age, gender_id, location, height_in_cm, education, occupation, drink_id, exercise_id, dating_goal_id, is_active) values ('Matthaeus Pace', 'mpace14@ezinearticles.com', 'B5l7LsViWhm', 'recontextualize cross-platform systems', 47, 2, 'Vancouver', 146, 'Universidad Cientifica del Sur', 'Structural Analysis Engineer', 1, 1, 1, true);
insert into users (name, email, password, bio, age, gender_id, location, height_in_cm, education, occupation, drink_id, exercise_id, dating_goal_id, is_active) values ('Bryn Fills', 'bfills15@quantcast.com', 'POkNupm0NC', 'revolutionize holistic paradigms', 54, 2, 'Vancouver', 199, 'Kiev Slavonic University', 'Payment Adjustment Coordinator', 2, 2, 2, false);
insert into users (name, email, password, bio, age, gender_id, location, height_in_cm, education, occupation, drink_id, exercise_id, dating_goal_id, is_active) values ('Gerrie Glazier', 'gglazier16@hhs.gov', '8UxNvDq', 'embrace web-enabled eyeballs', 27, 1, 'Vancouver', 192, 'Sophia University', 'Automation Specialist I', 2, 2, 2, true);
insert into users (name, email, password, bio, age, gender_id, location, height_in_cm, education, occupation, drink_id, exercise_id, dating_goal_id, is_active) values ('Jayme Coomes', 'jcoomes17@multiply.com', '8n9WHVydJ', 'aggregate wireless markets', 55, 1, 'Vancouver', 158, 'Universidad de Colima', 'Project Manager', 2, 2, 2, true);
insert into users (name, email, password, bio, age, gender_id, location, height_in_cm, education, occupation, drink_id, exercise_id, dating_goal_id, is_active) values ('Cos Dumphreys', 'cdumphreys18@usda.gov', 'ysvHGA7h', 'recontextualize collaborative initiatives', 24, 1, 'Vancouver', 155, 'Massachusetts Maritime Academy', 'Occupational Therapist', 2, 2, 2, false);
insert into users (name, email, password, bio, age, gender_id, location, height_in_cm, education, occupation, drink_id, exercise_id, dating_goal_id, is_active) values ('Lew Onn', 'lonn19@pinterest.com', '509GEQRfsx', 'reintermediate bricks-and-clicks metrics', 66, 2, 'Vancouver', 177, 'The Global College Lahore', 'Account Representative IV', 2, 2, 2, false);


insert into user_photos (user_id, url, is_profile) values (6, 'https://images.pexels.com/photos/459976/pexels-photo-459976.jpeg?auto=compress&cs=tinysrgb&w=300', true);
insert into user_photos (user_id, url, is_profile) values (7, 'https://images.pexels.com/photos/101537/baby-boy-hat-covered-101537.jpeg?auto=compress&cs=tinysrgb&w=300', false);
insert into user_photos (user_id, url, is_profile) values (8, 'https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&w=300', true);
insert into user_photos (user_id, url, is_profile) values (9, 'https://images.pexels.com/photos/1556706/pexels-photo-1556706.jpeg?auto=compress&cs=tinysrgb&w=300', false);
insert into user_photos (user_id, url, is_profile) values (10, 'https://images.pexels.com/photos/1166473/pexels-photo-1166473.jpeg?auto=compress&cs=tinysrgb&w=300', true);
insert into user_photos (user_id, url, is_profile) values (11, 'https://images.pexels.com/photos/1364756/pexels-photo-1364756.jpeg?auto=compress&cs=tinysrgb&w=300', false);
insert into user_photos (user_id, url, is_profile) values (12, 'https://images.pexels.com/photos/713959/pexels-photo-713959.jpeg?auto=compress&cs=tinysrgb&w=300', true);
insert into user_photos (user_id, url, is_profile) values (13, 'https://images.pexels.com/photos/34763/baby-sleeping-baby-baby-girl.jpg?auto=compress&cs=tinysrgb&w=300', false);
insert into user_photos (user_id, url, is_profile) values (14, 'https://images.pexels.com/photos/36039/baby-twins-brother-and-sister-one-hundred-days.jpg?auto=compress&cs=tinysrgb&w=300', false);
insert into user_photos (user_id, url, is_profile) values (15, 'https://images.pexels.com/photos/590471/pexels-photo-590471.jpeg?auto=compress&cs=tinysrgb&w=300', false);

insert into user_photos (user_id, url, is_profile) values (16, 'https://images.pexels.com/photos/1442005/pexels-photo-1442005.jpeg?auto=compress&cs=tinysrgb&w=300', true);
insert into user_photos (user_id, url, is_profile) values (17, 'https://images.pexels.com/photos/933186/pexels-photo-933186.jpeg?auto=compress&cs=tinysrgb&w=300', false);
insert into user_photos (user_id, url, is_profile) values (18, 'https://images.pexels.com/photos/50692/brothers-family-siblings-boys-50692.jpeg?auto=compress&cs=tinysrgb&w=300', true);
insert into user_photos (user_id, url, is_profile) values (19, 'https://images.pexels.com/photos/1648375/pexels-photo-1648375.jpeg?auto=compress&cs=tinysrgb&w=300', false);
insert into user_photos (user_id, url, is_profile) values (20, 'https://images.pexels.com/photos/1652117/pexels-photo-1652117.jpeg?auto=compress&cs=tinysrgb&w=300', true);
insert into user_photos (user_id, url, is_profile) values (21, 'https://images.pexels.com/photos/428388/pexels-photo-428388.jpeg?auto=compress&cs=tinysrgb&w=300', false);
insert into user_photos (user_id, url, is_profile) values (22, 'https://images.pexels.com/photos/1133721/pexels-photo-1133721.jpeg?auto=compress&cs=tinysrgb&w=300', true);
insert into user_photos (user_id, url, is_profile) values (23, 'https://images.pexels.com/photos/2869318/pexels-photo-2869318.jpeg?auto=compress&cs=tinysrgb&w=300', false);
insert into user_photos (user_id, url, is_profile) values (24, 'https://images.pexels.com/photos/1470677/pexels-photo-1470677.jpeg?auto=compress&cs=tinysrgb&w=300', false);
insert into user_photos (user_id, url, is_profile) values (25, 'https://images.pexels.com/photos/929435/pexels-photo-929435.jpeg?auto=compress&cs=tinysrgb&w=300', false);


insert into matchings (from_user_id, to_user_id, like_value, seen, matched_date) values (1, 17, false, false, '2022-04-04 22:41:59');
insert into matchings (from_user_id, to_user_id, like_value, seen, matched_date) values (2, 13, true, true, '2022-01-07 19:15:28');
insert into matchings (from_user_id, to_user_id, like_value, seen, matched_date) values (3, 17, false, true, '2021-08-28 16:07:21');
insert into matchings (from_user_id, to_user_id, like_value, seen, matched_date) values (4, 14, false, false, '2021-10-24 11:35:00');
insert into matchings (from_user_id, to_user_id, like_value, seen, matched_date) values (5, 19, true, true, '2022-04-30 16:47:43');
insert into matchings (from_user_id, to_user_id, like_value, seen, matched_date) values (6, 14, true, true, '2021-11-19 16:02:00');
insert into matchings (from_user_id, to_user_id, like_value, seen, matched_date) values (7, 14, false, true, '2022-04-20 05:46:23');
insert into matchings (from_user_id, to_user_id, like_value, seen, matched_date) values (8, 17, true, true, '2022-01-19 02:19:34');
insert into matchings (from_user_id, to_user_id, like_value, seen, matched_date) values (9, 17, false, false, '2021-08-14 03:43:32');
insert into matchings (from_user_id, to_user_id, like_value, seen, matched_date) values (10, 19, false, true, '2021-09-04 07:33:22');
insert into matchings (from_user_id, to_user_id, like_value, seen, matched_date) values (11, 9, true, false, '2022-06-13 22:53:37');
insert into matchings (from_user_id, to_user_id, like_value, seen, matched_date) values (12, 2, false, true, '2022-08-05 03:54:38');
insert into matchings (from_user_id, to_user_id, like_value, seen, matched_date) values (13, 9, false, false, '2022-02-11 02:55:18');
insert into matchings (from_user_id, to_user_id, like_value, seen, matched_date) values (14, 10, false, false, '2021-09-25 01:07:53');
insert into matchings (from_user_id, to_user_id, like_value, seen, matched_date) values (15, 8, true, true, '2022-07-08 19:20:14');
insert into matchings (from_user_id, to_user_id, like_value, seen, matched_date) values (16, 8, false, true, '2021-08-24 04:37:39');
insert into matchings (from_user_id, to_user_id, like_value, seen, matched_date) values (17, 12, false, false, '2021-11-21 20:27:09');
insert into matchings (from_user_id, to_user_id, like_value, seen, matched_date) values (18, 12, true, false, '2021-09-07 18:43:39');
insert into matchings (from_user_id, to_user_id, like_value, seen, matched_date) values (19, 3, true, true, '2022-01-03 09:26:23');
insert into matchings (from_user_id, to_user_id, like_value, seen, matched_date) values (20, 7, false, false, '2022-01-27 20:04:40');
insert into matchings (from_user_id, to_user_id, like_value, seen, matched_date) values (21, 1, false, true, '2021-12-09 00:02:39');
insert into matchings (from_user_id, to_user_id, like_value, seen, matched_date) values (22, 2, false, true, '2021-09-28 22:35:22');
insert into matchings (from_user_id, to_user_id, like_value, seen, matched_date) values (1, 9, false, false, '2022-04-04 22:41:59');
insert into matchings (from_user_id, to_user_id, like_value, seen, matched_date) values (2, 23, true, true, '2022-01-07 19:15:28');
insert into matchings (from_user_id, to_user_id, like_value, seen, matched_date) values (3, 7, false, true, '2021-08-28 16:07:21');
insert into matchings (from_user_id, to_user_id, like_value, seen, matched_date) values (4, 6, false, false, '2021-10-24 11:35:00');
insert into matchings (from_user_id, to_user_id, like_value, seen, matched_date) values (5, 9, true, true, '2022-04-30 16:47:43');
insert into matchings (from_user_id, to_user_id, like_value, seen, matched_date) values (6, 4, true, true, '2021-11-19 16:02:00');
insert into matchings (from_user_id, to_user_id, like_value, seen, matched_date) values (7, 4, false, true, '2022-04-20 05:46:23');
insert into matchings (from_user_id, to_user_id, like_value, seen, matched_date) values (8, 7, true, true, '2022-01-19 02:19:34');
insert into matchings (from_user_id, to_user_id, like_value, seen, matched_date) values (9, 7, false, false, '2021-08-14 03:43:32');
insert into matchings (from_user_id, to_user_id, like_value, seen, matched_date) values (10, 9, false, true, '2021-09-04 07:33:22');
insert into matchings (from_user_id, to_user_id, like_value, seen, matched_date) values (11, 9, true, false, '2022-06-13 22:53:37');
insert into matchings (from_user_id, to_user_id, like_value, seen, matched_date) values (12, 2, false, true, '2022-08-05 03:54:38');
insert into matchings (from_user_id, to_user_id, like_value, seen, matched_date) values (13, 9, false, false, '2022-02-11 02:55:18');
insert into matchings (from_user_id, to_user_id, like_value, seen, matched_date) values (14, 3, false, false, '2021-09-25 01:07:53');
insert into matchings (from_user_id, to_user_id, like_value, seen, matched_date) values (15, 2, true, true, '2022-07-08 19:20:14');
insert into matchings (from_user_id, to_user_id, like_value, seen, matched_date) values (16, 8, false, true, '2021-08-24 04:37:39');
insert into matchings (from_user_id, to_user_id, like_value, seen, matched_date) values (17, 22, false, false, '2021-11-21 20:27:09');
insert into matchings (from_user_id, to_user_id, like_value, seen, matched_date) values (18, 22, true, false, '2021-09-07 18:43:39');
insert into matchings (from_user_id, to_user_id, like_value, seen, matched_date) values (19, 4, true, true, '2022-01-03 09:26:23');
insert into matchings (from_user_id, to_user_id, like_value, seen, matched_date) values (20, 6, false, false, '2022-01-27 20:04:40');
insert into matchings (from_user_id, to_user_id, like_value, seen, matched_date) values (21, 7, false, true, '2021-12-09 00:02:39');
insert into matchings (from_user_id, to_user_id, like_value, seen, matched_date) values (22, 6, false, true, '2021-09-28 22:35:22');