INSERT INTO users (name, email, password, bio, age, gender_id, location, height_in_cm, education,
 occupation, drink_id, exercise_id, dating_goal_id, is_active)
VALUES
  ('Chris Evans','ce@gmail.com', '123', 'Looking for an adventure partner. You in?', 41, 2, 'Abbotsford', 183 , 'University', 'actor', 4, 4, 1, true),

  ('Cindy Kimberly', 'ck@gmail.com', '123', ' I got 99 problems and the patriarchy explains at least 86 of them.', 23, 1, 'Abbotsford', 170, 'College', 'Influnener', 4, 4, 1, true),
  ('Alexis Ren', 'ar@gmail.com', '123', 'Your parents are going to love me', 25, 1, 'Abbotsford', 175, 'College', 'Model', 4, 4, 1, true),
  ('Bella Hadid','bh@gmail.com', '123', 'I can teach you how to pose', 25, 1, 'Abbotsford', 175 , 'College', 'Model', 4, 4, 1, true),
  ('Doja Cat','dc@gmail.com', '123', 'Lets go on an adventure tgt 🐱~', 26, 1, 'Abbotsford', 165 , 'High school', 'Singer', 4, 4, 1, true),
  ('kendell jenner','kd@gmail.com', '123', 'Ask me anything, except the kardashians', 26, 1, 'Vancouver', 179 , 'High school', 'Model', 4, 4, 1, true),
  ('krystal jung', 'kj@gmail.com', '123', 'Your parents are going to love me', 27, 1, 'Vancouver', 165, 'College', 'Singer', 4, 4, 1, true),
  ('chantel jeffries', 'cj@gmail.com', '123', 'Went to a party dressed as an egg, and got with a guy who was dressed as a chicken. A life long question was answered', 29, 1, 'Vancouver', 166, 'College', 'DJ', 4, 4, 1, true),
  ('Selena Gomez','sg@gmail.com', '123', 'Swipe right to find about more about me', 30, 1, 'Vancouver', 165 , 'College', 'Actress/Singer', 4, 4, 1, true),
  ('Emma Watson', 'ew@gmail.com', '123', 'now or never', 32, 1, 'Vancouver', 165, 'Master', 'Actress', 4, 4, 1, true),
  ('ana de armas', 'ada@gmail.com', '123', 'Your parents are going to love me', 34, 1, 'Vancouver', 168, 'College', 'Actress', 4, 4, 1, true),
  ('Lady Gaga','lg@gmail.com', '123', 'I have never seen a straight banana', 36, 1, 'Vancouver', 155 , 'University', 'Singer/Actress', 4, 4, 1, true),
  ('Kim Kardashian', 'kim@gmail.com', '123', 'Oh, and I need a date to my sisters wedding', 41, 1, 'Vancouver', 157, 'College', 'Business Woman', 4, 4, 1, true),
  ('Angelina Jolie','aj@gmail.com', '123', 'Swipe right to find about more about me', 47, 1, 'Abbotsford', 169 , 'College', 'Actress', 4, 4, 1, true),

  ('The Weeknd','tw@gmail.com', '123', 'You can my be my star girl xoxo', 32, 2, 'Vancouver', 173 , 'High school', 'Singer', 4, 4, 1, true),
  ('Drake','dd@gmail.couk', '123', 'I have got my eyes on you, you are everything that I see, I want your hot love and emotion endlessly.', 35, 2, 'Vancouver', 182 , 'High school', 'Singer/Investor', 4, 4, 1, true),
  ('Harry Styles','hs@gmail.com', '123', 'I love anything that is a bit of a challenge.', 28, 2, 'Vancouver', 183 , 'College', 'Singer', 4, 4, 1, true),
  ('Johnny Depp','jd@gmail.com', '123', 'now or never', 59, 2, 'Vancouver', 178 , 'College', 'Actor', 4, 4, 1, true),
  ('leonardo dicaprio','ld@gmail.com', '123', 'now or never', 47, 2, 'Los Angeles', 183 , 'High School', 'Actor', 4, 4, 1, true),
  ('Jacob Elordi', 'je@gmail.com', '123', 'I think you are lacking vitamin ME', 25, 2, 'Vancouver', 196, 'College', 'Actor', 4, 4, 1, true),
  ('Shawn Mendes', 'sm@gmail.com', '123', 'Wine lover, Pizza addict, Netflix binger, Love dogs', 24, 2, 'Los Angeles', 188, 'College', 'Singer', 4, 4, 1, true),
  ('Charlie Puth', 'cp@gmail.com', '123', 'Dogs 🐶 Carbs 🍕 Adventures', 30, 2, 'Vancouver', 178, 'College', 'Singer', 4, 4, 1, true),
  ('Diplo', 'bp@gmail.com', '123', ' I like my partners same way I like my coffee. So swipe right if you are hot and bitter', 43, 2, 'Vancouver', 179, 'High school', 'DJ', 4, 4, 1, true),
  ('martin garrix', 'mg@gmail.com', '123', 'Your parents are going to love me', 26, 2, 'Vancouver', 175, 'High school', 'DJ', 4, 4, 1, true),
  ('Jay Park', 'mg@gmail.com', '123', 'Your parents are going to love me', 26, 2, 'Los Angeles', 175, 'College', 'Singer', 4, 4, 1, true),
  ('Nichkhun', 'nk@gmail.com', '123', 'Your parents are going to love me', 34, 2, 'Los Angeles', 180, 'College', 'Singer', 4, 4, 1, true)
  ;

