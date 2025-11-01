const WORKOUTS = [

    {
      id: "strechHome",
      title: "אימון גמישות ביתי",
      emoji: "🧘‍♀️",
      minutes: 10,
      category: "מתיחות",
      locations: ["home"],
      exercises: 
        [
                {
        muscle: " צוואר וכתפיים         ",
        nameHe: " מתיחת צד צוואר                           ",
        nameEn: " Neck Side Stretch       ",
        timeReps: "45 שניות",
        instructions: " ישיבה או עמידה, אוזן לכיוון כתף, יד קלה מעל הראש. צד ימין ושמאל.          ",
        imageURL: "https://gymvisual.com/img/p/3/0/2/2/9/30229.gif"
      },
                {
        muscle: " צוואר וכתפיים         ",
        nameHe: " מתיחת כתף חוצה גוף                       ",
        nameEn: " Cross-Body Shoulder Stretch ",
        timeReps: "45 שניות",
        instructions: " יד אחת חוצה את הגוף, היד השנייה מושכת אותה בעדינות פנימה.              ",
        imageURL: "https://gymvisual.com/img/p/3/0/2/3/2/30232.gif"
      },
                {
        muscle: " פתיחת חזה וגב עליון   ",
        nameHe: " פותח חזה                                  ",
        nameEn: " Chest Opener            ",
        timeReps: "45 שניות",
        instructions: " שילוב ידיים מאחורי הגב ודחיפה עדינה לאחור.                               ",
        imageURL: "https://images.squarespace-cdn.com/content/v1/5a620a85d55b41e7233c5243/ae25b65f-ef76-40f5-8091-76cb07bdad9b/PleasantTerrificBettong-size_restricted.gif"
      },
                {
        muscle: " פתיחת חזה וגב עליון   ",
        nameHe: " חתול–פרה (דינמי)                         ",
        nameEn: " Cat-Cow (Dynamic)       ",
        timeReps: "45 שניות",
        instructions: " בעמידת שש, מעבר איטי בין קימור לגישור הגב.                              ",
        imageURL: "https://images.ctfassets.net/6ilvqec50fal/5BBiIrimbbfn99yF09s4yW/7d2e0e8da5b70b77fd6897313d71fb7c/Untitled_design__26_.gif"
      },
                {
        muscle: " עמוד שדרה וצד הגוף    ",
        nameHe: " פיתול עמוד שדרה בישיבה                   ",
        nameEn: " Seated Spinal Twist     ",
        timeReps: "45 שניות",
        instructions: " ישיבה, רגל אחת מעבר לירך השנייה, סיבוב עדין של הגב. צד ימין ושמאל.     ",
        imageURL: "https://cdn.shopify.com/s/files/1/0512/9945/1076/files/FearlessUnimportantGoldeneye-size_restricted_480x480.gif?v=1638905771"
      },
                {
        muscle: " עמוד שדרה וצד הגוף    ",
        nameHe: " מתיחת כפיפה לצד                          ",
        nameEn: " Side Bend Stretch       ",
        timeReps: "45 שניות",
        instructions: " ישיבה או עמידה, יד אחת עולה למעלה והגוף נוטה לצד השני.                  ",
        imageURL: "https://fitnessprogramer.com/wp-content/uploads/2022/09/standing-side-bend.gif"
      },
                {
        muscle: " ירך קדמית      ",
        nameHe: " מתיחת פושטי ירך                          ",
        nameEn: " Hip Flexor Stretch      ",
        timeReps: "45 שניות",
        instructions: " מכרע קדמי, אגן דוחף קדימה, גב זקוף. צד ימין ושמאל.                      ",
        imageURL: "https://gymvisual.com/img/p/2/1/5/6/9/21569.gif"
      },
                {
        muscle: " ירך אחורית     ",
        nameHe: " מתיחת מסטרינגס                           ",
        nameEn: " Hamstring Stretch       ",
        timeReps: "45 שניות",
        instructions: " רגל קדימה ישרה, גב ישר, כפיפה קלה קדימה. צד ימין ושמאל.                 ",
        imageURL: "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2022/11/400x400-Seated_Hamstring_Stretch.gif"
      },
                {
        muscle: " ירך פנימית וחיצונית   ",
        nameHe: " מתיחת פרפר                               ",
        nameEn: " Butterfly Stretch       ",
        timeReps: "45 שניות",
        instructions: " ישיבה, כפות רגליים צמודות, ברכיים פתוחות החוצה.                        ",
        imageURL: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Butterfly-Stretch.gif"
      },
                {
        muscle: " ירך פנימית וחיצונית   ",
        nameHe: " מתיחת פיגר 4                             ",
        nameEn: " Figure-4 Stretch        ",
        timeReps: "45 שניות",
        instructions: " שכיבה על הגב, רגל אחת מונחת על השנייה בצורת 4, משיכה לכיוון הגוף.     ",
        imageURL: "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_29/1751659/figurefour.gif"
      },
                {
        muscle: " שוק וקרסול            ",
        nameHe: " מתיחת שוק                                ",
        nameEn: " Calf Stretch            ",
        timeReps: "45 שניות",
        instructions: " נשענים על קיר, רגל אחורית ישרה, עקב על הרצפה. צד ימין ושמאל.            ",
        imageURL: "https://liftmanual.com/wp-content/uploads/2023/04/standing-toe-up-calf-stretch.gif"
      },
                {
        muscle: " שוק וקרסול            ",
        nameHe: " סיבובי קרסול                            ",
        nameEn: " Ankle Circles           ",
        timeReps: "45 שניות",
        instructions: " ישיבה או עמידה על רגל אחת, סיבובי קרסול איטיים לכל כיוון.              ",
        imageURL: "https://cdn.jefit.com/assets/img/exercises/gifs/289.gif"
      },
        ],
    },
    {
      id: "balacehome",
      title: "אימון שיווי משקל",
      emoji: "🤹‍♂️",
      minutes: 10,
      category: "אימון שיווי משקל",
      locations: ["home"],
      exercises: 
        [
                {
        muscle: "מגוון שרירים",
        nameHe: "מגוון תרגילים",
        nameEn: "Variety of exercises",
        timeReps: "",
        instructions: "",
        imageURL: ""
      },
        ],
    },
    {
      id: "A001",
      title: "כוח עליון שבוע 2",
      emoji: "🏋️‍♀️",
      minutes: 80,
      category: "אימון כח",
      locations: ["gym"],
      exercises: 
        [
                {
        muscle: " גב – משיכה אופקית ",
        nameHe: " חתירת T במכשיר                      ",
        nameEn: " T-Bar Row Machine           ",
        timeReps: " 3 סטים × 12 חזרות ",
        instructions: " שב עם חזה צמוד למשענת ורגליים יציבות על הרצפה, אחוז בידיות והתחל למשוך אותן לכיוון החזה התחתון תוך שמירה על גב ניטרלי וכתפיים לא משוחררות קדימה. הקפד לקרב שכמות בסוף התנועה ולהחזיר את הידיות לאט ובשליטה מלאה מבלי לאבד מתח. ",
        imageURL: "https://cdn.shopify.com/s/files/1/0618/9462/3460/files/remada-pronada-maquina_chest_supported_Rows_gif___Google_Search.gif"
      },
                {
        muscle: " חזה עליון       ",
        nameHe: " פריסת כבלים בשיפוע חיובי במכשיר    ",
        nameEn: " Incline Cable Fly Machine   ",
        timeReps: " 3 סטים × 12 חזרות ",
        instructions: " שב על הספסל המשופע כשגבך צמוד למשענת, אחוז בידיות עם כיפוף קל במרפקים והבא את הידיים קדימה בתנועה אלכסונית כלפי מעלה עד שהן כמעט נפגשות. עצור רגע בכיווץ, ולאחר מכן פתח חזרה את הידיים לצדדים באיטיות תוך שליטה מלאה ושמירה על מרפקים מעט כפופים לאורך כל התרגיל. ",
        imageURL: "https://www.inspireusafoundation.org/file/2023/08/pronated-grip-cable-fly.gif"
      },
                {
        muscle: " כתף קדמית       ",
        nameHe: " לחיצת ארנולד במכשיר משולב           ",
        nameEn: " Arnold Press Machine        ",
        timeReps: " 3 סטים × 12 חזרות ",
        instructions: " שב זקוף עם גב צמוד למשענת והחזק את הידיות מול החזה בכפיפה. סובב את כפות הידיים כלפי חוץ תוך כדי דחיפה של המשקל מעל הראש עד ליישור כמעט מלא של המרפקים. הקפד לשמור על תנועה חלקה ומבוקרת, על בטן אסופה וכתפיים שאינן קופצות למעלה. ",
        imageURL: "https://liftmanual.com/wp-content/uploads/2023/04/lever-seated-shoulder-press.gif"
      },
                {
        muscle: " בייספס – ראש קצר ",
        nameHe: " כפיפת מרפקים במכשיר סקוט            ",
        nameEn: " Preacher Curl Machine       ",
        timeReps: " 3 סטים × 12 חזרות ",
        instructions: " שב כאשר החלק העליון של הזרועות מונח על משטח הסקוט והחזק את הידיות באחיזה תחתית. כופף את המרפקים והעלה את המשקל כלפי מעלה עד כיווץ מלא של הבייספס. החזר לאט ובשליטה את הידיות למטה עד ליישור כמעט מלא, מבלי להניח למשקל ליפול. הקפד לשמור על כתפיים רפויות ונשימה סדירה. ",
        imageURL: "https://www.inspireusafoundation.org/file/2023/02/close-grip-preacher-curl.gif"
      },
                {
        muscle: " טרייספס – ראש לטרלי ",
        nameHe: " לחיצת חזה צרה במכשיר               ",
        nameEn: " Close-Grip Chest Press Machine ",
        timeReps: " 3 סטים × 12 חזרות ",
        instructions: " שב זקוף עם גב צמוד למשענת, אחוז את הידיות במרחק צר ביניהן ודחוף אותן קדימה עד ליישור כמעט מלא של המרפקים. שמור על מרפקים קרובים לגוף לכל אורך התנועה ועל שליטה מלאה בהחזרה אחורה. הקפד לא לנעול מרפקים בסוף התנועה ולשמור על נשימה רציפה. ",
        imageURL: "https://cdn.jefit.com/assets/img/exercises/gifs/1180.gif"
      },
                {
        muscle: " ייצוב שכמות     ",
        nameHe: " Face Pull במכשיר כבלים ייעודי       ",
        nameEn: " Face Pull Machine           ",
        timeReps: " 3 סטים × 12 חזרות ",
        instructions: " עמוד מול המכשיר כאשר הכבל בגובה הפנים, אחוז בידיות באחיזה מעלית והמשוך לאחור לעבר הפנים תוך פיסוק מרפקים לצדדים. הדגש פתיחת כתפיים וקירוב שכמות בסוף התנועה. החזר את הידיות קדימה באיטיות מבלי לאבד מתח, שמור על גב זקוף ובטן אסופה לאורך כל התרגיל. ",
        imageURL: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Face-Pull.gif"
      },
        ],
    },
    {
      id: "A002",
      title: "כוח תחתון שבוע 2",
      emoji: "🏋️‍♀️",
      minutes: 80,
      category: "אימון כח",
      locations: ["gym"],
      exercises: 
        [
                {
        muscle: " ישבן (Gluteus)        ",
        nameHe: " לחיצת ירך במכשיר                 ",
        nameEn: " Hip Thrust Machine             ",
        timeReps: " 3×12              ",
        instructions: " שב כשהגב העליון נתמך, כפות הרגליים ברוחב אגן והברכיים כפופות, דחוף את האגן מעלה עד ליישור מלא של הירכיים תוך כיווץ הישבן בחוזקה למעלה, החזר לאט מטה בשליטה תוך שמירה על גב ניטרלי ובטן אסופה, הקפד לא להקפיץ את המשקל אלא לשלוט בתנועה לכל אורכה. ",
        imageURL: "https://www.docteur-fitness.com/wp-content/uploads/2022/08/hip-thrust-a-la-machine.gif"
      },
                {
        muscle: " ארבע ראשי (Quadriceps)",
        nameHe: " פשיטת ברכיים במכשיר             ",
        nameEn: " Leg Extension Machine          ",
        timeReps: " 3×12              ",
        instructions: " שב זקוף כשהגב צמוד למשענת וכפות הרגליים מתחת לכריות, מתח את הברכיים קדימה עד ליישור מלא תוך שמירה על כיווץ בשרירי הירך הקדמיים, עצור לשנייה בחלק העליון והחזר את הרגליים מטה באיטיות, תוך שליטה מלאה וללא נעילת ברכיים. ",
        imageURL: "https://fitnessprogramer.com/wp-content/uploads/2021/02/LEG-EXTENSION.gif"
      },
                {
        muscle: " ירך אחורית (Hamstrings)",
        nameHe: " כפיפת ברכיים בשכיבה             ",
        nameEn: " Lying Leg Curl Machine         ",
        timeReps: " 3×12              ",
        instructions: " שכב על הבטן כשהעקב מתחת לכריות המכשיר, כופף את הברכיים מעלה עד לכיווץ מלא של שרירי הירך האחוריים, עצור בחלק העליון לשנייה והחזר לאט מטה תוך שליטה מלאה וללא קפיצות, שמור על אגן צמוד לספסל ובטן אסופה לאורך כל התנועה. ",
        imageURL: "https://burnfit.io/wp-content/uploads/2023/11/LEG_CURL.gif"
      },
                {
        muscle: " שוק אחורי (Calves)   ",
        nameHe: " הרמות עקבים                     ",
        nameEn: " Standing Calf Raise            ",
        timeReps: " 3×12              ",
        instructions: " עמוד זקוף עם כפות הרגליים ברוחב אגן, עלה על קצות האצבעות עד למקסימום גובה תוך כיווץ שרירי השוק האחוריים, החזק שנייה למעלה וחזור לאט מטה עד מתיחה מלאה בעקבים, הקפד לשמור על ברכיים מתוחות אך לא נעולות ותנועה מבוקרת לכל אורך הטווח. ",
        imageURL: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Calf-Raise.gif"
      },
                {
        muscle: " מסובבי ירך חיצוניים  ",
        nameHe: " סיבוב חיצוני בירך במכשיר כבלים  ",
        nameEn: " Cable Hip External Rotation    ",
        timeReps: " 3×12              ",
        instructions: " עמוד בצד למכשיר עם רצועת קרסול מחוברת לרגל הרחוקה, שמור על יציבה זקופה ובטן אסופה, סובב את הירך החוצה כך שכף הרגל והברך פונים כלפי חוץ, עצור בקצה הטווח והחזר את הרגל פנימה באיטיות, הקפד על טווח תנועה קטן ומדויק ועל שליטה מלאה לאורך כל הביצוע. ",
        imageURL: "https://fitnessprogramer.com/wp-content/uploads/2022/02/Resistance-Band-Foot-External-Rotation.gif"
      },
                {
        muscle: " חוטפים (Abductors)   ",
        nameHe: " כבלים – הרחקת ירך בעמידה         ",
        nameEn: " Standing Cable Hip Abduction   ",
        timeReps: " 3×12              ",
        instructions: " עמוד זקוף ליד המכשיר עם רצועת קרסול מחוברת לרגל החיצונית, שמור על גב ישר ובטן אסופה, הרחק את הרגל הצידה באיטיות עד קצה טווח התנועה תוך שמירה על אגן יציב, עצור לשנייה בחלק החיצוני והחזר את הרגל פנימה בשליטה, הקפד לא להטות את הגוף לצד אלא להפעיל את שרירי הירך החיצוניים בלבד. ",
        imageURL: "https://newlife.com.cy/wp-content/uploads/2019/12/08791301-Cable-hip-abduction-version-2_Hips_360.gif"
      },
        ],
    },
    {
      id: "A003",
      title: "כוח משולב שבוע 2",
      emoji: "🏋️‍♀️",
      minutes: 80,
      category: "אימון כח",
      locations: ["gym"],
      exercises: 
        [
                {
        muscle: " גב – משיכה אנכית ",
        nameHe: " משיכת פולי עליון צר             ",
        nameEn: " Close-Grip Lat Pulldown      ",
        timeReps: " 3 סטים × 12 חזרות     ",
        instructions: " שב זקוף כאשר כפות הרגליים על הרצפה, אחוז בידית V, משוך מטה אל מרכז החזה תוך שמירה על מרפקים קרובים לגוף. הקפד לשמור על גב זקוף, שליטה בירידה, ולנשום החוצה במאמץ. ",
        imageURL: "https://cdn.shopify.com/s/files/1/0250/0362/2496/files/1204.gif?v=1644907658"
      },
                {
        muscle: " חזה תחתון         ",
        nameHe: " פליי כבלים גבוה־לנמוך          ",
        nameEn: " High-to-Low Cable Fly        ",
        timeReps: " 3 סטים × 12 חזרות     ",
        instructions: " עמוד בין שני כבלים גבוהים, אחוז בידיות והבא אותן מטה בקשת אל מול המותניים. שמור על מרפקים מעט כפופים ותנועה איטית ומבוקרת. נשום החוצה בזמן הקירוב ופנימה בזמן החזרה. ",
        imageURL: "https://fitliferegime.com/wp-content/uploads/2023/06/High-To-Low-Cable-fly.gif"
      },
                {
        muscle: " כתף אמצעית        ",
        nameHe: " הרחקות צד בכבל                 ",
        nameEn: " Cable Lateral Raise          ",
        timeReps: " 3 סטים × 12 חזרות     ",
        instructions: " עמוד זקוף, אחוז בידית כבל נמוך ביד אחת והרם את היד הצידה עד גובה הכתף. שמור על מרפק מעט כפוף, תנועה איטית ומבוקרת ללא ניפנוף, ובטן אסופה ליציבות. נשום סדיר לאורך כל התרגיל. ",
        imageURL: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/03/cable-lateral-raise.gif?fit=600%2C600&ssl=1"
      },
                {
        muscle: " בייספס (Brachialis) ",
        nameHe: " כפיפת מרפקים בכבל תחתון       ",
        nameEn: " Cable Reverse Curl           ",
        timeReps: " 3 סטים × 12 חזרות     ",
        instructions: " עמוד זקוף מול כבל תחתון עם מוט ישר, אחוז באחיזה הפוכה (כפות ידיים כלפי מטה) וכופף את המרפקים מעלה. שמור על מרפקים צמודים לגוף, שלוט בחזרה מטה, ונשום החוצה במאמץ. ",
        imageURL: "https://fitnessprogramer.com/wp-content/uploads/2022/02/Cable-Reverse-Grip-EZ-bar-Biceps-Curl.gif"
      },
                {
        muscle: " ישבן              ",
        nameHe: " בעיטת ירך לאחור במכשיר         ",
        nameEn: " Glute Kickback Machine       ",
        timeReps: " 3 סטים × 12 חזרות לכל רגל ",
        instructions: " עמוד עם חזה צמוד לריפוד, הנח את כף הרגל על הפלטפורמה ודחוף לאחור ולמעלה עד ליישור הירך. שמור על גב ניטרלי, חזור לאט קדימה, ונשום החוצה בזמן הדחיפה. ",
        imageURL: "https://i.pinimg.com/originals/df/f0/21/dff02169d4b40b7b5df0f8c80b17e115.gif"
      },
                {
        muscle: " ירך אחורית        ",
        nameHe: " כפיפת ברכיים על כדור יציבה     ",
        nameEn: " Stability Ball Hamstring Curl ",
        timeReps: " 3 סטים × 12 חזרות     ",
        instructions: " שכב על הגב, הנח עקבים על כדור יציבה והרם את האגן לגשר. גלגל את הכדור פנימה תוך כיפוף ברכיים ושמירה על אגן יציב. חזור לאט ליישור. שמור על בטן אסופה ונשימה רציפה. ",
        imageURL: "https://cdn.prod.openfit.com/uploads/2017/12/bb_stability-ball_hamstring-roll-out.gif"
      },
                {
        muscle: " שוק אחורי (Calves) ",
        nameHe: " הרמות עקבים על BOSU           ",
        nameEn: " Calf Raise on BOSU           ",
        timeReps: " 3 סטים × 12–15 חזרות  ",
        instructions: " עמוד על כיפת ה־BOSU ברוחב אגן, הרם עקבים מעלה על קצות האצבעות, עצור לשנייה למעלה והורד מטה למתיחה מלאה. שמור על ברכיים מעט כפופות, גב זקוף ותנועה איטית ומבוקרת. ",
        imageURL: "https://blog.weightlossmadepractical.com/wp-content/uploads/2022/03/How-to-do-a-Bosu-standing-calf-raise.gif"
      },
                {
        muscle: " מקרבי ירך (Adductors) ",
        nameHe: " סקוואט סומו עם לחיצה פנימה ",
        nameEn: " Sumo Squat with Inward Press ",
        timeReps: " 3 סטים × 12 חזרות     ",
        instructions: " עמוד בפיסוק רחב, בצע סקוואט סומו עד שהירכיים במקביל לרצפה. בעלייה חזור למעלה תוך הפעלת לחץ קל פנימה עם הברכיים להפעלת המקרבים. שמור על גב זקוף ובטן אסופה לאורך כל התרגיל. ",
        imageURL: "https://www.verywellfit.com/thmb/-i6U4nnLmsBUIqs8SvuUyhEkMeM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/79--Sumo-SquatGIF-df6fd051e5c1451f93e6e5fa5b6b420f.gif"
      },
        ],
    },
    {
      id: "A004",
      title: "אירובי אליפטיקל",
      emoji: "➿",
      minutes: 20,
      category: "אירובי",
      locations: ["gym"],
      exercises: 
        [
                {
        muscle: "אירובי",
        nameHe: "אליפטיקל",
        nameEn: "Elliptical",
        timeReps: "20 דקות",
        instructions: "פעל",
        imageURL: "https://burnfit.io/wp-content/uploads/2023/11/ELLIP_MC.gif"
      },
        ],
    },
    {
      id: "A005",
      title: "אירובי אופני כושר",
      emoji: "🚴‍♀️",
      minutes: 20,
      category: "אירובי",
      locations: ["gym"],
      exercises: 
        [
                {
        muscle: "אירובי",
        nameHe: "אופני כושר",
        nameEn: "Exercise Bike",
        timeReps: "20 דקות",
        instructions: "פעל",
        imageURL: "https://olijoy.com.au/cdn/shop/files/ezgif-74d8c208b48bfe_530x@2x.gif?v=1751247941"
      },
        ],
    },
    {
      id: "A006",
      title: "אירובי הליכון",
      emoji: "🏃‍♂️",
      minutes: 20,
      category: "אירובי",
      locations: ["gym"],
      exercises: 
        [
                {
        muscle: "אירובי",
        nameHe: "הליכון",
        nameEn: "Treadmill",
        timeReps: "20 דקות",
        instructions: "פעל",
        imageURL: "https://burnfit.io/wp-content/uploads/2023/11/TREADMIL.gif"
      },
        ],
    },
    {
      id: "A007",
      title: "אימון שיווי משקל חדר כושר",
      emoji: "🤹‍♂️",
      minutes: 10,
      category: "אימון שיווי משקל",
      locations: ["gym"],
      exercises: 
        [
                {
        muscle: "קרסוליים, ליבה",
        nameHe: "טרי פוז – תנוחת העץ",
        nameEn: "Tree Pose (Vrksasana)",
        timeReps: "1 דקה (או 30 שניות לכל רגל)",
        instructions: "עמוד זקוף על רגל אחת, הנח את כף הרגל השנייה על פנים השוק או הירך (לא על הברך), והידיים מורמות מעלה. שמור על בטן אסופה, מבט קדימה, ונסה להישאר יציב. אם קשה – אפשר להניח את כף הרגל נמוך יותר או להשתמש בקיר לתמיכה.",
        imageURL: "https://www.docteur-fitness.com/wp-content/uploads/2022/08/vrksasana-posture-de-l-arbre.gif"
      },
                {
        muscle: "ירך פנימית וחיצונית, קרסוליים",
        nameHe: "עמידה על רגל אחת וסיבוב רגל החופשית פנימה והחוצה",
        nameEn: "Single-Leg Balance with In-Out Leg Circles",
        timeReps: "30 שניות לכל כיוון, לכל רגל",
        instructions: "עמוד על רגל אחת, הרם את הרגל השנייה באוויר וצייר בעזרתה סיבובים קטנים פנימה והחוצה. שמור על גב זקוף ובטן אסופה. בצע לאט ובשליטה, ללא ניפנוף.",
        imageURL: "https://spotebi.com/wp-content/uploads/2015/01/standing-leg-circles-exercise-illustration.gif"
      },
                {
        muscle: "ירך פנימית וחיצונית, קרסוליים",
        nameHe: "עמידה על רגל אחת וסיבוב רגל החופשית החוצה ופנימה",
        nameEn: "Single-Leg Balance with Out-In Leg Circles",
        timeReps: "30 שניות לכל כיוון, לכל רגל",
        instructions: "בדומה לתרגיל הקודם אך הפעם כיוון הסיבוב מתחיל החוצה ולאחר מכן פנימה. שמור על תנועה איטית ומבוקרת, ידיים לצדדים לאיזון.",
        imageURL: "https://spotebi.com/wp-content/uploads/2015/01/standing-leg-circles-exercise-illustration.gif"
      },
                {
        muscle: "קרסוליים, ליבה, מערכת שיווי משקל",
        nameHe: "טרי פוז עם עיניים עצומות",
        nameEn: "Tree Pose with Eyes Closed",
        timeReps: "30–40 שניות לכל רגל",
        instructions: "עמוד בתנוחת העץ, עצמ את העיניים ושמור על יציבה זקופה. הידיים מורמות מעלה. חשוב לבצע בסביבה בטוחה, ליד קיר או כיסא, למקרה של איבוד שיווי משקל.",
        imageURL: "https://www.docteur-fitness.com/wp-content/uploads/2022/08/vrksasana-posture-de-l-arbre.gif"
      },
                {
        muscle: "ירך אחורית, ישבן, ליבה",
        nameHe: "Warrior III – עמידה על רגל אחת רגל שנייה מאחור והידיים קדימה",
        nameEn: "Warrior III (Yoga Pose)",
        timeReps: "30 שניות לכל רגל",
        instructions: "עמוד על רגל אחת, הטה את הגוף קדימה כך שהגב והידיים ישרים לפנים, והרגל השנייה נמתחת לאחור בקו הגוף. שמור על בטן חזקה וכתפיים רפויות. חזור למרכז באיטיות.",
        imageURL: "https://fitnessprogramer.com/wp-content/uploads/2023/01/Warrior-3-Pose.gif"
      },
                {
        muscle: "קרסוליים, ירכיים, שיווי משקל מרחבי",
        nameHe: "הליכה על קו ישר עם עיניים עצומות",
        nameEn: "Heel-to-Toe Walk with Eyes Closed",
        timeReps: "8–10 צעדים קדימה וחזרה",
        instructions: "התחל בקו דמיוני או מסומן. צעד עקב בצמוד לאצבע, בעיניים עצומות. שמור על ידיים לצדדים, בטן אסופה ותנועה איטית. בצע בזהירות בסביבה פנויה.",
        imageURL: "https://post.healthline.com/wp-content/uploads/2019/03/Heel-toe-walking.gif"
      },
                {
        muscle: "קרסוליים, ירך קדמית, ליבה",
        nameHe: "עמידה על הבוסו – רגליים ברוחב אגן",
        nameEn: "BOSU Stand Balance",
        timeReps: "40–60 שניות",
        instructions: "עלה בזהירות על בוסו (צד כיפה למעלה), עמוד זקוף עם רגליים ברוחב אגן. שמור על מבט קדימה, ידיים לצדדים לאיזון, בטן אסופה. המטרה – למנוע תנועות מיותרות.",
        imageURL: "https://i.ytimg.com/vi/VHAPvfuZhCs/maxresdefault.jpg"
      },
                {
        muscle: "ירך קדמית, ישבן, ליבה",
        nameHe: "סקוואט חצי על בוסו",
        nameEn: "Half Squat on BOSU",
        timeReps: "8–10 חזרות",
        instructions: "עמוד על בוסו, רגליים ברוחב אגן. בצע ירידה איטית לחצי סקוואט (כיפוף ברכיים קל), שמור על גב זקוף וברכיים בקו האצבעות. חזור למעלה באיטיות, מבלי לנעול ברכיים.",
        imageURL: "https://media.self.com/photos/5bfecef5ff05872d49d3f552/master/w_320%2Cc_limit/bosu-ball-squat.gif"
      },
                {
        muscle: "קרסוליים, ירך קדמית ואחורית",
        nameHe: "מעבר מרגל לרגל על הבוסו",
        nameEn: "Step Touch on BOSU",
        timeReps: "10–12 חזרות לכל צד",
        instructions: "עמוד מול בוסו, עלה עם רגל ימין ואז רגל שמאל, חזור מטה באותו סדר. בצע לאט ובשליטה, תוך שמירה על גב זקוף. החלף צד ראשון כל סבב.",
        imageURL: "https://recsports.unt.edu/files/images/fitness/wow52_s3_1.gif"
      },
                {
        muscle: "ליבה, כתפיים, חזה",
        nameHe: "Plank על בוסו עם נגיעה יד קדימה",
        nameEn: "BOSU Plank with Alternating Arm Reach",
        timeReps: "30–40 שניות",
        instructions: "הנח את האמות או כפות הידיים על הבוסו במנח פלאנק, גוף בקו ישר. הרם יד אחת קדימה לגעת באוויר, החזר והחלף יד. שמור על בטן אסופה, גב ישר ותנועה איטית.",
        imageURL: "data:image/jpeg;base64,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"
      },
        ],
    },
    {
      id: "A009",
      title: "פילאטיס ליבה",
      emoji: "🧘‍♂️",
      minutes: 30,
      category: "אימון ליבה",
      locations: ["home","gym"],
      exercises: 
        [
                {
        muscle: " ליבה – בטן עמוקה   ",
        nameHe: " המאה                   ",
        nameEn: " The Hundred             ",
        timeReps: " 100 תנועות (10 × 10 נשימות)    ",
        instructions: " שכב על הגב, רגליים בזווית 90° או מתוחות, הרם ראש וכתפיים, ידיים ישרות לצידי הגוף. בצע תנועות נמרצות מעלה–מטה עם הידיים, תוך שאיפה ל-5 ספירות ונשיפה ל-5 ספירות. שמור על גב תחתון צמוד למזרן ובטן אסופה פנימה. ",
        imageURL: "https://media.self.com/photos/57d8848cd3276fe2329461e7/master/w_1600%2Cc_limit/PILATES_1001.gif"
      },
                {
        muscle: " ליבה – בטן קדמית   ",
        nameHe: " מתיחת רגל אחת          ",
        nameEn: " Single Leg Stretch      ",
        timeReps: " 8–10 חזרות לכל רגל             ",
        instructions: " שכב על הגב עם ראש וכתפיים מורמים. אחוז ברך כפופה בידיים בזמן שהרגל השנייה מתוחה קדימה בזווית נמוכה. החלף רגליים בקצב מבוקר. שמור על בטן אסופה, גב תחתון יציב ונשימה רציפה. ",
        imageURL: "https://www.pilatesconnection.co.za/wp-content/uploads/2014/06/single-leg-stretch.gif"
      },
                {
        muscle: " ליבה – בטן קדמית   ",
        nameHe: " מתיחת שתי רגליים       ",
        nameEn: " Double Leg Stretch      ",
        timeReps: " 6–8 חזרות                       ",
        instructions: " במנח שכיבה על הגב עם ראש וכתפיים מורמים, התחל עם ברכיים כפופות קרוב לחזה. בהוצאת אוויר מתח את הידיים והרגליים קדימה, בשאיפה חזור וחבק שוב את הברכיים. שמור על תנועות חלקות, נשימה נכונה ובטן אסופה פנימה. ",
        imageURL: "https://theroom.no/blogg/wp-content/uploads/sites/3/2017/12/doublelegstretch.gif"
      },
                {
        muscle: " גב תחתון, סרעפת    ",
        nameHe: " הכנה לברבור           ",
        nameEn: " Swan Prep               ",
        timeReps: " 6–8 חזרות                       ",
        instructions: " שכב על הבטן, כפות ידיים מתחת לכתפיים. בהוצאת אוויר גלגל כתפיים אחורה והרם חזה מעט מהרצפה מבלי לכווץ גב תחתון. בשאיפה חזור למטה. שמור על צוואר ארוך, מבט קדימה ונשימה רציפה. ",
        imageURL: "https://sleep.brightspotcdn.com/dims4/default/438e624/2147483647/strip/true/crop/480x270+0+0/resize/480x270!/quality/90/?url=http%3A%2F%2Fmattress-firm-brightspot.s3.amazonaws.com%2Fa8%2Fbd%2F00a29ed84aab9c3011ba334398e8%2Fswan-active-rest.gif"
      },
                {
        muscle: " גב תחתון, סרעפת    ",
        nameHe: " שחייה                  ",
        nameEn: " Swimming                ",
        timeReps: " 20–30 תנועות                    ",
        instructions: " שכב על הבטן, ידיים ורגליים מתוחות קדימה. הרם יד ימין עם רגל שמאל, ואז יד שמאל עם רגל ימין, בקצב מהיר אך מבוקר. שמור על גב תחתון יציב, צוואר ארוך ובטן אסופה לאורך כל התרגיל. ",
        imageURL: "https://i.pinimg.com/originals/02/23/af/0223afec8a41c5707617301f8446823f.gif"
      },
                {
        muscle: " אגן, ירכיים, גב    ",
        nameHe: " גשר על כתפיים          ",
        nameEn: " Shoulder Bridge         ",
        timeReps: " 8–10 חזרות                      ",
        instructions: " שכב על הגב, ברכיים כפופות וכפות רגליים קרובות לאגן. בהוצאת אוויר גלגל אגן והרם חוליה אחר חוליה עד שהגוף בקו ישר מהברכיים לכתפיים. בשאיפה הורד בעדינות חוליה אחר חוליה. שמור על תנועה מבוקרת, בטן אסופה וברכיים בקו האגן. ",
        imageURL: "https://pilatesology.com/wp-content/uploads/2022/09/sb1.gif"
      },
                {
        muscle: " מותניים, ליבה צדית ",
        nameHe: " בעיטות צד              ",
        nameEn: " Side Kick Series        ",
        timeReps: " 6–8 חזרות לכל כיוון בכל צד     ",
        instructions: " שכב על הצד, רגל עליונה מתוחה בקו האגן. בעיטה קדימה תוך שמירה על יציבות אגן, ולאחר מכן החזר לאחור. בצע בקצב איטי ומדויק. הקפד לשמור על בטן אסופה, גב ישר וצוואר ארוך. ",
        imageURL: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/04/HL-1.07.SideKick.gif?h=840"
      },
                {
        muscle: " בטן אלכסונית       ",
        nameHe: " קריס קרוס              ",
        nameEn: " Criss Cross             ",
        timeReps: " 8–12 חזרות לכל צד               ",
        instructions: " שכב על הגב, ידיים מאחורי הראש, רגליים מורמות בזווית 90°. בהוצאת אוויר קרב מרפק ימין לברך שמאל תוך יישור הרגל השנייה, החלף צדדים כמו תרגיל אופניים איטי. שמור על בטן אסופה ותנועה מבוקרת. ",
        imageURL: "https://cdn-life.dailyburn.com/life/wp-content/uploads/2015/03/10042703/DailyBurn-Pilates-Workout-Criss-Cross.gif"
      },
                {
        muscle: " ליבה כוללת         ",
        nameHe: " פלאנק עם הרמות רגליים ",
        nameEn: " Plank with Leg Lifts    ",
        timeReps: " 8–10 הרמות לכל רגל              ",
        instructions: " עמוד בפלאנק על אמות, גוף בקו ישר מהראש לעקבים. הרם רגל אחת מספר סמ מהקרקע, החזק 1–2 שניות והחזר. החלף רגליים. שמור על אגן יציב, בטן אסופה וצוואר ארוך. אל תיתן לגב התחתון לקרוס. ",
        imageURL: "https://media1.popsugar-assets.com/files/thumbor/H_gGCDnfdyVOs2nqdATv-YcZsHg/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2021/01/29/866/n/1922729/6caa69fb6014667fbeba57.12407746_IMB_J0fnZG/i/Exercise-1-Plank-With-Leg-Lift.G"
      },
        ],
    },
    {
      id: "A015",
      title: "אימון ליבה 1",
      emoji: "🤸‍♀️",
      minutes: 10,
      category: "אימון ליבה",
      locations: ["gym"],
      exercises: 
        [
                {
        muscle: " בטן תחתונה + ירך קדמית   ",
        nameHe: " הרמות ברכיים בתלייה            ",
        nameEn: " Hanging Knee Raise             ",
        timeReps: "12 חזרות",
        instructions: " אחוז במתח ברוחב כתפיים–כתפיים וחצי; התחל בתלייה מלאה, בטן אסופה וצוואר ניטרלי; העלה ברכיים בזווית 90° אל החזה תוך שמירה על שליטה; הורד לאט עד ליישור כמעט מלא; הימנע מקפיצות ונדנוד; שלוט בנשיפה בעלייה ובשאיפה בירידה. ",
        imageURL: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Hanging-Knee-Raises.gif"
      },
                {
        muscle: " זוקפי גב + ליבה         ",
        nameHe: " בירד דוג הארכת גפיים           ",
        nameEn: " Bird Dog Extension             ",
        timeReps: "8 חזרות לכל צד     ",
        instructions: " עמוד על 4 (כפות ידיים וברכיים); שמור גב נייטרלי ובטן אסופה; מתח יד קדימה ורגל נגדית אחורה בקו ישר; החזק 1–2ש׳ בסוף התנועה; החזר באיטיות וחזור עם הצד השני; הקפד לא לקמר את הגב ולא להטות את האגן. ",
        imageURL: "https://images.ctfassets.net/4f3rgqwzdznj/5d2egksWLycwkFFpN1NzCa/8ca1ff665efa098a0451d7a343128c33/Bird-Dog_1296x729.gif"
      },
                {
        muscle: " אלכסוני בטן + ליבה צדית ",
        nameHe: " פלאנק צד עם הושטת יד           ",
        nameEn: " Side Plank with Reach Through  ",
        timeReps: "30 שניות - להחליף צדדים בסטים     ",
        instructions: " הישען על האמה בצד הגוף, רגליים מונחות זו על זו; יד עליונה מתוחה מעלה; הכנס את היד העליונה מתחת לגוף תוך סיבוב בית החזה; חזור לפתיחה מעלה; שמור אגן מורם, צוואר נייטרלי ובטן חזקה לכל אורך הביצוע. ",
        imageURL: "https://media.post.rvohealth.io/wp-content/uploads/2020/09/Side-plank-with-a-reach-under.gif"
      },
                {
        muscle: " בטן + סיבולת לב ריאה    ",
        nameHe: " מטפסי הרים                     ",
        nameEn: " Mountain Climbers              ",
        timeReps: " 40 שניות            ",
        instructions: " עמדת פלאנק על כפות ידיים; ברכיים כפופות ואלסטיות; הבא ברך אחת קדימה אל החזה בתנועה מהירה אך מבוקרת, תוך החלפה לסירוגין; שמור על גב ישר, כתפיים מעל כפות הידיים ובטן אסופה; הקפד על נשימה קצבית. ",
        imageURL: "https://cdn.jefit.com/assets/img/exercises/gifs/484.gif"
      },
                {
        muscle: " ליבה קדמית              ",
        nameHe: " פלאנק קדמי                     ",
        nameEn: " Front Plank                    ",
        timeReps: " 40 שניות            ",
        instructions: " הישען על אמות וכפות רגליים; שמור גוף בקו ישר מהראש עד העקבים; אגן לא גבוה מדי ולא שוקע; בטן אסופה, כתפיים לא לקרוס; שמור על צוואר בהמשך לעמוד השדרה ונשימה סדירה לאורך כל הזמן. ",
        imageURL: "https://i.ytimg.com/vi/K2UZq6uq_mY/maxresdefault.jpg"
      },
                {
        muscle: " סרעפת + נשימה           ",
        nameHe: " נשימה סרעפתית בשכיבה          ",
        nameEn: " Diaphragmatic Breathing (Supine)",
        timeReps: "5 מחזורים           ",
        instructions: " שכב על הגב, ברכיים כפופות, כף יד אחת על הבטן והשנייה על החזה; שאף באיטיות דרך האף, ניפח את הבטן החוצה ושמור את החזה יציב; נשוף דרך הפה והכנס את הבטן פנימה; הקפד על קצב רגוע ושליטה מלאה בכל מחזור נשימה. ",
        imageURL: "https://i0.wp.com/morgana.nyc/wp-content/uploads/2023/03/Belly-breathing.gif?resize=525%2C315&ssl=1"
      },
        ],
    },
    {
      id: "A016",
      title: "אימון ליבה 2",
      emoji: "🤸‍♀️",
      minutes: 10,
      category: "אימון ליבה",
      locations: ["home","gym"],
      exercises: 
        [
                {
        muscle: " בטן – כפיפה קדמית ",
        nameHe: " כפיפות בטן סטנדרטיות ",
        nameEn: " Basic Crunch ",
        timeReps: " 15 חזרות ",
        instructions: " שכב על הגב, ברכיים כפופות וכפות רגליים על הרצפה, ידיים מאחורי הראש או חזה. הרם את השכמות מהרצפה תוך כדי כיווץ הבטן פנימה, שמור על גב תחתון צמוד למזרן. נשוף בעלייה ושאף בירידה. אל תמשוך בצוואר עם הידיים והימנע מתנועות חדות. ",
        imageURL: "https://burnfit.io/wp-content/uploads/2023/11/CRUNCH.gif"
      },
                {
        muscle: " בטן – אנטי־סיבוב ",
        nameHe: " פאלוף פרס",
        nameEn: " Pallof Press ",
        timeReps: " 10 חזרות לכל צד (2–3 שניות החזקה) ",
        instructions: " עמוד זקוף, כפות רגליים ברוחב אגן, אחוז גומייה או משקל בידיים מול החזה. לחץ קדימה עד ליישור מלא של הידיים ושמור על גוף יציב מול הכוח שמושך הצידה. החזק 2–3 שניות וחזור באיטיות. הקפד לא לסובב את הכתפיים או האגן, נשוף בלחיצה ושאף בחזרה. ",
        imageURL: "https://www.dickssportinggoods.com/content/dam/protips/imported-from-blob-storage/2019/08/PalloffPress.gif"
      },
                {
        muscle: " גב תחתון – ייצוב דינמי ",
        nameHe: " דד באג ",
        nameEn: " Dead Bug ",
        timeReps: " 10 חזרות לכל צד ",
        instructions: " שכב על הגב, זרועות ישרות מעלה וברכיים בזווית 90°. הורד באיטיות יד אחת ורגל נגדית לכיוון הרצפה תוך שמירה על גב תחתון צמוד למזרן. חזור לנקודת ההתחלה ובצע לצד השני. שמור על נשימה רציפה ונשוף בזמן הורדת הגפיים. הימנע מקשת בגב. ",
        imageURL: "https://downloads.ctfassets.net/6ilvqec50fal/YIqGvUegFUjlFCmh1R38b/32275009bb242a73082ae2dfaec4cece/Dead_Bug.gif"
      },
                {
        muscle: " גב תחתון – אנטי־כיפוף קדמי ",
        nameHe: " פלאנק דינמי (עליות/ירידות אמות–כפות ידיים) ",
        nameEn: " Dynamic Plank (Up-Downs) ",
        timeReps: " 25 שניות ",
        instructions: " התחל במנח פלאנק על האמות, גוף בקו ישר מהראש ועד העקבים. העבר משקל ליד אחת ודחוף לעלייה לעמדת פלאנק על כפות הידיים, ולאחר מכן חזור באיטיות חזרה לאמות. המשך לעלות ולרדת לסירוגין. שמור על בטן אסופה וגב ישר, הימנע מתנועתיות יתר באגן. נשוף בעלייה ושאף בירידה. ",
        imageURL: "https://media.self.com/photos/58dd5de554b00b6f47fad908/master/w_320%2Cc_limit/Plank-up-downs.gif"
      },
                {
        muscle: " אגן ומותן – ייצוב/הטיות אגן ",
        nameHe: " גשר ישבן חד־רגלי ",
        nameEn: " Single-Leg Glute Bridge ",
        timeReps: " 10 חזרות לכל רגל ",
        instructions: " שכב על הגב, כף רגל אחת על הרצפה והשנייה מורמת ישרה קדימה. דחוף בעקב הקרקע והרם את האגן עד לקו ישר בין כתפיים–אגן–ברך. החזק 1–2 שניות למעלה, נשוף בזמן ההרמה ושאף בירידה. שמור על אגן מאוזן והימנע מקריסת גב תחתון. ",
        imageURL: "https://images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/648x364_5_Glute_Bridge_Variations_One_Legged_Glute_Bridge.gif"
      },
                {
        muscle: " שרירים תומכים – אנטי־כיפוף צדי ",
        nameHe: " סייד פלאנק עם הרמת רגל (או סטטי רגיל) ",
        nameEn: " Side Plank with Leg Lift ",
        timeReps: " 20 שניות לכל צד ",
        instructions: " שכב על הצד, הישען על האמה, מרפק מתחת לכתף, רגליים ישרות ומונחות זו על גבי זו. הרם את האגן ליישור מלא ושמור על גוף בקו ישר. בגרסה מתקדמת הרם גם את הרגל העליונה ל־20–30 ס״מ. החזק את המנח או בצע הרמות איטיות. שמור על צוואר ניטרלי, בטן אסופה ונשימה רציפה. ",
        imageURL: "https://media1.popsugar-assets.com/files/thumbor/Snh4DBbz1j6sD4IWPEybWl721o4/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2021/08/13/850/n/1922729/319791d1be569e73_IMB_dBshFS/i/Set-1-Side-Plank-Leg-Lift-Left.GIF"
      },
        ],
    },
    {
      id: "A017",
      title: "אימון ליבה 3",
      emoji: "🤸‍♀️",
      minutes: 10,
      category: "אימון ליבה",
      locations: ["home","gym"],
      exercises: 
        [
                {
        muscle: " בטן תחתונה              ",
        nameHe: " כפיפה הפוכה                  ",
        nameEn: " Reverse Crunch                 ",
        timeReps: " 10–15 חזרות                ",
        instructions: " שכב על הגב, רגליים כפופות בזווית 90° או ישרות, ידיים לצידי הגוף. אסוף את הבטן והרם את האגן מהרצפה בגלגול מעלה תוך כיווץ שרירי הבטן התחתונה. חזור מטה באיטיות תוך שליטה, ושמור על גב תחתון צמוד למזרן לכל אורך התנועה. ",
        imageURL: "https://spotebi.com/wp-content/uploads/2017/10/reverse-crunch-and-twist-exercise-illustration-spotebi.gif"
      },
                {
        muscle: " גב תחתון + ישבן         ",
        nameHe: " גוד מורנינג                  ",
        nameEn: " Good Morning                   ",
        timeReps: " 10–12 חזרות                ",
        instructions: " עמוד זקוף, כפות רגליים ברוחב אגן, מוט/משקולות קלות על הגב העליון. שמור גב ניטרלי ובטן אסופה, ודחוף את האגן לאחור תוך כיפוף קל בברכיים עד שהגב כמעט מקביל לרצפה. עלה חזרה לזקיפה מלאה תוך הפעלת ישבן וגב תחתון. יש להימנע מקימור גב או עומס יתר. ",
        imageURL: "https://cdn.jefit.com/assets/img/exercises/gifs/7.gif"
      },
                {
        muscle: " אלכסוני בטן             ",
        nameHe: " טוויסט רוסי                  ",
        nameEn: " Russian Twist                  ",
        timeReps: " 12–16 חזרות לכל צד         ",
        instructions: " שב על הרצפה, רגליים כפופות ומורמות קלות (או מונחות לקרקע להקלה), גב בזווית לאחור. החזק משקולת/כדור או ללא ציוד, וסובב את פלג הגוף העליון מצד לצד בנשימה סדירה, תוך שמירה על גב ארוך ובטן אסופה. אל תקרוס עם הגב לאחור. ",
        imageURL: "https://media.self.com/photos/602fea82c49f836c6103b131/master/w_1600%2Cc_limit/russian-twist-no-weight-Amanda_047.gif"
      },
                {
        muscle: " גב תחתון + ליבה         ",
        nameHe: " בירד דוג סטטי (יד–רגל נגדית) ",
        nameEn: " Quadruped Opposite Arm/Leg Hold",
        timeReps: " 15–20 שניות לכל צד         ",
        instructions: " עמוד על 4, ידיים מתחת לכתפיים וברכיים מתחת לאגן. מתח יד קדמית ורגל אחורית נגדית בקו ישר, שמור צוואר ניטרלי ובטן אסופה. החזק את המנח 15–20 שניות, חזור באיטיות וחלף צד. הקפד שלא להטות אגן או לקמר גב. ",
        imageURL: "https://cdn.mos.cms.futurecdn.net/6cTqFSzt97kkYX8Vqoavh.jpg"
      },
                {
        muscle: " ליבה קדמית + כתפיים     ",
        nameHe: " פלאנק עם נגיעות כתף          ",
        nameEn: " Plank with Shoulder Tap        ",
        timeReps: " 20–30 שניות / 8–10 נגיעות ",
        instructions: " התמקם בפלאנק גבוה (כפות ידיים מתחת לכתפיים, גוף בקו ישר). שמור אגן יציב ובטן אסופה, והרם יד אחת לגעת בכתף נגדית לסירוגין. בצע באיטיות, תוך שליטה מלאה וללא סיבוב אגן. שמור על נשימה סדירה. ",
        imageURL: "https://media.self.com/photos/58fa4df75d8a5e34a74a4cbc/master/w_1600%2Cc_limit/strongest-self-shoulder-tap.gif"
      },
                {
        muscle: " ישבן (Glute Medius)      ",
        nameHe: " הרחקת ירך בשכיבה על הצד      ",
        nameEn: " Side-Lying Hip Abduction       ",
        timeReps: " 12–15 חזרות לכל רגל        ",
        instructions: " שכב על הצד, רגל תחתונה כפופה מעט ורגל עליונה ישרה. שמור גוף מיושר ובטן אסופה, והרם את הרגל העליונה בקו ישר כלפי מעלה עד כ־45°. הורד מטה באיטיות ושלוט בטווח. הימנע מנדנוד או הטיית אגן אחורה/קדימה. אפשר להוסיף גומייה לקרסול להקשות. ",
        imageURL: "https://cdn.jefit.com/assets/img/exercises/gifs/1361.gif"
      },
        ],
    },
    {
      id: "A018",
      title: "אימון ליבה 5",
      emoji: "🤸‍♀️",
      minutes: 10,
      category: "אימון ליבה",
      locations: ["home","gym"],
      exercises: 
        [
                {
        muscle: "בטן – כפיפה הפוכה",
        nameHe: "הרמות רגליים בשכיבה (רגליים ישרות)",
        nameEn: "Lying Leg Raise",
        timeReps: "15 חזרות",
        instructions: "שכב על הגב, רגליים ישרות צמודות, ידיים לצדי הגוף או מתחת לישבן לייצוב. הרם את הרגליים יחד עד כ־90° מבלי לקמר את הגב התחתון. הורד אותן לאט עד סמוך לרצפה, תוך שמירה על בטן אסופה והצמדת גב תחתון למזרן. נשוף בעלייה ושאף בירידה. הימנע מקפיצות, תנופה או קשת בגב התחתון.",
        imageURL: "https://downloads.ctfassets.net/6ilvqec50fal/eUKRNPj04Tg9Lw5uF8OgF/72414354eb43c1a2b1e06f07386cc0b7/Leg_Lifts_GIF.gif"
      },
                {
        muscle: "אגן – ייצוב",
        nameHe: "Bird Dog (יד ורגל נגדית)",
        nameEn: "Bird Dog",
        timeReps: "10 חזרות לכל צד",
        instructions: "עמידת שש, כפות ידיים מתחת לכתפיים וברכיים מתחת לאגן. שלח יד אחת קדימה ורגל נגדית אחורה, שמור על גב ישר ובטן אסופה. החזק שנייה–שתיים וחזור לאט. הימנע מקשת בגב תחתון או נפילה לצדדים.",
        imageURL: "https://media.post.rvohealth.io/wp-content/uploads/sites/2/2021/02/NarrowVibrantHawk-size_restricted.gif"
      },
                {
        muscle: "בטן – סיבוב/אלכסונים",
        nameHe: "Russian Twist עם משקולית",
        nameEn: "Russian Twist",
        timeReps: "20 פניות (10 לכל צד)",
        instructions: "שב על המזרן, רגליים כפופות ומורמות מעט מהרצפה, גב מוטה לאחור בזווית 45°. אחוז משקולית/בקבוק/כדור בשתי ידיים, וסובב את פלג הגוף לצדדים. שמור על גב זקוף, בטן אסופה ותנועה מבוקרת. נשוף בכל פנייה. הימנע מנפילה אחורה או מתנודות מהירות מדי.",
        imageURL: "https://post.healthline.com/wp-content/uploads/2019/10/400x400_Davis_Medicine_Ball_Moves_Russian_Twists.gif"
      },
                {
        muscle: "אגן – כפיפת ירך",
        nameHe: "הרמות ברך בעמידה עם גומייה / מכונת כבל",
        nameEn: "Standing Band / Cable Hip Flexion",
        timeReps: "15 לכל רגל",
        instructions: "עמוד זקוף, חבר גומייה סביב הקרסול לנקודת עיגון נמוכה או רצועת קרסול לכבל נמוך. הרם את הברך קדימה עד גובה הירך (≈90°) ושלוט בהורדה לאט. שמור על גב זקוף, בטן אסופה ומבט קדימה. נשוף בעלייה ושאף בירידה. ניתן להיעזר ביד לאחיזה ליציבות. הימנע מנטייה לאחור או תנועות פתאומיות.",
        imageURL: "https://i.pinimg.com/originals/3f/c0/b1/3fc0b16d021b774e48d6e0df1d438798.gif"
      },
                {
        muscle: "אגן – כפיפת ירך",
        nameHe: "צעדי ברך גבוהה",
        nameEn: "High Knee March",
        timeReps: "40 צעדים",
        instructions: "צעד במקום או קדימה תוך הרמת ברך גבוהה לכיוון המותן. שמור על גב זקוף, ידיים עוזרות בתנופה טבעית. נשום בקצב אחיד. חשוב על שליטה ולא על מהירות.",
        imageURL: "https://i.pinimg.com/originals/c1/c1/3f/c1c13f3fb8eeef7183678842a5084aca.gif"
      },
                {
        muscle: "בטן – אנטי־סיבוב",
        nameHe: "פלאנק אנטי־סיבוב (יד נוגעת קדימה)",
        nameEn: "Anti-Rotation Plank",
        timeReps: "30 שניות",
        instructions: "עמוד בעמדת פלאנק על אמות או ידיים, גוף בקו ישר מהראש לעקבים. הושט יד אחת קדימה לשנייה–שתיים, חזור והחלף צד. שמור אגן וכתפיים יציבים ללא סיבוב. נשום בצורה רציפה. הימנע מקשת בגב תחתון או מהרמת אגן.",
        imageURL: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2025/05/plank-with-shoulder-taps.gif?resize=700%2C700&ssl=1"
      },
                {
        muscle: "ייצוב שכמות",
        nameHe: "Scapular Push-Up (שכמות בלחיצת חזה)",
        nameEn: "Scapular Push-Up",
        timeReps: "15 חזרות",
        instructions: "בעמידת פלאנק או שכיבת סמיכה, שמור מרפקים ישרים. בצע קירוב שכמות (הורד חזה מטה) ולאחר מכן הרחקה (דחוף חזה מעלה). התנועה קטנה ומבוקרת, ללא כיפוף מרפקים. נשום סדיר לאורך כל התרגיל.",
        imageURL: "https://hips.hearstapps.com/hmg-prod/images/workouts/2017/08/mh-scap-push-up-1504016069.gif"
      },
        ],
    },
    {
      id: "A019",
      title: "אימון ליבה 6",
      emoji: "🤸‍♀️",
      minutes: 10,
      category: "אימון ליבה",
      locations: ["home","gym"],
      exercises: 
        [
                {
        muscle: "בטן - כפיפה קדמית ",
        nameHe: "כפיפת בטן קלאסית",
        nameEn: "Crunch",
        timeReps: "12–15 חזרות",
        instructions: "שכב על הגב, ברכיים כפופות, כפות רגליים על הרצפה. כווץ בטן והרים ראש וכתפיים כלפי מעלה תוך שמירה על סנטר מעט פנימה. נשוף בזמן העלייה, שאף בירידה. הימנע ממשיכת הצוואר בידיים ושמור על גב תחתון צמוד למזרן.",
        imageURL: "https://i.pinimg.com/originals/af/8f/3c/af8f3c6315440188dfe84b5f27646365.gif"
      },
                {
        muscle: "גב תחתון - פשיטת גב ",
        nameHe: "גוד מורנינג עם משקולת",
        nameEn: "Good Morning",
        timeReps: "12 חזרות (קל–בינוני)",
        instructions: "עמוד זקוף עם מוט/משקולת על הכתפיים העליונות. ברכיים מעט כפופות, גב ניטרלי. הטה את האגן לאחור והורד את פלג הגוף העליון עד שהגב כמעט מקביל לרצפה. שמור על בטן אסופה וגב ישר. שאף בירידה, נשוף בעלייה.",
        imageURL: "https://www.verywellfit.com/thmb/40LCuGzaWAqNpfvVV_uitBNucVQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20-3498255-Goodmorning-Exercise-GIF-dcf63c8509134f3bbf5c183383d877a5-f5a79ca44f8c4f6a8e10565a21ee414e.gif"
      },
                {
        muscle: "בטן - סיבוב/אלכסונים ",
        nameHe: "כפיפת בטן באלכסון",
        nameEn: "Oblique Crunch",
        timeReps: "10–12 חזרות לכל צד",
        instructions: "שכב על הגב, רגליים כפופות, ידיים מאחורי הראש. הבא כתף ימין לעבר ברך שמאל תוך הרמת פלג גוף עליון. שמור על תנועה מבוקרת ולא על משיכת צוואר. נשוף בעלייה, שאף בירידה. החלף צד.",
        imageURL: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/12/Oblique-crunch.gif?fit=600%2C600&ssl=1"
      },
                {
        muscle: "גב תחתון - ייצוב דינמי ",
        nameHe: "אחיזת דדליפט קלה",
        nameEn: "Deadlift Hold (Isometric)",
        timeReps: "15–25 שניות",
        instructions: "החזק משקולת (דמבּל/מוט) במנח דדליפט חלקי – גב ישר, ברכיים מעט כפופות, משקולות קרוב לשוקיים. שמור על כיווץ בטן וכתפיים לאחור לאורך כל ההחזקה. נשום עמוק ורציף.",
        imageURL: "https://i.ytimg.com/vi/xMDZqmBjnNM/maxresdefault.jpg"
      },
                {
        muscle: "בטן - לחץ תוך־בטני/ייצוב סטטי ",
        nameHe: "דד באג",
        nameEn: "Dead Bug",
        timeReps: "30–40 שניות",
        instructions: "שכב על הגב, ידיים ישרות מעלה, ברכיים כפופות בזווית 90°. הורד יד אחת ורגל נגדית במקביל לרצפה תוך שמירה על גב תחתון צמוד למזרן. חזור לנקודת ההתחלה והחלף צד. שמור על נשימה רציפה ובטן אסופה.",
        imageURL: "https://hw.qld.gov.au/wp-content/uploads/2015/07/29_M_WIP02.gif"
      },
                {
        muscle: "אגן ומותן - הרחקה/קירוב ירך ",
        nameHe: "קלאמשל עם התנגדות יד נגדית/משקולת",
        nameEn: "Clamshell (Manual/DB Resistance)",
        timeReps: "10–12 חזרות לכל צד",
        instructions: "שכב על צד ימין, ברכיים כפופות ב־90°, כפות רגליים צמודות. הנח משקולת קטנה או לחץ עם כף יד שמאל מעל הברך העליונה. פתח את הברך כלפי מעלה נגד ההתנגדות, שמור על כפות רגליים יחד. שלוט בחזרה מטה. הקפד על אגן יציב ובטן אסופה. נשוף בפתיחה, שאף בסגירה.",
        imageURL: "https://media.post.rvohealth.io/wp-content/uploads/2023/05/Clamshell-exercise-.gif"
      },
        ],
    },
    {
      id: "A021",
      title: "כוח תחתון שבוע 5",
      emoji: "🏋️‍♀️",
      minutes: 40,
      category: "אימון כח",
      locations: ["gym"],
      exercises: 
        [
                {
        muscle: "ישבן",
        nameHe: "גשר ישבן עם משקולית יד",
        nameEn: "Dumbbell Glute Bridge",
        timeReps: "3 סטים × 12 חזרות",
        instructions: "שכב על הגב עם ברכיים כפופות וכפות רגליים שטוחות על הרצפה. הנח משקולת יד על הירכיים מעל עצמות האגן. לחץ דרך העקבים והרם את האגן כלפי מעלה עד שהגוף יוצר קו ישר מהברכיים לכתפיים. החזק רגע בכיווץ ישבן, ואז הורד חזרה לאט. שמור על גב תחתון ניטרלי, הימנע מקשת חזקה בגב, ונשוף בזמן הדחיפה. תרגיש את העבודה בעיקר בישבן הגדול (Gluteus Maximus).",
        imageURL: "https://fitnessprogramer.com/wp-content/uploads/2022/01/Dumbbell-Glute-Bridge.gif"
      },
                {
        muscle: "ארבע ראשי",
        nameHe: "מכונת פשיטת ברך",
        nameEn: "Leg Extension Machine",
        timeReps: "3 סטים × 12 חזרות",
        instructions: "שב במכונת פשיטת ברך עם גב צמוד למשענת וברכיים מיושרות מול ציר המכשיר. מקם את כרית הקרסול מעט מעל כף הרגל. פשט את הברכיים עד יישור כמעט מלא, עצור רגע למעלה, ואז הורד חזרה לאט עד כמעט 90°. שמור על גב יציב ולא לקמר, הימנע מבעיטות מהירות. נשוף בזמן הפשיטה. תרגיש את העבודה בעיקר בחלק הקדמי של הירך (Quadriceps).",
        imageURL: "https://fitnessprogramer.com/wp-content/uploads/2021/02/LEG-EXTENSION.gif"
      },
                {
        muscle: "ירך אחורית",
        nameHe: "כפיפת רגליים במכונה",
        nameEn: "Lying Leg Curl Machine",
        timeReps: "3 סטים × 12 חזרות",
        instructions: "שכב על הבטן במכונת כפיפת רגליים, ברכיים בקו ציר המכשיר, קרסוליים מתחת לכרית. כפוף את הברכיים והבא את העקבים לכיוון הישבן בתנועה איטית. עצור רגע בכיווץ עליון, ואז הורד לאט חזרה עד כמעט יישור. שמור על אגן צמוד למכשיר, הימנע מהרמה של הירכיים. נשוף בזמן הכיפוף. תרגיש את העבודה בהמסטרינגס.",
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjHK1HxRH5eV1_5SJ4irnZjc7kbnf2SZTNzw&s"
      },
                {
        muscle: "שוק אחורי (Soleus)",
        nameHe: "הרמת עקבים בישיבה",
        nameEn: "Seated Calf Raise",
        timeReps: "3 סטים × 12 חזרות",
        instructions: "שב על מכונת הרמות עקבים או ספסל עם משקולת על הברכיים. כפות רגליים שטוחות על מדרגה קטנה. הרם את העקבים מעלה כמה שיותר גבוה, עצור לשנייה, ואז הורד לאט עד מתיחה מקסימלית. שמור על ברכיים כפופות לאורך כל התרגיל כדי לבודד את הסולאוס. הימנע מתנודות מהירות. נשוף בזמן ההרמה. תרגיש את העבודה בעיקר בשוק הפנימי (Soleus).",
        imageURL: "https://fitnessprogramer.com/wp-content/uploads/2021/10/Weighted-Seated-Calf-Raise.gif"
      },
                {
        muscle: "מסובבי ירך חיצוניים",
        nameHe: "קלמסhell עם גומייה",
        nameEn: "Banded Clamshell",
        timeReps: "",
        instructions: "שכב על הצד עם ברכיים כפופות וגומייה סביב הירכיים. שמור על כפות רגליים צמודות והרם את הברך העליונה כלפי מעלה תוך שמירה על אגן יציב. עצור לרגע בשיא הכיווץ והורד באיטיות מבלי לאבד מתח בגומייה. שמור על בטן אסופה לאורך כל הביצוע.",
        imageURL: "https://gymbeam.cz/blog/wp-content/uploads/2024/05/Lying-abduction.gif"
      },
                {
        muscle: "חוטפים",
        nameHe: "הרחקה בשכיבה על הצד",
        nameEn: "Side-Lying Abduction",
        timeReps: "",
        instructions: "שכוב על הצד כשהרגל העליונה ישרה והרגל התחתונה כפופה לתמיכה. הרם את הרגל העליונה כלפי מעלה בזווית של כארבעים וחמש מעלות, עצור לרגע, והורד באיטיות מבלי לאבד מתח. שמור על בטן אסופה ואל תיתן לגוף להתנדנד.",
        imageURL: "https://www.verywellfit.com/thmb/FT0kMO-uQfcG_nmm7WhHsM_NI-4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/104--Hip-AbductionGIF-3e2b5b7535ed413dba04b06fae14b55a.gif"
      },
        ],
    },
    {
      id: "A023",
      title: "אימון ליבה 1",
      emoji: "🤸‍♀️",
      minutes: 10,
      category: "אימון ליבה",
      locations: ["home","gym"],
      exercises: 
        [
                {
        muscle: "סרעפת",
        nameHe: "נשימה סרעפתית בישיבה",
        nameEn: "Seated Diaphragmatic Breathing",
        timeReps: "2 סטים × 6–8 נשימות עמוקות",
        instructions: "שב זקוף, כפות רגליים על הקרקע, יד אחת על החזה ואחת על הבטן. שאף עמוק דרך האף כך שהבטן מתמלאת קדימה, החזק שנייה, נשוף לאט דרך הפה עד לריקון מלא. שמור על כתפיים רפויות, הימנע מתנועת יתר בחזה. התרכז בתחושה של התרחבות הצלעות התחתונות.",
        imageURL: "https://miro.medium.com/v2/resize:fit:1200/1*IDVPqo6WJYMug_TbMT2wrQ.gif"
      },
                {
        muscle: "בטן – אנטי־סיבוב",
        nameHe: "בירד דוג עם השהיה",
        nameEn: "Bird Dog with Hold",
        timeReps: "2 סטים × 8–10 חזרות לכל צד (החזקת 2–3 שניות בכל חזרה)",
        instructions: "עמוד על שש, כפות ידיים מתחת לכתפיים וברכיים מתחת לאגן. מתח יד קדימה ורגל נגדית לאחור עד שהן בקו אחד עם הגוף, החזק 2–3 שניות וחזור לאט. שמור על גב ישר ובטן אסופה, הימנע מקימור או קשת בגב. נשוף בזמן ההארכה. תרגיש את העבודה בליבה ובגב התחתון.",
        imageURL: "https://cdn-life.dailyburn.com/life/wp-content/uploads/2018/02/10003804/bird-dog.gif"
      },
                {
        muscle: "בטן תחתונה",
        nameHe: "הרמות רגליים בתלייה",
        nameEn: "Hanging Straight Leg Raise",
        timeReps: "2 סטים × 8–12 חזרות",
        instructions: "אחוז במתח באחיזה עליונה, שמור על גוף יציב. הרם רגליים ישרות מעלה עד גובה אגן או מעט מעבר, עצור לשנייה ואז הורד לאט עד כמעט למטה. שמור על בטן אסופה, הימנע מתנופה. נשוף בזמן ההרמה. תרגיש את העבודה בבטן התחתונה ובכפיפי הירך.",
        imageURL: "https://www.verywellfit.com/thmb/wY2NmB0-W3tCxZDntFbRtzUZHMQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/42-3498291-Captains-Chair-Leg-Raises-GIF-a2f30dc759fe474c94893c8bd19abecb.gif"
      },
                {
        muscle: "בטן תחתונה (חלופה לבית)",
        nameHe: "Reverse Crunch עם בעיטה מעלה",
        nameEn: "Reverse Crunch with Leg Kick",
        timeReps: "2 סטים × 12–15 חזרות",
        instructions: "שכב על הגב, ברכיים כפופות 90°. הרם את האגן מהרצפה תוך בעיטה מעלה של הרגליים. עצור רגע בכיווץ, החזר את האגן לאט לרצפה. שמור על גב תחתון צמוד למזרן, הימנע מנדנוד. נשוף בזמן ההרמה. תרגיש את העבודה בעיקר בבטן התחתונה.",
        imageURL: "https://media1.popsugar-assets.com/files/thumbor/tDsuLRyHzhSA_nFMNR0yrjAfsfA/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2021/08/13/796/n/1922729/663c713b67ccac48_IMB_khEK1p/i/Reverse-Crunch-to-Heel-Drop.GIF"
      },
                {
        muscle: "גב תחתון",
        nameHe: "סופרמן הולד",
        nameEn: "Superman Hold",
        timeReps: "2 סטים × 15–20 שניות החזקה או 10–12 חזרות דינמיות",
        instructions: "שכב על הבטן, ידיים קדימה, רגליים ישרות לאחור. הרם יחד ידיים ורגליים מעלה, החזק שנייה או שתיים, ואז הורד לאט. שמור על צוואר נייטרלי, אל תרים את הראש יתר על המידה. נשוף בזמן ההרמה. תרגיש את העבודה בזוקפי הגב ובישבן.",
        imageURL: "https://www.meridian-fitness.co.uk/wp-content/uploads/2025/01/Superman.gif"
      },
                {
        muscle: "בטן – לחץ תוך־בטני",
        nameHe: "Hollow Body Hold",
        nameEn: "Hollow Body Hold",
        timeReps: "2 סטים × 20–30 שניות החזקה",
        instructions: "שכב על הגב, הרם רגליים ישרות מעט מעל הרצפה וידיים קדימה/מעל הראש. הדבק גב תחתון לרצפה, שמור על סנטר מעט פנימה. אחוז במנח הזה תוך נשימה רגילה. הימנע מקשת בגב התחתון. תרגיש את העבודה חזק בבטן הקדמית.",
        imageURL: "https://www.garagegymreviews.com/wp-content/uploads/2023/10/bent-knee-hollow-body-hold.gif"
      },
                {
        muscle: "אגן/כפיפת ירך",
        nameHe: "L-Sit Hold",
        nameEn: "L-Sit Hold",
        timeReps: "2 סטים × 10–20 שניות החזקה",
        instructions: "שב בין מקבילים או הישען על כפות ידיים בצדדים, הרם רגליים ישרות קדימה בזווית 90° והחזק. שמור על גב זקוף ובטן אסופה. נשום רגיל לאורך ההחזקה. תרגיש את העבודה בכפיפי הירך ובבטן התחתונה. חלופות למתחילים: Tuck Sit Hold (ברכיים כפופות לחזה), One-Leg L-Sit (רגל אחת ישרה, אחת כפופה), או Parallel Support Hold (תמיכה עם רגליים נשענות קלות ברצפה).",
        imageURL: "https://liftmanual.com/wp-content/uploads/2023/04/l-sit.gif"
      },
        ],
    },
    {
      id: "A024",
      title: "אימון ליבה 2",
      emoji: "🤸‍♀️",
      minutes: 10,
      category: "אימון ליבה",
      locations: ["home","gym"],
      exercises: 
        [
                {
        muscle: "בטן – כפיפה קדמית",
        nameHe: "כפיפת בטן באלכסון",
        nameEn: "Oblique Crunch",
        timeReps: "2 סטים × 12–15 חזרות לכל צד",
        instructions: "שכב על הגב, ברכיים כפופות, כף יד אחת ליד הראש והשנייה מונחת לצידך. עלה באלכסון, מרפק לכיוון הברך הנגדית, תוך שמירה על תנועה מבוקרת וללא משיכה בצוואר. שאף בירידה ונשוף בעלייה. תרגיש את העבודה בבטן ובאלכסונים.",
        imageURL: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/12/Oblique-crunch.gif?fit=600%2C600&ssl=1"
      },
                {
        muscle: "אגן ומותן – ייצוב/הטיות אגן",
        nameHe: "גוד מורנינג (משקל גוף)",
        nameEn: "Good Morning (Bodyweight)",
        timeReps: "2 סטים × 12–15 חזרות",
        instructions: "עמוד זקוף, כפות רגליים ברוחב אגן, ידיים מאחורי הראש או על החזה. הטה את האגן לאחור תוך שמירה על גב ישר, עד שהגב כמעט מקביל לרצפה. חזור חזרה לעמידה זקופה בכיווץ ישבן. הימנע מכיפוף בגב תחתון. נשוף בזמן העלייה.",
        imageURL: "https://images.squarespace-cdn.com/content/v1/5ebef943272c1041d83b1d15/1597757459702-87IBL12SOMBP82EGOAVO/Good+Morning+Exercise.gif"
      },
                {
        muscle: "בטן – אנטי־סיבוב",
        nameHe: "בירד דוג עם השהיה",
        nameEn: "Bird Dog with Hold",
        timeReps: "2 סטים × 8–10 חזרות לכל צד (החזקה 2–3 שניות בכל חזרה)",
        instructions: "התמקם בעמידת שש – כפות ידיים מתחת לכתפיים וברכיים מתחת לאגן. מתח יד קדימה ורגל נגדית לאחור עד שהן בקו ישר עם הגוף. החזק 2–3 שניות, שמור על גב ניטרלי ובטן אסופה, חזור באיטיות וחליף צד. הימנע מקימור או קשת בגב. נשוף בזמן ההארכה.",
        imageURL: "https://cdn-life.dailyburn.com/life/wp-content/uploads/2018/02/10003804/bird-dog.gif"
      },
                {
        muscle: "גב תחתון – ייצוב דינמי",
        nameHe: "סופרמן הולד",
        nameEn: "Superman Hold",
        timeReps: "2 סטים × 12–15 חזרות דינמיות או 15–20 שניות אחיזה",
        instructions: "שכב על הבטן, ידיים קדימה ורגליים ישרות לאחור. הרם יחד ידיים ורגליים מהרצפה עד שנוצר קשת קלה בגב, עצור רגע ואז הורד חזרה. שמור על צוואר ניטרלי וראש בהמשך לעמוד השדרה. נשוף בזמן ההרמה. תרגיש את העבודה בזוקפי הגב ובישבן.",
        imageURL: "https://www.meridian-fitness.co.uk/wp-content/uploads/2025/01/Superman.gif"
      },
                {
        muscle: "גב תחתון – אנטי־כיפוף קדמי",
        nameHe: "פלאנק עם נגיעות כתף",
        nameEn: "Plank with Shoulder Tap",
        timeReps: "2 סטים × 8–12 נגיעות לכל צד",
        instructions: "התמקם בפלאנק גבוה – ידיים מתחת לכתפיים, גוף בקו ישר. הרם יד אחת ונגע בכתף הנגדית, החזר בעדינות והחלף צד. שמור על אגן יציב, בלי סיבוב או קריסה. נשום באופן רציף, הימנע מהחזקת אוויר. תרגיש את העבודה בליבה הקדמית והצדית.",
        imageURL: "https://media.self.com/photos/5a1495c8e91faa1fe331591b/master/w_1600%2Cc_limit/new-years-challenge-t-shoulder-tap.gif"
      },
                {
        muscle: "שרירים תומכים – אנטי־כיפוף צדי",
        nameHe: "Suitcase Hold",
        nameEn: "Suitcase Hold",
        timeReps: "2 סטים × 20–30 שניות לכל צד",
        instructions: "עמוד זקוף, החזק משקולת יד אחת (או בקבוק מים כבד) בצד הגוף. שמור על גב ישר וכתפיים מאוזנות, אל תטה את הגוף לצד. החזק סטטית את המנח. נשום רגיל לאורך כל הזמן. תרגיש את העבודה בצד הליבה ובשרירי הייצוב של האגן.",
        imageURL: "https://liftmanual.com/wp-content/uploads/2023/04/dumbbell-suitcase-carry.gif"
      },
        ],
    },
    {
      id: "A025",
      title: "אימון מתיחות",
      emoji: "🧘‍♀️",
      minutes: 12,
      category: "מתיחות",
      locations: ["home","gym"],
      exercises: 
        [
                {
        muscle: "ראש וצוואר",
        nameHe: "הטיית ראש לצד והחזקת מתיחה",
        nameEn: "Lateral Neck Stretch",
        timeReps: "שגרה יומית",
        instructions: "שב או עמוד זקוף כשהכתפיים רפויות. הטה את הראש לצד כך שהאוזן מתקרבת לכתף, תוך שמירה על כתפיים נמוכות. ניתן להניח יד על הראש להעמקה עדינה אך בלי למשוך בכוח. החזק 20–30 שניות בכל צד. הימנע מסיבוב או הקשתה לאחור.",
        imageURL: "https://pelank.com/wp-content/uploads/2025/01/The-Ultimate-Deskercise-Routine_-Stretches-for-the-Office.gif"
      },
                {
        muscle: "ראש וצוואר",
        nameHe: "סיבובי צוואר איטיים",
        nameEn: "Neck Circles",
        timeReps: "שגרה יומית",
        instructions: "שב או עמוד עם גב ישר וכתפיים משוחררות. התחל בסנטר לחזה ובצע סיבוב איטי של הראש לצד אחד – קדימה, הצידה, אחורה וחזרה. בצע 3–4 חזרות לכל כיוון בקצב איטי ומבוקר. שמור על נשימה רגועה והימנע מתנועות חדות או כאב.",
        imageURL: "https://i.pinimg.com/originals/f2/8c/37/f28c37d60c44fb70540779de22ef98bc.gif"
      },
                {
        muscle: "ראש וצוואר",
        nameHe: "כפיפת סנטר לחזה",
        nameEn: "Chin-to-Chest Stretch",
        timeReps: "שגרה יומית",
        instructions: "שב או עמוד זקוף, קרב את הסנטר בעדינות לכיוון החזה ושמור על כתפיים רפויות. החזק 20–30 שניות והרגש את המתיחה בחלק האחורי של הצוואר. נשוף לאט כדי להרפות. הימנע מתנועות חדות בזמן החזרה למעלה.",
        imageURL: "https://www.the-elbowroom.com/wp-content/uploads/2015/07/NextUglyAntarcticgiantpetrel-size_restricted.gif"
      },
                {
        muscle: "כתפיים",
        nameHe: "מתיחת יד לרוחב הגוף",
        nameEn: "Across-Body Shoulder Stretch",
        timeReps: "שגרה יומית",
        instructions: "עמוד או שב זקוף. מתח יד קדימה וחצה אותה לרוחב הגוף בגובה כתף. אחוז במרפק או בזרוע העליונה ביד השנייה ומשוך בעדינות לכיוון החזה. החזק 20–30 שניות והרגש מתיחה בכתף האחורית. שמור על כתפיים נמוכות ורפויות.",
        imageURL: "https://media.post.rvohealth.io/wp-content/uploads/sites/2/2021/02/400x400_9_Stretches_to_Benefit_Your_Golf_Game_Shoulder_Swing_Stretch.gif"
      },
                {
        muscle: "כתפיים",
        nameHe: "מתיחת כתף מאחורי הראש",
        nameEn: "Overhead Shoulder Stretch",
        timeReps: "שגרה יומית",
        instructions: "עמוד זקוף והרם יד אחת מעל הראש. כופף את המרפק והורד את כף היד אל מאחורי הראש או הגב העליון. בעזרת היד השנייה לחץ בעדינות על המרפק לכיוון מטה והרגש מתיחה בכתף ובזרוע האחורית. שמור על גב זקוף וכתפיים רפויות. החזק 20–30 שניות והחלף צד.",
        imageURL: "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_Stretches_to_Do_at_Work_Every_Day_Triceps_Stretch.gif?w=1155&h=840"
      },
                {
        muscle: "כתפיים",
        nameHe: "מתיחת כתף מול קיר",
        nameEn: "Shoulder Wall Stretch",
        timeReps: "שגרה יומית",
        instructions: "עמוד מול קיר במרחק של חצי צעד, הנח את כפות הידיים עליו בגובה כתפיים. התרחק מעט לאחור ודחוף את החזה קדימה לכיוון הרצפה, תוך שמירה על ידיים ישרות. הרגש מתיחה בכתפיים ובחזה. שמור על גב ישר והימנע מקשתה מוגזמת במותן. החזק 20–30 שניות.",
        imageURL: "https://brand.assets.adidas.com/capi/enUS/Images/improve-your-shoulder-mobility-blog-image-06_221-977484.gif"
      },
                {
        muscle: "שכמות/גב עליון",
        nameHe: "מתיחת שכמות בישיבה (דחיפת ידיים קדימה)",
        nameEn: "Seated Upper Back Stretch",
        timeReps: "שגרה יומית",
        instructions: "שב זקוף והשלב אצבעות קדימה מול החזה. מתח את הידיים קדימה ודחוף אותן רחוק ככל האפשר, תוך כדי עיגול קל של הגב העליון והרחבת השכמות. שמור על סנטר מעט פנימה. החזק 20–30 שניות והתרכז בהרגשת המתיחה בין השכמות.",
        imageURL: "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_Stretches_to_Do_at_Work_Every_Day_Upper_Body_Stretch.gif?w=1155&h=840"
      },
                {
        muscle: "שכמות/גב עליון",
        nameHe: "תנוחת חתול-פרה",
        nameEn: "Cat-Cow Stretch",
        timeReps: "שגרה יומית",
        instructions: "התחל בעמידת שש – כפות ידיים מתחת לכתפיים וברכיים מתחת לאגן. בשאיפה הקשת את הגב כלפי מטה, הרם את הראש והטף את הישבן לאחור (פרה). בנשיפה עגל את הגב כלפי מעלה, הכנס סנטר לחזה והדק את הבטן פנימה (חתול). המשך בקצב נשימה איטי, 6–8 חזרות לפחות, תוך שמירה על שליטה חלקה בין התנוחות.",
        imageURL: "https://images.ctfassets.net/6ilvqec50fal/5BBiIrimbbfn99yF09s4yW/7d2e0e8da5b70b77fd6897313d71fb7c/Untitled_design__26_.gif"
      },
                {
        muscle: "שכמות/גב עליון",
        nameHe: "מתיחת ילד (ישיבה על עקבים)",
        nameEn: "Child’s Pose",
        timeReps: "שגרה יומית",
        instructions: "כרע על הרצפה והישען לאחור כך שהישבן ייגע בעקבים. מתח את הידיים קדימה על הרצפה והרפה את החזה והראש מטה. שמור על נשימה עמוקה ואיטית, והרגש מתיחה בגב התחתון, בירכיים ובכתפיים. החזק 20–40 שניות.",
        imageURL: "https://cdn.shopify.com/s/files/1/0052/7043/7978/files/Hip_Stretch_2_480x480.gif?v=1666369600"
      },
                {
        muscle: "חזה",
        nameHe: "מתיחת חזה על משקוף דלת",
        nameEn: "Chest Stretch in Doorway",
        timeReps: "שגרה יומית",
        instructions: "עמוד בפתח דלת והנח את האמות או כפות הידיים על המשקוף בגובה כתפיים או מעט מעל. צעד קדימה בעדינות ודחוף את החזה קדימה תוך שמירה על כתפיים נמוכות ורפויות. הרגש מתיחה בחזה ובכתפיים הקדמיות. החזק 20–30 שניות.",
        imageURL: "https://www.inspireusafoundation.org/file/2023/09/doorway-chest-stretch.gif"
      },
                {
        muscle: "חזה",
        nameHe: "פתיחת ידיים לאחור בעמידה",
        nameEn: "Standing Chest Opener",
        timeReps: "שגרה יומית",
        instructions: "עמוד זקוף, שלב את כפות הידיים מאחורי הגב ונעל אצבעות. ישר את המרפקים ודחוף את הידיים מטה ולאחור תוך הרמת החזה ופתיחת הכתפיים. שמור על צוואר ארוך ולא מקושת. החזק 20–30 שניות.",
        imageURL: "https://images.squarespace-cdn.com/content/v1/5a620a85d55b41e7233c5243/ae25b65f-ef76-40f5-8091-76cb07bdad9b/PleasantTerrificBettong-size_restricted.gif"
      },
                {
        muscle: "חזה",
        nameHe: "מתיחת קוברה",
        nameEn: "Cobra Stretch",
        timeReps: "שגרה יומית",
        instructions: "שכב על הבטן, הנח כפות ידיים מתחת לכתפיים ויישר אותן בהדרגה כדי להרים את החזה כלפי מעלה. שמור על אגן ורגליים על הרצפה. אל תקמר את הגב בכוח – עבוד בטווח נוח. החזק 15–25 שניות והרגש מתיחה בבטן ובגב התחתון.",
        imageURL: "https://post.healthline.com/wp-content/uploads/2019/08/400x400_Best_Ways_to_Stretch_Lats_Cobra.gif"
      },
                {
        muscle: "זרוע קדמית",
        nameHe: "מתיחת זרוע לאחור עם יד על קיר",
        nameEn: "Biceps Wall Stretch",
        timeReps: "בעת צורך",
        instructions: "עמוד לצד קיר, הנח את כף היד עליו בגובה כתף כשהאצבעות פונות אחורה. סובב בעדינות את הגוף לכיוון הנגדי עד שתרגיש מתיחה לאורך הזרוע הקדמית והחזה. שמור על כתף נמוכה וגב זקוף. החזק 20–30 שניות בכל צד.",
        imageURL: "https://fitnessprogramer.com/wp-content/uploads/2021/08/Standing-one-arm-chest-stretch.gif"
      },
                {
        muscle: "זרוע אחורית",
        nameHe: "יד מאחורי הראש עם דחיפה קלה",
        nameEn: "Overhead Triceps Stretch",
        timeReps: "בעת צורך",
        instructions: "הרם יד אחת מעל הראש וכופף את המרפק כך שכף היד תרד אל הגב העליון. אחוז במרפק ביד השנייה ודחוף בעדינות מטה. שמור על גב זקוף וכתפיים רפויות. החזק 20–30 שניות בכל צד.",
        imageURL: "https://www.inspireusafoundation.org/file/2023/08/overhead-tricep-stretch.gif"
      },
                {
        muscle: "אמות",
        nameHe: "מתיחת כף יד כלפי מטה/מעלה",
        nameEn: "Wrist Flexor/Extensor Stretch",
        timeReps: "בעת צורך",
        instructions: "הושט יד קדימה עם מרפק ישר. למשיכת כופפי שורש כף היד – אחוז באצבעות ומשוך אותן כלפי מעלה. למתיחת פושטי שורש כף היד – משוך את האצבעות כלפי מטה. שמור על כתף רגועה וזרוע ישרה. החזק 15–25 שניות לכל כיוון בכל צד.",
        imageURL: "https://assets.myworkouts.io/exercises-media/HPqrbq47gdkck55QZ/wrist_extension_stretch_female_v8_gif_capoff.gif"
      },
                {
        muscle: "בטן",
        nameHe: "מתיחת ספינקס (בשכיבה על אמות, פתיחה עדינה של החזה)",
        nameEn: "Sphinx Stretch",
        timeReps: "בעת צורך",
        instructions: "שכב על הבטן, הנח את האמות על הרצפה מתחת לכתפיים, כשהמרפקים בזווית ישרה והאמות מקבילות זו לזו. הרם בעדינות את החזה והראש מעלה, תוך שמירה על אגן נוגע ברצפה וכתפיים רפויות. נשום עמוק, החזק 20–30 שניות, והרגש מתיחה קלה ונעימה בבטן ובחזה. אם יש עומס בגב התחתון – הקטן את הגובה או הנח מגבת מתחת לאגן.",
        imageURL: "https://fitnessprogramer.com/wp-content/uploads/2021/05/Sphinx-Stretch.gif"
      },
                {
        muscle: "גב תחתון",
        nameHe: "כפיפה קדימה בעמידה",
        nameEn: "Standing Forward Fold",
        timeReps: "שגרה יומית",
        instructions: "עמוד זקוף עם רגליים ברוחב אגן. התכופף קדימה מהירכיים והנח ידיים על הרצפה או על השוקיים בהתאם לגמישותך. הרפה את הראש והכתפיים כלפי מטה ושמור על ברכיים רפויות במידת הצורך. החזק 20–30 שניות והתרכז בשחרור הגב האחורי וההמסטרינגס.",
        imageURL: "https://media.post.rvohealth.io/wp-content/uploads/2023/05/standing-forward-bend.gif"
      },
                {
        muscle: "גב תחתון",
        nameHe: "ברכיים לחזה בשכיבה",
        nameEn: "Knee-to-Chest Stretch",
        timeReps: "שגרה יומית",
        instructions: "שכב על הגב וכופף ברך אחת אל החזה, אחוז בה בידיים ומשוך בעדינות לכיוונך. שמור על רגל שנייה ישרה או כפופה בהתאם לנוחות. החזק 20–30 שניות והרגש מתיחה בגב התחתון ובישבן. חזור עם הרגל השנייה ובסיום ניתן לחבק את שתי הברכיים יחד.",
        imageURL: "https://post.healthline.com/wp-content/uploads/2023/06/Knee-to-chest-stretch.gif"
      },
                {
        muscle: "גב תחתון",
        nameHe: "תנוחת כלב מביט מטה",
        nameEn: "Downward Dog Stretch",
        timeReps: "שגרה יומית",
        instructions: "התחל בעמידת שש, הנח ידיים מעט קדימה מהרוחב של הכתפיים ודחוף את האגן מעלה ואחורה ליצירת צורת V הפוכה. שמור על גב ארוך, עקבים שואפים לרצפה וברכיים מעט כפופות אם יש צורך. החזק 20–40 שניות והתרכז במתיחה בהמסטרינגס, כתפיים וגב.",
        imageURL: "https://cdn.shopify.com/s/files/1/0052/7043/7978/files/yoga-poses-for-flexibility-mobility-downward-facing-dog-exercise_480x480.gif?v=1684254793"
      },
                {
        muscle: "מותניים וצד הגוף",
        nameHe: "מתיחת צד בעמידה עם יד מונפת",
        nameEn: "Standing Side Stretch",
        timeReps: "שגרה יומית",
        instructions: "עמוד זקוף, הרם יד אחת מעלה והטה את הגוף לצד הנגדי תוך הארכת פלג הגוף העליון. שמור על רגליים ישרות ויציבות, וכתפיים רפויות. החזק 20–30 שניות בכל צד והרגש מתיחה בצד הגוף ובשרירי האלכסונים.",
        imageURL: "https://fitnessprogramer.com/wp-content/uploads/2022/09/standing-side-bend.gif"
      },
                {
        muscle: "מותניים וצד הגוף",
        nameHe: "שכיבה וסיבוב רגל לצד (טוויסט)",
        nameEn: "Supine Spinal Twist",
        timeReps: "שגרה יומית",
        instructions: "שכב על הגב, כופף ברך אחת והנח אותה מעבר לגוף לכיוון הרצפה בצד הנגדי. ידיים פרושות לצדדים וכתפיים צמודות לרצפה. סובב בעדינות את הראש לצד ההפוך מהרגל. החזק 20–40 שניות והרגש מתיחה בגב התחתון ובשרירי הירך. בצע גם בצד השני.",
        imageURL: "https://www.verywellfit.com/thmb/PpiTDEDxSn969cnP0Ur9SAB9Jzg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Verywell-20-4023748-SpinalTwist01-1729-5995b536845b340010c016cf.gif"
      },
                {
        muscle: "מותניים וצד הגוף",
        nameHe: "מתיחת משולש (יוגה)",
        nameEn: "Triangle Pose",
        timeReps: "שגרה יומית",
        instructions: "עמוד בפיסוק רחב, כף רגל קדמית פונה קדימה ואחורית בזווית של כ־90 מעלות. מתח ידיים לצדדים, הטה את הגוף קדימה לכיוון רגל קדמית והנח יד על שוק או קרסול. יד שנייה מונפת מעלה ליצירת קו ישר. שמור על גב ארוך ומבט מעלה. החזק 20–30 שניות בכל צד.",
        imageURL: "https://www.theyogacollective.com/wp-content/uploads/2019/10/5850642685417750730_IMG_8904-1-e1571160047174.jpg"
      },
                {
        muscle: "ירך קדמית",
        nameHe: "מתיחת ירך בעמידה (משיכת הקרסול לעכוז)",
        nameEn: "Standing Quad Stretch",
        timeReps: "שגרה יומית",
        instructions: "עמוד זקוף והחזק בעזרת יד אחת את הקרסול של רגל אחורית, קרב אותו לעכוז תוך שמירה על ברכיים צמודות ואגן ניטרלי. שמור על גב זקוף וכתף רפויה. החזק 20–30 שניות בכל צד והרגש מתיחה בקדמת הירך.",
        imageURL: "https://fitnessprogramer.com/wp-content/uploads/2021/08/Standing-Quadriceps-Stretch.gif"
      },
                {
        muscle: "ירך קדמית",
        nameHe: "מתיחת ירך בשכיבה על הצד",
        nameEn: "Side-Lying Quad Stretch",
        timeReps: "שגרה יומית",
        instructions: "שכב על הצד, כופף את הברך האחורית ואחוז בקרסול ביד שלך. משוך בעדינות את העקב לכיוון העכוז תוך שמירה על ירכיים מיושרות זו מעל זו. שמור על גב רגוע וללא קשתה מוגזמת במותן. החזק 20–30 שניות לכל צד.",
        imageURL: "https://barbend.com/wp-content/uploads/2024/05/lying-quad-stretch-barbend-movement-gif-masters-2.gif"
      },
                {
        muscle: "ירך קדמית",
        nameHe: "מתיחת ירך בעמידת לאנץ'",
        nameEn: "Lunge Quad Stretch",
        timeReps: "שגרה יומית",
        instructions: "התחל בעמדת לאנץ' – רגל קדמית כפופה ב־90° ורגל אחורית ישרה לאחור. הנח ברך אחורית על הרצפה, והישען קדימה תוך דחיפת האגן מטה. ניתן להחזיק בקרסול האחורי ביד לאתגר נוסף. החזק 20–30 שניות והרגש מתיחה בקדמת הירך ובמפרק הירך.",
        imageURL: "https://media.post.rvohealth.io/wp-content/uploads/sites/2/2019/05/QUADLUNGE.gif"
      },
                {
        muscle: "ירך אחורית",
        nameHe: "מתיחת ירך אחורית בישיבה",
        nameEn: "Seated Hamstring Stretch",
        timeReps: "שגרה יומית",
        instructions: "שב עם שתי רגליים ישרות קדימה. התכופף קדימה מהאגן והושט ידיים אל כפות הרגליים או השוקיים בהתאם לגמישותך. שמור על גב ארוך ואל תתכופף בכוח. החזק 20–30 שניות והרגש מתיחה בהמסטרינגס ובגב התחתון.",
        imageURL: "https://cdn.jefit.com/assets/img/exercises/gifs/931.gif"
      },
                {
        muscle: "ירך אחורית",
        nameHe: "כפיפה קדימה בישיבה עם רגל אחת",
        nameEn: "Seated Single-Leg Forward Fold",
        timeReps: "שגרה יומית",
        instructions: "שב עם רגל אחת ישרה קדימה והשנייה כפופה כך שכף הרגל מונחת בצד הירך. התכופף קדימה מעל הרגל הישרה והושט ידיים לשוק או לכף הרגל. שמור על גב ישר ככל האפשר. החזק 20–30 שניות לכל צד והרגש מתיחה בהמסטרינג וברגל הישרה.",
        imageURL: "https://cdn.jefit.com/assets/img/exercises/gifs/930.gif"
      },
                {
        muscle: "ירך אחורית",
        nameHe: "מתיחת ירך בעמידה והטיית גוף קדימה",
        nameEn: "Standing Hamstring Stretch",
        timeReps: "שגרה יומית",
        instructions: "עמוד עם רגל אחת קדימה, עקב על הרצפה ואצבעות כלפי מעלה. כופף מעט את הברך השנייה והטה את פלג הגוף העליון קדימה מהאגן אל מעל הרגל הישרה. שמור על גב ארוך, סנטר מעט פנימה והרגש מתיחה בהמסטרינגס. החזק 20–30 שניות בכל צד.",
        imageURL: "https://fitnessprogramer.com/wp-content/uploads/2021/05/Standing-Hamstring-Stretch.gif"
      },
                {
        muscle: "ירך פנימית",
        nameHe: "מתיחת פרפר (כפות רגליים צמודות, גב זקוף)",
        nameEn: "Butterfly Stretch",
        timeReps: "שגרה יומית",
        instructions: "שב על הרצפה והצמד את כפות הרגליים יחד מול הגוף, הברכיים פתוחות לצדדים. אחוז בקרסוליים או בכפות הרגליים, שמור על גב זקוף ודחוף ברכיים מטה בעדינות. הרגש מתיחה במקרבי הירך. החזק 20–40 שניות ונשום עמוק.",
        imageURL: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Butterfly-Stretch.gif"
      },
                {
        muscle: "ירך פנימית",
        nameHe: "מכרע צידי (מעבירים משקל לצד)",
        nameEn: "Side Lunge Stretch",
        timeReps: "שגרה יומית",
        instructions: "עמוד בפיסוק רחב, כופף ברך אחת והעבר את משקל הגוף אליה, תוך שמירה על רגל שנייה ישרה ושטוחה על הרצפה. שמור על גב ארוך וחזה פתוח. החזק 20–30 שניות והחלף צד. מתיחה לירך הפנימית ולמקרבים.",
        imageURL: "https://fitnessprogramer.com/wp-content/uploads/2021/05/Side-Lunge-Stretch.gif"
      },
                {
        muscle: "ירך פנימית",
        nameHe: "פישוק רחב בעמידה והטיית גוף לצד",
        nameEn: "Wide-Leg Side Stretch",
        timeReps: "שגרה יומית",
        instructions: "עמוד בפיסוק רחב, הרם יד אחת מעלה והטה את הגוף לצד הנגדי לכיוון הרגל. יד תחתונה נשענת על ירך, שוק או קרסול בהתאם לגמישותך. שמור על גב ארוך ולא קמור. החזק 20–30 שניות בכל צד והרגש מתיחה בצד הגוף ובפנים הירך.",
        imageURL: "https://s3assets.skimble.com/assets/6431/skimble-workout-trainer-exercise-standing-leg-stretch-2_iphone.jpg"
      },
                {
        muscle: "ירך חיצונית",
        nameHe: "שכיבה על הגב עם רגל חוצה לצד",
        nameEn: "Supine IT Band Stretch",
        timeReps: "בעת צורך",
        instructions: "שכב על הגב, ישר רגל אחת והעבר את הרגל השנייה ישרה מעליה לצד הנגדי. שמור על כתפיים צמודות לרצפה. ניתן להניח יד על הרגל כדי להעמיק את המתיחה. החזק 20–30 שניות והרגש מתיחה בצד הירך וב־IT Band.",
        imageURL: "https://cdn.triathlete.com/wp-content/uploads/2021/08/GettyImages-1371018161.jpg?width=730"
      },
                {
        muscle: "עכוז/ישבן",
        nameHe: "תנוחת יונה",
        nameEn: "Pigeon Pose",
        timeReps: "שגרה יומית",
        instructions: "התחל בתנוחת פלאנק או כלב מביט מטה, הבא ברך אחת קדימה והנח אותה קדימה ולצד, כך שהשוק מוטה באלכסון. ישר את הרגל השנייה לאחור והנח אגן מטה ככל הניתן. הישען קדימה על האמות או הישאר זקוף – לפי היכולת. החזק 20–40 שניות בכל צד והרגש מתיחה בישבן ובירך.",
        imageURL: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/02/400x400-Pigeon_Pose_Forward.gif?h=840"
      },
                {
        muscle: "עכוז/ישבן",
        nameHe: "מתיחת ישבן בשכיבה עם רגל חוצה",
        nameEn: "Supine Figure-Four Stretch",
        timeReps: "שגרה יומית",
        instructions: "שכב על הגב, כופף ברך אחת והנח את הקרסול של הרגל השנייה מעליה ליצירת צורת 4. אחוז בירך התחתונה ומשוך בעדינות לכיוון החזה. שמור על כתפיים רפויות על הרצפה. החזק 20–30 שניות בכל צד והרגש מתיחה בישבן ובירך החיצונית.",
        imageURL: "https://post.healthline.com/wp-content/uploads/2021/01/400x400_Exercises_for_Hip_Pain_Figure_Four_Stretch.gif"
      },
                {
        muscle: "עכוז/ישבן",
        nameHe: "מתיחת ישבן בעמידה",
        nameEn: "Standing Figure-Four Stretch",
        timeReps: "שגרה יומית",
        instructions: "עמוד זקוף, כופף ברך אחת והנח את הקרסול על הירך הנגדית, ממש מעל הברך, ליצירת צורת 4. שב לאחור כאילו מתיישב על כיסא, תוך שמירה על גב ארוך וחזה פתוח. החזק 20–30 שניות בכל צד והרגש מתיחה בישבן ובירך החיצונית.",
        imageURL: "https://marathonhandbook.com/wp-content/uploads/2022/03/Standing-Figure-Four-Stretch.gif"
      },
                {
        muscle: "כופפי ירך",
        nameHe: "מתיחת לאנץ' קדימה",
        nameEn: "Low Lunge Hip Flexor Stretch",
        timeReps: "שגרה יומית",
        instructions: "התחל בעמדת לאנץ' עם ברך אחורית מונחת על הרצפה וכף רגל קדמית שטוחה קדימה. דחוף בעדינות את האגן קדימה ולמטה כדי להרגיש מתיחה במפשעה ובכופפי הירך. שמור על גב זקוף וכתפיים רפויות. החזק 20–30 שניות בכל צד.",
        imageURL: "https://lh6.googleusercontent.com/-Xct34QBcX3CPdfhEedIVMWa-cnYrfuCOWcag79NoVBBpLQgEX6GUNBEaudC1uCleMeOxe744Wd6PB1uNzysDnKoWZJwZ5rIV2O2bFQaYOa0meGg5JpN4dfpQ1oAdEi4kjhwaxUL"
      },
                {
        muscle: "כופפי ירך",
        nameHe: "מתיחת לוחם ראשון (יוגה)",
        nameEn: "Warrior I Pose",
        timeReps: "שגרה יומית",
        instructions: "עמוד בפיסוק רחב, רגל קדמית כפופה כ־90° ורגל אחורית מתוחה לאחור בזווית קלה החוצה. הרם ידיים מעלה מעל הראש, שמור על חזה פתוח ואגן פונה קדימה. הרגש מתיחה בירך האחורית ובחזה. החזק 20–30 שניות בכל צד.",
        imageURL: "https://fitnessprogramer.com/wp-content/uploads/2023/01/Warrior-1-Pose.gif"
      },
                {
        muscle: "כופפי ירך",
        nameHe: "מתיחת גשר קטן",
        nameEn: "Bridge Pose Hip Stretch",
        timeReps: "שגרה יומית",
        instructions: "שכב על הגב, כפות רגליים שטוחות ברוחב אגן וברכיים כפופות. דחוף את כפות הרגליים והרם את האגן מעלה, גלגל כתפיים פנימה והצמד ידיים מתחת לגוף. שמור על חזה פתוח והחזק 15–25 שניות. הרגש מתיחה במותניים, בירך הקדמית ובחזה.",
        imageURL: "https://www.rishikulyogshalarishikesh.com/blog/wp-content/uploads/2024/08/bridge-pose-yoga-1024x683.jpg"
      },
                {
        muscle: "שוק אחורי",
        nameHe: "מתיחת שוק מול קיר",
        nameEn: "Calf Wall Stretch",
        timeReps: "שגרה יומית",
        instructions: "עמוד מול קיר והנח את כפות הידיים עליו. כופף ברך קדמית והנח רגל אחורית ישרה לאחור עם עקב על הרצפה. הטה את הגוף קדימה לעבר הקיר עד שתרגיש מתיחה בשוק האחורי. החזק 20–30 שניות בכל צד.",
        imageURL: "https://cdn.jefit.com/assets/img/exercises/gifs/960.gif"
      },
                {
        muscle: "שוק אחורי",
        nameHe: "מתיחת שוק על מדרגה",
        nameEn: "Calf staircase Stretch",
        timeReps: "שגרה יומית",
        instructions: "עמוד על מדרגה כשהחלק הקדמי של כף הרגל על הקצה והעקב באוויר. החזק במעקה ליציבות. הרפה בעדינות את העקב כלפי מטה עד שמורגשת מתיחה בשוק האחורי. שמור על גב זקוף, החזק 20–30 שניות בכל צד.",
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMbl3HfsKIwN4o4A8mvuHCVmHYxCjVyXdT-g&s"
      },
                {
        muscle: "שוק אחורי",
        nameHe: "מתיחת שוק בעמידה עם רגל אחורה",
        nameEn: "Standing Calf Stretch",
        timeReps: "שגרה יומית",
        instructions: "עמוד זקוף, הנח רגל אחת לאחור והצמד עקב לרצפה. כופף מעט את הברך הקדמית והישען קדימה עד שתרגיש מתיחה בשוק האחורי. שמור על גב זקוף וכתפיים רפויות. החזק 20–30 שניות לכל צד.",
        imageURL: "https://fitnessprogramer.com/wp-content/uploads/2022/02/Lunging-Straight-Leg-Calf-Stretch.gif"
      },
                {
        muscle: "שוק אחורי",
        nameHe: "מתיחת שוק בישיבה",
        nameEn: "Seated Calf Stretch",
        timeReps: "שגרה יומית",
        instructions: "שב עם רגליים ישרות קדימה. ליפף רצועה, מגבת או גומייה סביב כף רגל אחת ומשוך בעדינות את הבהונות אליך תוך שמירה על ברך ישרה. הרגש מתיחה בשוק. החזק 20–30 שניות בכל צד ושמור על גב ארוך.",
        imageURL: "https://www.vissco.com/wp-content/uploads/animation/sub/calf-stretch-with-knee-extended-using-towel.gif"
      },
                {
        muscle: "שוק קדמי",
        nameHe: "ישיבה על העקבים עם אצבעות לאחור",
        nameEn: "Tibialis Anterior Stretch",
        timeReps: "בעת צורך",
        instructions: "כרע על הברכיים עם אצבעות רגליים פונות לאחור וכפות רגליים שטוחות על הרצפה. הישען בעדינות לאחור כך שהמשקל ילחץ על גב כף הרגל והשוק הקדמי. החזק 15–25 שניות והרגש מתיחה בטיביאליס אנטריור.",
        imageURL: "https://media.post.rvohealth.io/wp-content/uploads/2025/08/Seated-shin-stretch-1-3.gif"
      },
                {
        muscle: "קרסול וכף רגל",
        nameHe: "גלגול כף רגל על כדור",
        nameEn: "Plantar Fascia Roll / Achilles Stretch",
        timeReps: "בעת צורך",
        instructions: "שב על כיסא או עמוד והנח כדור קטן (טניס/לקקוס) מתחת לכף הרגל. גלגל קדימה ואחורה בלחץ מתון לאורך כף הרגל מהעקב ועד האצבעות. בצע 30–60 שניות בכל רגל. זה עוזר לשחרור הפלאנטר פאסיה ומתיחה עדינה של גיד אכילס.",
        imageURL: "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2021/11/Foot_Exercises_To_Try_At_Home_Golf_Ball_Roll.gif?w=1155&h=840"
      },
        ],
    },
    {
      id: "A026",
      title: "רצף יוגה יומי",
      emoji: "🧘‍♀️",
      minutes: 12,
      category: "מתיחות",
      locations: ["home"],
      exercises: 
        [
                {
        muscle: "ראש וצוואר",
        nameHe: "ישיבה נינוחה עם גלגול ראש איטי",
        nameEn: "Sukhasana (Gentle Neck Rolls)",
        timeReps: "30–40 שניות (או 3–5 נשימות עמוקות)",
        instructions: "שב על הרצפה בתנוחה נינוחה, רגליים משוכלות זו לפני זו. שמור על גב ארוך וזקוף, הרפה את הכתפיים והנח בעדינות את כפות הידיים על הברכיים. עצום עיניים או השאר מבט רך קדימה. שאף עמוק דרך האף ובנשיפה הרפה את הצוואר. התחל להניע את הראש באיטיות במעגל – קדימה, לצד, אחורה ולצד השני – בתנועה רכה וללא מאמץ. הקשב לגוף ואל תדחף את הגבולות. שמור על נשימה יציבה – שאיפה כשהראש עולה, נשיפה כשהוא יורד. אחרי כמה סיבובים החלף כיוון, חזור למרכז בעדינות, פתח עיניים לאט וקח נשימה עמוקה לפני המעבר. הנחיות מעבר: בשאיפה הרם את הראש והארך את הגב, ובנשיפה הנח את כפות הידיים קדימה וגלוש לעמידת שש בתנועה איטית ורציפה.",
        imageURL: "https://i.pinimg.com/originals/d2/19/c3/d219c340f9fc125269e58b0e53555b2c.gif"
      },
                {
        muscle: "גב עליון, כתפיים, עמוד שדרה",
        nameHe: "תנוחת חתול–פרה",
        nameEn: "Marjaryasana–Bitilasana",
        timeReps: "30–40 שניות (או 3–5 נשימות עמוקות)",
        instructions: "התחל בעמידת שש – כפות ידיים מתחת לכתפיים, ברכיים מתחת לאגן, גב ישר ומבט קדימה. בשאיפה הרם את הראש והחזה, השקע את הבטן מטה והטה את עצם הזנב מעלה – זו תנוחת הפרה. בנשיפה עגל את הגב כלפי מעלה, הכנס את הסנטר לחזה ומשוך בעדינות את הבטן פנימה – זו תנוחת החתול. המשך לנוע ברכות בין שתי התנוחות בקצב הנשימה, שמור על זרימה חלקה ותנועה שמתחילה מעמוד השדרה. כשאתה מסיים חזור לגב ניטרלי, שאף עמוק ונשוף באיטיות. הנחיות מעבר: שב לרגע על העקבים ונשום. בשאיפה דחוף את כפות הידיים לרצפה והרם את הגוף לעמידה מלאה כשהראש מתרומם אחרון.",
        imageURL: "https://yogajala.com/wp-content/uploads/2022/02/cat-cow-pose-1.gif"
      },
                {
        muscle: "מותניים, צד הגוף",
        nameHe: "מתיחת צד בעמידה",
        nameEn: "Parsva Tadasana",
        timeReps: "30–40 שניות (או 3–5 נשימות עמוקות)",
        instructions: "עמוד זקוף עם רגליים ברוחב אגן, משקל שווה על שתי כפות הרגליים, גב ארוך וכתפיים רפויות. בשאיפה הרם את הידיים מעל הראש ושלב את האצבעות כך שכפות הידיים פונות כלפי מעלה. בנשיפה הטה בעדינות את הגוף לצד ימין, שמור על גב ישר ואגן יציב והרגש את ההארכה לאורך הצד השמאלי. בכל שאיפה התארך מעלה ובכל נשיפה הרפה. לאחר כמה נשימות חזור למרכז בשאיפה והטה לצד שמאל בנשיפה. בסיום הורד את הידיים באיטיות ועבור לפיסוק רחב. הנחיות מעבר: חזור למרכז, הורד ידיים ופתח את הרגליים לפיסוק רחב. סובב את כף הרגל הקדמית קדימה ואת האחורית החוצה בכ־45 מעלות והיכון לתנוחת לוחם ראשון.",
        imageURL: "https://www.fitsri.com/wp-content/uploads/2022/08/standing-side-stretching.jpg"
      },
                {
        muscle: "כופפי ירך, ירך קדמית",
        nameHe: "לוחם ראשון",
        nameEn: "Virabhadrasana I",
        timeReps: "30–40 שניות (או 3–5 נשימות עמוקות)",
        instructions: "עמוד בפיסוק רחב, סובב את כף הרגל הקדמית קדימה ואת האחורית החוצה בכ־45 מעלות. כופף את הברך הקדמית עד שהירך כמעט מקבילה לרצפה ושמור על ברך מעל הקרסול. הרגל האחורית נשארת מתוחה ויציבה. בשאיפה הרם את הידיים מעל הראש, פתח את בית החזה והבט קדימה או מעט מעלה. שמור על אגן פונה קדימה, גב ארוך וצוואר רפוי. בנשיפה הרפה את הכתפיים אך שמור על תחושת יציבות. בכל שאיפה התארך מעלה ובכל נשיפה העמק מעט בתנוחה. בסיום הורד את הידיים בעדינות, יישר את הרגל הקדמית והחלף צד באיטיות. הנחיות מעבר: פתח את הידיים לצדדים ובנשיפה סובב את כף הרגל האחורית ל־90 מעלות כך שהאגן יפנה לצד והמשך לתנוחת לוחם שני.",
        imageURL: "https://fitnessprogramer.com/wp-content/uploads/2023/01/Warrior-1-Pose.gif"
      },
                {
        muscle: "ירך פנימית, גב תחתון",
        nameHe: "לוחם שני",
        nameEn: "Virabhadrasana II",
        timeReps: "30–40 שניות (או 3–5 נשימות עמוקות)",
        instructions: "עמוד בפיסוק רחב, כף רגל קדמית פונה קדימה והאחורית בזווית של 90 מעלות. כופף את הברך הקדמית ל־90 מעלות, שמור על ירך אחורית חזקה ורגל אחורית מתוחה. בשאיפה הרם את הידיים לצדדים בגובה כתפיים כשהמבט פונה קדימה מעל היד הקדמית. שמור על גב ארוך וכתפיים רפויות אך יציבות, חזה פתוח ונשימה שקטה. בנשיפה העמק מעט בתנוחה והרגש יציבות ואיזון. בכל שאיפה הארך את עמוד השדרה ובכל נשיפה הרפה ממתח אך שמור על כוח ברגליים. כשאתה מסיים, בשאיפה יישר את הרגל הקדמית ובנשיפה הורד ידיים וחזור לעמידת הרים באיטיות וברוגע. הנחיות מעבר: בשאיפה יישר את הברך הקדמית תוך שמירה על רגל אחורית חזקה וידיים פרושות לצדדים, ובנשיפה הארך את עמוד השדרה והטה את הגוף קדימה מעל הרגל הקדמית אל תנוחת משולש.",
        imageURL: "https://64.media.tumblr.com/b6a14f70457d543c51e4d591e76cf483/tumblr_o8pq1pYZnQ1rysr6eo1_400.gif"
      },
                {
        muscle: "ירך פנימית, צד הגוף, גב",
        nameHe: "תנוחת משולש",
        nameEn: "Trikonasana",
        timeReps: "30–40 שניות (או 3–5 נשימות עמוקות)",
        instructions: "עמוד בפיסוק רחב, סובב את כף הרגל הקדמית קדימה ואת האחורית החוצה ב־90 מעלות. שמור על רגליים ישרות וגב ארוך. בשאיפה הרם את הידיים לצדדים בגובה כתפיים, ובנשיפה הטה את פלג הגוף העליון קדימה מעל הרגל הקדמית והורד את היד הקדמית מטה אל השוק, הקרסול או הרצפה בהתאם לגמישותך. הרם את היד השנייה מעלה כך ששתי הידיים יוצרות קו אנכי, והמבט מופנה כלפי מעלה או קדימה לפי הנוחות. שמור על אגן פתוח ועמוד שדרה ארוך ונייטרלי. בכל שאיפה התארך מעט מעלה ובכל נשיפה הרפה לתוך התנוחה. בסיום, בשאיפה הרם את פלג הגוף חזרה למרכז והחלף צד באיטיות תוך שמירה על נשימה סדירה. הנחיות מעבר: בשאיפה הרם את פלג הגוף חזרה למרכז ובנשיפה סגור את הפיסוק בהדרגה. סובב את הגוף קדימה לעבר רגל אחת, כופף את הברך והנח את כפות הידיים על הרצפה – כניסה רכה לעמדת לאנץ' נמוך.",
        imageURL: "https://i.pinimg.com/originals/ed/72/0c/ed720c529f9361e969e06a4984bcbdf2.gif"
      },
                {
        muscle: "כופפי ירך, ירך קדמית",
        nameHe: "לאנץ' נמוך",
        nameEn: "Anjaneyasana",
        timeReps: "30–40 שניות (או 3–5 נשימות עמוקות)",
        instructions: "התחל בעמדת לאנץ' כשהרגל הקדמית כפופה ב־90 מעלות והברך האחורית מונחת על הרצפה מאחור, כף הרגל האחורית שטוחה על הרצפה. בשאיפה הרם את החזה ואת הידיים מעלה מעל הראש, פתח את בית החזה ויישר את הגב. שמור על האגן נמוך ודחוף אותו בעדינות קדימה כדי שתרגיש מתיחה במפשעה ובכופפי הירך של הרגל האחורית. בנשיפה הרפה את הכתפיים אך שמור על יציבות וגב ארוך. המבט קדימה או מעלה לפי הנוחות. בכל שאיפה הארך את עמוד השדרה ובכל נשיפה שחרר מתח מאזור האגן. לסיום הורד את הידיים בעדינות, הרם את הברך האחורית ועבור לתנוחה הבאה. הנחיות מעבר: לאחר שהתמקמת בלאנץ' נמוך, בשאיפה הארך את הגב ובנשיפה העבר את האגן לאחור ויישר את הרגל הקדמית אל חצי פישוק קדימה.",
        imageURL: "https://t3.ftcdn.net/jpg/04/77/25/98/360_F_477259807_hqAkoXrzndMVpJDK2kBLtq9lmgYW7AR1.jpg"
      },
                {
        muscle: "ירך אחורית, שוק אחורי",
        nameHe: "חצי פישוק קדימה",
        nameEn: "Ardha Hanumanasana",
        timeReps: "30–40 שניות (או 3–5 נשימות עמוקות)",
        instructions: "מהעמדה של לאנץ' נמוך הישען לאחור והעבר את משקל הגוף כך שהרגל הקדמית תתיישר קדימה, עקב על הרצפה ואצבעות מופנות כלפי מעלה. שמור על ברך אחורית על הרצפה וגב ארוך. בשאיפה הארך את עמוד השדרה ובנשיפה התכופף קדימה מהירכיים אל מעל הרגל הקדמית מבלי לעגל את הגב. הנח את הידיים לצדי הרגל או על הרצפה לתמיכה. הרגש מתיחה בהמסטרינג וברגל הקדמית. בכל שאיפה הארך מעט את הגב ובכל נשיפה העמק את המתיחה. שמור על נשימה יציבה וללא מאמץ. לסיום חזור קדימה לעמדת לאנץ' בשאיפה באיטיות ובשליטה. הנחיות מעבר: בשאיפה חזור קדימה לעמדת לאנץ' ובנשיפה העבר את הרגל הקדמית קדימה והנח אותה באלכסון מול הגוף, ישר את הרגל האחורית לאחור ועבור לתנוחת יונה.",
        imageURL: "https://www.theyogacollective.com/wp-content/uploads/2019/11/ardha-hanumanasana-e1574425795683.jpg"
      },
                {
        muscle: "עכוז, ירך חיצונית, כופפי ירך",
        nameHe: "תנוחת יונה",
        nameEn: "Eka Pada Rajakapotasana",
        timeReps: "30–40 שניות (או 3–5 נשימות עמוקות)",
        instructions: "התחל מעמידת פלאנק או כלב מביט מטה והבא את הברך הקדמית קדימה לכיוון היד הנגדית כך שהשוק מונח באלכסון מול הגוף. ישר את הרגל האחורית לאחור והנח את האגן מטה לכיוון הרצפה. בשאיפה הרם את החזה ופתח את בית החזה כלפי מעלה, ובנשיפה הישען קדימה והנח את האמות או את המצח על הרצפה למתיחה עמוקה יותר. שמור על ירכיים פונות קדימה וגב ארוך. הרגש מתיחה בישבן ובירך החיצונית של הרגל הקדמית ובכופפי הירך של הרגל האחורית. המשך לנשום עמוק ובשליטה. לסיום הרם את פלג הגוף בשאיפה, דחוף את כפות הידיים אל הרצפה וחזור לעמידת כלב או לתנוחה הבאה באיטיות. הנחיות מעבר: בשאיפה הרם את הגוף, דחוף בעדינות את עצמך לאחור והעבר את הרגל הקדמית לאחור. שב על הרצפה, שלב את כפות הרגליים יחד ועבור לתנוחת פרפר.",
        imageURL: "https://www.verywellfit.com/thmb/HTU6J7QgU7qGuVTKDYL9maJM6kI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Verywell-07-3567179-Pigeon02-133-598b72f5b501e80012e733ab.gif"
      },
                {
        muscle: "ירך פנימית, מפשעה",
        nameHe: "תנוחת פרפר",
        nameEn: "Baddha Konasana",
        timeReps: "30–40 שניות (או 3–5 נשימות עמוקות)",
        instructions: "שב על הרצפה והצמד את כפות הרגליים זו לזו מול הגוף כשהברכיים פתוחות לצדדים. אחוז בקרסוליים או בכפות הרגליים ושמור על גב ארוך ונייטרלי. בשאיפה הארך את עמוד השדרה ובנשיפה התכופף קדימה מעט מהמותניים תוך שמירה על גב ישר. אל תנסה ללחוץ את הברכיים בכוח – תן להן לשקוע מטה עם הזמן. המשך לנשום בקצב אחיד – בכל שאיפה הרגש הארכה מעלה ובכל נשיפה הרפה במפשעות ובירכיים הפנימיות. לשחרור חזור למעלה בשאיפה והנח ידיים לצדי הגוף בנשיפה. הנחיות מעבר: כשתסיים את תנוחת הפרפר, נשוף לאט, הנח ידיים מאחוריך, הישען לאחור והעבר את הרגליים קדימה. התגלגל בעדינות לשכיבה על הבטן והיכנס לתנוחת ספינקס.",
        imageURL: "https://cdn.yogajournal.com/wp-content/uploads/2019/08/baddha.gif?width=730"
      },
                {
        muscle: "בטן, חזה, גב תחתון",
        nameHe: "תנוחת ספינקס",
        nameEn: "Salamba Bhujangasana",
        timeReps: "30–40 שניות (או 3–5 נשימות עמוקות)",
        instructions: "שכב על הבטן כשהרגליים ישרות לאחור וכפות הרגליים צמודות לרצפה. הנח את האמות על הרצפה כך שהמרפקים מתחת לכתפיים וכפות הידיים שטוחות על הקרקע. בשאיפה הרם בעדינות את החזה ואת הראש כלפי מעלה תוך הישענות קלה על האמות. שמור על הכתפיים משוחררות ומוסטות מעט לאחור כדי לפתוח את בית החזה. עצם הזנב שואפת מטה והאגן נשאר במגע עם הרצפה. אל תדחוף בכוח את הגב – תן לפתיחה להיות עדינה ומבוקרת. בכל שאיפה הרגש את ההתרחבות בחזה ובבטן ובכל נשיפה הרפה את הגב התחתון ושמור על יציבות. כשתסיים הורד בעדינות את הגוף מטה ונשום נשימה עמוקה לפני המעבר לתנוחה הבאה. הנחיות מעבר: הורד את בית החזה מטה בנשיפה, הנח את כפות הידיים לצדי החזה, כופף את אצבעות הרגליים ודחוף את האגן מעלה ואחורה לעבר תנוחת כלב מביט מטה.",
        imageURL: "https://media.post.rvohealth.io/wp-content/uploads/sites/2/2021/02/Sphinx-Salamba-Bhujangasana.gif"
      },
                {
        muscle: "ירך אחורית, שוק אחורי, כתפיים",
        nameHe: "תנוחת כלב מביט מטה",
        nameEn: "Adho Mukha Svanasana",
        timeReps: "30–40 שניות (או 3–5 נשימות עמוקות)",
        instructions: "התחל מעמידת שש כשהכפות מתחת לכתפיים והברכיים מתחת לאגן. פתח את כפות הידיים ברוחב כתפיים, הרם את הברכיים מהרצפה ודחוף את האגן מעלה ואחורה עד שגופך יוצר צורת V הפוכה. הרגליים נמתחות והעקב שואף כלפי הרצפה אך אין צורך להכריח מגע מלא – עדיף לשמור על גב ארוך וכתפיים רחוקות מהאוזניים. הראש רפוי בין הזרועות והמבט מופנה לעבר הברכיים או הירכיים. בשאיפה הארך את עמוד השדרה ובנשיפה דחוף בעדינות את החזה לעבר הירכיים להעמקת המתיחה. שמור על נשימה סדירה והרגש הארכה בגב, בהמסטרינגס ובשוקיים. לסיום, בנשיפה הורד את הברכיים בעדינות לרצפה ועבור לתנוחת ילד. הנחיות מעבר: בנשיפה הורד את הברכיים לרצפה, שלח את האגן לאחור עד שהישבן נוגע בעקבים, מתח את הידיים קדימה והנח את המצח על הקרקע – כניסה רכה לתנוחת ילד.",
        imageURL: "https://media.post.rvohealth.io/wp-content/uploads/2023/08/SoupyShoddyApisdorsatalaboriosa-size_restricted.gif"
      },
                {
        muscle: "גב תחתון, ירכיים, כתפיים",
        nameHe: "תנוחת ילד (למנוחה וסגירה)",
        nameEn: "Balasana",
        timeReps: "1-2 דקות",
        instructions: "כרע על הרצפה עם הברכיים ברוחב ירכיים או מעט פתוחות והישען לאחור כך שהישבן ייגע בעקבים. בשאיפה הארך את עמוד השדרה ובנשיפה מתח את הידיים קדימה על הרצפה והורד את החזה והמצח מטה. הרפה לחלוטין את הכתפיים, הצוואר והגב. אם נוח לך יותר, הנח את הידיים לצדי הגוף עם כפות הידיים פונות מעלה. המשך לנשום באיטיות ובמודעות – בכל שאיפה הרגש כיצד האוויר ממלא את הגב והמותניים ובכל נשיפה שחרר כל מתח שנותר בגוף. הישאר בתנוחה הזו להרפיה מלאה ותן לנשימה להאט ולהרגיע את הגוף והנפש. הנחיות מעבר: תנוחה זו מסיימת את הרצף – הישאר במנוחה מלאה ונשום באיטיות להרפיה ולסגירת התרגול.",
        imageURL: "https://artimg.gympik.com/articles/wp-content/uploads/2020/02/Balasana.gif"
      },
        ],
    },
];