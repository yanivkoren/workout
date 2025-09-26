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
      id: "A012",
      title: "כוח עליון שבוע 4",
      emoji: "🏋️‍♀️",
      minutes: 40,
      category: "אימון כח",
      locations: ["gym"],
      exercises: 
        [
                {
        muscle: "גב – משיכה אנכית",
        nameHe: "מתח",
        nameEn: "Pull-Up",
        timeReps: "3×12",
        instructions: "אחוז במתח באחיזה ברוחב כתפיים–כתפיים וחצי. התחל בתלייה מלאה עם בטן אסופה וצוואר ניטרלי. משוך את עצמך מעלה תוך הורדה וקירוב של השכמות, ללא כפיפת מרפקים מיותרת בתחילת התנועה. דחוף את 'הכתפיים לכיסים' ושמור על החזה פתוח. החזק 1–2 שניות בסוף הטווח ואז חזור לאט לתלייה עם שליטה אקצנטרית. הימנע מקפיצות, נדנודים, כתפיים מורמות או דחיפת ראש קדימה.",
        imageURL: "https://hips.hearstapps.com/hmg-prod/images/pull-up-647dd51506791.gif?resize=980:*"
      },
                {
        muscle: "חזה – אמצעי",
        nameHe: "לחיצת חזה במכונה",
        nameEn: "Chest Press Machine",
        timeReps: "3×12",
        instructions: "שב זקוף במכונה כאשר כפות הידיים על ידיות בגובה אמצע החזה. שמור על רגליים יציבות, בטן אסופה וגב צמוד למשענת. דחוף את הידיות קדימה עד יישור כמעט מלא של המרפקים מבלי לנעול אותם לחלוטין. החזק רגע ואז החזר את הידיות חזרה לחזה בתנועה איטית ומבוקרת. הקפד על נשימה סדירה – נשיפה בעת הדחיפה ושאיפה בעת החזרה.",
        imageURL: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Chest-Press-Machine.gif"
      },
                {
        muscle: "כתף אמצעית",
        nameHe: "מכונת הרחקת כתפיים",
        nameEn: "Machine Lateral Raise",
        timeReps: "3×12",
        instructions: "שב זקוף במכונה כאשר הזרועות בצדי הגוף על כריות המכשיר. שמור על גב יציב ובטן אסופה. הרחק את הזרועות כלפי מעלה עד לגובה הכתפיים תוך שמירה על מרפקים מעט כפופים. החזק רגע בחלק העליון ואז הורד חזרה באיטיות מלאה. הקפד לא לנתק את הגב מהמשענת ולא להניע את הצוואר.",
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7F8nCqIZO7hQF8xm9HyrUodXIWxGLo_jnvg&s"
      },
                {
        muscle: "בייספס – ראש ארוך",
        nameHe: "כפיפת מרפקים עם קטלבל",
        nameEn: "Kettlebell Hammer Curl",
        timeReps: "3×12",
        instructions: "עמוד זקוף עם כפות ידיים אוחזות קטלבל באחיזה ניטרלית (כפות פונות זו לזו). שמור על מרפקים צמודים לגוף ובטן אסופה. כופף את המרפקים והרם את הקטלבל מעלה עד לגובה הכתפיים תוך שמירה על פרקי כף יד ישרים. הורד באיטיות עם שליטה מלאה בחלק האקצנטרי. הימנע מתנופה או קירוב המרפקים קדימה.",
        imageURL: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Hammer-Curl.gif"
      },
                {
        muscle: "טרייספס – ראש ארוך",
        nameHe: "פשיטת מרפק עם קטלבל מאחורי הראש",
        nameEn: "Kettlebell Overhead Extension",
        timeReps: "3×12",
        instructions: "אחוז קטלבל בשתי ידיים והרם אותו מעל הראש כך שהידיים ישרות. כופף את המרפקים והורד את הקטלבל מאחורי הראש תוך שמירה על זרועות יציבות צמודות לאוזניים. הארך את המרפקים מעלה בחזרה ליישור מלא. שמור על בטן אסופה ועמידה זקופה לאורך כל התרגיל.",
        imageURL: "https://gymvisual.com/img/p/2/6/2/2/8/26228.gif"
      },
                {
        muscle: "ייצוב כתף",
        nameHe: "רוטציה חיצונית ביד אחת בכבל",
        nameEn: "Single Arm Cable External Rotation",
        timeReps: "3×12",
        instructions: "עמוד צידי למכשיר כבלים בגובה מרפק. החזק את ידית הכבל ביד הרחוקה מהמכשיר, שמור על מרפק כפוף 90° וצמוד לגוף. בצע סיבוב חיצוני של הכתף – משוך את היד החוצה לצד תוך שמירה על מרפק צמוד. החזר חזרה באיטיות לנקודת ההתחלה. הקפד על גב זקוף, בטן אסופה ותנועה חלקה ללא תנופה.",
        imageURL: "https://burnfit.io/wp-content/uploads/2023/11/CABLE_EXT_ROT.gif"
      },
        ],
    },
    {
      id: "A013",
      title: "כוח תחתון שבוע 4",
      emoji: "🏋️‍♀️",
      minutes: 40,
      category: "אימון כח",
      locations: ["gym"],
      exercises: 
        [
                {
        muscle: " ישבן + ארבע ראשי  ",
        nameHe: " עליות מדרגה גבוהות                            ",
        nameEn: " High Step-Up                       ",
        timeReps: " 3×12 לכל רגל      ",
        instructions: " עמוד מול ספסל/קופסה גבוהה, כף רגל אחת על המשטח והשנייה על הרצפה. דחוף דרך העקב שעל המדרגה, עלה ליישור מלא של הירך והברך, שמור על גב ניטרלי ובטן אסופה. הורד את הרגל השנייה לאט ובשליטה. הימנע מדחיפה מהרגל שעל הקרקע. ",
        imageURL: "https://blog.myfitnesspal.com/wp-content/uploads/2019/07/High-box-step-ups.gif"
      },
                {
        muscle: " ארבע ראשי + ישבן  ",
        nameHe: " סקוואט בולגרי                                 ",
        nameEn: " Bulgarian Split Squat              ",
        timeReps: " 3×12 לכל רגל      ",
        instructions: " עמוד בפסיעה קדימה עם רגל אחורית מונחת על ספסל/משטח מוגבה. שמור גב זקוף ובטן אסופה, כופף את הברך הקדמית עד שהירך כמעט מקבילה לקרקע. דחוף דרך העקב בחזרה לעמידה. הימנע מקריסת ברך פנימה ושמור מבט קדימה. ",
        imageURL: "https://www.meridian-fitness.co.uk/wp-content/uploads/2025/03/BulgarianSplit.gif"
      },
                {
        muscle: " ירך אחורית        ",
        nameHe: " כפיפת ירך נורדית                             ",
        nameEn: " Nordic Hamstring Curl              ",
        timeReps: " 3×12              ",
        instructions: " כרע על ברכיים כשהרגליים מקובעות (ע'י פרטנר או מתקן). הגוף יורד קדימה באיטיות כיחידה אחת מהברכיים עד הכתפיים, תוך שליטה אקצנטרית בשרירי הירך האחורית. ניתן להיעזר בידיים לבלימת הנפילה ולדחיפה חזרה לנקודת ההתחלה. ",
        imageURL: "https://cdn.shopify.com/s/files/1/0568/6280/2107/files/nordic-curl_600x600.gif"
      },
                {
        muscle: " שוק אחורי         ",
        nameHe: " הליכת חקלאי על אצבעות                        ",
        nameEn: " Farmer’s Walk on Toes (Dumbbells)  ",
        timeReps: " 3×12 צעדים לכל כיוון ",
        instructions: " אחוז משקולת יד בכל יד, עלה לעמידה על קצות האצבעות ושמור על עקבים מורמים. צעד קדימה לאט ובשליטה תוך שמירה על יציבה זקופה, בטן אסופה וכתפיים לאחור. שמור על נשימה רציפה והימנע מהורדת עקבים בזמן ההליכה. ",
        imageURL: "https://movements.isielitetraining.com/wp-content/uploads/2025/08/Kettlebell-Farmer-Walk-on-Toes.gif"
      },
                {
        muscle: " חוטפים            ",
        nameHe: " מכונת הרחקת ירך                              ",
        nameEn: " Hip Abduction Machine              ",
        timeReps: " 3×12              ",
        instructions: " שב במכונה עם גב צמוד למשענת, כפות רגליים על המשטחים. דחוף את הרגליים החוצה עד לטווח מלא תוך שמירה על גב יציב ובטן אסופה. החזר את הרגליים לאט למרכז בשליטה מלאה. הימנע מתנופה ומהטיית הגב. ",
        imageURL: "https://fitnessprogramer.com/wp-content/uploads/2021/02/HIP-ADDUCTION-MACHINE.gif"
      },
                {
        muscle: " מקרבי ירך         ",
        nameHe: " מכונת קירוב ירך בישיבה                       ",
        nameEn: " Seated Adduction Machine           ",
        timeReps: " 3×12              ",
        instructions: " שב במכונה עם רגליים פתוחות על המשטחים בצדדים. הצמד את הרגליים פנימה עד קירוב מלא תוך כיווץ שרירי הירך הפנימיים. החזר לאט ובשליטה למצב פתוח. שמור על גב צמוד למשענת, בטן אסופה ונשימה סדירה. ",
        imageURL: "https://www.inspireusafoundation.org/file/2023/11/hip-abduction-machine.gif"
      },
        ],
    },
    {
      id: "A014",
      title: "כוח משולב שבוע 4",
      emoji: "🏋️‍♀️",
      minutes: 40,
      category: "אימון כח",
      locations: ["gym"],
      exercises: 
        [
                {
        muscle: "גב – משיכה אופקית",
        nameHe: "חתירה ישיבה בכבל",
        nameEn: "Seated Cable Row",
        timeReps: "2×12",
        instructions: "שב זקוף עם חזה פתוח ושכמות “בכיסים אחורה־מטה”, כפות רגליים מקובעות והבטן אסופה. אחוז בידיות, התחל בתנועת קירוב שכמות ורק אז משוך את המרפקים לאחור צמוד לגוף עד קו מותן/צלעות תחתונות. עצור כיווץ יזום בשכמות 1–2 ש׳ בלי לקמר גב או להרים כתפיים. החזר את הכבל באיטיות בשליטה אקצנטרית עד מתיחה קלה בגב, שמור מפרקי שורש ניטרליים, ונשום בקצב סדיר.",
        imageURL: "https://burnfit.io/wp-content/uploads/2023/11/SEATED_CABLE_ROW.gif"
      },
                {
        muscle: "חזה עליון",
        nameHe: "פליי כבל מלמטה למעלה",
        nameEn: "Low-to-High Cable Fly",
        timeReps: "2×12",
        instructions: "עמוד בקדמת הקרוס עם רגל קדמית קלה ליציבות, בטן אסופה ושכמות מקובעות קלות אחורה־מטה. מרפקים חצי־כפופים ונייחים, התחלת תנועה מכיווץ החזה – “חבק” את הידיות במסלול אלכסוני מלמטה (מותן) אל מול עצם הבריח. סגור עד חפיפה קלה של הידיות, עצור 1 ש׳ בכיווץ מבלי לאבד מנח כתף. פתח בחזרה בקשת נשלטת עד מתיחה נוחה בחזה העליון, שמור צוואר ניטרלי והימנע מנעילת מרפק/נפילה של הכתפיים קדימה.",
        imageURL: "https://fitliferegime.com/wp-content/uploads/2023/06/High-To-Low-Cable-fly.gif"
      },
                {
        muscle: "כתף אחורית / ייצוב שכמות",
        nameHe: "פייס פול בכבל",
        nameEn: "Face Pull",
        timeReps: "2×12",
        instructions: "כוון פולי לגובה פנים עם חבל. אחוז בקצוות, עמוד זקוף או חצי כריעה, ליבה פעילה ושכמות מדוכאות. התחל בקירוב שכמות ואז משוך את החבל אל גובה האף תוך סיבוב חיצוני של הכתפיים: המרפקים נפתחים לצדדים והאמות נעות “מסביב” לראש. עצור 1–2 ש׳ בסוף הטווח תוך שמירה על בית חזה פתוח וצוואר ניטרלי. החזר באיטיות בשליטה אקצנטרית; הימנע מקשת מותנית/נדנוד גוף.",
        imageURL: "https://burnfit.io/wp-content/uploads/2023/11/FACE_PULL.gif"
      },
                {
        muscle: "טרייספס – ראש לטרלי",
        nameHe: "פושדאון בכבל עם מוט",
        nameEn: "Triceps Pushdown (Cable)",
        timeReps: "2×12",
        instructions: "קבע את המרפקים צמודים לצידי הגוף מעט קדימה מהמישור, עמוד זקוף עם ברכיים רכות ובטן אסופה. אחוז במוט ישר/חבל באחיזה נייטרלית או פרונציה, התחלת תנועה מייצוב שכמות. דחוף את המוט מטה עד הארכה מלאה של המרפק ללא נעילה קשה או קריסת כתפיים קדימה. עצור שנייה בתחתית, שמור אמות צמודות לקו האנכי. העלה בחזרה באיטיות עד כ־90° במרפק בלי לברוח עם המרפקים קדימה/החוצה. נשוף בדחיפה, שאוף בחזרה.",
        imageURL: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Pushdown.gif"
      },
                {
        muscle: "ישבן (Glutes)",
        nameHe: "היפ טראסט מכונה",
        nameEn: "Machine Hip Thrust",
        timeReps: "2×12",
        instructions: "כוון את הגב/כרית כך שקו הכתפיים נשען יציב, כפות רגליים ברוחב אגן וקרובות לעקבים. שמור סנטר קל פנימה וליבה אסופה. דחוף דרך העקבים והרם את האגן עד קו ישר בין ברכיים–אגן–כתפיים; סחט ישבן 1–2 ש׳ למעלה בלי לקשת גב תחתון. הורד לאט עד כמעט נגיעה, שמור ברכיים עוקבות את קו האצבעות.",
        imageURL: "https://fitliferegime.com/wp-content/uploads/2024/02/Hip-Thrust-on-Smith-Machine.gif"
      },
                {
        muscle: "ארבע ראשי (Quads)",
        nameHe: "מכונת לחיצת רגליים",
        nameEn: "Leg Press Machine",
        timeReps: "2×12",
        instructions: "שב נמוך וייצב אגן צמוד למשענת. מקם כפות רגליים אמצע־גבוה בפלטה ברוחב כתפיים, אצבעות מעט החוצה. שחרר נעילה והורד את המשטח באיטיות עד זווית ברך נוחה בלי שהאגן “יתגלגל”. דחוף דרך כל כף הרגל עם דגש עקב, הארך ברכיים עד קרוב לנעילה בלי לנעול לגמרי. שמור ברכיים עוקבות את קו הבהונות, נשום בקצב ואל תקפיץ משקל בתחתית.",
        imageURL: "https://app.aspira-fitness.com/media/exercises/58c075ce-c028-4a0d-b4d5-f130e976f412"
      },
                {
        muscle: "שוק קדמי (Tibialis Anterior)",
        nameHe: "טיביאליס רייז במכונת לחיצת רגליים",
        nameEn: "Tibialis Raise on Leg Press Machine",
        timeReps: "2×12–15",
        instructions: "שב במכונת לחיצת רגליים, כפות רגליים ממוקמות בחלק העליון של הפלטה כשהעקב נשאר מקובע והאצבעות חופשיות. החזק את הפלטה עם משקל מתאים, התחל בהרפיית אצבעות מטה ואז הרם אותן לכיוון הגוף (דורסיפלקציה מלאה) עד כיווץ מקסימלי בקדמת השוק. עצור שנייה למעלה, החזר באיטיות למטה בשליטה מלאה. הימנע מתנודות גוף או קריסת ברכיים, שמור גב תחתון צמוד למשענת.",
        imageURL: "https://gymvisual.com/img/p/1/0/1/4/6/10146.gif"
      },
                {
        muscle: "כופפי ירך + ליבה",
        nameHe: "מרש כבל בעמידה",
        nameEn: "Standing Cable March",
        timeReps: "2×12 לכל רגל",
        instructions: "קבע פולי נמוך עם רצועת קרסול על רגל העבודה. עמוד זקוף, צלעות מעל אגן, בטן אסופה וידיים אקטיביות לייצוב. גרף את הברך מעלה עד כ־90° בירך בלי להטות את הגו או להרים כתף; עצור חצי שנייה בראש התנועה ושמור כף רגל בפלקס. החזר באיטיות בשליטה, שמור ירך תומכת חזקה וברך שאינה קורסת פנימה. החלף צד אחרי סט; עבוד בטמפו חלק ללא משיכה חדה של הכבל.",
        imageURL: "https://liftmanual.com/wp-content/uploads/2023/04/band-hip-flexion.gif"
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
];