INSERT INTO user_photos (user_id, url, is_profile)
VALUES 
  (1, 'https://data.whicdn.com/images/177793220/original.jpg', true),
  (1, 'https://pbs.twimg.com/media/Ehv6-JAWAAAkPcz.jpg', false),
  (1, 'https://static.onecms.io/wp-content/uploads/sites/6/2018/05/chris-evans-2000.jpg', false),
  (2, 'https://bestwallpapers.net/wp-content/uploads/2021/08/Cindy-Kimberly-Wallpapers-Free-Download-for-Mobile.jpg', true),
  (2, 'https://www.thecityceleb.com/wp-content/uploads/2022/07/Wolfie-Cindy-Kimberly-Biography-Age-Ethnicity-Net-Worth-Full-Name-Boyfriend-Zodiac-Eye-Color-Skin-Care-Surgery-Nationality-Wikipedia-scaled.jpg', false),
  (3, 'https://m.media-amazon.com/images/M/MV5BODA1OGU1NzItMGQ0ZS00YTc3LThiMTgtNjVlOGQ0NmRlNTllXkEyXkFqcGdeQXVyMTAyMTc5MjQ0._V1_.jpg', true),
  (3, 'https://di2ponv0v5otw.cloudfront.net/users/2020/11/13/11/m_5faed9c56afdc314f57b2925.jpg', false),
  (4, 'https://media1.popsugar-assets.com/files/thumbor/xvnVgcyZvOB2MCAbP1TqNy7zkLE/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/07/13/990/n/1922398/69bd35b85b492bd8064479.53609118_/i/Bella-Hadid.jpg', true),
  (4, 'https://i.pinimg.com/736x/e4/9f/eb/e49feb81d79dde0c0b077aa2deac240c.jpg', false),
  (4, 'https://vid.alarabiya.net/images/2020/07/08/6c675393-ba1c-490a-8699-e4bcb69c159b/6c675393-ba1c-490a-8699-e4bcb69c159b.jpg?crop=4:3&width=1200.jpg', false),
  (5, 'https://akns-images.eonline.com/eol_images/Entire_Site/2020730/rs_1200x1200-200830194033-1200-doja-cat-winner-mtv-vma-2020-ls.jpg', true),
  (6, 'https://i.pinimg.com/originals/96/5d/3a/965d3a0dc2a9fd76160bbadbb4325671.jpg', true),
  (6, 'https://i.pinimg.com/564x/3d/19/e8/3d19e86efc11cca669bb42e5f58cbbd3.jpg', false),
  (6, 'https://i.pinimg.com/originals/d4/8c/04/d48c0406791131e77c1a27b0d881401a.jpg', false),
  (7, 'https://i0.wp.com/21motoring.com/wp-content/uploads/2022/07/image-1200.png?fit=900%2C609&ssl=1.jpg', true),
  (7, 'https://i.pinimg.com/474x/66/c5/77/66c577cd45421fdd75c48800d1ae1448.jpg', false),
  (8, 'https://1.bp.blogspot.com/-H3zmJ7XhgkI/YAQ0UHpklmI/AAAAAAAAFR8/1py8qAn57_0dbheizcj53g1OITi3Dop-gCLcBGAsYHQ/s910/Chantel%2BJeffries%2B4.jpg', true),
  (8, 'https://celebtap.com/wp-content/uploads/2020/05/Chantel-Jeffries-640x498.jpg', false),
  (8, 'https://variety.com/wp-content/uploads/2018/05/chantel-jeffries-2018.jpg?w=1000.jpg', false),
  (9, 'https://media1.popsugar-assets.com/files/thumbor/_747zNxDa0FZDlH4JHhEmolTAdI/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2016/07/21/877/n/1922153/e381dec8c6bc66d9_7Rabbani_and_Solimene_Photography/i/2016.jpg', true),
  (9, 'https://media.glamour.com/photos/5cdb17640d3645f96221dfd7/1:1/w_2489,h_2489,c_limit/GettyImages-1149101453.jpg', false),
  (9, 'https://i0.web.de/image/684/36752684,pd=2/selena-gomez.jpg', false),
  (10, 'https://starsreveal.com/wp-content/uploads/2019/03/emma-1.jpg', true),
  (11, 'https://d9nvuahg4xykp.cloudfront.net/7204595286900161598/-4752821926044312986.jpg', true),
  (11, 'https://media1.popsugar-assets.com/files/thumbor/8kBpcMUzLARJWp27qc2mKlw_Id4/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/11/11/744/n/44701584/6ba9a3254e0b8749_GettyImages-531728944/i/sexy-ana-de-armas-pictures.jpg', false),
  (12, 'https://www.thewrap.com/wp-content/uploads/2021/11/LG-Sound-of-Music-Oscars.jpg', true),
  (12, 'https://i.pinimg.com/originals/3b/54/9a/3b549ac958fc9380a2b23c2c3386a8b0.jpg', false),
  (13, 'https://media.allure.com/photos/62e9492bb0fb9f43af326775/16:9/w_2099,h_1181,c_limit/Kim%20Kardashian%20Minion%20Makeup.jpg', true),
  (13, 'https://media.glamourmagazine.co.uk/photos/62f38c3f46b4637ee696236d/4:3/w_1920,h_1440,c_limit/KIM%20BeATS%20100822%20Beats-x-Kim-Dune-1_SQ.jpg', false),
  (14, 'https://media.elcinema.com/uploads/_315x420_cc09e7d04bfd64b8989ac9455de57bccd2796fd89afa180b69f182ed31751218.jpg', true),
  (14, 'https://creeto.com/wp-content/uploads/Angelina-Jolie-fb-768x402.png', false),
  (15, 'https://i.pinimg.com/originals/9f/f8/db/9ff8db20159c6e5e4b703368d5b33f8b.jpg', false),
  (15, 'https://images.303magazine.com/uploads/2022/03/BRIANZIFF_THEWEEKND_74-1_0.jpeg', true),
  (16, 'https://www.billboard.com/wp-content/uploads/2022/07/drake-pr-cr-univseral-music-2022-billboard-1548.jpg?w=942&h=623&crop=1.jpg', false),
  (16, 'https://media.wonderlandmagazine.com/uploads/2021/05/Drake-Candle-Release--e1620378729324.jpg', true),
  (17, 'https://media.npr.org/assets/img/2020/02/27/wide-use_hpromophoto_helenepambrun-72fdb64792139d94a06f18686d0bb3131a238a70-s1100-c50.jpg', true),
  (17, 'https://media.vanityfair.com/photos/5da0c38748ce810008eca971/9:16/w_746,h_1327,c_limit/harry-styles-new-song.jpg', false),
  (18, 'https://healthyceleb.com/wp-content/uploads/2012/10/Johnny-Depp.jpg', true),
  (19, 'http://d17zbv0kd7tyek.cloudfront.net/wp-content/uploads/2015/06/leonardo-dicaprio-fb.jpg', true),
  (19, 'https://www.the-sun.com/wp-content/uploads/sites/6/2021/11/NINTCHDBPICT000217656527.jpg', false),
  (20, 'https://www.gluwee.com/wp-content/uploads/2022/05/Jacob-Elordi-758x421.jpg', true),
  (20, 'https://i0.wp.com/chevere.life/wp-content/uploads/2022/03/JACOB-ELORDI-2.jpg?fit=1440%2C1074&ssl=1.jpg', false),
  (21, 'https://media1.popsugar-assets.com/files/thumbor/xTdEOR_fM75bGS5OYzkq8xhDDPY/733x204:2802x2273/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/09/04/019/n/1922398/7c2241aa5d7048792c0e23.11693945_/i/Shawn-Mendes.jpg', false),
  (21, 'https://culturess.com/wp-content/uploads/getty-images/2020/12/1202149828.jpeg', true),
  (22, 'https://www.warnermusic.de/uploads/media/image-1002-704/03/19963-Charlie%20Puth_LS%20Press%20Photo%201_Photo%20Credit_%20Gabriela%20Hansen--square.jpg?v=1-11.jpg', true),
  (22, 'https://i.insider.com/6298d250e319620018a82c00?width=700.jpg', false),
  (23, 'https://www3.pictures.stylebistro.com/gi/Diplo+Ties+Novelty+Tie+L2x8cwgQWD2l.jpg', true),
  (24, 'https://cdn.smehost.net/2020sonymusiccouk-ukprod/wp-content/uploads/2019/10/Martin-Garrix-2020.jpg', true),
  (24, 'https://djmag.com/sites/default/files/styles/legacy_djmag_lanscape_public/public/article/image/martin-garrix-3_0.jpg?itok=Wqykd5dM.jpg', false),
  (25, 'https://pm1.narvii.com/6757/02bb2f289623260f3b8ecdb75d3b443a95a34d2ev2_hq.jpg', true),
  (25, 'https://data.whicdn.com/images/312248891/original.png', false),
  (26, 'http://pm1.narvii.com/6121/97898b4c8259985c40c2ab0d5c54688a5f8ec677_00.jpg', true),
  (26, 'https://m.media-amazon.com/images/M/MV5BNTc2YTFkMGUtZDNkOS00ZTNkLWE2NWQtOWMzMWFiYmNmMmQyXkEyXkFqcGdeQXVyMTUyMjI3NzIw._V1_.jpg', false)
  ;

