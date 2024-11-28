"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

// Procedures data
const procedures = [
  {
    id: "1",
    title: "צפצוף",
    description: `
 ממרכז הבקרה בלובי
       •  לוחצים על השתקת צופרים
       •   הכנסת קוד 1111
       •  לחיצה על אישור`,
  },
  {
    id: "2",
    title: "צבע אדום",
    description:
      "ריצה למקום מוגן כמו ממד שנמצא מאחורי השומר, או חדר מדרגות ליד מעליות חניון",
  },
  {
    id: "3",
    title: "אזעקה או תקלה במערכת גילוי אש",
    description: `במקרה של אזעקה או תקלה תופעל מערכת הגילוי בבניין, ותצור אזעקות וצפצופים ברכזת הגילוי של הבניין.

    שלבים לטיפול ארועים במערכת הגילוי וסריקת מפגעים:
    • יש לראות את סוג ואיזור שממנו נובעת האזעקה בפנל המערכת
    • לחץ על לחצן חייב לחץ קוד 1111 לצורך נטרול או שחרור החייגן
    • עמוד על אזור האזעקה הקיימת בפנל ולחץ על לחצן נטרול 111 ולחץ אישור ולאחר מכן לחץ על לחצן השב`,
  },
  {
    id: "4",
    title: "בדיקת מיקום האירוע",
    description: `
    • יש לאתר התקלה המטופלת על פי הכתובת של האביזר (חיישן,גלאי,מפסק)
    • שרטוט ונקודת האביזר וצבע סריקה באיזור לצורך זיהוי מפגעי כוחות כיבוי אש והנהלת הבניין
    • עד הגעת הכוחות יש להזהיר למנוע ולנסות לכבות את השריפה על פי נוהלי כיבוי אש`,
  },
  {
    id: "5",
    title: "חשוב לדעת באפשרות המיידית",
    description: `
    • בכל מקרה של אירוע אמת או ברק יש חובה לעדכן את מנהל אחזקה או מנהל בניין
    • במקרה שברביעית נפתרה יש לעמוד ברכזת הגילוי על הארוע המנוטרל וללחוץ על אישור וללחוץ את הקוד 1111 וללחוץ אישור ואז וללחוץ על כפתור השב`,
  },
  {
    id: "6",
    title: "פתיחת שערים",
    description: `
    • שער כניסה לטייזו - פתיחה עם שלט שחור לחצן 1
    • שער חניון לוינשטיין - חיוג מטלפון עמדה: פתיחת שער לוינשטיין 1
    • שער חניון גדול תת קרקעי - לחצן עגול בעמדה מתחת לשולחן
    • מחסום יציאה חניון תת קרקעי - לחיצה על לחצן לבן עם ציור של מפתח בעמדה`,
  },
  {
    id: "7",
    title: "שאלות נפוצות על מקומות באיזור",
    description: `
   • בית השמחות - יציאה ראשית ימינה , הבניין הבא
   • מגזינו - יציאה ראשית ימינה , הבניין הבא 
   • רחוב טיומקין - יציאה מדלתות אחוריות של לובי ( לייד טייזו)
   • מגדל סונות - מול הכניסה הראשית , לחצות כביש . המגדל מצד ימין
    `,
  },
  {
    id: "8",
    title: "קוד חדר זבל",
    description: `
   • 2403#
    `,
  },
  {
    id: "9",
    title: "נעילת דלתות",
    description: `
   • החל משעה 11 בלילה
    `,
  },
  {
    id: "10",
    title: "נוהל יומן",
    description: `
   • החל משעה 9 בערב רישום ביומן של כל מי שעולה לקומות
    `,
  },
];

export default function ProceduresComponent() {
  return (
    <div className="h-full flex flex-col p-4 mb-10" dir="rtl">
      <Card>
        <CardContent className="p-4">
          <h2 className="text-2xl font-bold text-center mb-4">נהלים</h2>

          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>חשוב!</AlertTitle>
            <AlertDescription>
              הוראות הפעלה למערכת גילוי אש TELEFIRE ADR-300 ונהלים נוספים
            </AlertDescription>
          </Alert>

          <Accordion type="single" collapsible className="w-full">
            {procedures.map((procedure) => (
              <AccordionItem key={procedure.id} value={procedure.id}>
                <AccordionTrigger className="text-right font-semibold">
                  {procedure.title}
                </AccordionTrigger>
                <AccordionContent className="text-right whitespace-pre-wrap">
                  {procedure.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
