const WORKOUTS = {
  gym: [
    {
      id: "U1",
      title: "שבוע 1 - U (עליון)",
      emoji: "🏋️‍♀️",
      minutes: 80,
      plan: {
        "אירובי": [
          {"muscle": " אירובי כללי       ","name": " הליכה / ריצה על הליכון                 <br> Treadmill Walk / Run            ","timeReps": " 20 דקות                     ","instructions": "","image": "https://liftmanual.com/wp-content/uploads/2023/04/run-on-treadmill.gif"},
        ],
        "חימום ייעודי": [
          {"muscle": " חימום – כתפיים    ","name": " סיבובי כתפיים                         <br> Arm Circles                     ","timeReps": " 10 קדימה + 10 אחורה        ","instructions": "עמוד זקוף כאשר הרגליים ברוחב אגן הברכיים מעט כפופות והבטן אסופה. הרם את הידיים לצדדים עד לגובה הכתפיים והתחל לבצע סיבובים קטנים או בינוניים קדימה עם שתי הידיים בו זמנית. חשוב לשמור שהתנועה תהיה איטית ומבוקרת ולא להפוך אותה לניפנוף חסר שליטה. לאחר מכן בצע סיבובים לאחור. לאורך כל התרגיל הקפד על נשימה סדירה ורציפה.","image": "https://fitnessprogramer.com/wp-content/uploads/2021/07/Arm-Circles_Shoulders.gif"},
          {"muscle": " חימום – גב עליון  ","name": " כיווץ שכמות                           <br> Scapular Retraction             ","timeReps": " 12 חזרות                    ","instructions": "עמוד זקוף עם רגליים ברוחב אגן זרועות מתוחות קדימה בגובה הכתפיים וכפות הידיים פונות זו אל זו. משוך את השכמות לאחור ולקרב אותן זו לזו תוך שמירה על מרפקים ישרים. החזק לרגע את הכיווץ ושחרר קדימה בצורה איטית ומבוקרת. שמור על גב ניטרלי ובטן אסופה לאורך כל התרגיל.","image": "https://www.garagegymreviews.com/wp-content/uploads/standing-scapular-retraction.gif"},
          {"muscle": " חימום – כתף אמצעית","name": " הרחקת ידיים לצדדים עם גומייה          <br> Lateral Raise with Band         ","timeReps": " 12–15 חזרות                 ","instructions": "עמוד על גומייה או אחוז אותה בידיים כשכפות הידיים לצד הגוף. שמור על מרפקים מעט כפופים והרם את הידיים לצדדים עד לגובה הכתפיים. עצור לרגע בחלק העליון ותרד לאט ובשליטה למטה. יש להימנע מתנופה ולשמור על תנועה חלקה לאורך כל הביצוע.","image": "https://musclemagfitness.com/wp-content/uploads/lateral-raises-with-bands-exercise.gif"},
          {"muscle": " חימום – חזה       ","name": " שכיבות סמיכה קלות / על ספסל           <br> Incline Push-Ups                ","timeReps": " 8–10 חזרות                  ","instructions": "הנח ידיים על ספסל או משטח מוגבה בגובה אגן חזה רגליים לאחור בקו ישר. כופף מרפקים והורד את החזה לכיוון הספסל תוך שמירה על גוף ישר ובטן אסופה. דחוף חזרה מעלה עד יישור ידיים. בצע את התרגיל בקצב איטי ומבוקר ושמור על נשימה רציפה.","image": "https://cdn.jefit.com/assets/img/exercises/gifs/1055.gif"},
          {"muscle": " חימום – בייספס    ","name": " כפיפת מרפקים עם גומייה                <br> Banded Curl                     ","timeReps": " 12 חזרות                    ","instructions": "אחוז בגומייה בשתי ידיים כשהיא דרוכה מתחת לרגליים. שמור על מרפקים צמודים לגוף וכפוף את המרפקים כלפי מעלה עד שהגומייה מגיעה לגובה הכתפיים. עצור לרגע בחלק העליון ותרד באיטיות מטה. חשוב לשמור על תנועה מבוקרת ללא נדנוד גב.","image": "https://musclemagfitness.com/wp-content/uploads/resistance-band-reverse-grip-curls-exercise.gif"},
          {"muscle": " חימום – טרייספס   ","name": " פשיטת מרפקים עם גומייה                <br> Banded Triceps Pushdown         ","timeReps": " 12 חזרות                    ","instructions": "חבר את הגומייה לנקודת עיגון גבוהה. אחוז אותה בשתי ידיים כשהמרפקים צמודים לגוף. דחוף את הגומייה מטה עד ליישור מלא של המרפקים. עצור לרגע וחזור לאט כלפי מעלה. הקפד שהכתפיים נשארות יציבות ולא עולות במהלך התנועה.","image": "https://musclemagfitness.com/wp-content/uploads/tricep-pushdown-with-bands-exercise.gif"},
          {"muscle": " חימום – יציבות כתף","name": " Face Pull עם גומייה                    <br> Face Pull with Band             ","timeReps": " 10–12 חזרות                 ","instructions": "חבר את הגומייה לנקודה בגובה הפנים. אחוז את הקצוות ומשוך אותן לאחור לגובה הפנים תוך פתיחת המרפקים לצדדים. כווץ את שרירי השכמות ועצור לרגע בסוף התנועה. חזור לאט לנקודת ההתחלה תוך שמירה על תנועה חלקה ומבוקרת.","image": "https://www.strengthlog.com/wp-content/uploads/2025/04/banded-face-pull.gif"},
        ],
        "אימון כח": [
          {"muscle": " גב – משיכה אנכית  ","name": " משיכת פולי עליון באחיזה הפוכה        <br> Reverse Grip Lat Pulldown       ","timeReps": " 3 סטים × 12 חזרות           ","instructions": "שב מול מכשיר הפולי כשהברכיים מקובעות מתחת לכריות. אחוז את המוט באחיזה הפוכה כאשר כפות הידיים מופנות אליך ברוחב כתפיים. שמור על גב זקוף ומשוך את המוט כלפי החזה תוך שמירה על מרפקים קרובים לגוף. עצור לרגע בחלק התחתון וחזור לאט כלפי מעלה עד יישור ידיים מלא.","image": "https://musclemagfitness.com/wp-content/uploads/Cable-Reverse-grip-Straight-Back-Seated-High-Row-Back.gif"},
          {"muscle": " חזה אמצעי         ","name": " לחיצת חזה במוט                        <br> Barbell Bench Press             ","timeReps": " 3 סטים × 12 חזרות           ","instructions": "שכב על ספסל שטוח עם כפות רגליים יציבות על הרצפה. אחוז את המוט ברוחב מעט גדול מרוחב הכתפיים. הורד את המוט באיטיות אל החזה האמצעי תוך שמירה על כתפיים אחורה וחזה פתוח. דחוף את המוט מעלה עד ליישור מלא של הידיים. שמור על גב תחתון יציב ונגיעה קלה בלבד במוט בחזה.","image": "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Bench-Press.gif"},
          {"muscle": " כתף אמצעית        ","name": " הרחקה במכונה                          <br> Machine Lateral Raise           ","timeReps": " 3 סטים × 12 חזרות           ","instructions": "שב במכונה עם גב צמוד למשענת וכתפיים משוחררות. אחוז בידיות או הנח את המרפקים על הכריות. הרם את הזרועות לצדדים עד לגובה הכתפיים ועצור לרגע. הורד את הידיים באיטיות חזרה מטה. חשוב לשמור על תנועה מבוקרת וללא ניפנוף.","image": "https://musclemagfitness.com/wp-content/uploads/lever-lateral-raise-exercise.gif"},
          {"muscle": " בייספס – ראש ארוך ","name": " כפיפת פטיש                            <br> Hammer Curl                     ","timeReps": " 3 סטים × 12 חזרות           ","instructions": "עמוד זקוף עם משקולת יד בכל יד כאשר כפות הידיים פונות זו מול זו. שמור על מרפקים צמודים לגוף וכפוף את המרפקים כלפי מעלה עד שהמשקולות מתקרבות לכתפיים. עצור לרגע למעלה ותרד באיטיות מטה. שמור על גוף יציב ללא נדנוד.","image": "https://burnfit.io/wp-content/uploads/2023/11/DB_HAM_CURL.gif"},
          {"muscle": " טרייספס – ראש ארוך","name": " שבירת גולגולת                         <br> Skull Crusher (EZ Bar)          ","timeReps": " 3 סטים × 12 חזרות           ","instructions": "שכב על ספסל שטוח עם מוט EZ בידיים ישרות מעל החזה. כופף את המרפקים והורד את המוט באיטיות לכיוון המצח או מעל הראש תוך שמירה על מרפקים יציבים וקרובים. מתח את הטרייספס ויישר את הידיים חזרה למעלה. בצע את התנועה באיטיות ובשליטה מלאה.","image": "https://burnfit.io/wp-content/uploads/2023/11/SKULL_CRUSH.gif"},
          {"muscle": " ייצוב כתף         ","name": " הרמות Y                               <br> Y-Raise                         ","timeReps": " 3 סטים × 12 חזרות           ","instructions": "שכב על ספסל משופע עם הפנים כלפי מטה ומשקולות קלות בידיים. שמור על זרועות ישרות והרם אותן באלכסון כלפי מעלה כך שהגוף והידיים יוצרים צורת Y. עצור לרגע למעלה וכווץ את השכמות. הורד את הידיים חזרה לאט ובשליטה. שמור על גב תחתון ניטרלי ובטן אסופה.","image": "https://barbend.com/wp-content/uploads/2023/05/y-raise-barbend-movement-gif-masters.gif"},
        ],
        "מתיחות": [
          {"muscle": " גב – מתיחה        ","name": " מתיחת לטיסימוס                        <br> Lat Stretch (Wall/Bar)          ","timeReps": " 20–30 שניות × 2             ","instructions": "עמוד מול קיר או מוט ואחוז אותו בשתי ידיים בגובה החזה. התרחק לאחור והטה את פלג הגוף העליון קדימה כך שהגב יתארך ותרגיש מתיחה בצידי הגב. שמור על ברכיים מעט כפופות ונשום עמוק לאורך המתיחה.","image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEMdRZrt3ClSSFSWVz4GxRparzS2NpnzL3Zw&s"},
          {"muscle": " חזה – מתיחה       ","name": " מתיחת חזה בפתח דלת                   <br> Doorway Chest Stretch           ","timeReps": " 20–30 שניות × 2             ","instructions": "עמוד בפתח דלת והנח את כפות הידיים על המשקוף בגובה הכתפיים. צעד קדימה בעדינות עד שתרגיש מתיחה בחזה ובכתפיים הקדמיות. שמור על גב זקוף וחזה פתוח. החזק את המתיחה ונשום בצורה רגועה.","image": "https://fitnessprogramer.com/wp-content/uploads/2021/08/Standing-one-arm-chest-stretch.gif"},
          {"muscle": " כתפיים – מתיחה    ","name": " מתיחת כתף צולבת                       <br> Cross-Body Shoulder Stretch     ","timeReps": " 20–30 שניות לכל צד          ","instructions": "עמוד זקוף והעבר יד אחת ישרה מול הגוף בגובה הכתפיים. אחוז את היד השנייה במרפק ומשך את היד ישרה קרוב יותר לחזה עד שתרגיש מתיחה בכתף האחורית. שמור על כתפיים רפויות והחזק את המתיחה בנשימה רגועה.","image": "https://fitnessprogramer.com/wp-content/uploads/2021/04/Across-Chest-Shoulder-Stretch.gif"},
          {"muscle": " בייספס – מתיחה    ","name": " מתיחת בייספס על קיר                   <br> Biceps Wall Stretch             ","timeReps": " 20–30 שניות לכל יד          ","instructions": "עמוד לצד קיר והנח עליו את כף היד מאחורי הגוף כשהאצבעות פונות לאחור. סובב בעדינות את הגוף קדימה עד שתרגיש מתיחה לאורך החזה והזרוע הקדמית. שמור על כתף משוחררת ונשום עמוק.","image": "https://newlife.com.cy/wp-content/uploads/2019/11/10581301-Standing-one-arm-chest-stretch_Chest_360.gif"},
          {"muscle": " טרייספס – מתיחה   ","name": " מתיחת טרייספס מעל הראש               <br> Overhead Triceps Stretch        ","timeReps": " 20–30 שניות לכל יד          ","instructions": "הרם יד אחת מעלה וכופף את המרפק כך שהאצבעות פונות כלפי הגב. בעזרת היד השנייה משוך בעדינות את המרפק פנימה לכיוון הראש עד שתרגיש מתיחה בזרוע האחורית. שמור על גב זקוף ובטן אסופה.","image": "https://media.post.rvohealth.io/wp-content/uploads/sites/2/2020/04/Overhead-triceps-stretch.gif"},
          {"muscle": " שכמות – מתיחה     ","name": " מתיחת שכמות (Child’s Pose)           <br> Child’s Pose / Cat Stretch      ","timeReps": " 20–30 שניות                 ","instructions": "כרע על הרצפה בעמידת שש ואז שב לאחור על העקבים. מתח את הידיים קדימה ככל שתוכל והנח את המצח על הרצפה. הרגש מתיחה לאורך הגב והשכמות. שמור על נשימה עמוקה ורציפה לכל אורך המתיחה.","image": "https://i.ytimg.com/vi/rE9i-ghDDPU/hq720.jpg"},
        ],
      }
    },
  ],
  home: [
    {
      id: "homep1",
      title: "אימון ליבה 1",
      emoji: "🤸‍♀️",
      minutes: 10,
      plan: {
        "אימון ליבה": [
          {"muscle": "בטן: כפיפה הפוכה/הרמות רגליים","name": "הרמות רגליים בשכיבה<br>Lying Leg Raise","timeReps": "45 שניות","instructions": "גב תחתון מודבק לרצפה, להרים רגליים ל־90° ולהוריד לאט בלי לקשת את הגב.","image": "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/10/lying-leg-raises.gif?fit=600%2C600&ssl=1"},
          {"muscle": "גב תחתון: פשיטת גב","name": "סופרמן סטטי<br>Superman Hold","timeReps": "45 שניות","instructions": "שכיבה על הבטן; להרים ידיים/רגליים בעדינות ולהחזיק 10–20ש׳.","image": "https://www.meridian-fitness.co.uk/wp-content/uploads/2025/01/Superman.gif"},
          {"muscle": "בטן: אנטי־סיבוב","name": "פלאנק נגיעות כתף<br>Plank Shoulder Taps","timeReps": "45 שניות","instructions": "פלאנק על ידיים; לגעת בכתף נגדית בלי להזיז אגן/בית חזה.","image": "https://media.self.com/photos/5a1495c8e91faa1fe331591b/master/w_1600%2Cc_limit/new-years-challenge-t-shoulder-tap.gif"},
          {"muscle": "אגן ומותן: כפיפת ירך","name": "מרץ בשכיבה<br>Supine March","timeReps": "45 שניות","instructions": "90/90 בירכיים/ברכיים; להוריד עקב אחת לרצפה ולחזור, גב ניטרלי.","image": "https://media.self.com/photos/5b30f79da8856d42d2ec1c0b/master/w_320%2Cc_limit/marching.gif"},
          {"muscle": "בטן: לחץ תוך־בטני/ייצוב סטטי","name": "פלאנק אמות<br>Forearm Plank","timeReps": "45 שניות","instructions": "קו ישר מקרסול עד ראש, בטן נאספת ונשיפה איטית.","image": "https://hips.hearstapps.com/hmg-prod/images/4-forearm-plank-rocks-fw-and-bk-1550760923.gif?crop=0.846xw:1.00xh;0.0950xw,0&resize=980:*"},
          {"muscle": "סרעפת: נשימה סרעפתית מודעת","name": "נשימת סרעפת בשכיבה<br>Diaphragmatic Breathing (Supine)","timeReps": "45 שניות","instructions": "לשאוף “אל הבטן/צלעות”, לנשוף ארוך, 6–8 נשימות איטיות.","image": "https://yb-downloads.s3.us-west-1.amazonaws.com/breathing/GIF-Belly-Breathing-with-Book.gif"},
        ],
      }
    },
    {
      id: "homep2",
      title: "אימון ליבה 2",
      emoji: "🤸‍♀️",
      minutes: 10,
      plan: {
        "אימון ליבה": [
          {"muscle": "בטן: כפיפה קדמית","name": "כפיפות בטן קלאסיות<br>Crunch","timeReps": "45 שניות","instructions": "להרים שכמות מהרצפה, סנטר רחוק מהחזה, ירידה איטית.","image": "https://media1.tenor.com/m/cp12e2K3YWIAAAAd/floor-crunch.gif"},
          {"muscle": "גב תחתון: אנטי־כיפוף קדמי","name": "דד־באג<br>Dead Bug","timeReps": "45 שניות","instructions": "שכיבה; יד/רגל נגדיים מטה תוך הדבקת מותנית.","image": "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXA0N2I1cG1qcjJscGdub3lmOWc4cGoyMnVyeWF6YmhqdTFwOGQ0cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aIyZ9Ra6pyo5ZOHQsm/giphy.gif"},
          {"muscle": "בטן: אנטי־סיבוב","name": "פלאנק עם הושטת יד<br>Plank Reach","timeReps": "45 שניות","instructions": "פלאנק על ידיים; להושיט יד קדימה, לשמור אגן יציב, להחליף.","image": "https://i.makeagif.com/media/5-27-2018/mWAX67.gif"},
          {"muscle": "אגן ומותן: ייצוב/הטיות אגן","name": "גשר ישבן<br>Glute Bridge","timeReps": "45 שניות","instructions": "דחיפת אגן מעלה, צלעות סגורות, עצירה שנייה למעלה.","image": "https://media1.tenor.com/m/i5B_Un9s7woAAAAC/glute-bridge-exercise.gif"},
          {"muscle": "גב תחתון: ייצוב דינמי","name": "בירד דוג<br>Bird Dog","timeReps": "45 שניות","instructions": "עמידת שש; יד ורגל נגדיים, 2ש׳ עצירה, גב ניטרלי.","image": "https://media.self.com/photos/61a7aa8d140ff57c06f4657e/master/w_1600%2Cc_limit/Gail-bird-dog-same-side.gif"},
          {"muscle": "שרירים תומכים: אנטי־כיפוף צדי","name": "פלאנק צד<br>Side Plank","timeReps": "45 שניות","instructions": "מרפק תחת כתף; להרים אגן ולשמור קו ישר.","image": "https://exrx.net/application/files/thumbnails/small/4015/7561/9763/SidePlankElbow.jpg"},
        ],
      }
    },
    {
      id: "homep3",
      title: "אימון ליבה 3",
      emoji: "🤸‍♀️",
      minutes: 10,
      plan: {
        "אימון ליבה": [
          {"muscle": "בטן: כפיפה הפוכה/הרמות רגליים","name": "רוורס קרנצ'<br>Reverse Crunch","timeReps": "45 שניות","instructions": "ברכיים לחזה בהטיית אגן, ירידה איטית.","image": "https://gymvisual.com/img/p/1/8/7/0/1/18701.gif"},
          {"muscle": "גב תחתון: פשיטת גב","name": "סופרמן חילופי<br>Alternating Superman","timeReps": "45 שניות","instructions": "להרים יד ורגל נגדיים, עצירה קצרה והחלפה.","image": "https://gymvisual.com/img/p/1/9/7/8/1/19781.gif"},
          {"muscle": "בטן: סיבוב/אלכסונים","name": "ר׳שיאן טוויסט (ללא משקל)<br>Russian Twist","timeReps": "45 שניות","instructions": "ישיבה בזווית ~45°, לסובב פלג גוף עליון מצד לצד.","image": "https://gymvisual.com/img/p/3/6/2/2/6/36226.gif"},
          {"muscle": "גב תחתון: ייצוב דינמי","name": "בירד דוג – עצירה<br>Bird Dog (Pause)","timeReps": "45 שניות","instructions": "כמו רגיל אך עצירה 3–5ש׳ בכל חזרה.","image": "https://images.ctfassets.net/4f3rgqwzdznj/5d2egksWLycwkFFpN1NzCa/8ca1ff665efa098a0451d7a343128c33/Bird-Dog_1296x729.gif"},
          {"muscle": "בטן: לחץ תוך־בטני/ייצוב סטטי","name": "הולו הולד<br>Hollow Body Hold","timeReps": "45 שניות","instructions": "שכיבה; להרים שכמות/שוקיים, מותנית דבוקה, נשימות קצרות.","image": "https://gymvisual.com/img/p/9/0/7/5/9075.gif"},
          {"muscle": "אגן ומותן: הרחקה/קירוב ירך","name": "הרחקת ירך בשכיבה צדית<br>Side-Lying Hip Abduction","timeReps": "45 שניות","instructions": "שכיבה על הצד; רגל עליונה מתרוממת בלי לסובב אגן.","image": "https://burnfit.io/wp-content/uploads/2023/11/LYING_HIP_ABD.gif"},
        ],
      }
    },
    {
      id: "homep4",
      title: "אימון ליבה 4",
      emoji: "🤸‍♀️",
      minutes: 10,
      plan: {
        "אימון ליבה": [
          {"muscle": "בטן: כפיפה קדמית","name": "קרנצ' ידיים קדימה<br>Arms-Forward Crunch","timeReps": "45 שניות","instructions": "ידיים קדימה להקטנת משיכה בצוואר; עלייה קצרה ומבוקרת.","image": "https://images.squarespace-cdn.com/content/v1/594953034c8b0371ef0da06a/1499627201201-9Z0VNI3HSQODJ4EZ98U7/image-asset.gif"},
          {"muscle": "גב תחתון: אנטי־כיפוף קדמי","name": "דד־באג – החזקות<br>Dead Bug (Holds)","timeReps": "45 שניות","instructions": "להוריד יד/רגל ולהחזיק 2–3ש׳ תוך הדבקת מותנית.","image": "https://gymvisual.com/img/p/2/1/8/3/7/21837.gif"},
          {"muscle": "בטן: כפיפה הפוכה/הרמות רגליים","name": "הרמות רגליים עם עצירה<br>Leg Raise (Isometric Hold)","timeReps": "45 שניות","instructions": "לעצור 2–3ש׳ ב־45–60°, לשמור גב מודבק.","image": "https://gymvisual.com/img/p/1/5/6/1/4/15614.gif"},
          {"muscle": "סרעפת: 360° Breathing","name": "נשימת 360°<br>360° Breathing","timeReps": "45 שניות","instructions": "ישיבה/עמידה; שאיפה להרחבת כלוב הצלעות לכל הכיוונים, נשיפה איטית.","image": "https://www.hopkinsmedicine.org/-/media/images/health/1_-conditions/coronavirus/new-breathing-exercises-gif-2.ashx?h=270&iar=0&mh=400&mw=670&w=480&hash=EE76FD62CC10D2C6701DCBF06EDF2FB5"},
          {"muscle": "בטן: אנטי־סיבוב","name": "דוב-פלאנק נגיעות כתף<br>Bear Plank Shoulder Taps","timeReps": "45 שניות","instructions": "ברכיים מרחפות מעל הרצפה; נגיעות כתף בלי נדנוד אגן.","image": "https://i.pinimg.com/originals/0c/cc/26/0ccc26a895e480f959baf1727ccc30cc.gif"},
          {"muscle": "שרירים תומכים: אנטי־כיפוף צדי","name": "פלאנק צד עם “דיפים”<br>Side Plank Hip Dips","timeReps": "45 שניות","instructions": "להוריד/להרים אגן בטווח קצר תוך שמירה על קו.","image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdailyburn.com%2Flife%2Ffitness%2Fhow-to-side-plank-dip-like-a-pro%2F&psig=AOvVaw3RvIS3flcPC1xlbvJHus3l&ust=1756456374368000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKCn_oeMrY8DFQAAAAAdAAAAABAE"},
        ],
      }
    },
    {
      id: "homep5",
      title: "אימון ליבה 5",
      emoji: "🤸‍♀️",
      minutes: 10,
      plan: {
        "אימון ליבה": [
          {"muscle": "בטן: כפיפה הפוכה/הרמות רגליים","name": "רוורס קרנצ' עם עצירה<br>Reverse Crunch (Pause)","timeReps": "45 שניות","instructions": "עצירה קצרה בסוף הכפיפה; ירידה איטית.","image": "https://www.healthynexercise.com/wp-content/uploads/2022/04/How-to-do-a-reverse-crunch.gif"},
          {"muscle": "אגן ומותן: כפיפת ירך","name": "הרמות רגל ישרה בישיבה<br>Seated Straight-Leg Lift","timeReps": "45 שניות","instructions": "ישיבה זקופה; להרים רגל ישרה מהקרקע בלי לקרוס בגב.","image": "https://www.mitrecsports.com/assets/sit.gif"},
          {"muscle": "בטן: סיבוב/אלכסונים","name": "בייסיקל איטי<br>Slow Bicycle Crunch","timeReps": "45 שניות","instructions": "קצב איטי; להחזיק מגע מרפק-ברך שנייה אחת.","image": "https://media.post.rvohealth.io/wp-content/uploads/2020/09/Bicycle-crunch.gif"},
          {"muscle": "אגן ומותן: ייצוב/הטיות אגן","name": "גשר ישבן “מרצ'”<br>Glute Bridge March","timeReps": "45 שניות","instructions": "גשר; להרים רגל אחת, לשמור אגן מאוזן ולהחליף.","image": "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/08/glutebridgemarch-1472218794.gif"},
          {"muscle": "בטן: אנטי־סיבוב","name": "פלאנק – הרמות רגל מתחלפות<br>Plank Alt. Leg Lift","timeReps": "45 שניות","instructions": "פלאנק אמות; להרים רגל ישרה מעט, לשמור אגן מאוזן.","image": "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/plankwithleglift-1457101889.gif"},
          {"muscle": "שרירים תומכים: ייצוב שכמות","name": "פוש-אפ פלוס (סרייטוס)<br>Push-Up Plus","timeReps": "45 שניות","instructions": "תנוחת שכיבה; דחיפת השכמות “קדימה” בסוף הטווח, חזרה.","image": "https://gymvisual.com/img/p/1/2/5/6/1/12561.gif"},
        ],
      }
    },
    {
      id: "homep6",
      title: "אימון ליבה 6",
      emoji: "🤸‍♀️",
      minutes: 10,
      plan: {
        "אימון ליבה": [
          {"muscle": "בטן: כפיפה קדמית","name": "קרנצ' איזומטרי<br>Isometric Crunch Hold","timeReps": "45 שניות","instructions": "עליה קצרה ולהחזיק 3–5ש׳ לפני ירידה.","image": "https://gymvisual.com/img/p/1/8/7/0/3/18703.gif"},
          {"muscle": "גב תחתון: פשיטת גב","name": "סופרמן סטטי<br>Superman Hold","timeReps": "45 שניות","instructions": "החזקה 10–20ש׳, ירידה מבוקרת, 2–3 סטים קצרים.","image": "https://gymvisual.com/img/p/2/0/9/0/2/20902.gif"},
          {"muscle": "בטן: סיבוב/אלכסונים","name": "ר׳שיאן טוויסט איטי<br>Slow Russian Twist","timeReps": "45 שניות","instructions": "טווח קטן, שליטה מלאה; לשמור בית חזה פתוח.","image": "https://hw.qld.gov.au/wp-content/uploads/2015/07/25_M_WIP02.gif"},
          {"muscle": "גב תחתון: ייצוב דינמי","name": "בירד דוג “סווּיפ”<br>Bird Dog Reach & Sweep","timeReps": "45 שניות","instructions": "להגיע קדימה ואז “לסחוף” יד לצדי הירך בלי להזיז אגן.","image": "https://media.self.com/photos/59c8187d41062372cfaba034/master/w_320%2Cc_limit/Fitness_12.gif"},
          {"muscle": "בטן: לחץ תוך־בטני/ייצוב סטטי","name": "פלאנק RKC<br>RKC Plank","timeReps": "45 שניות","instructions": "לסגור מרפקים לעבר הצלעות, כיווץ ישבן/בטן 10–20ש׳.","image": "https://burnfit.io/wp-content/uploads/2023/11/RKC_PLANK.gif"},
          {"muscle": "אגן ומותן: הרחקה/קירוב ירך","name": "אדוקציה בשכיבה צדית (רגל תחתונה)<br>Side-Lying Inner-Thigh Lift","timeReps": "45 שניות","instructions": "שכיבה על הצד; להרים רגל תחתונה מעלה לשנייה ולהוריד לאט.","image": "https://media.self.com/photos/59f2438722489f72a3de2e32/master/w_320%2Cc_limit/butt6.gif"},
        ],
      }
    },
    {
      id: "strechHome",
      title: "אימון גמישות ביתי",
      emoji: "🧘‍♀️",
      minutes: 10,
      plan: {
        "מתיחות": [
          {"muscle": " צוואר וכתפיים         ","name": " מתיחת צד צוואר                           <br> Neck Side Stretch       ","timeReps": "45 שניות","instructions": " ישיבה או עמידה, אוזן לכיוון כתף, יד קלה מעל הראש. צד ימין ושמאל.          ","image": "https://gymvisual.com/img/p/3/0/2/2/9/30229.gif"},
          {"muscle": " צוואר וכתפיים         ","name": " מתיחת כתף חוצה גוף                       <br> Cross-Body Shoulder Stretch ","timeReps": "45 שניות","instructions": " יד אחת חוצה את הגוף, היד השנייה מושכת אותה בעדינות פנימה.              ","image": "https://gymvisual.com/img/p/3/0/2/3/2/30232.gif"},
          {"muscle": " פתיחת חזה וגב עליון   ","name": " פותח חזה                                  <br> Chest Opener            ","timeReps": "45 שניות","instructions": " שילוב ידיים מאחורי הגב ודחיפה עדינה לאחור.                               ","image": "https://images.squarespace-cdn.com/content/v1/5a620a85d55b41e7233c5243/ae25b65f-ef76-40f5-8091-76cb07bdad9b/PleasantTerrificBettong-size_restricted.gif"},
          {"muscle": " פתיחת חזה וגב עליון   ","name": " חתול–פרה (דינמי)                         <br> Cat-Cow (Dynamic)       ","timeReps": "45 שניות","instructions": " בעמידת שש, מעבר איטי בין קימור לגישור הגב.                              ","image": "https://images.ctfassets.net/6ilvqec50fal/5BBiIrimbbfn99yF09s4yW/7d2e0e8da5b70b77fd6897313d71fb7c/Untitled_design__26_.gif"},
          {"muscle": " עמוד שדרה וצד הגוף    ","name": " פיתול עמוד שדרה בישיבה                   <br> Seated Spinal Twist     ","timeReps": "45 שניות","instructions": " ישיבה, רגל אחת מעבר לירך השנייה, סיבוב עדין של הגב. צד ימין ושמאל.     ","image": "https://cdn.shopify.com/s/files/1/0512/9945/1076/files/FearlessUnimportantGoldeneye-size_restricted_480x480.gif?v=1638905771"},
          {"muscle": " עמוד שדרה וצד הגוף    ","name": " מתיחת כפיפה לצד                          <br> Side Bend Stretch       ","timeReps": "45 שניות","instructions": " ישיבה או עמידה, יד אחת עולה למעלה והגוף נוטה לצד השני.                  ","image": "https://fitnessprogramer.com/wp-content/uploads/2022/09/standing-side-bend.gif"},
          {"muscle": " ירך קדמית      ","name": " מתיחת פושטי ירך                          <br> Hip Flexor Stretch      ","timeReps": "45 שניות","instructions": " מכרע קדמי, אגן דוחף קדימה, גב זקוף. צד ימין ושמאל.                      ","image": "https://gymvisual.com/img/p/2/1/5/6/9/21569.gif"},
          {"muscle": " ירך אחורית     ","name": " מתיחת מסטרינגס                           <br> Hamstring Stretch       ","timeReps": "45 שניות","instructions": " רגל קדימה ישרה, גב ישר, כפיפה קלה קדימה. צד ימין ושמאל.                 ","image": "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2022/11/400x400-Seated_Hamstring_Stretch.gif"},
          {"muscle": " ירך פנימית וחיצונית   ","name": " מתיחת פרפר                               <br> Butterfly Stretch       ","timeReps": "45 שניות","instructions": " ישיבה, כפות רגליים צמודות, ברכיים פתוחות החוצה.                        ","image": "https://fitnessprogramer.com/wp-content/uploads/2021/02/Butterfly-Stretch.gif"},
          {"muscle": " ירך פנימית וחיצונית   ","name": " מתיחת פיגר 4                             <br> Figure-4 Stretch        ","timeReps": "45 שניות","instructions": " שכיבה על הגב, רגל אחת מונחת על השנייה בצורת 4, משיכה לכיוון הגוף.     ","image": "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_29/1751659/figurefour.gif"},
          {"muscle": " שוק וקרסול            ","name": " מתיחת שוק                                <br> Calf Stretch            ","timeReps": "45 שניות","instructions": " נשענים על קיר, רגל אחורית ישרה, עקב על הרצפה. צד ימין ושמאל.            ","image": "https://liftmanual.com/wp-content/uploads/2023/04/standing-toe-up-calf-stretch.gif"},
          {"muscle": " שוק וקרסול            ","name": " סיבובי קרסול                            <br> Ankle Circles           ","timeReps": "45 שניות","instructions": " ישיבה או עמידה על רגל אחת, סיבובי קרסול איטיים לכל כיוון.              ","image": "https://cdn.jefit.com/assets/img/exercises/gifs/289.gif"},
        ],
      }
    },
  ]
};