INSERT INTO messages (from_user_id, to_user_id, message, message_seen, date_sent) 
VALUES 
(1, 14, 'Adopt me im a baby 👼', true, CURRENT_TIMESTAMP),
(14, 1, 'K bye', true, CURRENT_TIMESTAMP);

INSERT INTO matchings (from_user_id, to_user_id, like_value, seen, matched_date) 
VALUES 

(1, 14, true, true, CURRENT_TIMESTAMP),
(14, 1, true, true, CURRENT_TIMESTAMP),

(2, 1, true, true, CURRENT_TIMESTAMP),
(3, 1, true, false, CURRENT_TIMESTAMP),
(5, 1, true, true, CURRENT_TIMESTAMP),
(4, 1, true, false, CURRENT_TIMESTAMP),
(6, 1, true, false, CURRENT_TIMESTAMP),
(7, 1, true, false, CURRENT_TIMESTAMP),
(8, 1, true, false, CURRENT_TIMESTAMP),
(9, 1, true, false, CURRENT_TIMESTAMP),
(10, 1, true, false, CURRENT_TIMESTAMP),
(11, 1, true, false, CURRENT_TIMESTAMP),
(12, 1, true, false, CURRENT_TIMESTAMP),
(13, 1, true, false, CURRENT_TIMESTAMP)
;

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
  (user_id, location, gender_id, drink_id, exercise_id, dating_goal_id) 
