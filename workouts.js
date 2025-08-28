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
    {
      id: "L1",
      title: "שבוע 1 - L (תחתון)",
      emoji: "🦵",
      minutes: 80,
      plan: {
        "אירובי": [
          {"muscle": "אירובי כללי","name": "אלפטיקל<br>Elliptical ","timeReps": "20 דקות","instructions": "עמוד זקוף על המכשיר, החזק בידיות ודרוך על הפדלים. התחל בתנועה חלקה של דחיפת רגליים ומשיכת ידיים קדימה ואחורה, שמור על קצב אחיד ובטן אסופה. הקפד לא להישען חזק מדי על הידיים ולשמור על נשימה סדירה לאורך כל התרגול.","image": "https://fitnessprogramer.com/wp-content/uploads/2021/10/Elliptical-Machine.gif"},
        ],
        "חימום ייעודי": [
          {"muscle": " ישבן ","name": " גשר ישבן <br> Glute Bridge ","timeReps": " 12 חזרות ","instructions": " שכיבה על הגב, ברכיים כפופות וכפות רגליים שטוחות על הרצפה. דחוף את האגן כלפי מעלה עד שהגוף בקו ישר מהברכיים ועד הכתפיים, עצור לשנייה למעלה בכיווץ הישבן וירד חזרה באיטיות. שמור על בטן אסופה ואל תאפשר לגב להתקמר. ","image": "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/06/Glute-Bridge.gif"},
          {"muscle": " ישבן ","name": " הליכת מפלצת עם גומייה <br> Monster Walk ","timeReps": " 15 צעדים לכל כיוון ","instructions": " הנח גומייה סביב הברכיים או הקרסוליים, רד מעט עם ברכיים כפופות ושמור על גב זקוף. צעד צעדים קטנים לצד תוך שמירה על מתח מתמיד בגומייה. הקפד שהאגן לא יעלה ולא יקרוס פנימה. ","image": "https://cdn.shopify.com/s/files/1/0655/4832/1000/files/Resistance-band-monster-walk_480x480.gif"},
          {"muscle": " ארבע ראשי ","name": " סקוואט ללא משקל <br> Bodyweight Squat ","timeReps": " 12 חזרות ","instructions": " עמוד ברגליים ברוחב כתפיים, כופף ברכיים וירד מטה כאילו מתיישב לאחור, עד שהירכיים במקביל לרצפה. שמור על גב ישר, חזה פתוח וברכיים בקו האצבעות. דחוף דרך העקבים בחזרה לעמידה מלאה. ","image": "https://media.self.com/photos/644699bdb5942cefbcc247eb/master/w_320%2Cc_limit/bodyweight-squat.gif"},
          {"muscle": " ארבע ראשי ","name": " לאנץ’ בהליכה <br> Walking Lunge ","timeReps": " 10 צעדים לכל רגל ","instructions": " צעד צעד גדול קדימה, הורד את הגוף עד שהברך האחורית כמעט נוגעת ברצפה. שמור על גב זקוף וברך קדמית בקו הקרסול. דחוף עם הרגל הקדמית וחלף קדימה לרגל השנייה. ","image": "https://media.post.rvohealth.io/wp-content/uploads/2023/08/AltruisticFantasticCub-size_restricted-1.gif"},
          {"muscle": " ירך אחורית ","name": " נדנודי רגליים קדימה/אחורה <br> Dynamic Leg Swing ","timeReps": " 10 לכל רגל ","instructions": " עמוד זקוף והישען קלות על קיר/מוט ליציבות. נענע רגל ישרה קדימה ואחורה בטווח תנועה נוח, תוך שמירה על שליטה. שמור על גב זקוף ובטן אסופה והימנע מתנועה חדה מדי. ","image": "https://post.healthline.com/wp-content/uploads/2019/08/400x400_Exercises_for_Hip_Pain_Side_Leg-Swing.gif"},
          {"muscle": " ירך אחורית ","name": " גוד מורנינג עם משקל גוף <br> Good Morning ","timeReps": " 10 חזרות ","instructions": " עמוד ברגליים ברוחב אגן, ידיים על החזה. כופף את הירכיים לאחור תוך שמירה על גב ישר עד שהגוף כמעט מקביל לרצפה, ואז חזור לעמידה מלאה. הקפד שהברכיים מעט כפופות ולא לקרוס בגב התחתון. ","image": "https://media1.popsugar-assets.com/files/thumbor/PVmu63CmismcU6SlPY_VDGZKO4g=/fit-in/792x528/top/filters:format_auto():upscale()/2017/03/16/755/n/1922729/87f8a40c98d7c402_EXAMPLE.Good-Morning.gif"},
          {"muscle": " שוק אחורי ","name": " הרמות עקבים מהירות <br> Standing Calf Raise ","timeReps": " 15 חזרות ","instructions": " עמוד זקוף על כפות רגליים שטוחות. עלה במהירות על קצות האצבעות, עצור לשנייה למעלה וירד לאט חזרה עד שהעקבים כמעט נוגעים ברצפה. שמור על תנועה מבוקרת לאורך כל התרגיל. ","image": "https://www.verywellfit.com/thmb/JyVlnkeXA-Fteaxs6j7WPENAYvE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/48-Standing-Calf-Raises-GIF-50e0467350804dddb4a9a15d6ee5d009.gif"},
          {"muscle": " חוטפים ","name": " קלמסשל עם גומייה <br> Side-Lying Clamshell ","timeReps": " 12 לכל צד ","instructions": " שכיבה על הצד, ברכיים כפופות בזווית של 90°, כפות רגליים צמודות. פתח את הברך העליונה החוצה עד הטווח המקסימלי מבלי להזיז את האגן. עצור לרגע למעלה וחזור לאט לנקודת ההתחלה. ","image": "https://images.ctfassets.net/4f3rgqwzdznj/6lu5xHE8iDQsybL5uQgVQ0/30df5e8e561cf4eaf736c1b52752bf24/CLAMSHELLS_1166x656v2.gif"},
          {"muscle": " מקרבי ירך ","name": " פלאנק קופנהגן (קל) <br> Copenhagen Plank ","timeReps": " 10–15 שניות × 2 לכל צד ","instructions": " הנח מרפק מתחת לכתף על הרצפה ורגל עליונה על ספסל בגובה בינוני. הרם את האגן כך שהגוף בקו ישר ושמור על בטן אסופה. החזק את המנח 10–15 שניות וחזור לאט מטה. ","image": "https://images.squarespace-cdn.com/content/v1/60af905e412c937275f9ddfb/dde5dde1-fa77-4bab-82ba-f331616c4f6c/copenhagen1.gif"},
        ],
        "אימון כח": [
          {"muscle": " ישבן ","name": " דחיקת רגל לאחור בכבל <br> Glute Cable Kickback ","timeReps": " 3×12 חזרות ","instructions": " עמוד מול מכונת כבל כשהקרסול מחובר לרצועה. שמור על גב ישר ודחוף את הרגל לאחור עד שהירך כמעט מקבילה לרצפה. עצור לרגע בכיווץ הישבן וחזור באיטיות קדימה. ","image": "https://barbend.com/wp-content/uploads/2023/04/cable-glute-kickback-barbend-movement-gif-masters.gif"},
          {"muscle": " ארבע ראשי ","name": " לחיצת רגליים <br> Leg Press ","timeReps": " 3×12 חזרות ","instructions": " שב במכונה עם גב צמוד למשענת, כפות רגליים ברוחב כתפיים. דחוף את הפלטפורמה כלפי מעלה עד יישור כמעט מלא בברכיים וירד לאט בחזרה מבלי לנעול מפרקים. שמור על ברכיים בקו האצבעות. ","image": "https://www.inspireusafoundation.org/file/2021/06/leg-press-calf-raise.gif"},
          {"muscle": " ירך אחורית ","name": " דדליפט רומני <br> Romanian Deadlift ","timeReps": " 3×12 חזרות ","instructions": " אחוז מוט/משקולות בידיים מול הירך. שמור על גב ישר וכופף אגן לאחור תוך ירידה עד אמצע השוק. הרם חזרה תוך כיווץ ישבן וירך אחורית. אל תעגל את הגב התחתון. ","image": "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Romanian-Deadlift.gif"},
          {"muscle": " שוק אחורי ","name": " הרמות עקבים עם משקולות <br> Dumbbell Calf Raise ","timeReps": " 3×12 חזרות ","instructions": " אחוז משקולת בכל יד, עמוד זקוף. עלה על קצות האצבעות עד מקסימום טווח, עצור לרגע וירד באיטיות מטה. בצע תנועה מלאה ומבוקרת. ","image": "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Calf-Raise.gif"},
          {"muscle": " חוטפים ","name": " הרחקת ירך במכונה <br> Machine Hip Abduction ","timeReps": " 3×12 חזרות ","instructions": " שב במכונה כשהברכיים צמודות לרפידות. פתח את הברכיים החוצה עד הטווח המקסימלי ושמור על גב יציב. חזור באיטיות פנימה מבלי לאבד שליטה. ","image": "https://newlife.com.cy/wp-content/uploads/2019/11/05971301-Lever-Seated-Hip-Abduction_Hips-FIX_360-1.gif"},
          {"muscle": " מקרבי ירך ","name": " קירוב ירך במכונה <br> Machine Hip Adduction ","timeReps": " 3×12 חזרות ","instructions": " שב במכונה עם הרגליים פתוחות כנגד רפידות הצד. צירף את הברכיים פנימה עד סגירה מלאה וחזור באיטיות לפתיחה. שמור על גב צמוד למשענת לאורך כל התרגיל. ","image": "https://i.pinimg.com/originals/4f/f3/61/4ff3610c198751eece574078d9b93111.gif"},
        ],
        "מתיחות": [
          {"muscle": " ישבן ","name": " מתיחת ישבן בישיבה – רגל על רגל <br> Seated Figure-4 Stretch ","timeReps": " 20–30 שניות לכל צד ","instructions": " שב על ספסל/כיסא, הנח קרסול על ברך הנגדית, והטה את הגוף קדימה עד שמורגשת מתיחה בישבן. שמור על גב ישר ונשום עמוק. ","image": "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_29/1751659/figurefour.gif"},
          {"muscle": " ארבע ראשי ","name": " מתיחת ירך קדמית בעמידה <br> Standing Quad Stretch ","timeReps": " 20–30 שניות לכל רגל ","instructions": " עמוד זקוף, אחוז בקרסול רגל אחת ומשוך את העקב לכיוון העכוז. שמור על ברכיים צמודות ואגן מיושר. נשום עמוק והחלף רגל. ","image": "https://www.newhopephysio.com/blog/wp-content/uploads/2023/03/quad-stretch.gif"},
          {"muscle": " ירך אחורית ","name": " מתיחת ירך אחורית בישיבה <br> Seated Hamstring Stretch ","timeReps": " 20–30 שניות לכל רגל ","instructions": " שב עם רגל אחת ישרה קדימה והשנייה כפופה פנימה. התכופף קדימה מהמותן לכיוון כף הרגל עד שמורגשת מתיחה בירך האחורית. שמור על גב ארוך ונשום. ","image": "https://i.pinimg.com/originals/69/26/29/692629edc1cd4e5393deb82f182eca64.gif"},
          {"muscle": " שוק אחורי ","name": " מתיחת שוק אחורי מול קיר <br> Standing Calf Stretch (against wall) ","timeReps": " 20–30 שניות לכל רגל ","instructions": " עמוד מול קיר עם ידיים נשענות עליו. רגל קדמית כפופה ורגל אחורית ישרה לאחור עם עקב צמוד לרצפה. הטה את הגוף קדימה עד שמורגשת מתיחה בשוק האחורי. ","image": "https://gymvisual.com/img/p/6/6/4/0/6640.gif"},
          {"muscle": " חוטפים ","name": " מתיחת פרפר בישיבה <br> Seated Butterfly Stretch ","timeReps": " 20–30 שניות ","instructions": " שב על הרצפה עם כפות רגליים צמודות זו לזו. אחוז בקרסוליים ודחוף ברכיים מטה לכיוון הרצפה. שמור על גב זקוף ונשום עמוק. ","image": "https://media.post.rvohealth.io/wp-content/uploads/2023/05/Butterfly-pose.gif"},
          {"muscle": " מקרבי ירך ","name": " מתיחת מקרבי ירך בצד <br> Side Lunge Stretch ","timeReps": " 20–30 שניות לכל צד ","instructions": " עמוד ברגליים רחבות, כופף ברך אחת והטה את הגוף אליה בזמן שהרגל השנייה נשארת ישרה. שמור על גב ישר עד שמורגשת מתיחה במקרבי הירך. ","image": "https://fitnessprogramer.com/wp-content/uploads/2021/05/Side-Lunge-Stretch.gif"},
          {"muscle": " חזה ","name": " מתיחת חזה במשקוף <br> Doorway Stretch ","timeReps": " 20–30 שניות ","instructions": " עמוד במשקוף ודחוף את הזרועות קדימה תוך צעד קל קדימה עם בית החזה. שמור על כתפיים רפויות ואל תמתח מעבר לנוח. ","image": "https://media.post.rvohealth.io/wp-content/uploads/2020/07/Chest-doorway-stretch.gif"},
          {"muscle": " גב עליון/רחב גבי ","name": " מתיחת גב עליון בישיבת ילד עם מתיחה לצד <br> Child’s Pose with Side Reach ","timeReps": " 20–30 שניות לכל צד ","instructions": " כרע ברכיים והושט ידיים קדימה לרצפה בתנוחת “ישיבת ילד”. עבור עם הידיים מעט הצידה עד שמורגשת מתיחה לאורך הצד והרחב הגבי. שמור על נשימה עמוקה ורפיון. ","image": "https://cdn.shopify.com/s/files/1/0052/7043/7978/files/Hip_Stretch_2_480x480.gif?v=1666369600"},
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