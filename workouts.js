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
      id: "A020",
      title: "כוח עליון שבוע 5",
      emoji: "🏋️‍♀️",
      minutes: 40,
      category: "אימון כח",
      locations: ["gym"],
      exercises: 
        [
                {
        muscle: "גב – משיכה אופקית",
        nameHe: "חתירת משקולת יד ביד אחת",
        nameEn: "One-Arm Dumbbell Row",
        timeReps: "4 סטים (2 לכל יד) 12 חזרות",
        instructions: "הנח ברך וכף יד על ספסל לייצוב, הגב בזווית ישרה לקרקע, ועם היד החופשית משוך את המשקולת לכיוון הבטן התחתונה בקו צמוד לגוף. שמור על חזה פתוח, כתפיים לא מתעגלות, והימנע מתנופה בגב התחתון. נשום החוצה בזמן המשיכה, והחזר לאט למטה בשליטה. תרגיש את העבודה בעיקר בגב האמצעי והרומבואידים.",
        imageURL: "https://fitliferegime.com/wp-content/uploads/2023/05/One-Arm-Dumbbell-Row.gif"
      },
                {
        muscle: "חזה עליון",
        nameHe: "לחיצת חזה בשיפוע חיובי עם משקוליות",
        nameEn: "Incline Dumbbell Press",
        timeReps: "3–4 סטים × 8–10 חזרות",
        instructions: "שב על ספסל בשיפוע חיובי (כ־30°), אחוז משקוליות ליד החזה, ודחוף אותן מעלה בקו אלכסוני עד שהידיים כמעט ישרות. שמור על כפות ידיים פונות קדימה, עצור לרגע למעלה, והורד חזרה לאט עד שהמרפקים בקו מעט מתחת לכתפיים. שמור על גב תחתון צמוד לספסל והימנע מקשת מיותרת. נשוף בזמן הלחיצה. תרגיש את העבודה בעיקר בחזה העליון.",
        imageURL: "https://burnfit.io/wp-content/uploads/2023/11/DB_INC_BP.gif"
      },
                {
        muscle: "כתף קדמית",
        nameHe: "לחיצת ארנולד עם משקוליות",
        nameEn: "Arnold Press",
        timeReps: "3–4 סטים × 10–12 חזרות",
        instructions: "שב על ספסל זקוף עם משקוליות בידיים בגובה כתפיים, כפות ידיים פונות אליך. התחל בלחיצה מעלה תוך כדי סיבוב כפות הידיים כך שבסוף התנועה הן פונות קדימה. עצור רגע למעלה ואז הורד לאט חזרה בתנועה הפוכה. שמור על בטן אסופה וגב זקוף, והימנע מנעילת מרפקים. תרגיש את העבודה בעיקר בכתף הקדמית.",
        imageURL: "https://burnfit.io/wp-content/uploads/2023/11/ARNOLD_DB_PRESS.gif"
      },
                {
        muscle: "בייספס – ראש קצר",
        nameHe: "כפיפת מרפקים על ספסל סקוט",
        nameEn: "Preacher Curl (Dumbbell/Barbell)",
        timeReps: "3 סטים × 10–12 חזרות",
        instructions: "שב על ספסל סקוט, הנח את הזרועות על הכרית הקדמית, ואחוז במוט EZ או משקולת יד. התחל ממרפקים כמעט ישרים וכפוף אותם מעלה תוך כיווץ הבייספס עד לגובה הכתף. עצור רגע בחלק העליון, ואז הורד לאט את המשקולת עד שהמרפקים כמעט מתיישרים. שמור על תנועה נקייה, בלי להרים מרפקים מהכרית. נשוף בזמן הכיפוף. תרגיש את העבודה בעיקר בבייספס הראש הקצר.",
        imageURL: "https://www.inspireusafoundation.org/file/2023/02/close-grip-preacher-curl.gif"
      },
                {
        muscle: "טרייספס – ראש לטרלי",
        nameHe: "פשיטת מרפקים בשכיבה עם מוט EZ",
        nameEn: "Skull Crushers",
        timeReps: "3–4 סטים × 8–12 חזרות",
        instructions: "שכב על ספסל שטוח, אחוז במוט EZ באחיזה צרה, והחזק אותו מעל החזה עם ידיים ישרות. כופף מרפקים והורד את המוט לכיוון המצח או מעט מאחוריו תוך שמרפקים יציבים בקו כתפיים. דחוף חזרה מעלה עד ליישור כמעט מלא של הידיים. שמור על שליטה, הימנע מתנועת כתפיים ותנופה. נשוף בזמן הדחיפה. תרגיש את העבודה בצד החיצוני של הטרייספס.",
        imageURL: "https://burnfit.io/wp-content/uploads/2023/11/SKULL_CRUSH.gif"
      },
                {
        muscle: "ייצוב שכמות",
        nameHe: "Serratus Punch עם משקוליות",
        nameEn: "Dumbbell Serratus Punch",
        timeReps: "3 סטים × 12–15 חזרות",
        instructions: "שכב על הגב על ספסל, אחוז משקולת קלה בכל יד ודחוף אותן ישר למעלה עם מרפקים נעולים. מהעמדה הזו בצע תנועה קטנה נוספת של -ניקוב- כלפי מעלה על ידי התרוממות קלה של השכמות מהספסל. עצור רגע למעלה, ואז החזר חזרה באיטיות. שמור על מרפקים ישרים ולא לכפוף את הידיים. נשום החוצה בזמן הדחיפה. תרגיש את העבודה בעיקר בסראטוס אנטריור ובייצוב השכמות.",
        imageURL: "https://cdn.shopify.com/s/files/1/0618/9462/3460/files/supine-punch-plus.gif?v=1751010571"
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
        nameHe: "Monster Walk עם גומייה",
        nameEn: "Banded Monster Walk",
        timeReps: "2 סטים × 20 צעדים לכל כיוון",
        instructions: "לבש גומייה סביב הברכיים או הקרסוליים, התמקם בעמידת חצי־סקוואט, גב זקוף, ברכיים מעט כפופות. צעד קדימה ואלכסונית לצדדים תוך שמירה על מתח קבוע בגומייה. הקפד שהברכיים לא יקרסו פנימה. נשום בקצב אחיד ושמור על שליטה בתנועה. תרגיש את העבודה בעיקר במסובבי הירך החיצוניים ובצד הישבן.",
        imageURL: "https://media.post.rvohealth.io/wp-content/uploads/sites/2/2020/06/GRT-2.09.BandedMonsterWalk.gif"
      },
                {
        muscle: "חוטפים",
        nameHe: "הליכת מפלצת עם גומייה (צידית)",
        nameEn: "Banded Monster Walk (Lateral)",
        timeReps: "2 סטים × 20 צעדים לכל כיוון",
        instructions: "הנח גומייה סביב הברכיים או הקרסוליים, התמקם בתנוחת חצי־סקוואט. צעד הצידה עם רגל אחת, אחריה הרגל השנייה, תוך שמירה על מתח קבוע בגומייה. שמור על חזה פתוח וגב זקוף, והימנע מקפיצות. נשוף בכל צעד. תרגיש את העבודה בעיקר בחוטפים (Gluteus Medius) ובשרירי ייצוב האגן.",
        imageURL: "https://media1.popsugar-assets.com/files/thumbor/-tzT2CWUg3Vm0dZxjA-q0rykWcU=/fit-in/792x792/filters:format_auto():upscale()/2024/09/17/821/n/1922729/tmp_qECwxw_c8ded86aa2cea5f3_PS23_Fitness_Workout_07_Move_09_Band_Walk.gif"
      },
        ],
    },
    {
      id: "A022",
      title: "כוח משולב שבוע 5",
      emoji: "🏋️‍♀️",
      minutes: 40,
      category: "אימון כח",
      locations: ["gym"],
      exercises: 
        [
                {
        muscle: "גב – משיכה אנכית",
        nameHe: "משיכת פולי עליון רחב",
        nameEn: "Wide-Grip Lat Pulldown",
        timeReps: "2 סטים × 12 חזרות",
        instructions: "שב זקוף במכונת פולי עליון, אחוז את המוט רחב מעט מכתפיים, משוך מטה לכיוון החזה תוך שמירה על גב זקוף ומרפקים מובלים מטה. עצור בכיווץ תחתון, החזר לאט למעלה עד מתיחה מלאה. הימנע ממשיכת יתר עם פלג גוף עליון. נשוף בזמן המשיכה. תרגיש את העבודה בעיקר בלטיסימוס ובגב העליון.",
        imageURL: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Lat-Pulldown.gif"
      },
                {
        muscle: "חזה תחתון",
        nameHe: "דיפס על מקבילים",
        nameEn: "Dips",
        timeReps: "2 סטים × 12 חזרות",
        instructions: "עלה על מקבילים, זרועות ישרות, הורד את הגוף מטה בכיפוף מרפקים ונטייה קלה קדימה עד שהמרפקים ב־90°. דחוף חזרה למעלה עד יישור כמעט מלא. שמור על חזה פתוח, מרפקים לא נפתחים לצדדים. נשוף בזמן הדחיפה. תרגיש את העבודה בחזה התחתון ובטרייספס.",
        imageURL: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2024/11/assisted.dip_.gif?fit=600%2C589&ssl=1"
      },
                {
        muscle: "כתף אמצעית",
        nameHe: "Upright Row עם מוט EZ",
        nameEn: "Upright Row (EZ Bar)",
        timeReps: "2 סטים × 12 חזרות",
        instructions: "עמוד זקוף, אחוז מוט EZ באחיזה צרה, משוך אותו מעלה לאורך הגוף עד גובה החזה. שמור על מרפקים מובילים מעלה החוצה, עצור רגע ואז הורד באיטיות. שמור על גב זקוף, לא למשוך יתר על הכתפיים. נשוף בזמן המשיכה. תרגיש את העבודה בעיקר בכתף האמצעית ובטרפז.",
        imageURL: "https://static.wixstatic.com/media/11c3fa_dd73ff368c344c25988ebcc2dc0b4f4a~mv2.gif"
      },
                {
        muscle: "בייספס (Brachialis)",
        nameHe: "כפיפת מרפק בהיפוך אחיזה",
        nameEn: "Reverse Curl (EZ Bar)",
        timeReps: "2 סטים × 12 חזרות",
        instructions: "אחוז במוט EZ באחיזה הפוכה (כפות ידיים מטה), עמוד זקוף, וכפוף את המרפקים כלפי מעלה עד גובה החזה. עצור רגע בכיווץ ואז הורד באיטיות. שמור על מרפקים צמודים לגוף ולא לנפנף. נשוף בזמן הכיפוף. תרגיש את העבודה בעיקר ב־Brachialis ובאמות.",
        imageURL: "https://fitnessprogramer.com/wp-content/uploads/2021/08/Reverse-Grip-EZ-Bar-Curl.gif"
      },
                {
        muscle: "ישבן",
        nameHe: "דדליפט סומו עם משקוליות",
        nameEn: "Dumbbell Sumo Deadlift",
        timeReps: "2 סטים × 12 חזרות",
        instructions: "עמוד בפיסוק רחב, החזק משקולת בכל יד לפני הגוף. ירד מטה בהטיית אגן וגב ישר עד שהמשקולות קרובות לרצפה, ואז דחוף דרך העקבים לעלייה. שמור על חזה פתוח וגב ניטרלי, הימנע מהתכופפות בגב תחתון. נשוף בזמן העלייה. תרגיש את העבודה בישבן ובמקרבי הירך.",
        imageURL: "https://burnfit.io/wp-content/uploads/2023/11/DB_SM_DL.gif"
      },
                {
        muscle: "ירך אחורית",
        nameHe: "דדליפט רומני עם משקוליות",
        nameEn: "Romanian Deadlift (Dumbbell)",
        timeReps: "2 סטים × 12 חזרות",
        instructions: "עמוד זקוף עם משקולת בכל יד צמוד לירכיים. שמור על ברכיים כפופות קלות, הטה את האגן לאחור והורד את המשקולות לאורך הירכיים עד מתיחה בהמסטרינגס. חזור מעלה בפשיטת ירך מלאה. שמור על גב ישר וחזה פתוח, הימנע מכיפוף יתר. נשוף בזמן העלייה. תרגיש את העבודה בהמסטרינגס ובישבן.",
        imageURL: "https://burnfit.io/wp-content/uploads/2023/11/DB_RM_DL.gif"
      },
                {
        muscle: "שוק אחורי (Gastrocnemius)",
        nameHe: "הרמות עקב בעמידה עם משקוליות",
        nameEn: "Standing Dumbbell Calf Raise",
        timeReps: "2 סטים × 12 חזרות",
        instructions: "החזק משקולת בכל יד בעמידה, כפות רגליים על מדרגה קטנה. הרם את העקבים מעלה ככל האפשר, עצור לרגע, ואז הורד לאט מתחת לגובה המדרגה. שמור על ברכיים ישרות. נשוף בזמן ההרמה. תרגיש את העבודה בעיקר בגסטרוקנמיוס.",
        imageURL: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Calf-Raise.gif"
      },
                {
        muscle: "מקרבי ירך",
        nameHe: "Copenhagen Plank",
        nameEn: "Copenhagen Plank",
        timeReps: "2 סטים - אחד לכל צד × 15 חזרות לכל צד",
        instructions: "שכיבה על הצד, רגל עליונה מונחת על ספסל, מרפק תחתון נשען מתחת לכתף. הרם את האגן מעלה עד שהגוף בקו ישר. החזק רגע והורד באיטיות. בצע 15 חזרות לכל צד. שמור על בטן אסופה, לא לקרוס בגב תחתון. תרגיש את העבודה במקרבי הירך וברצועת הליבה הצדית.",
        imageURL: "https://fitnessprogramer.com/wp-content/uploads/2025/03/Side-Plank-Hip-Adduction-Copenhagen-adduction.gif"
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
];