VALUES 
 
(1, 'Abbotsford', 1, 4, 1, 1),

(2, 'Vancouver', 2, 4, 1, 1),
(3, 'Vancouver', 2, 4, 1, 1),
(4, 'Vancouver', 2, 4, 1, 1),
(5, 'Vancouver', 2, 4, 1, 1),
(6, 'Vancouver', 2, 4, 1, 1),
(7, 'Vancouver', 2, 4, 1, 1),
(8, 'Vancouver', 2, 4, 1, 1),
(9, 'Vancouver', 2, 4, 1, 1),
(10, 'Vancouver', 2, 4, 1, 1),
(11, 'Vancouver', 2, 4, 1, 1),
(12, 'Vancouver', 2, 4, 1, 1),
(13, 'Vancouver', 2, 4, 1, 1),
(14, 'Vancouver', 2, 4, 1, 1),

(15, 'Vancouver', 1, 4, 1, 1),
(16, 'Vancouver', 1, 4, 1, 1),
(17, 'Vancouver', 1, 4, 1, 1),
(18, 'Vancouver', 1, 4, 1, 1),
(19, 'Vancouver', 1, 4, 1, 1),
(20, 'Vancouver', 1, 4, 1, 1),
(21, 'Vancouver', 1, 4, 1, 1),
(22, 'Vancouver', 1, 4, 1, 1),
(23, 'Vancouver', 1, 4, 1, 1),
(24, 'Vancouver', 1, 4, 1, 1),
(25, 'Vancouver', 1, 4, 1, 1),
(26, 'Vancouver', 1, 4, 1, 1)
;
