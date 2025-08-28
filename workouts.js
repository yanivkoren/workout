
const WORKOUTS = {
    gym: [
        {
            id: 'g1', title: 'אימון 1', emoji: '🏋️‍♀️', minutes: 25, plan:
            {
                "חימום כללי": [
                    {
                        muscle: "כללי",
                        name: "March in Place",
                        timeReps: "1 דקה × 1",
                        instructions: "צעידה במקום, ידיים חופשיות",
                        image: "https://media1.tenor.com/m/cp12e2K3YWIAAAAd/floor-crunch.gif"
                    },
                    {
                        muscle: "כללי",
                        name: "Arm Circles",
                        timeReps: "30 שניות × 2",
                        instructions: "סיבובי כתפיים קדימה/אחורה",
                        image: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG9scmJ5cWZ4eHMzenRzd2w3NGl0NGRhZ2VvdDh5Z29uMTdya2tnNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aIyZ9Ra6pyo5ZOHQsm/giphy.gif"
                    },
                    {
                        muscle: "כללי",
                        name: "Hip Mobility",
                        timeReps: "30 שניות × 1",
                        instructions: "סיבובי אגן והטיית אגן עדינה",
                        image: "https://i.makeagif.com/media/5-27-2018/mWAX67.gif"
                    }
                ],
                "אירובי": [
                    {
                        muscle: "לב־ריאה",
                        name: "Elliptical",
                        timeReps: "5 דקות × 1",
                        instructions: "קצב קל עד בינוני",
                        image: "https://media1.tenor.com/m/i5B_Un9s7woAAAAC/glute-bridge-exercise.gif"
                    },
                    {
                        muscle: "לב־ריאה",
                        name: "Bike",
                        timeReps: "5 דקות × 1",
                        instructions: "סל״ד 80–90, התנגדות קלה",
                        image: "https://www.inspireusafoundation.org/file/2023/03/shoulder-rolls.gif"
                    },
                    {
                        muscle: "לב־ריאה",
                        name: "Bike",
                        timeReps: "5 דקות × 1",
                        instructions: "סל״ד 80–90, התנגדות קלה",
                        image: "https://www.inspireusafoundation.org/file/2023/03/shoulder-rolls.gif"
                    },
                    {
                        muscle: "לב־ריאה",
                        name: "Bike",
                        timeReps: "5 דקות × 1",
                        instructions: "סל״ד 80–90, התנגדות קלה",
                        image: "https://www.inspireusafoundation.org/file/2023/03/shoulder-rolls.gif"
                    },
                    {
                        muscle: "לב־ריאה",
                        name: "Rowing",
                        timeReps: "3 דקות × 1",
                        instructions: "קצב אחיד, דגש על גב",
                        image: "https://www.inspireusafoundation.org/file/2023/09/seated-hamstring-stretch.gif"
                    }
                ],
                "חימום ייעודי": [
                    {
                        muscle: "גב עליון",
                        name: "Scapular Retraction",
                        timeReps: "30 שניות × 2",
                        instructions: "קירוב שכמות עם גב נייטרלי",
                        image: "https://www.inspireusafoundation.org/file/2023/03/shoulder-rolls.gif"
                    },
                    {
                        muscle: "ירך אחורית",
                        name: "Hamstring Prep",
                        timeReps: "20 שניות × 2",
                        instructions: "כיפוף ירך קל, ללא כאב",
                        image: "https://www.inspireusafoundation.org/file/2023/09/seated-hamstring-stretch.gif"
                    },
                    {
                        muscle: "שוק",
                        name: "Calf Prep",
                        timeReps: "20 שניות × 2",
                        instructions: "עמידה מול קיר, עקב צמוד לרצפה",
                        image: "https://www.inspireusafoundation.org/file/2022/12/wall-calf-stretch.gif"
                    }
                ],
                "אימון כח": [
                    {
                        muscle: "ליבה",
                        name: "Plank",
                        timeReps: "30 שניות × 3",
                        instructions: "קו ישר ראש–עקבים, בטן אסופה",
                        image: "https://www.inspireusafoundation.org/file/2023/03/shoulder-rolls.gif"
                    },
                    {
                        muscle: "רגליים",
                        name: "Wall Sit",
                        timeReps: "40 שניות × 2",
                        instructions: "גב צמוד לקיר, 90° בברכיים",
                        image: "https://www.inspireusafoundation.org/file/2022/12/wall-calf-stretch.gif"
                    },
                    {
                        muscle: "גב",
                        name: "Isometric Row Hold",
                        timeReps: "20 שניות × 3",
                        instructions: "משיכה ואחיזה, שכמות לאחור",
                        image: "https://www.inspireusafoundation.org/file/2023/09/seated-hamstring-stretch.gif"
                    }
                ],
                "אימון שיווי משקל": [
                    {
                        muscle: "קרסול/ליבה",
                        name: "Single-Leg Stand",
                        timeReps: "30 שניות × 2",
                        instructions: "עמידה על רגל אחת, מבט קדימה",
                        image: "https://www.inspireusafoundation.org/file/2023/03/shoulder-rolls.gif"
                    },
                    {
                        muscle: "קרסול",
                        name: "Tandem Stance",
                        timeReps: "30 שניות × 2",
                        instructions: "רגל מול רגל בקו אחד",
                        image: "https://www.inspireusafoundation.org/file/2022/12/wall-calf-stretch.gif"
                    },
                    {
                        muscle: "ירך",
                        name: "Cossack Hold (קל)",
                        timeReps: "20 שניות × 2",
                        instructions: "העברת משקל לצד עם אחיזה נמוכה",
                        image: "https://www.inspireusafoundation.org/file/2023/09/seated-hamstring-stretch.gif"
                    }
                ],
                "אימון ליבה": [
                    {
                        muscle: "ליבה",
                        name: "Dead Bug (Isometric)",
                        timeReps: "30 שניות × 2",
                        instructions: "נשיפה, גב ניטרלי, תנועת יד/רגל נגדית בהחזקת זווית",
                        image: "https://www.inspireusafoundation.org/file/2023/03/shoulder-rolls.gif"
                    },
                    {
                        muscle: "ליבה",
                        name: "Hollow Hold (קל)",
                        timeReps: "20 שניות × 3",
                        instructions: "אגן אחורה, צלעות למטה, החזק",
                        image: "https://www.inspireusafoundation.org/file/2022/12/wall-calf-stretch.gif"
                    },
                    {
                        muscle: "ליבה",
                        name: "Side Plank (ברך)",
                        timeReps: "20 שניות × 2",
                        instructions: "מרפק מתחת לכתף, קו אוזן–כתף–אגן–ברך",
                        image: "https://www.inspireusafoundation.org/file/2023/09/seated-hamstring-stretch.gif"
                    }
                ],
                "מתיחות": [
                    {
                        muscle: "חזה",
                        name: "Doorway Stretch",
                        timeReps: "30 שניות × 2",
                        instructions: "ידיים על משקוף מעל קו הכתפיים",
                        image: "https://www.spotebi.com/wp-content/uploads/2015/01/doorway-stretch-exercise-illustration.jpg"
                    },
                    {
                        muscle: "שוק",
                        name: "Calf Stretch (Wall)",
                        timeReps: "30 שניות × 2",
                        instructions: "עקב אחורי צמוד לרצפה, פעם ברך ישרה ופעם כפופה",
                        image: "https://www.inspireusafoundation.org/file/2022/12/wall-calf-stretch.gif"
                    },
                    {
                        muscle: "ירך אחורית",
                        name: "Seated Hamstring",
                        timeReps: "30 שניות × 2",
                        instructions: "רגל ישרה, גב ארוך, התקדמות עד מתיחה נוחה",
                        image: "https://www.inspireusafoundation.org/file/2023/09/seated-hamstring-stretch.gif"
                    }
                ]
            }
        },
        {
            id: 'g1', title: 'אימון 1', emoji: '🏋️‍♀️', minutes: 25, plan:
            {
                "חימום כללי": [
                    {
                        muscle: "כללי",
                        name: "March in Place",
                        timeReps: "1 דקה × 1",
                        instructions: "צעידה במקום, ידיים חופשיות",
                        image: "https://media1.tenor.com/m/cp12e2K3YWIAAAAd/floor-crunch.gif"
                    },
                    {
                        muscle: "כללי",
                        name: "Arm Circles",
                        timeReps: "30 שניות × 2",
                        instructions: "סיבובי כתפיים קדימה/אחורה",
                        image: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG9scmJ5cWZ4eHMzenRzd2w3NGl0NGRhZ2VvdDh5Z29uMTdya2tnNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aIyZ9Ra6pyo5ZOHQsm/giphy.gif"
                    },
                    {
                        muscle: "כללי",
                        name: "Hip Mobility",
                        timeReps: "30 שניות × 1",
                        instructions: "סיבובי אגן והטיית אגן עדינה",
                        image: "https://i.makeagif.com/media/5-27-2018/mWAX67.gif"
                    }
                ],
                "אירובי": [
                    {
                        muscle: "לב־ריאה",
                        name: "Elliptical",
                        timeReps: "5 דקות × 1",
                        instructions: "קצב קל עד בינוני",
                        image: "https://media1.tenor.com/m/i5B_Un9s7woAAAAC/glute-bridge-exercise.gif"
                    },
                    {
                        muscle: "לב־ריאה",
                        name: "Bike",
                        timeReps: "5 דקות × 1",
                        instructions: "סל״ד 80–90, התנגדות קלה",
                        image: "https://www.inspireusafoundation.org/file/2023/03/shoulder-rolls.gif"
                    },
                    {
                        muscle: "לב־ריאה",
                        name: "Bike",
                        timeReps: "5 דקות × 1",
                        instructions: "סל״ד 80–90, התנגדות קלה",
                        image: "https://www.inspireusafoundation.org/file/2023/03/shoulder-rolls.gif"
                    },
                    {
                        muscle: "לב־ריאה",
                        name: "Bike",
                        timeReps: "5 דקות × 1",
                        instructions: "סל״ד 80–90, התנגדות קלה",
                        image: "https://www.inspireusafoundation.org/file/2023/03/shoulder-rolls.gif"
                    },
                    {
                        muscle: "לב־ריאה",
                        name: "Rowing",
                        timeReps: "3 דקות × 1",
                        instructions: "קצב אחיד, דגש על גב",
                        image: "https://www.inspireusafoundation.org/file/2023/09/seated-hamstring-stretch.gif"
                    }
                ],
                "חימום ייעודי": [
                    {
                        muscle: "גב עליון",
                        name: "Scapular Retraction",
                        timeReps: "30 שניות × 2",
                        instructions: "קירוב שכמות עם גב נייטרלי",
                        image: "https://www.inspireusafoundation.org/file/2023/03/shoulder-rolls.gif"
                    },
                    {
                        muscle: "ירך אחורית",
                        name: "Hamstring Prep",
                        timeReps: "20 שניות × 2",
                        instructions: "כיפוף ירך קל, ללא כאב",
                        image: "https://www.inspireusafoundation.org/file/2023/09/seated-hamstring-stretch.gif"
                    },
                    {
                        muscle: "שוק",
                        name: "Calf Prep",
                        timeReps: "20 שניות × 2",
                        instructions: "עמידה מול קיר, עקב צמוד לרצפה",
                        image: "https://www.inspireusafoundation.org/file/2022/12/wall-calf-stretch.gif"
                    }
                ],
                "אימון כח": [
                    {
                        muscle: "ליבה",
                        name: "Plank",
                        timeReps: "30 שניות × 3",
                        instructions: "קו ישר ראש–עקבים, בטן אסופה",
                        image: "https://www.inspireusafoundation.org/file/2023/03/shoulder-rolls.gif"
                    },
                    {
                        muscle: "רגליים",
                        name: "Wall Sit",
                        timeReps: "40 שניות × 2",
                        instructions: "גב צמוד לקיר, 90° בברכיים",
                        image: "https://www.inspireusafoundation.org/file/2022/12/wall-calf-stretch.gif"
                    },
                    {
                        muscle: "גב",
                        name: "Isometric Row Hold",
                        timeReps: "20 שניות × 3",
                        instructions: "משיכה ואחיזה, שכמות לאחור",
                        image: "https://www.inspireusafoundation.org/file/2023/09/seated-hamstring-stretch.gif"
                    }
                ],
                "אימון שיווי משקל": [
                    {
                        muscle: "קרסול/ליבה",
                        name: "Single-Leg Stand",
                        timeReps: "30 שניות × 2",
                        instructions: "עמידה על רגל אחת, מבט קדימה",
                        image: "https://www.inspireusafoundation.org/file/2023/03/shoulder-rolls.gif"
                    },
                    {
                        muscle: "קרסול",
                        name: "Tandem Stance",
                        timeReps: "30 שניות × 2",
                        instructions: "רגל מול רגל בקו אחד",
                        image: "https://www.inspireusafoundation.org/file/2022/12/wall-calf-stretch.gif"
                    },
                    {
                        muscle: "ירך",
                        name: "Cossack Hold (קל)",
                        timeReps: "20 שניות × 2",
                        instructions: "העברת משקל לצד עם אחיזה נמוכה",
                        image: "https://www.inspireusafoundation.org/file/2023/09/seated-hamstring-stretch.gif"
                    }
                ],
                "אימון ליבה": [
                    {
                        muscle: "ליבה",
                        name: "Dead Bug (Isometric)",
                        timeReps: "30 שניות × 2",
                        instructions: "נשיפה, גב ניטרלי, תנועת יד/רגל נגדית בהחזקת זווית",
                        image: "https://www.inspireusafoundation.org/file/2023/03/shoulder-rolls.gif"
                    },
                    {
                        muscle: "ליבה",
                        name: "Hollow Hold (קל)",
                        timeReps: "20 שניות × 3",
                        instructions: "אגן אחורה, צלעות למטה, החזק",
                        image: "https://www.inspireusafoundation.org/file/2022/12/wall-calf-stretch.gif"
                    },
                    {
                        muscle: "ליבה",
                        name: "Side Plank (ברך)",
                        timeReps: "20 שניות × 2",
                        instructions: "מרפק מתחת לכתף, קו אוזן–כתף–אגן–ברך",
                        image: "https://www.inspireusafoundation.org/file/2023/09/seated-hamstring-stretch.gif"
                    }
                ]

            }
        },
        // TODO: g2..g18 (אותו מבנה: {id, title, emoji, minutes, plan:{...}})
    ],
    home: [
        {
            id: 'homep1', title: 'אימון בית מספר 1', emoji: '🏠', minutes: 20, plan: {
                "אימון ליבה": [
                    { muscle: "בטן: כפיפה הפוכה/הרמות רגליים", name: "הרמות רגליים בשכיבה<br>Lying Leg Raise", timeReps: "30 שניות", instructions: "גב תחתון מודבק לרצפה, להרים רגליים ל־90° ולהוריד לאט בלי לקשת את הגב.", image: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/10/lying-leg-raises.gif?fit=600%2C600&ssl=1" },
                    { muscle: "גב תחתון: פשיטת גב", name: "סופרמן סטטי<br>Superman Hold", timeReps: "30 שניות", instructions: "שכיבה על הבטן; להרים ידיים/רגליים בעדינות ולהחזיק 10–20ש׳.", image: "https://www.meridian-fitness.co.uk/wp-content/uploads/2025/01/Superman.gif" },
                    { muscle: "בטן: אנטי־סיבוב", name: "פלאנק נגיעות כתף<br>Plank Shoulder Taps", timeReps: "30 שניות", instructions: "פלאנק על ידיים; לגעת בכתף נגדית בלי להזיז אגן/בית חזה.", image: "https://media.self.com/photos/5a1495c8e91faa1fe331591b/master/w_1600%2Cc_limit/new-years-challenge-t-shoulder-tap.gif" },
                    { muscle: "אגן ומותן: כפיפת ירך", name: "מרץ בשכיבה<br>Supine March", timeReps: "30 שניות", instructions: "90/90 בירכיים/ברכיים; להוריד עקב אחת לרצפה ולחזור, גב ניטרלי.", image: "https://media.self.com/photos/5b30f79da8856d42d2ec1c0b/master/w_320%2Cc_limit/marching.gif" },
                    { muscle: "בטן: לחץ תוך־בטני/ייצוב סטטי", name: "פלאנק אמות<br>Forearm Plank", timeReps: "30 שניות", instructions: "קו ישר מקרסול עד ראש, בטן נאספת ונשיפה איטית.", image: "https://hips.hearstapps.com/hmg-prod/images/4-forearm-plank-rocks-fw-and-bk-1550760923.gif?crop=0.846xw:1.00xh;0.0950xw,0&resize=980:*" },
                    { muscle: "סרעפת: נשימה סרעפתית מודעת", name: "נשימת סרעפת בשכיבה<br>Diaphragmatic Breathing (Supine)", timeReps: "30 שניות", instructions: "לשאוף “אל הבטן/צלעות”, לנשוף ארוך, 6–8 נשימות איטיות.", image: "https://yb-downloads.s3.us-west-1.amazonaws.com/breathing/GIF-Belly-Breathing-with-Book.gif" },
                ],
                "מתיחות": [

                ]
            }
        },
        {
            id: 'homep2', title: 'אימון בית מספר 2', emoji: '🏠', minutes: 20, plan: {
                "אימון ליבה": [
                    { muscle: "בטן: כפיפה קדמית", name: "כפיפות בטן קלאסיות<br>Crunch", timeReps: "30 שניות", instructions: "להרים שכמות מהרצפה, סנטר רחוק מהחזה, ירידה איטית.", image: "https://media1.tenor.com/m/cp12e2K3YWIAAAAd/floor-crunch.gif" },
                    { muscle: "גב תחתון: אנטי־כיפוף קדמי", name: "דד־באג<br>Dead Bug", timeReps: "30 שניות", instructions: "שכיבה; יד/רגל נגדיים מטה תוך הדבקת מותנית.", image: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXA0N2I1cG1qcjJscGdub3lmOWc4cGoyMnVyeWF6YmhqdTFwOGQ0cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aIyZ9Ra6pyo5ZOHQsm/giphy.gif" },
                    { muscle: "בטן: אנטי־סיבוב", name: "פלאנק עם הושטת יד<br>Plank Reach", timeReps: "30 שניות", instructions: "פלאנק על ידיים; להושיט יד קדימה, לשמור אגן יציב, להחליף.", image: "https://i.makeagif.com/media/5-27-2018/mWAX67.gif" },
                    { muscle: "אגן ומותן: ייצוב/הטיות אגן", name: "גשר ישבן<br>Glute Bridge", timeReps: "30 שניות", instructions: "דחיפת אגן מעלה, צלעות סגורות, עצירה שנייה למעלה.", image: "https://media1.tenor.com/m/i5B_Un9s7woAAAAC/glute-bridge-exercise.gif" },
                    { muscle: "גב תחתון: ייצוב דינמי", name: "בירד דוג<br>Bird Dog", timeReps: "30 שניות", instructions: "עמידת שש; יד ורגל נגדיים, 2ש׳ עצירה, גב ניטרלי.", image: "https://media.self.com/photos/61a7aa8d140ff57c06f4657e/master/w_1600%2Cc_limit/Gail-bird-dog-same-side.gif" },
                    { muscle: "שרירים תומכים: אנטי־כיפוף צדי", name: "פלאנק צד<br>Side Plank", timeReps: "30 שניות", instructions: "מרפק תחת כתף; להרים אגן ולשמור קו ישר.", image: "https://exrx.net/application/files/thumbnails/small/4015/7561/9763/SidePlankElbow.jpg" },
                ],
                "מתיחות": [

                ]
            }
        },
        {
            id: 'homep3', title: 'אימון בית מספר 3', emoji: '🏠', minutes: 20, plan: {
                "אימון ליבה": [
                    { muscle: "בטן: כפיפה הפוכה/הרמות רגליים", name: "רוורס קרנצ'<br>Reverse Crunch", timeReps: "30 שניות", instructions: "ברכיים לחזה בהטיית אגן, ירידה איטית.", image: "https://gymvisual.com/img/p/1/8/7/0/1/18701.gif" },
                    { muscle: "גב תחתון: פשיטת גב", name: "סופרמן חילופי<br>Alternating Superman", timeReps: "30 שניות", instructions: "להרים יד ורגל נגדיים, עצירה קצרה והחלפה.", image: "https://gymvisual.com/img/p/1/9/7/8/1/19781.gif" },
                    { muscle: "בטן: סיבוב/אלכסונים", name: "ר׳שיאן טוויסט (ללא משקל)<br>Russian Twist", timeReps: "30 שניות", instructions: "ישיבה בזווית ~45°, לסובב פלג גוף עליון מצד לצד.", image: "https://gymvisual.com/img/p/3/6/2/2/6/36226.gif" },
                    { muscle: "גב תחתון: ייצוב דינמי", name: "בירד דוג – עצירה<br>Bird Dog (Pause)", timeReps: "30 שניות", instructions: "כמו רגיל אך עצירה 3–5ש׳ בכל חזרה.", image: "https://images.ctfassets.net/4f3rgqwzdznj/5d2egksWLycwkFFpN1NzCa/8ca1ff665efa098a0451d7a343128c33/Bird-Dog_1296x729.gif" },
                    { muscle: "בטן: לחץ תוך־בטני/ייצוב סטטי", name: "הולו הולד<br>Hollow Body Hold", timeReps: "30 שניות", instructions: "שכיבה; להרים שכמות/שוקיים, מותנית דבוקה, נשימות קצרות.", image: "https://gymvisual.com/img/p/9/0/7/5/9075.gif" },
                    { muscle: "אגן ומותן: הרחקה/קירוב ירך", name: "הרחקת ירך בשכיבה צדית<br>Side-Lying Hip Abduction", timeReps: "30 שניות", instructions: "שכיבה על הצד; רגל עליונה מתרוממת בלי לסובב אגן.", image: "https://burnfit.io/wp-content/uploads/2023/11/LYING_HIP_ABD.gif" },
                ],
                "מתיחות": [

                ]
            }
        },
        {
            id: 'homep4', title: 'אימון בית מספר 4', emoji: '🏠', minutes: 20, plan: {
                "אימון ליבה": [
                    { muscle: "בטן: כפיפה קדמית", name: "קרנצ' ידיים קדימה<br>Arms-Forward Crunch", timeReps: "30 שניות", instructions: "ידיים קדימה להקטנת משיכה בצוואר; עלייה קצרה ומבוקרת.", image: "https://images.squarespace-cdn.com/content/v1/594953034c8b0371ef0da06a/1499627201201-9Z0VNI3HSQODJ4EZ98U7/image-asset.gif" },
                    { muscle: "גב תחתון: אנטי־כיפוף קדמי", name: "דד־באג – החזקות<br>Dead Bug (Holds)", timeReps: "30 שניות", instructions: "להוריד יד/רגל ולהחזיק 2–3ש׳ תוך הדבקת מותנית.", image: "https://gymvisual.com/img/p/2/1/8/3/7/21837.gif" },
                    { muscle: "בטן: כפיפה הפוכה/הרמות רגליים", name: "הרמות רגליים עם עצירה<br>Leg Raise (Isometric Hold)", timeReps: "30 שניות", instructions: "לעצור 2–3ש׳ ב־45–60°, לשמור גב מודבק.", image: "https://gymvisual.com/img/p/1/5/6/1/4/15614.gif" },
                    { muscle: "סרעפת: 360° Breathing", name: "נשימת 360°<br>360° Breathing", timeReps: "30 שניות", instructions: "ישיבה/עמידה; שאיפה להרחבת כלוב הצלעות לכל הכיוונים, נשיפה איטית.", image: "https://www.hopkinsmedicine.org/-/media/images/health/1_-conditions/coronavirus/new-breathing-exercises-gif-2.ashx?h=270&iar=0&mh=400&mw=670&w=480&hash=EE76FD62CC10D2C6701DCBF06EDF2FB5" },
                    { muscle: "בטן: אנטי־סיבוב", name: "דוב-פלאנק נגיעות כתף<br>Bear Plank Shoulder Taps", timeReps: "30 שניות", instructions: "ברכיים מרחפות מעל הרצפה; נגיעות כתף בלי נדנוד אגן.", image: "https://i.pinimg.com/originals/0c/cc/26/0ccc26a895e480f959baf1727ccc30cc.gif" },
                    { muscle: "שרירים תומכים: אנטי־כיפוף צדי", name: "פלאנק צד עם “דיפים”<br>Side Plank Hip Dips", timeReps: "30 שניות", instructions: "להוריד/להרים אגן בטווח קצר תוך שמירה על קו.", image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdailyburn.com%2Flife%2Ffitness%2Fhow-to-side-plank-dip-like-a-pro%2F&psig=AOvVaw3RvIS3flcPC1xlbvJHus3l&ust=1756456374368000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKCn_oeMrY8DFQAAAAAdAAAAABAE" },
                ],
                "מתיחות": [

                ]
            }
        },
        {
            id: 'homep5', title: 'אימון בית מספר 5', emoji: '🏠', minutes: 20, plan: {
                "אימון ליבה": [
                    { muscle: "בטן: כפיפה הפוכה/הרמות רגליים", name: "רוורס קרנצ' עם עצירה<br>Reverse Crunch (Pause)", timeReps: "30 שניות", instructions: "עצירה קצרה בסוף הכפיפה; ירידה איטית.", image: "https://www.healthynexercise.com/wp-content/uploads/2022/04/How-to-do-a-reverse-crunch.gif" },
                    { muscle: "אגן ומותן: כפיפת ירך", name: "הרמות רגל ישרה בישיבה<br>Seated Straight-Leg Lift", timeReps: "30 שניות", instructions: "ישיבה זקופה; להרים רגל ישרה מהקרקע בלי לקרוס בגב.", image: "https://www.mitrecsports.com/assets/sit.gif" },
                    { muscle: "בטן: סיבוב/אלכסונים", name: "בייסיקל איטי<br>Slow Bicycle Crunch", timeReps: "30 שניות", instructions: "קצב איטי; להחזיק מגע מרפק-ברך שנייה אחת.", image: "https://media.post.rvohealth.io/wp-content/uploads/2020/09/Bicycle-crunch.gif" },
                    { muscle: "אגן ומותן: ייצוב/הטיות אגן", name: "גשר ישבן “מרצ'”<br>Glute Bridge March", timeReps: "30 שניות", instructions: "גשר; להרים רגל אחת, לשמור אגן מאוזן ולהחליף.", image: "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/08/glutebridgemarch-1472218794.gif" },
                    { muscle: "בטן: אנטי־סיבוב", name: "פלאנק – הרמות רגל מתחלפות<br>Plank Alt. Leg Lift", timeReps: "30 שניות", instructions: "פלאנק אמות; להרים רגל ישרה מעט, לשמור אגן מאוזן.", image: "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/plankwithleglift-1457101889.gif" },
                    { muscle: "שרירים תומכים: ייצוב שכמות", name: "פוש-אפ פלוס (סרייטוס)<br>Push-Up Plus", timeReps: "30 שניות", instructions: "תנוחת שכיבה; דחיפת השכמות “קדימה” בסוף הטווח, חזרה.", image: "https://gymvisual.com/img/p/1/2/5/6/1/12561.gif" },
                ],
                "מתיחות": [

                ]
            }
        },
        {
            id: 'homep6', title: 'אימון בית מספר 6', emoji: '🏠', minutes: 20, plan: {
                "אימון ליבה": [
                    { muscle: "בטן: כפיפה קדמית", name: "קרנצ' איזומטרי<br>Isometric Crunch Hold", timeReps: "30 שניות", instructions: "עליה קצרה ולהחזיק 3–5ש׳ לפני ירידה.", image: "https://gymvisual.com/img/p/1/8/7/0/3/18703.gif" },
                    { muscle: "גב תחתון: פשיטת גב", name: "סופרמן סטטי<br>Superman Hold", timeReps: "30 שניות", instructions: "החזקה 10–20ש׳, ירידה מבוקרת, 2–3 סטים קצרים.", image: "https://gymvisual.com/img/p/2/0/9/0/2/20902.gif" },
                    { muscle: "בטן: סיבוב/אלכסונים", name: "ר׳שיאן טוויסט איטי<br>Slow Russian Twist", timeReps: "30 שניות", instructions: "טווח קטן, שליטה מלאה; לשמור בית חזה פתוח.", image: "https://hw.qld.gov.au/wp-content/uploads/2015/07/25_M_WIP02.gif" },
                    { muscle: "גב תחתון: ייצוב דינמי", name: "בירד דוג “סווּיפ”<br>Bird Dog Reach & Sweep", timeReps: "30 שניות", instructions: "להגיע קדימה ואז “לסחוף” יד לצדי הירך בלי להזיז אגן.", image: "https://media.self.com/photos/59c8187d41062372cfaba034/master/w_320%2Cc_limit/Fitness_12.gif" },
                    { muscle: "בטן: לחץ תוך־בטני/ייצוב סטטי", name: "פלאנק RKC<br>RKC Plank", timeReps: "30 שניות", instructions: "לסגור מרפקים לעבר הצלעות, כיווץ ישבן/בטן 10–20ש׳.", image: "https://burnfit.io/wp-content/uploads/2023/11/RKC_PLANK.gif" },
                    { muscle: "אגן ומותן: הרחקה/קירוב ירך", name: "אדוקציה בשכיבה צדית (רגל תחתונה)<br>Side-Lying Inner-Thigh Lift", timeReps: "30 שניות", instructions: "שכיבה על הצד; להרים רגל תחתונה מעלה לשנייה ולהוריד לאט.", image: "https://media.self.com/photos/59f2438722489f72a3de2e32/master/w_320%2Cc_limit/butt6.gif" },
                ],
                "מתיחות": [

                ]
            }
        },
        // TODO: h2..h18
    ]
};
