const WORKOUTS = {
  gym: [
    {
      id: "U1",
      title: "שבוע 1 - U (עליון)",
      emoji: "🏋️‍♀️",
      minutes: 80,
      plan: {
        "אירובי": [
          {"muscle": " אירובי כללי       ","name": " הליכה / ריצה על הליכון                 <br> Treadmill Walk / Run            ","timeReps": " 20 דקות                     ","instructions": "https://liftmanual.com/wp-content/uploads/2023/04/run-on-treadmill.gif","image": ""},
        ],
        "חימום ייעודי": [
          {"muscle": " חימום – כתפיים    ","name": " סיבובי כתפיים                         <br> Arm Circles                     ","timeReps": " 10 קדימה + 10 אחורה        ","instructions": "https://fitnessprogramer.com/wp-content/uploads/2021/07/Arm-Circles_Shoulders.gif","image": "עמוד זקוף כאשר הרגליים ברוחב אגן הברכיים מעט כפופות והבטן אסופה. הרם את הידיים לצדדים עד לגובה הכתפיים והתחל לבצע סיבובים קטנים או בינוניים קדימה עם שתי הידיים בו זמנית. חשוב לשמור שהתנועה תהיה איטית ומבוקרת ולא להפוך אותה לניפנוף חסר שליטה. לאחר מכן בצע סיבובים לאחור. לאורך כל התרגיל הקפד על נשימה סדירה ורציפה."},
          {"muscle": " חימום – גב עליון  ","name": " כיווץ שכמות                           <br> Scapular Retraction             ","timeReps": " 12 חזרות                    ","instructions": "https://www.garagegymreviews.com/wp-content/uploads/standing-scapular-retraction.gif","image": "עמוד זקוף עם רגליים ברוחב אגן זרועות מתוחות קדימה בגובה הכתפיים וכפות הידיים פונות זו אל זו. משוך את השכמות לאחור ולקרב אותן זו לזו תוך שמירה על מרפקים ישרים. החזק לרגע את הכיווץ ושחרר קדימה בצורה איטית ומבוקרת. שמור על גב ניטרלי ובטן אסופה לאורך כל התרגיל."},
          {"muscle": " חימום – כתף אמצעית","name": " הרחקת ידיים לצדדים עם גומייה          <br> Lateral Raise with Band         ","timeReps": " 12–15 חזרות                 ","instructions": "https://musclemagfitness.com/wp-content/uploads/lateral-raises-with-bands-exercise.gif","image": "עמוד על גומייה או אחוז אותה בידיים כשכפות הידיים לצד הגוף. שמור על מרפקים מעט כפופים והרם את הידיים לצדדים עד לגובה הכתפיים. עצור לרגע בחלק העליון ותרד לאט ובשליטה למטה. יש להימנע מתנופה ולשמור על תנועה חלקה לאורך כל הביצוע."},
          {"muscle": " חימום – חזה       ","name": " שכיבות סמיכה קלות / על ספסל           <br> Incline Push-Ups                ","timeReps": " 8–10 חזרות                  ","instructions": "https://cdn.jefit.com/assets/img/exercises/gifs/1055.gif","image": "הנח ידיים על ספסל או משטח מוגבה בגובה אגן חזה רגליים לאחור בקו ישר. כופף מרפקים והורד את החזה לכיוון הספסל תוך שמירה על גוף ישר ובטן אסופה. דחוף חזרה מעלה עד יישור ידיים. בצע את התרגיל בקצב איטי ומבוקר ושמור על נשימה רציפה."},
          {"muscle": " חימום – בייספס    ","name": " כפיפת מרפקים עם גומייה                <br> Banded Curl                     ","timeReps": " 12 חזרות                    ","instructions": "https://musclemagfitness.com/wp-content/uploads/resistance-band-reverse-grip-curls-exercise.gif","image": "אחוז בגומייה בשתי ידיים כשהיא דרוכה מתחת לרגליים. שמור על מרפקים צמודים לגוף וכפוף את המרפקים כלפי מעלה עד שהגומייה מגיעה לגובה הכתפיים. עצור לרגע בחלק העליון ותרד באיטיות מטה. חשוב לשמור על תנועה מבוקרת ללא נדנוד גב."},
          {"muscle": " חימום – טרייספס   ","name": " פשיטת מרפקים עם גומייה                <br> Banded Triceps Pushdown         ","timeReps": " 12 חזרות                    ","instructions": "https://musclemagfitness.com/wp-content/uploads/tricep-pushdown-with-bands-exercise.gif","image": "חבר את הגומייה לנקודת עיגון גבוהה. אחוז אותה בשתי ידיים כשהמרפקים צמודים לגוף. דחוף את הגומייה מטה עד ליישור מלא של המרפקים. עצור לרגע וחזור לאט כלפי מעלה. הקפד שהכתפיים נשארות יציבות ולא עולות במהלך התנועה."},
          {"muscle": " חימום – יציבות כתף","name": " Face Pull עם גומייה                    <br> Face Pull with Band             ","timeReps": " 10–12 חזרות                 ","instructions": "https://www.strengthlog.com/wp-content/uploads/2025/04/banded-face-pull.gif","image": "חבר את הגומייה לנקודה בגובה הפנים. אחוז את הקצוות ומשוך אותן לאחור לגובה הפנים תוך פתיחת המרפקים לצדדים. כווץ את שרירי השכמות ועצור לרגע בסוף התנועה. חזור לאט לנקודת ההתחלה תוך שמירה על תנועה חלקה ומבוקרת."},
        ],
        "אימון כח": [
          {"muscle": " גב – משיכה אנכית  ","name": " משיכת פולי עליון באחיזה הפוכה        <br> Reverse Grip Lat Pulldown       ","timeReps": " 3 סטים × 12 חזרות           ","instructions": "https://musclemagfitness.com/wp-content/uploads/Cable-Reverse-grip-Straight-Back-Seated-High-Row-Back.gif","image": "שב מול מכשיר הפולי כשהברכיים מקובעות מתחת לכריות. אחוז את המוט באחיזה הפוכה כאשר כפות הידיים מופנות אליך ברוחב כתפיים. שמור על גב זקוף ומשוך את המוט כלפי החזה תוך שמירה על מרפקים קרובים לגוף. עצור לרגע בחלק התחתון וחזור לאט כלפי מעלה עד יישור ידיים מלא."},
          {"muscle": " חזה אמצעי         ","name": " לחיצת חזה במוט                        <br> Barbell Bench Press             ","timeReps": " 3 סטים × 12 חזרות           ","instructions": "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Bench-Press.gif","image": "שכב על ספסל שטוח עם כפות רגליים יציבות על הרצפה. אחוז את המוט ברוחב מעט גדול מרוחב הכתפיים. הורד את המוט באיטיות אל החזה האמצעי תוך שמירה על כתפיים אחורה וחזה פתוח. דחוף את המוט מעלה עד ליישור מלא של הידיים. שמור על גב תחתון יציב ונגיעה קלה בלבד במוט בחזה."},
          {"muscle": " כתף אמצעית        ","name": " הרחקה במכונה                          <br> Machine Lateral Raise           ","timeReps": " 3 סטים × 12 חזרות           ","instructions": "https://musclemagfitness.com/wp-content/uploads/lever-lateral-raise-exercise.gif","image": "שב במכונה עם גב צמוד למשענת וכתפיים משוחררות. אחוז בידיות או הנח את המרפקים על הכריות. הרם את הזרועות לצדדים עד לגובה הכתפיים ועצור לרגע. הורד את הידיים באיטיות חזרה מטה. חשוב לשמור על תנועה מבוקרת וללא ניפנוף."},
          {"muscle": " בייספס – ראש ארוך ","name": " כפיפת פטיש                            <br> Hammer Curl                     ","timeReps": " 3 סטים × 12 חזרות           ","instructions": "https://burnfit.io/wp-content/uploads/2023/11/DB_HAM_CURL.gif","image": "עמוד זקוף עם משקולת יד בכל יד כאשר כפות הידיים פונות זו מול זו. שמור על מרפקים צמודים לגוף וכפוף את המרפקים כלפי מעלה עד שהמשקולות מתקרבות לכתפיים. עצור לרגע למעלה ותרד באיטיות מטה. שמור על גוף יציב ללא נדנוד."},
          {"muscle": " טרייספס – ראש ארוך","name": " שבירת גולגולת                         <br> Skull Crusher (EZ Bar)          ","timeReps": " 3 סטים × 12 חזרות           ","instructions": "https://burnfit.io/wp-content/uploads/2023/11/SKULL_CRUSH.gif","image": "שכב על ספסל שטוח עם מוט EZ בידיים ישרות מעל החזה. כופף את המרפקים והורד את המוט באיטיות לכיוון המצח או מעל הראש תוך שמירה על מרפקים יציבים וקרובים. מתח את הטרייספס ויישר את הידיים חזרה למעלה. בצע את התנועה באיטיות ובשליטה מלאה."},
          {"muscle": " ייצוב כתף         ","name": " הרמות Y                               <br> Y-Raise                         ","timeReps": " 3 סטים × 12 חזרות           ","instructions": "https://barbend.com/wp-content/uploads/2023/05/y-raise-barbend-movement-gif-masters.gif","image": "שכב על ספסל משופע עם הפנים כלפי מטה ומשקולות קלות בידיים. שמור על זרועות ישרות והרם אותן באלכסון כלפי מעלה כך שהגוף והידיים יוצרים צורת Y. עצור לרגע למעלה וכווץ את השכמות. הורד את הידיים חזרה לאט ובשליטה. שמור על גב תחתון ניטרלי ובטן אסופה."},
        ],
        "מתיחות": [
          {"muscle": " גב – מתיחה        ","name": " מתיחת לטיסימוס                        <br> Lat Stretch (Wall/Bar)          ","timeReps": " 20–30 שניות × 2             ","instructions": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEMdRZrt3ClSSFSWVz4GxRparzS2NpnzL3Zw&s","image": "עמוד מול קיר או מוט ואחוז אותו בשתי ידיים בגובה החזה. התרחק לאחור והטה את פלג הגוף העליון קדימה כך שהגב יתארך ותרגיש מתיחה בצידי הגב. שמור על ברכיים מעט כפופות ונשום עמוק לאורך המתיחה."},
          {"muscle": " חזה – מתיחה       ","name": " מתיחת חזה בפתח דלת                   <br> Doorway Chest Stretch           ","timeReps": " 20–30 שניות × 2             ","instructions": "https://fitnessprogramer.com/wp-content/uploads/2021/08/Standing-one-arm-chest-stretch.gif","image": "עמוד בפתח דלת והנח את כפות הידיים על המשקוף בגובה הכתפיים. צעד קדימה בעדינות עד שתרגיש מתיחה בחזה ובכתפיים הקדמיות. שמור על גב זקוף וחזה פתוח. החזק את המתיחה ונשום בצורה רגועה."},
          {"muscle": " כתפיים – מתיחה    ","name": " מתיחת כתף צולבת                       <br> Cross-Body Shoulder Stretch     ","timeReps": " 20–30 שניות לכל צד          ","instructions": "https://fitnessprogramer.com/wp-content/uploads/2021/04/Across-Chest-Shoulder-Stretch.gif","image": "עמוד זקוף והעבר יד אחת ישרה מול הגוף בגובה הכתפיים. אחוז את היד השנייה במרפק ומשך את היד ישרה קרוב יותר לחזה עד שתרגיש מתיחה בכתף האחורית. שמור על כתפיים רפויות והחזק את המתיחה בנשימה רגועה."},
          {"muscle": " בייספס – מתיחה    ","name": " מתיחת בייספס על קיר                   <br> Biceps Wall Stretch             ","timeReps": " 20–30 שניות לכל יד          ","instructions": "https://newlife.com.cy/wp-content/uploads/2019/11/10581301-Standing-one-arm-chest-stretch_Chest_360.gif","image": "עמוד לצד קיר והנח עליו את כף היד מאחורי הגוף כשהאצבעות פונות לאחור. סובב בעדינות את הגוף קדימה עד שתרגיש מתיחה לאורך החזה והזרוע הקדמית. שמור על כתף משוחררת ונשום עמוק."},
          {"muscle": " טרייספס – מתיחה   ","name": " מתיחת טרייספס מעל הראש               <br> Overhead Triceps Stretch        ","timeReps": " 20–30 שניות לכל יד          ","instructions": "https://media.post.rvohealth.io/wp-content/uploads/sites/2/2020/04/Overhead-triceps-stretch.gif","image": "הרם יד אחת מעלה וכופף את המרפק כך שהאצבעות פונות כלפי הגב. בעזרת היד השנייה משוך בעדינות את המרפק פנימה לכיוון הראש עד שתרגיש מתיחה בזרוע האחורית. שמור על גב זקוף ובטן אסופה."},
          {"muscle": " שכמות – מתיחה     ","name": " מתיחת שכמות (Child’s Pose)           <br> Child’s Pose / Cat Stretch      ","timeReps": " 20–30 שניות                 ","instructions": "https://i.ytimg.com/vi/rE9i-ghDDPU/hq720.jpg","image": "כרע על הרצפה בעמידת שש ואז שב לאחור על העקבים. מתח את הידיים קדימה ככל שתוכל והנח את המצח על הרצפה. הרגש מתיחה לאורך הגב והשכמות. שמור על נשימה עמוקה ורציפה לכל אורך המתיחה."},
        ],
      }
    },
    {
      id: "L1",
      title: "שבוע 1 - L (תחתון)",
      emoji: "🦵",
      minutes: 100,
      plan: {
        "אירובי": [
          {"muscle": "אירובי כללי","name": "אלפטיקל<br>Elliptical ","timeReps": "20 דקות","instructions": "https://fitnessprogramer.com/wp-content/uploads/2021/10/Elliptical-Machine.gif","image": "עמוד זקוף על המכשיר, החזק בידיות ודרוך על הפדלים. התחל בתנועה חלקה של דחיפת רגליים ומשיכת ידיים קדימה ואחורה, שמור על קצב אחיד ובטן אסופה. הקפד לא להישען חזק מדי על הידיים ולשמור על נשימה סדירה לאורך כל התרגול."},
        ],
        "חימום ייעודי": [
          {"muscle": " ישבן ","name": " גשר ישבן <br> Glute Bridge ","timeReps": " 12 חזרות ","instructions": "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/06/Glute-Bridge.gif","image": " שכיבה על הגב, ברכיים כפופות וכפות רגליים שטוחות על הרצפה. דחוף את האגן כלפי מעלה עד שהגוף בקו ישר מהברכיים ועד הכתפיים, עצור לשנייה למעלה בכיווץ הישבן וירד חזרה באיטיות. שמור על בטן אסופה ואל תאפשר לגב להתקמר. "},
          {"muscle": " ישבן ","name": " הליכת מפלצת עם גומייה <br> Monster Walk ","timeReps": " 15 צעדים לכל כיוון ","instructions": "https://cdn.shopify.com/s/files/1/0655/4832/1000/files/Resistance-band-monster-walk_480x480.gif","image": " הנח גומייה סביב הברכיים או הקרסוליים, רד מעט עם ברכיים כפופות ושמור על גב זקוף. צעד צעדים קטנים לצד תוך שמירה על מתח מתמיד בגומייה. הקפד שהאגן לא יעלה ולא יקרוס פנימה. "},
          {"muscle": " ארבע ראשי ","name": " סקוואט ללא משקל <br> Bodyweight Squat ","timeReps": " 12 חזרות ","instructions": "https://media.self.com/photos/644699bdb5942cefbcc247eb/master/w_320%2Cc_limit/bodyweight-squat.gif","image": " עמוד ברגליים ברוחב כתפיים, כופף ברכיים וירד מטה כאילו מתיישב לאחור, עד שהירכיים במקביל לרצפה. שמור על גב ישר, חזה פתוח וברכיים בקו האצבעות. דחוף דרך העקבים בחזרה לעמידה מלאה. "},
          {"muscle": " ארבע ראשי ","name": " לאנץ’ בהליכה <br> Walking Lunge ","timeReps": " 10 צעדים לכל רגל ","instructions": "https://media.post.rvohealth.io/wp-content/uploads/2023/08/AltruisticFantasticCub-size_restricted-1.gif","image": " צעד צעד גדול קדימה, הורד את הגוף עד שהברך האחורית כמעט נוגעת ברצפה. שמור על גב זקוף וברך קדמית בקו הקרסול. דחוף עם הרגל הקדמית וחלף קדימה לרגל השנייה. "},
          {"muscle": " ירך אחורית ","name": " נדנודי רגליים קדימה/אחורה <br> Dynamic Leg Swing ","timeReps": " 10 לכל רגל ","instructions": "https://post.healthline.com/wp-content/uploads/2019/08/400x400_Exercises_for_Hip_Pain_Side_Leg-Swing.gif","image": " עמוד זקוף והישען קלות על קיר/מוט ליציבות. נענע רגל ישרה קדימה ואחורה בטווח תנועה נוח, תוך שמירה על שליטה. שמור על גב זקוף ובטן אסופה והימנע מתנועה חדה מדי. "},
          {"muscle": " ירך אחורית ","name": " גוד מורנינג עם משקל גוף <br> Good Morning ","timeReps": " 10 חזרות ","instructions": "https://media1.popsugar-assets.com/files/thumbor/PVmu63CmismcU6SlPY_VDGZKO4g=/fit-in/792x528/top/filters:format_auto():upscale()/2017/03/16/755/n/1922729/87f8a40c98d7c402_EXAMPLE.Good-Morning.gif","image": " עמוד ברגליים ברוחב אגן, ידיים על החזה. כופף את הירכיים לאחור תוך שמירה על גב ישר עד שהגוף כמעט מקביל לרצפה, ואז חזור לעמידה מלאה. הקפד שהברכיים מעט כפופות ולא לקרוס בגב התחתון. "},
          {"muscle": " שוק אחורי ","name": " הרמות עקבים מהירות <br> Standing Calf Raise ","timeReps": " 15 חזרות ","instructions": "https://www.verywellfit.com/thmb/JyVlnkeXA-Fteaxs6j7WPENAYvE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/48-Standing-Calf-Raises-GIF-50e0467350804dddb4a9a15d6ee5d009.gif","image": " עמוד זקוף על כפות רגליים שטוחות. עלה במהירות על קצות האצבעות, עצור לשנייה למעלה וירד לאט חזרה עד שהעקבים כמעט נוגעים ברצפה. שמור על תנועה מבוקרת לאורך כל התרגיל. "},
          {"muscle": " חוטפים ","name": " קלמסשל עם גומייה <br> Side-Lying Clamshell ","timeReps": " 12 לכל צד ","instructions": "https://images.ctfassets.net/4f3rgqwzdznj/6lu5xHE8iDQsybL5uQgVQ0/30df5e8e561cf4eaf736c1b52752bf24/CLAMSHELLS_1166x656v2.gif","image": " שכיבה על הצד, ברכיים כפופות בזווית של 90°, כפות רגליים צמודות. פתח את הברך העליונה החוצה עד הטווח המקסימלי מבלי להזיז את האגן. עצור לרגע למעלה וחזור לאט לנקודת ההתחלה. "},
          {"muscle": " מקרבי ירך ","name": " פלאנק קופנהגן (קל) <br> Copenhagen Plank ","timeReps": " 10–15 שניות × 2 לכל צד ","instructions": "https://images.squarespace-cdn.com/content/v1/60af905e412c937275f9ddfb/dde5dde1-fa77-4bab-82ba-f331616c4f6c/copenhagen1.gif","image": " הנח מרפק מתחת לכתף על הרצפה ורגל עליונה על ספסל בגובה בינוני. הרם את האגן כך שהגוף בקו ישר ושמור על בטן אסופה. החזק את המנח 10–15 שניות וחזור לאט מטה. "},
        ],
        "אימון כח": [
          {"muscle": " ישבן ","name": " דחיקת רגל לאחור בכבל <br> Glute Cable Kickback ","timeReps": " 3×12 חזרות ","instructions": "https://barbend.com/wp-content/uploads/2023/04/cable-glute-kickback-barbend-movement-gif-masters.gif","image": " עמוד מול מכונת כבל כשהקרסול מחובר לרצועה. שמור על גב ישר ודחוף את הרגל לאחור עד שהירך כמעט מקבילה לרצפה. עצור לרגע בכיווץ הישבן וחזור באיטיות קדימה. "},
          {"muscle": " ארבע ראשי ","name": " לחיצת רגליים <br> Leg Press ","timeReps": " 3×12 חזרות ","instructions": "https://www.inspireusafoundation.org/file/2021/06/leg-press-calf-raise.gif","image": " שב במכונה עם גב צמוד למשענת, כפות רגליים ברוחב כתפיים. דחוף את הפלטפורמה כלפי מעלה עד יישור כמעט מלא בברכיים וירד לאט בחזרה מבלי לנעול מפרקים. שמור על ברכיים בקו האצבעות. "},
          {"muscle": " ירך אחורית ","name": " דדליפט רומני <br> Romanian Deadlift ","timeReps": " 3×12 חזרות ","instructions": "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Romanian-Deadlift.gif","image": " אחוז מוט/משקולות בידיים מול הירך. שמור על גב ישר וכופף אגן לאחור תוך ירידה עד אמצע השוק. הרם חזרה תוך כיווץ ישבן וירך אחורית. אל תעגל את הגב התחתון. "},
          {"muscle": " שוק אחורי ","name": " הרמות עקבים עם משקולות <br> Dumbbell Calf Raise ","timeReps": " 3×12 חזרות ","instructions": "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Calf-Raise.gif","image": " אחוז משקולת בכל יד, עמוד זקוף. עלה על קצות האצבעות עד מקסימום טווח, עצור לרגע וירד באיטיות מטה. בצע תנועה מלאה ומבוקרת. "},
          {"muscle": " חוטפים ","name": " הרחקת ירך במכונה <br> Machine Hip Abduction ","timeReps": " 3×12 חזרות ","instructions": "https://newlife.com.cy/wp-content/uploads/2019/11/05971301-Lever-Seated-Hip-Abduction_Hips-FIX_360-1.gif","image": " שב במכונה כשהברכיים צמודות לרפידות. פתח את הברכיים החוצה עד הטווח המקסימלי ושמור על גב יציב. חזור באיטיות פנימה מבלי לאבד שליטה. "},
          {"muscle": " מקרבי ירך ","name": " קירוב ירך במכונה <br> Machine Hip Adduction ","timeReps": " 3×12 חזרות ","instructions": "https://i.pinimg.com/originals/4f/f3/61/4ff3610c198751eece574078d9b93111.gif","image": " שב במכונה עם הרגליים פתוחות כנגד רפידות הצד. צירף את הברכיים פנימה עד סגירה מלאה וחזור באיטיות לפתיחה. שמור על גב צמוד למשענת לאורך כל התרגיל. "},
        ],
        "מתיחות": [
          {"muscle": " ישבן ","name": " מתיחת ישבן בישיבה – רגל על רגל <br> Seated Figure-4 Stretch ","timeReps": " 20–30 שניות לכל צד ","instructions": "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_29/1751659/figurefour.gif","image": " שב על ספסל/כיסא, הנח קרסול על ברך הנגדית, והטה את הגוף קדימה עד שמורגשת מתיחה בישבן. שמור על גב ישר ונשום עמוק. "},
          {"muscle": " ארבע ראשי ","name": " מתיחת ירך קדמית בעמידה <br> Standing Quad Stretch ","timeReps": " 20–30 שניות לכל רגל ","instructions": "https://www.newhopephysio.com/blog/wp-content/uploads/2023/03/quad-stretch.gif","image": " עמוד זקוף, אחוז בקרסול רגל אחת ומשוך את העקב לכיוון העכוז. שמור על ברכיים צמודות ואגן מיושר. נשום עמוק והחלף רגל. "},
          {"muscle": " ירך אחורית ","name": " מתיחת ירך אחורית בישיבה <br> Seated Hamstring Stretch ","timeReps": " 20–30 שניות לכל רגל ","instructions": "https://i.pinimg.com/originals/69/26/29/692629edc1cd4e5393deb82f182eca64.gif","image": " שב עם רגל אחת ישרה קדימה והשנייה כפופה פנימה. התכופף קדימה מהמותן לכיוון כף הרגל עד שמורגשת מתיחה בירך האחורית. שמור על גב ארוך ונשום. "},
          {"muscle": " שוק אחורי ","name": " מתיחת שוק אחורי מול קיר <br> Standing Calf Stretch (against wall) ","timeReps": " 20–30 שניות לכל רגל ","instructions": "https://gymvisual.com/img/p/6/6/4/0/6640.gif","image": " עמוד מול קיר עם ידיים נשענות עליו. רגל קדמית כפופה ורגל אחורית ישרה לאחור עם עקב צמוד לרצפה. הטה את הגוף קדימה עד שמורגשת מתיחה בשוק האחורי. "},
          {"muscle": " חוטפים ","name": " מתיחת פרפר בישיבה <br> Seated Butterfly Stretch ","timeReps": " 20–30 שניות ","instructions": "https://media.post.rvohealth.io/wp-content/uploads/2023/05/Butterfly-pose.gif","image": " שב על הרצפה עם כפות רגליים צמודות זו לזו. אחוז בקרסוליים ודחוף ברכיים מטה לכיוון הרצפה. שמור על גב זקוף ונשום עמוק. "},
          {"muscle": " מקרבי ירך ","name": " מתיחת מקרבי ירך בצד <br> Side Lunge Stretch ","timeReps": " 20–30 שניות לכל צד ","instructions": "https://fitnessprogramer.com/wp-content/uploads/2021/05/Side-Lunge-Stretch.gif","image": " עמוד ברגליים רחבות, כופף ברך אחת והטה את הגוף אליה בזמן שהרגל השנייה נשארת ישרה. שמור על גב ישר עד שמורגשת מתיחה במקרבי הירך. "},
          {"muscle": " חזה ","name": " מתיחת חזה במשקוף <br> Doorway Stretch ","timeReps": " 20–30 שניות ","instructions": "https://media.post.rvohealth.io/wp-content/uploads/2020/07/Chest-doorway-stretch.gif","image": " עמוד במשקוף ודחוף את הזרועות קדימה תוך צעד קל קדימה עם בית החזה. שמור על כתפיים רפויות ואל תמתח מעבר לנוח. "},
          {"muscle": " גב עליון/רחב גבי ","name": " מתיחת גב עליון בישיבת ילד עם מתיחה לצד <br> Child’s Pose with Side Reach ","timeReps": " 20–30 שניות לכל צד ","instructions": "https://cdn.shopify.com/s/files/1/0052/7043/7978/files/Hip_Stretch_2_480x480.gif?v=1666369600","image": " כרע ברכיים והושט ידיים קדימה לרצפה בתנוחת “ישיבת ילד”. עבור עם הידיים מעט הצידה עד שמורגשת מתיחה לאורך הצד והרחב הגבי. שמור על נשימה עמוקה ורפיון. "},
        ],
      }
    },
    {
      id: "M1",
      title: "שבוע 1 - M (משולב)",
      emoji: "🏃🏻‍♀️‍➡️",
      minutes: 80,
      plan: {
        "אירובי": [
          {"muscle": " אירובי      ","name": " אופניים                          <br> Stationary Bike               ","timeReps": " 20 דקות              ","instructions": "https://fitnessprogramer.com/wp-content/uploads/2021/06/Bike.gif","image": " שב על המכשיר עם גב זקוף וכוון את המושב לגובה נכון כך שהברכיים כמעט ישרות בתחתית הדוושה. התחל לדווש בקצב קל לחימום ולאחר מכן העלה בהדרגה את העומס למהירות בינונית–גבוהה בהתאם ליכולתך. שמור על קצב אחיד, כתפיים רפויות ובטן אסופה לכל אורך הפעילות. "},
        ],
        "חימום ייעודי": [
          {"muscle": " גב          ","name": " כיווץ שכמות                      <br> Scapular Retraction           ","timeReps": " 12–15 חזרות          ","instructions": "https://www.garagegymreviews.com/wp-content/uploads/standing-scapular-retraction.gif","image": " עמוד זקוף כאשר הרגליים ברוחב אגן והברכיים מעט כפופות. מתח ידיים קדימה בגובה כתפיים ומשוך את השכמות לאחור כאילו אתה מנסה להצמיד אותן זו לזו. שמור על בטן אסופה ואל תקמר את הגב. חזור באיטיות למצב התחלתי. "},
          {"muscle": " חזה עליון   ","name": " סיבובי כתפיים                    <br> Arm Circles                   ","timeReps": " 10 קדימה + 10 אחורה ","instructions": "https://media.post.rvohealth.io/wp-content/uploads/2019/05/Arm-circles.gif","image": " עמוד זקוף כאשר הרגליים ברוחב אגן והבטן אסופה. הרם את הידיים לצדדים עד לגובה הכתפיים והתחל לבצע סיבובים קטנים או בינוניים קדימה עם שתי הידיים בו־זמנית. חשוב לשמור שהתנועה תהיה איטית ומבוקרת ולא להפוך אותה לניפנוף חסר שליטה. לאחר מכן בצע סיבובים לאחור. הקפד לנשום באופן סדיר לאורך כל התרגיל. "},
          {"muscle": " כתף אחורית  ","name": " פתיחת גומייה לצדדים              <br> Band Pull-Apart               ","timeReps": " 12–15 חזרות          ","instructions": "https://www.inspireusafoundation.org/file/2022/08/band-pull-apart.gif","image": " אחוז גומייה בשתי ידיים מול החזה כאשר המרפקים ישרים. פתח את הידיים לצדדים עד שהגומייה נמתחת והשכמות מתקרבות זו לזו. שמור על גב זקוף ובטן אסופה לאורך כל התרגיל. החזר את הידיים קדימה באיטיות ושמור על שליטה מלאה בטווח התנועה. "},
          {"muscle": " טרייספס     ","name": " מתיחת טרייספס מעל הראש           <br> Overhead Triceps Stretch      ","timeReps": " 20–30 שניות לכל צד   ","instructions": "https://www.vissco.com/wp-content/uploads/animation/sub/triceps-stretch.gif","image": " עמוד זקוף והבא יד אחת מעל הראש וכופף אותה לאחור כך שכף היד נוגעת בגב העליון. אחוז במרפק עם היד השנייה ודחוף בעדינות כדי להעמיק את המתיחה. שמור על גב זקוף ובטן אסופה. החזק את המתיחה ונשום בצורה רגועה. "},
          {"muscle": " ישבן        ","name": " גשר ישבן                         <br> Glute Bridge                  ","timeReps": " 12–15 חזרות          ","instructions": "https://media.self.com/photos/618ef1f346d2ea765d1493d6/master/w_1600%2Cc_limit/Cookie-GluteBridge.gif","image": " שכב על הגב כאשר כפות הרגליים קרובות לישבן והברכיים כפופות. הרם את האגן מעלה עד שהגוף בקו ישר מהברכיים לכתפיים. עצור שנייה למעלה, כווץ את הישבן והורד באיטיות מטה. שמור על בטן אסופה ואל תבליט את הגב התחתון. "},
          {"muscle": " ארבע ראשי   ","name": " סקוואט חופשי                     <br> Bodyweight Squat              ","timeReps": " 12–15 חזרות          ","instructions": "https://media.self.com/photos/644699bdb5942cefbcc247eb/master/w_320%2Cc_limit/bodyweight-squat.gif","image": " עמוד זקוף ברגליים ברוחב אגן, כופף ברכיים והורד את האגן מטה כאילו אתה מתיישב על כיסא. שמור על גב זקוף וחזה פתוח. עצור כאשר הברכיים בזווית של כ־90 מעלות ודחוף דרך העקבים בחזרה למעלה. שמור על תנועה איטית ומבוקרת לאורך כל התרגיל. "},
          {"muscle": " שוק קדמי    ","name": " הליכה על עקבים                   <br> Heel Walk                     ","timeReps": " 15–20 צעדים          ","instructions": "https://cdn.jefit.com/assets/img/exercises/gifs/1387.gif","image": " עמוד זקוף והרם את אצבעות הרגליים כך שהמשקל יעבור אל העקבים. התחל לצעוד קדימה בצעדים קטנים ואיטיים תוך שמירה על גב זקוף ובטן אסופה. המשך לנשום באופן רגוע ושמור על שליטה בתנועה. "},
          {"muscle": " כופפי ירך   ","name": " הרמות ברכיים במקום               <br> High Knees                    ","timeReps": " 30 שניות             ","instructions": "https://media.self.com/photos/5a1495bb7753b02dca5206e8/master/w_1600%2Cc_limit/new-years-challenge-t-high-knee.gif","image": " עמוד זקוף והרם ברכיים לסירוגין לגובה המותניים בקצב בינוני. שמור על גב זקוף ובטן אסופה. הנע את הידיים בתיאום עם הרגליים כדי לשמור על שיווי משקל וקצב. בצע את התנועה באופן קפיצי אך מבוקר. "},
        ],
        "אימון כח": [
          {"muscle": " גב          ","name": " חתירה עם מוט                     <br> Barbell Row                   ","timeReps": " 2×12 חזרות           ","instructions": "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/barbellrow-1457038583.gif?crop=1xw:1xh;center,top&resize=1200:*","image": " אחוז במוט ברוחב כתפיים, התכופף קדימה בזווית של כ־45° ושמור על גב ישר ובטן אסופה. משוך את המוט לכיוון הבטן התחתונה תוך קירוב השכמות לאחור. החזר את המוט מטה באיטיות תוך שליטה מלאה. "},
          {"muscle": " חזה עליון   ","name": " לחיצת חזה בשיפוע חיובי           <br> Incline Bench Press           ","timeReps": " 2×12 חזרות           ","instructions": "https://cdn.jefit.com/assets/img/exercises/gifs/8.gif","image": " שכב על ספסל בשיפוע חיובי של כ־30°. אחוז במוט מעט רחב מרוחב כתפיים, הורד אותו לחזה העליון ודחוף מעלה עד ליישור מרפקים. שמור על גב תחתון צמוד לספסל ובטן אסופה. בצע תנועה מבוקרת ואיטית. "},
          {"muscle": " כתף אחורית  ","name": " פרפר הפוך                        <br> Reverse Fly                   ","timeReps": " 2×12 חזרות           ","instructions": "https://fitliferegime.com/wp-content/uploads/2023/04/Incline-Dumbbell-Reverse-Delt-Fly.gif","image": " שב בקצה ספסל בהטיית גב קדימה, אחוז משקולות קלות והנח אותן מתחת לגוף. הרם את הידיים לצדדים עד לגובה הכתפיים תוך שמירה על מרפקים כפופים קלות. הורד את המשקולות לאט חזרה למטה ושמור על גב ישר. "},
          {"muscle": " טרייספס     ","name": " לחיצת חזה צרה                     <br> Close-Grip Bench Press        ","timeReps": " 2×12 חזרות           ","instructions": "https://cdn.jefit.com/assets/img/exercises/gifs/248.gif","image": " שכב על ספסל ואחוז במוט באחיזה צרה מעט מרוחב הכתפיים. הורד את המוט לחזה ודחוף מעלה עד ליישור מלא של המרפקים. הקפד לשמור על מרפקים קרובים לגוף ולבטן אסופה לכל אורך התנועה. "},
          {"muscle": " ישבן        ","name": " עליות מדרגה                      <br> Step-Up                       ","timeReps": " 2×12 חזרות לכל רגל  ","instructions": "https://cdn.jefit.com/assets/img/exercises/gifs/134.gif","image": " עמוד מול ספסל או קופסה יציבה. עלה עם רגל אחת עד שכל כף הרגל מונחת על המשטח. דחוף דרך העקב והרם את הגוף למעלה עד ליישור מלא. ירד לאט וחזור עם הרגל השנייה. שמור על גב זקוף ובטן אסופה. "},
          {"muscle": " ארבע ראשי   ","name": " לאנץ’ בולגרי                     <br> Bulgarian Split Squat         ","timeReps": " 2×12 חזרות לכל רגל  ","instructions": "https://www.meridian-fitness.co.uk/wp-content/uploads/2025/03/BulgarianSplit.gif","image": " עמוד בעמידת מכרע כאשר הרגל האחורית מונחת על ספסל. כופף את הברך הקדמית עד ל־90° תוך שמירה על גב זקוף. דחוף דרך העקב הקדמי לעלייה חזרה. שמור על בטן אסופה ותנועה איטית ומבוקרת. "},
          {"muscle": " שוק קדמי    ","name": " דורסיפלקשן עם גומייה             <br> Band Dorsiflexion             ","timeReps": " 2×12 חזרות           ","instructions": "https://www.verywellhealth.com/thmb/xYg-Usdfft7B8Uz17QWzk4NxSow=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Verywell-02-2696480-ResistanceDorisflexion-598ca62c396e5a00102adad0.gif","image": " שב על הרצפה וקשור גומייה סביב כף הרגל. החזק את הגומייה ומשוך את האצבעות לכיוון הגוף נגד ההתנגדות. שמור על תנועה איטית ומבוקרת ועל בטן אסופה לאורך כל התרגיל. "},
          {"muscle": " כופפי ירך   ","name": " הרמות רגליים בתלייה              <br> Hanging Leg Raise             ","timeReps": " 2×12 חזרות           ","instructions": "https://liftmanual.com/wp-content/uploads/2023/04/hanging-leg-hip-raise.gif","image": " אחוז במתח כשהגוף תלוי ישר. הרם את הרגליים ישרות או כפופות עד לגובה המותניים. עצור שנייה למעלה והורד אותן באיטיות מטה. שמור על גב ניטרלי ובטן אסופה. "},
        ],
        "מתיחות": [
          {"muscle": " גב          ","name": " פיתול גב בישיבה                  <br> Seated Spinal Twist           ","timeReps": " 20–30 שניות לכל צד   ","instructions": "https://liftmanual.com/wp-content/uploads/2023/04/spine-twist.gif","image": " שב על הרצפה עם רגל אחת כפופה מעבר לירך השנייה. סובב את הגב והכתפיים לכיוון הרגל הכפופה בעזרת היד הנגדית. שמור על גב זקוף ונשימה רגועה לאורך כל המתיחה. "},
          {"muscle": " חזה עליון   ","name": " מתיחת חזה במשקוף בשיפוע חיובי   <br> Doorway Stretch (Incline)     ","timeReps": " 20–30 שניות          ","instructions": "https://fitnessprogramer.com/wp-content/uploads/2021/01/Doorway-chest-and-sshoulder-stretch.gif","image": " עמוד בפתח דלת והנח את הידיים על המשקוף מעל גובה הכתפיים. קח צעד קטן קדימה ודחוף את החזה קדימה ולמעלה עד שתרגיש מתיחה בסיבי החזה העליון. שמור על גב זקוף ונשום בצורה רגועה. "},
          {"muscle": " כתף אחורית  ","name": " מתיחת כתף אחורית                 <br> Posterior Shoulder Stretch    ","timeReps": " 20–30 שניות לכל צד   ","instructions": "https://cdn.jefit.com/assets/img/exercises/gifs/882.gif","image": " עמוד זקוף והרם יד אחת לגובה כתף. העבר אותה לרוחב הגוף והחזק עם היד השנייה קרוב לחזה. משוך בעדינות עד שתרגיש מתיחה בחלק האחורי של הכתף. שמור על גב זקוף ונשימה רגועה. "},
          {"muscle": " טרייספס     ","name": " מתיחת טרייספס מעל הראש           <br> Overhead Triceps Stretch      ","timeReps": " 20–30 שניות לכל צד   ","instructions": "https://media.post.rvohealth.io/wp-content/uploads/sites/2/2020/04/Overhead-triceps-stretch.gif","image": " עמוד זקוף והבא יד אחת מעל הראש וכופף אותה לאחור. אחוז במרפק עם היד השנייה ודחוף בעדינות לאחור. שמור על גב זקוף ובטן אסופה, ונשום בצורה רגועה לאורך המתיחה. "},
          {"muscle": " ישבן        ","name": " מתיחת ישבן בישיבה                <br> Seated Figure-4 Stretch       ","timeReps": " 20–30 שניות לכל צד   ","instructions": "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_29/1751659/figurefour.gif","image": " שב על כיסא או על הרצפה והנח קרסול אחד על הירך הנגדית. התכופף קדימה בעדינות מהאגן עד שתרגיש מתיחה בישבן. שמור על גב זקוף ובטן אסופה, נשום עמוק והרפה. "},
          {"muscle": " ארבע ראשי   ","name": " מתיחת ארבע ראשי בעמידה           <br> Standing Quad Stretch         ","timeReps": " 20–30 שניות לכל צד   ","instructions": "https://cdn.jefit.com/assets/img/exercises/gifs/921.gif","image": " עמוד זקוף, אחוז בכף רגל אחת מאחור ומשוך אותה לעבר הישבן. שמור על ברכיים צמודות וגב זקוף. אם צריך, הישען על קיר ליציבות. נשום בצורה רגועה לאורך המתיחה. "},
          {"muscle": " שוק קדמי    ","name": " מתיחת אצבעות לפנים               <br> Toe Pull Stretch              ","timeReps": " 20–30 שניות לכל צד   ","instructions": "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2025-01/plantar-fasciitis-zz-250128-03-351e38.gif","image": " שב על הרצפה עם רגל אחת ישרה קדימה. אחוז בכף הרגל ומשוך את האצבעות לכיוונך עד שתרגיש מתיחה בשוק הקדמי. שמור על גב זקוף ונשום בצורה רגועה. "},
          {"muscle": " כופפי ירך   ","name": " מתיחת מכרע                       <br> Lunge Hip Flexor Stretch      ","timeReps": " 20–30 שניות לכל צד   ","instructions": "https://cdn.jefit.com/assets/img/exercises/gifs/950.gif","image": " כרע בעמידת מכרע קדמית עם רגל אחת קדימה והשנייה לאחור. דחוף את האגן קדימה תוך שמירה על גב זקוף עד שתרגיש מתיחה בכופפי הירך של הרגל האחורית. נשום בצורה רגועה והחזק את המתיחה. "},
        ],
      }
    },
    {
      id: "A001",
      title: "כוח עליון שבוע 2",
      emoji: "🏋️‍♀️",
      minutes: 80,
      plan: {
        "אימון כח": [
          {"muscle": " גב – משיכה אופקית ","name": " חתירת T במכשיר                      <br> T-Bar Row Machine           ","timeReps": " 3 סטים × 12 חזרות ","instructions": "https://cdn.shopify.com/s/files/1/0618/9462/3460/files/remada-pronada-maquina_chest_supported_Rows_gif___Google_Search.gif","image": " שב עם חזה צמוד למשענת ורגליים יציבות על הרצפה, אחוז בידיות והתחל למשוך אותן לכיוון החזה התחתון תוך שמירה על גב ניטרלי וכתפיים לא משוחררות קדימה. הקפד לקרב שכמות בסוף התנועה ולהחזיר את הידיות לאט ובשליטה מלאה מבלי לאבד מתח. "},
          {"muscle": " חזה עליון       ","name": " פריסת כבלים בשיפוע חיובי במכשיר    <br> Incline Cable Fly Machine   ","timeReps": " 3 סטים × 12 חזרות ","instructions": "https://www.inspireusafoundation.org/file/2023/08/pronated-grip-cable-fly.gif","image": " שב על הספסל המשופע כשגבך צמוד למשענת, אחוז בידיות עם כיפוף קל במרפקים והבא את הידיים קדימה בתנועה אלכסונית כלפי מעלה עד שהן כמעט נפגשות. עצור רגע בכיווץ, ולאחר מכן פתח חזרה את הידיים לצדדים באיטיות תוך שליטה מלאה ושמירה על מרפקים מעט כפופים לאורך כל התרגיל. "},
          {"muscle": " כתף קדמית       ","name": " לחיצת ארנולד במכשיר משולב           <br> Arnold Press Machine        ","timeReps": " 3 סטים × 12 חזרות ","instructions": "https://liftmanual.com/wp-content/uploads/2023/04/lever-seated-shoulder-press.gif","image": " שב זקוף עם גב צמוד למשענת והחזק את הידיות מול החזה בכפיפה. סובב את כפות הידיים כלפי חוץ תוך כדי דחיפה של המשקל מעל הראש עד ליישור כמעט מלא של המרפקים. הקפד לשמור על תנועה חלקה ומבוקרת, על בטן אסופה וכתפיים שאינן קופצות למעלה. "},
          {"muscle": " בייספס – ראש קצר ","name": " כפיפת מרפקים במכשיר סקוט            <br> Preacher Curl Machine       ","timeReps": " 3 סטים × 12 חזרות ","instructions": "https://www.inspireusafoundation.org/file/2023/02/close-grip-preacher-curl.gif","image": " שב כאשר החלק העליון של הזרועות מונח על משטח הסקוט והחזק את הידיות באחיזה תחתית. כופף את המרפקים והעלה את המשקל כלפי מעלה עד כיווץ מלא של הבייספס. החזר לאט ובשליטה את הידיות למטה עד ליישור כמעט מלא, מבלי להניח למשקל ליפול. הקפד לשמור על כתפיים רפויות ונשימה סדירה. "},
          {"muscle": " טרייספס – ראש לטרלי ","name": " לחיצת חזה צרה במכשיר               <br> Close-Grip Chest Press Machine ","timeReps": " 3 סטים × 12 חזרות ","instructions": "https://cdn.jefit.com/assets/img/exercises/gifs/1180.gif","image": " שב זקוף עם גב צמוד למשענת, אחוז את הידיות במרחק צר ביניהן ודחוף אותן קדימה עד ליישור כמעט מלא של המרפקים. שמור על מרפקים קרובים לגוף לכל אורך התנועה ועל שליטה מלאה בהחזרה אחורה. הקפד לא לנעול מרפקים בסוף התנועה ולשמור על נשימה רציפה. "},
          {"muscle": " ייצוב שכמות     ","name": " Face Pull במכשיר כבלים ייעודי       <br> Face Pull Machine           ","timeReps": " 3 סטים × 12 חזרות ","instructions": "https://fitnessprogramer.com/wp-content/uploads/2021/02/Face-Pull.gif","image": " עמוד מול המכשיר כאשר הכבל בגובה הפנים, אחוז בידיות באחיזה מעלית והמשוך לאחור לעבר הפנים תוך פיסוק מרפקים לצדדים. הדגש פתיחת כתפיים וקירוב שכמות בסוף התנועה. החזר את הידיות קדימה באיטיות מבלי לאבד מתח, שמור על גב זקוף ובטן אסופה לאורך כל התרגיל. "},
        ],
      }
    },
    {
      id: "A002",
      title: "כוח תחתון שבוע 2",
      emoji: "🏋️‍♀️",
      minutes: 80,
      plan: {
        "אימון כח": [
          {"muscle": " ישבן (Gluteus)        ","name": " לחיצת ירך במכשיר                 <br> Hip Thrust Machine             ","timeReps": " 3×12              ","instructions": "https://www.docteur-fitness.com/wp-content/uploads/2022/08/hip-thrust-a-la-machine.gif","image": " שב כשהגב העליון נתמך, כפות הרגליים ברוחב אגן והברכיים כפופות, דחוף את האגן מעלה עד ליישור מלא של הירכיים תוך כיווץ הישבן בחוזקה למעלה, החזר לאט מטה בשליטה תוך שמירה על גב ניטרלי ובטן אסופה, הקפד לא להקפיץ את המשקל אלא לשלוט בתנועה לכל אורכה. "},
          {"muscle": " ארבע ראשי (Quadriceps)","name": " פשיטת ברכיים במכשיר             <br> Leg Extension Machine          ","timeReps": " 3×12              ","instructions": "https://fitnessprogramer.com/wp-content/uploads/2021/02/LEG-EXTENSION.gif","image": " שב זקוף כשהגב צמוד למשענת וכפות הרגליים מתחת לכריות, מתח את הברכיים קדימה עד ליישור מלא תוך שמירה על כיווץ בשרירי הירך הקדמיים, עצור לשנייה בחלק העליון והחזר את הרגליים מטה באיטיות, תוך שליטה מלאה וללא נעילת ברכיים. "},
          {"muscle": " ירך אחורית (Hamstrings)","name": " כפיפת ברכיים בשכיבה             <br> Lying Leg Curl Machine         ","timeReps": " 3×12              ","instructions": "https://burnfit.io/wp-content/uploads/2023/11/LEG_CURL.gif","image": " שכב על הבטן כשהעקב מתחת לכריות המכשיר, כופף את הברכיים מעלה עד לכיווץ מלא של שרירי הירך האחוריים, עצור בחלק העליון לשנייה והחזר לאט מטה תוך שליטה מלאה וללא קפיצות, שמור על אגן צמוד לספסל ובטן אסופה לאורך כל התנועה. "},
          {"muscle": " שוק אחורי (Calves)   ","name": " הרמות עקבים                     <br> Standing Calf Raise            ","timeReps": " 3×12              ","instructions": "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Calf-Raise.gif","image": " עמוד זקוף עם כפות הרגליים ברוחב אגן, עלה על קצות האצבעות עד למקסימום גובה תוך כיווץ שרירי השוק האחוריים, החזק שנייה למעלה וחזור לאט מטה עד מתיחה מלאה בעקבים, הקפד לשמור על ברכיים מתוחות אך לא נעולות ותנועה מבוקרת לכל אורך הטווח. "},
          {"muscle": " מסובבי ירך חיצוניים  ","name": " סיבוב חיצוני בירך במכשיר כבלים  <br> Cable Hip External Rotation    ","timeReps": " 3×12              ","instructions": "https://fitnessprogramer.com/wp-content/uploads/2022/02/Resistance-Band-Foot-External-Rotation.gif","image": " עמוד בצד למכשיר עם רצועת קרסול מחוברת לרגל הרחוקה, שמור על יציבה זקופה ובטן אסופה, סובב את הירך החוצה כך שכף הרגל והברך פונים כלפי חוץ, עצור בקצה הטווח והחזר את הרגל פנימה באיטיות, הקפד על טווח תנועה קטן ומדויק ועל שליטה מלאה לאורך כל הביצוע. "},
          {"muscle": " חוטפים (Abductors)   ","name": " כבלים – הרחקת ירך בעמידה         <br> Standing Cable Hip Abduction   ","timeReps": " 3×12              ","instructions": "https://newlife.com.cy/wp-content/uploads/2019/12/08791301-Cable-hip-abduction-version-2_Hips_360.gif","image": " עמוד זקוף ליד המכשיר עם רצועת קרסול מחוברת לרגל החיצונית, שמור על גב ישר ובטן אסופה, הרחק את הרגל הצידה באיטיות עד קצה טווח התנועה תוך שמירה על אגן יציב, עצור לשנייה בחלק החיצוני והחזר את הרגל פנימה בשליטה, הקפד לא להטות את הגוף לצד אלא להפעיל את שרירי הירך החיצוניים בלבד. "},
        ],
      }
    },
    {
      id: "A003",
      title: "כוח משולב שבוע 2",
      emoji: "🏋️‍♀️",
      minutes: 80,
      plan: {
        "אימון כח": [
          {"muscle": " גב – משיכה אנכית ","name": " משיכת פולי עליון צר             <br> Close-Grip Lat Pulldown      ","timeReps": " 3 סטים × 12 חזרות     ","instructions": "https://cdn.shopify.com/s/files/1/0250/0362/2496/files/1204.gif?v=1644907658","image": " שב זקוף כאשר כפות הרגליים על הרצפה, אחוז בידית V, משוך מטה אל מרכז החזה תוך שמירה על מרפקים קרובים לגוף. הקפד לשמור על גב זקוף, שליטה בירידה, ולנשום החוצה במאמץ. "},
          {"muscle": " חזה תחתון         ","name": " פליי כבלים גבוה־לנמוך          <br> High-to-Low Cable Fly        ","timeReps": " 3 סטים × 12 חזרות     ","instructions": "https://fitliferegime.com/wp-content/uploads/2023/06/High-To-Low-Cable-fly.gif","image": " עמוד בין שני כבלים גבוהים, אחוז בידיות והבא אותן מטה בקשת אל מול המותניים. שמור על מרפקים מעט כפופים ותנועה איטית ומבוקרת. נשום החוצה בזמן הקירוב ופנימה בזמן החזרה. "},
          {"muscle": " כתף אמצעית        ","name": " הרחקות צד בכבל                 <br> Cable Lateral Raise          ","timeReps": " 3 סטים × 12 חזרות     ","instructions": "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/03/cable-lateral-raise.gif?fit=600%2C600&ssl=1","image": " עמוד זקוף, אחוז בידית כבל נמוך ביד אחת והרם את היד הצידה עד גובה הכתף. שמור על מרפק מעט כפוף, תנועה איטית ומבוקרת ללא ניפנוף, ובטן אסופה ליציבות. נשום סדיר לאורך כל התרגיל. "},
          {"muscle": " בייספס (Brachialis) ","name": " כפיפת מרפקים בכבל תחתון       <br> Cable Reverse Curl           ","timeReps": " 3 סטים × 12 חזרות     ","instructions": "https://fitnessprogramer.com/wp-content/uploads/2022/02/Cable-Reverse-Grip-EZ-bar-Biceps-Curl.gif","image": " עמוד זקוף מול כבל תחתון עם מוט ישר, אחוז באחיזה הפוכה (כפות ידיים כלפי מטה) וכופף את המרפקים מעלה. שמור על מרפקים צמודים לגוף, שלוט בחזרה מטה, ונשום החוצה במאמץ. "},
          {"muscle": " ישבן              ","name": " בעיטת ירך לאחור במכשיר         <br> Glute Kickback Machine       ","timeReps": " 3 סטים × 12 חזרות לכל רגל ","instructions": "https://i.pinimg.com/originals/df/f0/21/dff02169d4b40b7b5df0f8c80b17e115.gif","image": " עמוד עם חזה צמוד לריפוד, הנח את כף הרגל על הפלטפורמה ודחוף לאחור ולמעלה עד ליישור הירך. שמור על גב ניטרלי, חזור לאט קדימה, ונשום החוצה בזמן הדחיפה. "},
          {"muscle": " ירך אחורית        ","name": " כפיפת ברכיים על כדור יציבה     <br> Stability Ball Hamstring Curl ","timeReps": " 3 סטים × 12 חזרות     ","instructions": "https://cdn.prod.openfit.com/uploads/2017/12/bb_stability-ball_hamstring-roll-out.gif","image": " שכב על הגב, הנח עקבים על כדור יציבה והרם את האגן לגשר. גלגל את הכדור פנימה תוך כיפוף ברכיים ושמירה על אגן יציב. חזור לאט ליישור. שמור על בטן אסופה ונשימה רציפה. "},
          {"muscle": " שוק אחורי (Calves) ","name": " הרמות עקבים על BOSU           <br> Calf Raise on BOSU           ","timeReps": " 3 סטים × 12–15 חזרות  ","instructions": "https://blog.weightlossmadepractical.com/wp-content/uploads/2022/03/How-to-do-a-Bosu-standing-calf-raise.gif","image": " עמוד על כיפת ה־BOSU ברוחב אגן, הרם עקבים מעלה על קצות האצבעות, עצור לשנייה למעלה והורד מטה למתיחה מלאה. שמור על ברכיים מעט כפופות, גב זקוף ותנועה איטית ומבוקרת. "},
          {"muscle": " מקרבי ירך (Adductors) ","name": " סקוואט סומו עם לחיצה פנימה <br> Sumo Squat with Inward Press ","timeReps": " 3 סטים × 12 חזרות     ","instructions": "https://www.verywellfit.com/thmb/-i6U4nnLmsBUIqs8SvuUyhEkMeM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/79--Sumo-SquatGIF-df6fd051e5c1451f93e6e5fa5b6b420f.gif","image": " עמוד בפיסוק רחב, בצע סקוואט סומו עד שהירכיים במקביל לרצפה. בעלייה חזור למעלה תוך הפעלת לחץ קל פנימה עם הברכיים להפעלת המקרבים. שמור על גב זקוף ובטן אסופה לאורך כל התרגיל. "},
        ],
      }
    },
    {
      id: "A004",
      title: "אירובי אליפטיקל",
      emoji: "➿",
      minutes: 20,
      plan: {
        "אירובי": [
          {"muscle": "אירובי","name": "אליפטיקל<br>Elliptical","timeReps": "20 דקות","instructions": "https://www.verywellfit.com/thmb/-i6U4nnLmsBUIqs8SvuUyhEkMeM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/79--Sumo-SquatGIF-df6fd051e5c1451f93e6e5fa5b6b420f.gif","image": ""},
        ],
      }
    },
    {
      id: "A005",
      title: "אירובי אופני כושר",
      emoji: "🚴‍♀️",
      minutes: 20,
      plan: {
        "אירובי": [
          {"muscle": "אירובי","name": "אופני כושר<br>Exercise Bike","timeReps": "20 דקות","instructions": "https://olijoy.com.au/cdn/shop/files/ezgif-74d8c208b48bfe_530x@2x.gif?v=1751247941","image": ""},
        ],
      }
    },
    {
      id: "A006",
      title: "אירובי הליכון",
      emoji: "🏃‍♂️",
      minutes: 20,
      plan: {
        "אירובי": [
          {"muscle": "אירובי","name": "הליכון<br>Treadmill","timeReps": "20 דקות","instructions": "https://burnfit.io/wp-content/uploads/2023/11/TREADMIL.gif","image": ""},
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
          {"muscle": "בטן: כפיפה הפוכה/הרמות רגליים","name": "הרמות רגליים בשכיבה<br>Lying Leg Raise","timeReps": "45 שניות","instructions": "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/10/lying-leg-raises.gif?fit=600%2C600&ssl=1","image": "גב תחתון מודבק לרצפה, להרים רגליים ל־90° ולהוריד לאט בלי לקשת את הגב."},
          {"muscle": "גב תחתון: פשיטת גב","name": "סופרמן סטטי<br>Superman Hold","timeReps": "45 שניות","instructions": "https://www.meridian-fitness.co.uk/wp-content/uploads/2025/01/Superman.gif","image": "שכיבה על הבטן; להרים ידיים/רגליים בעדינות ולהחזיק 10–20ש׳."},
          {"muscle": "בטן: אנטי־סיבוב","name": "פלאנק נגיעות כתף<br>Plank Shoulder Taps","timeReps": "45 שניות","instructions": "https://media.self.com/photos/5a1495c8e91faa1fe331591b/master/w_1600%2Cc_limit/new-years-challenge-t-shoulder-tap.gif","image": "פלאנק על ידיים; לגעת בכתף נגדית בלי להזיז אגן/בית חזה."},
          {"muscle": "אגן ומותן: כפיפת ירך","name": "מרץ בשכיבה<br>Supine March","timeReps": "45 שניות","instructions": "https://media.self.com/photos/5b30f79da8856d42d2ec1c0b/master/w_320%2Cc_limit/marching.gif","image": "90/90 בירכיים/ברכיים; להוריד עקב אחת לרצפה ולחזור, גב ניטרלי."},
          {"muscle": "בטן: לחץ תוך־בטני/ייצוב סטטי","name": "פלאנק אמות<br>Forearm Plank","timeReps": "45 שניות","instructions": "https://hips.hearstapps.com/hmg-prod/images/4-forearm-plank-rocks-fw-and-bk-1550760923.gif?crop=0.846xw:1.00xh;0.0950xw,0&resize=980:*","image": "קו ישר מקרסול עד ראש, בטן נאספת ונשיפה איטית."},
          {"muscle": "סרעפת: נשימה סרעפתית מודעת","name": "נשימת סרעפת בשכיבה<br>Diaphragmatic Breathing (Supine)","timeReps": "45 שניות","instructions": "https://yb-downloads.s3.us-west-1.amazonaws.com/breathing/GIF-Belly-Breathing-with-Book.gif","image": "לשאוף “אל הבטן/צלעות”, לנשוף ארוך, 6–8 נשימות איטיות."},
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
          {"muscle": "בטן: כפיפה קדמית","name": "כפיפות בטן קלאסיות<br>Crunch","timeReps": "45 שניות","instructions": "https://media1.tenor.com/m/cp12e2K3YWIAAAAd/floor-crunch.gif","image": "להרים שכמות מהרצפה, סנטר רחוק מהחזה, ירידה איטית."},
          {"muscle": "גב תחתון: אנטי־כיפוף קדמי","name": "דד־באג<br>Dead Bug","timeReps": "45 שניות","instructions": "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXA0N2I1cG1qcjJscGdub3lmOWc4cGoyMnVyeWF6YmhqdTFwOGQ0cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aIyZ9Ra6pyo5ZOHQsm/giphy.gif","image": "שכיבה; יד/רגל נגדיים מטה תוך הדבקת מותנית."},
          {"muscle": "בטן: אנטי־סיבוב","name": "פלאנק עם הושטת יד<br>Plank Reach","timeReps": "45 שניות","instructions": "https://i.makeagif.com/media/5-27-2018/mWAX67.gif","image": "פלאנק על ידיים; להושיט יד קדימה, לשמור אגן יציב, להחליף."},
          {"muscle": "אגן ומותן: ייצוב/הטיות אגן","name": "גשר ישבן<br>Glute Bridge","timeReps": "45 שניות","instructions": "https://media1.tenor.com/m/i5B_Un9s7woAAAAC/glute-bridge-exercise.gif","image": "דחיפת אגן מעלה, צלעות סגורות, עצירה שנייה למעלה."},
          {"muscle": "גב תחתון: ייצוב דינמי","name": "בירד דוג<br>Bird Dog","timeReps": "45 שניות","instructions": "https://media.self.com/photos/61a7aa8d140ff57c06f4657e/master/w_1600%2Cc_limit/Gail-bird-dog-same-side.gif","image": "עמידת שש; יד ורגל נגדיים, 2ש׳ עצירה, גב ניטרלי."},
          {"muscle": "שרירים תומכים: אנטי־כיפוף צדי","name": "פלאנק צד<br>Side Plank","timeReps": "45 שניות","instructions": "https://exrx.net/application/files/thumbnails/small/4015/7561/9763/SidePlankElbow.jpg","image": "מרפק תחת כתף; להרים אגן ולשמור קו ישר."},
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
          {"muscle": "בטן: כפיפה הפוכה/הרמות רגליים","name": "רוורס קרנצ'<br>Reverse Crunch","timeReps": "45 שניות","instructions": "https://gymvisual.com/img/p/1/8/7/0/1/18701.gif","image": "ברכיים לחזה בהטיית אגן, ירידה איטית."},
          {"muscle": "גב תחתון: פשיטת גב","name": "סופרמן חילופי<br>Alternating Superman","timeReps": "45 שניות","instructions": "https://gymvisual.com/img/p/1/9/7/8/1/19781.gif","image": "להרים יד ורגל נגדיים, עצירה קצרה והחלפה."},
          {"muscle": "בטן: סיבוב/אלכסונים","name": "ר׳שיאן טוויסט (ללא משקל)<br>Russian Twist","timeReps": "45 שניות","instructions": "https://gymvisual.com/img/p/3/6/2/2/6/36226.gif","image": "ישיבה בזווית ~45°, לסובב פלג גוף עליון מצד לצד."},
          {"muscle": "גב תחתון: ייצוב דינמי","name": "בירד דוג – עצירה<br>Bird Dog (Pause)","timeReps": "45 שניות","instructions": "https://images.ctfassets.net/4f3rgqwzdznj/5d2egksWLycwkFFpN1NzCa/8ca1ff665efa098a0451d7a343128c33/Bird-Dog_1296x729.gif","image": "כמו רגיל אך עצירה 3–5ש׳ בכל חזרה."},
          {"muscle": "בטן: לחץ תוך־בטני/ייצוב סטטי","name": "הולו הולד<br>Hollow Body Hold","timeReps": "45 שניות","instructions": "https://gymvisual.com/img/p/9/0/7/5/9075.gif","image": "שכיבה; להרים שכמות/שוקיים, מותנית דבוקה, נשימות קצרות."},
          {"muscle": "אגן ומותן: הרחקה/קירוב ירך","name": "הרחקת ירך בשכיבה צדית<br>Side-Lying Hip Abduction","timeReps": "45 שניות","instructions": "https://burnfit.io/wp-content/uploads/2023/11/LYING_HIP_ABD.gif","image": "שכיבה על הצד; רגל עליונה מתרוממת בלי לסובב אגן."},
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
          {"muscle": "בטן: כפיפה קדמית","name": "קרנצ' ידיים קדימה<br>Arms-Forward Crunch","timeReps": "45 שניות","instructions": "https://images.squarespace-cdn.com/content/v1/594953034c8b0371ef0da06a/1499627201201-9Z0VNI3HSQODJ4EZ98U7/image-asset.gif","image": "ידיים קדימה להקטנת משיכה בצוואר; עלייה קצרה ומבוקרת."},
          {"muscle": "גב תחתון: אנטי־כיפוף קדמי","name": "דד־באג – החזקות<br>Dead Bug (Holds)","timeReps": "45 שניות","instructions": "https://gymvisual.com/img/p/2/1/8/3/7/21837.gif","image": "להוריד יד/רגל ולהחזיק 2–3ש׳ תוך הדבקת מותנית."},
          {"muscle": "בטן: כפיפה הפוכה/הרמות רגליים","name": "הרמות רגליים עם עצירה<br>Leg Raise (Isometric Hold)","timeReps": "45 שניות","instructions": "https://gymvisual.com/img/p/1/5/6/1/4/15614.gif","image": "לעצור 2–3ש׳ ב־45–60°, לשמור גב מודבק."},
          {"muscle": "סרעפת: 360° Breathing","name": "נשימת 360°<br>360° Breathing","timeReps": "45 שניות","instructions": "https://www.hopkinsmedicine.org/-/media/images/health/1_-conditions/coronavirus/new-breathing-exercises-gif-2.ashx?h=270&iar=0&mh=400&mw=670&w=480&hash=EE76FD62CC10D2C6701DCBF06EDF2FB5","image": "ישיבה/עמידה; שאיפה להרחבת כלוב הצלעות לכל הכיוונים, נשיפה איטית."},
          {"muscle": "בטן: אנטי־סיבוב","name": "דוב-פלאנק נגיעות כתף<br>Bear Plank Shoulder Taps","timeReps": "45 שניות","instructions": "https://i.pinimg.com/originals/0c/cc/26/0ccc26a895e480f959baf1727ccc30cc.gif","image": "ברכיים מרחפות מעל הרצפה; נגיעות כתף בלי נדנוד אגן."},
          {"muscle": "שרירים תומכים: אנטי־כיפוף צדי","name": "פלאנק צד עם “דיפים”<br>Side Plank Hip Dips","timeReps": "45 שניות","instructions": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdailyburn.com%2Flife%2Ffitness%2Fhow-to-side-plank-dip-like-a-pro%2F&psig=AOvVaw3RvIS3flcPC1xlbvJHus3l&ust=1756456374368000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKCn_oeMrY8DFQAAAAAdAAAAABAE","image": "להוריד/להרים אגן בטווח קצר תוך שמירה על קו."},
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
          {"muscle": "בטן: כפיפה הפוכה/הרמות רגליים","name": "רוורס קרנצ' עם עצירה<br>Reverse Crunch (Pause)","timeReps": "45 שניות","instructions": "https://www.healthynexercise.com/wp-content/uploads/2022/04/How-to-do-a-reverse-crunch.gif","image": "עצירה קצרה בסוף הכפיפה; ירידה איטית."},
          {"muscle": "אגן ומותן: כפיפת ירך","name": "הרמות רגל ישרה בישיבה<br>Seated Straight-Leg Lift","timeReps": "45 שניות","instructions": "https://www.mitrecsports.com/assets/sit.gif","image": "ישיבה זקופה; להרים רגל ישרה מהקרקע בלי לקרוס בגב."},
          {"muscle": "בטן: סיבוב/אלכסונים","name": "בייסיקל איטי<br>Slow Bicycle Crunch","timeReps": "45 שניות","instructions": "https://media.post.rvohealth.io/wp-content/uploads/2020/09/Bicycle-crunch.gif","image": "קצב איטי; להחזיק מגע מרפק-ברך שנייה אחת."},
          {"muscle": "אגן ומותן: ייצוב/הטיות אגן","name": "גשר ישבן “מרצ'”<br>Glute Bridge March","timeReps": "45 שניות","instructions": "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/08/glutebridgemarch-1472218794.gif","image": "גשר; להרים רגל אחת, לשמור אגן מאוזן ולהחליף."},
          {"muscle": "בטן: אנטי־סיבוב","name": "פלאנק – הרמות רגל מתחלפות<br>Plank Alt. Leg Lift","timeReps": "45 שניות","instructions": "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/plankwithleglift-1457101889.gif","image": "פלאנק אמות; להרים רגל ישרה מעט, לשמור אגן מאוזן."},
          {"muscle": "שרירים תומכים: ייצוב שכמות","name": "פוש-אפ פלוס (סרייטוס)<br>Push-Up Plus","timeReps": "45 שניות","instructions": "https://gymvisual.com/img/p/1/2/5/6/1/12561.gif","image": "תנוחת שכיבה; דחיפת השכמות “קדימה” בסוף הטווח, חזרה."},
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
          {"muscle": "בטן: כפיפה קדמית","name": "קרנצ' איזומטרי<br>Isometric Crunch Hold","timeReps": "45 שניות","instructions": "https://gymvisual.com/img/p/1/8/7/0/3/18703.gif","image": "עליה קצרה ולהחזיק 3–5ש׳ לפני ירידה."},
          {"muscle": "גב תחתון: פשיטת גב","name": "סופרמן סטטי<br>Superman Hold","timeReps": "45 שניות","instructions": "https://gymvisual.com/img/p/2/0/9/0/2/20902.gif","image": "החזקה 10–20ש׳, ירידה מבוקרת, 2–3 סטים קצרים."},
          {"muscle": "בטן: סיבוב/אלכסונים","name": "ר׳שיאן טוויסט איטי<br>Slow Russian Twist","timeReps": "45 שניות","instructions": "https://hw.qld.gov.au/wp-content/uploads/2015/07/25_M_WIP02.gif","image": "טווח קטן, שליטה מלאה; לשמור בית חזה פתוח."},
          {"muscle": "גב תחתון: ייצוב דינמי","name": "בירד דוג “סווּיפ”<br>Bird Dog Reach & Sweep","timeReps": "45 שניות","instructions": "https://media.self.com/photos/59c8187d41062372cfaba034/master/w_320%2Cc_limit/Fitness_12.gif","image": "להגיע קדימה ואז “לסחוף” יד לצדי הירך בלי להזיז אגן."},
          {"muscle": "בטן: לחץ תוך־בטני/ייצוב סטטי","name": "פלאנק RKC<br>RKC Plank","timeReps": "45 שניות","instructions": "https://burnfit.io/wp-content/uploads/2023/11/RKC_PLANK.gif","image": "לסגור מרפקים לעבר הצלעות, כיווץ ישבן/בטן 10–20ש׳."},
          {"muscle": "אגן ומותן: הרחקה/קירוב ירך","name": "אדוקציה בשכיבה צדית (רגל תחתונה)<br>Side-Lying Inner-Thigh Lift","timeReps": "45 שניות","instructions": "https://media.self.com/photos/59f2438722489f72a3de2e32/master/w_320%2Cc_limit/butt6.gif","image": "שכיבה על הצד; להרים רגל תחתונה מעלה לשנייה ולהוריד לאט."},
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
          {"muscle": " צוואר וכתפיים         ","name": " מתיחת צד צוואר                           <br> Neck Side Stretch       ","timeReps": "45 שניות","instructions": "https://gymvisual.com/img/p/3/0/2/2/9/30229.gif","image": " ישיבה או עמידה, אוזן לכיוון כתף, יד קלה מעל הראש. צד ימין ושמאל.          "},
          {"muscle": " צוואר וכתפיים         ","name": " מתיחת כתף חוצה גוף                       <br> Cross-Body Shoulder Stretch ","timeReps": "45 שניות","instructions": "https://gymvisual.com/img/p/3/0/2/3/2/30232.gif","image": " יד אחת חוצה את הגוף, היד השנייה מושכת אותה בעדינות פנימה.              "},
          {"muscle": " פתיחת חזה וגב עליון   ","name": " פותח חזה                                  <br> Chest Opener            ","timeReps": "45 שניות","instructions": "https://images.squarespace-cdn.com/content/v1/5a620a85d55b41e7233c5243/ae25b65f-ef76-40f5-8091-76cb07bdad9b/PleasantTerrificBettong-size_restricted.gif","image": " שילוב ידיים מאחורי הגב ודחיפה עדינה לאחור.                               "},
          {"muscle": " פתיחת חזה וגב עליון   ","name": " חתול–פרה (דינמי)                         <br> Cat-Cow (Dynamic)       ","timeReps": "45 שניות","instructions": "https://images.ctfassets.net/6ilvqec50fal/5BBiIrimbbfn99yF09s4yW/7d2e0e8da5b70b77fd6897313d71fb7c/Untitled_design__26_.gif","image": " בעמידת שש, מעבר איטי בין קימור לגישור הגב.                              "},
          {"muscle": " עמוד שדרה וצד הגוף    ","name": " פיתול עמוד שדרה בישיבה                   <br> Seated Spinal Twist     ","timeReps": "45 שניות","instructions": "https://cdn.shopify.com/s/files/1/0512/9945/1076/files/FearlessUnimportantGoldeneye-size_restricted_480x480.gif?v=1638905771","image": " ישיבה, רגל אחת מעבר לירך השנייה, סיבוב עדין של הגב. צד ימין ושמאל.     "},
          {"muscle": " עמוד שדרה וצד הגוף    ","name": " מתיחת כפיפה לצד                          <br> Side Bend Stretch       ","timeReps": "45 שניות","instructions": "https://fitnessprogramer.com/wp-content/uploads/2022/09/standing-side-bend.gif","image": " ישיבה או עמידה, יד אחת עולה למעלה והגוף נוטה לצד השני.                  "},
          {"muscle": " ירך קדמית      ","name": " מתיחת פושטי ירך                          <br> Hip Flexor Stretch      ","timeReps": "45 שניות","instructions": "https://gymvisual.com/img/p/2/1/5/6/9/21569.gif","image": " מכרע קדמי, אגן דוחף קדימה, גב זקוף. צד ימין ושמאל.                      "},
          {"muscle": " ירך אחורית     ","name": " מתיחת מסטרינגס                           <br> Hamstring Stretch       ","timeReps": "45 שניות","instructions": "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2022/11/400x400-Seated_Hamstring_Stretch.gif","image": " רגל קדימה ישרה, גב ישר, כפיפה קלה קדימה. צד ימין ושמאל.                 "},
          {"muscle": " ירך פנימית וחיצונית   ","name": " מתיחת פרפר                               <br> Butterfly Stretch       ","timeReps": "45 שניות","instructions": "https://fitnessprogramer.com/wp-content/uploads/2021/02/Butterfly-Stretch.gif","image": " ישיבה, כפות רגליים צמודות, ברכיים פתוחות החוצה.                        "},
          {"muscle": " ירך פנימית וחיצונית   ","name": " מתיחת פיגר 4                             <br> Figure-4 Stretch        ","timeReps": "45 שניות","instructions": "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_29/1751659/figurefour.gif","image": " שכיבה על הגב, רגל אחת מונחת על השנייה בצורת 4, משיכה לכיוון הגוף.     "},
          {"muscle": " שוק וקרסול            ","name": " מתיחת שוק                                <br> Calf Stretch            ","timeReps": "45 שניות","instructions": "https://liftmanual.com/wp-content/uploads/2023/04/standing-toe-up-calf-stretch.gif","image": " נשענים על קיר, רגל אחורית ישרה, עקב על הרצפה. צד ימין ושמאל.            "},
          {"muscle": " שוק וקרסול            ","name": " סיבובי קרסול                            <br> Ankle Circles           ","timeReps": "45 שניות","instructions": "https://cdn.jefit.com/assets/img/exercises/gifs/289.gif","image": " ישיבה או עמידה על רגל אחת, סיבובי קרסול איטיים לכל כיוון.              "},
        ],
      }
    },
    {
      id: "balacehome",
      title: "אימון שיווי משקל",
      emoji: "🤹‍♂️",
      minutes: 10,
      plan: {
        "אימון שיווי משקל": [
          {"muscle": "מגוון שרירים","name": "מגוון תרגילים<br>Variety of exercises","timeReps": "","instructions": "","image": ""},
        ],
      }
    },
  ]
};