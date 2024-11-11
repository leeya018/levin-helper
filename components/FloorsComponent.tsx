import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Mock data moved outside of the component
const mockItems = [
  { name: "טייזו", floor: "0" },
  { name: "בנק הפועלים", floor: "1-3-5-7-8-9, 10-16-22-24, 25-30-31-32" },
  { name: "נכיסה בחוץ", floor: "3" },
  { name: "חברה אסיאתית", floor: "3" },
  { name: "לווינשטיין נכסים בעמ", floor: "4" },
  { name: "נתיבי יהודה והגבים", floor: "5" },
  { name: "ש. ב. נכסי אוטומיישן", floor: "5" },
  { name: "אחרוני משה", floor: "5" },
  { name: "סיטרון אנרגיק", floor: "5" },
  { name: "ארגון המורים", floor: "6" },
  { name: "סאן דיל קומרס", floor: "11" },
  { name: "בית אפ", floor: "11" },
  { name: "point ai", floor: "11" },
  { name: "חובי - סי טי מן", floor: "12" },
  { name: "אבי מוסיקי", floor: "12" },
  { name: "ברוך פרל", floor: "12" },
  { name: "אופלקה", floor: "12" },
  { name: "לפידות - בני בוקר", floor: "12" },
  { name: "אלקטרה אברמוביץ", floor: "12" },
  { name: "גיא יחזקאל", floor: "12" },
  { name: "עמיר פרידמן", floor: "12" },
  { name: "אלקטרה פיננסים", floor: "12" },
  { name: "שחאר קלדן", floor: "13" },
  { name: "דורה גולדין", floor: "13" },
  { name: "גיא הרמלך", floor: "13" },
  { name: "טל סחר", floor: "13" },
  { name: "דן קוד וקי צדיק", floor: "13" },
  { name: "מור בן שושן", floor: "13" },
  { name: "אסי אברהמי אדר", floor: "13" },
  { name: "יובל גבעון", floor: "13" },
  { name: "דניאלה אברמוביץ", floor: "13" },
  { name: "יריב אלפרט", floor: "13" },
  { name: "טל מקרקעין ולקל", floor: "13" },
  { name: "חברות ברק משה", floor: "13" },
  { name: "ישראל אחרוני", floor: "13" },
  { name: "יהונתן האחר", floor: "13" },
  { name: "איתן אדר", floor: "13" },
  { name: "בנק לאומי בע״מ", floor: "14" },
  { name: "אחוד מאיר השאבות", floor: "14" },
  { name: "מרחבים", floor: "14" },
  { name: "איתן עוז וברביץ", floor: "14" },
  { name: "אליהו וגבר", floor: "14" },
  { name: "יעקב חיימוב", floor: "14" },
  { name: "יפעת יפה", floor: "14" },
  { name: "דני פלדי", floor: "14" },
  { name: "ס.ט. סייט אבטחון", floor: "16+17" },
  { name: "קרנית", floor: "18" },
  { name: "ח״י בלום השקעות", floor: "18" },
  { name: "ערביי גניות ערד", floor: "20" },
  { name: "הקבוצה הירושלמית", floor: "20" },
  { name: "גיל רמתים", floor: "20" },
  { name: "ניסה אלגרנטי", floor: "20" },
  { name: "איזי אורלי", floor: "20" },
  { name: "מזל אור", floor: "20" },
  { name: "אברשר יצחק", floor: "20" },
  { name: "בכר אלקלעי", floor: "20" },
  { name: "אור רושת", floor: "20" },
  { name: "איתן שלוש", floor: "20" },
  { name: "באבא אינטרנשיונל", floor: "21" },
  { name: "פורליק", floor: "22" },
  { name: "סופר פליי", floor: "22+23" },
  { name: "ביס", floor: "24" },
  { name: "פיס אם פאוור", floor: "26" },
  { name: "פיבוקס", floor: "27" },
  { name: "אוריות וברכות", floor: "27" },
  { name: "לייטסטון הנדיה", floor: "27" },
  { name: "קומיוניקס", floor: "29" },
  { name: "משולם לייטשטין", floor: "33" },
  { name: "לייטשטין טייב", floor: "34" },
];

// Floors Component
export default function FloorsComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(mockItems);
  const [selectedFloor, setSelectedFloor] = useState<string | null>(null);

  useEffect(() => {
    const results = mockItems.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(results);
  }, [searchTerm]);

  return (
    <div className="h-full flex flex-col">
      <div className="p-4">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-2xl font-bold text-center mb-4">מדריך קומות</h2>
            <Input
              type="text"
              placeholder="חפש לפי שם חברה..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-right"
            />
          </CardContent>
        </Card>
      </div>
      <div className="flex-grow overflow-auto p-4">
        {filteredItems.length > 0 ? (
          <ul className="space-y-2">
            {filteredItems.map((item, index) => (
              <li key={index}>
                <Button
                  variant="secondary"
                  className="w-full text-right justify-between p-4 h-auto"
                  onClick={() =>
                    setSelectedFloor(
                      selectedFloor === item.floor ? null : item.floor
                    )
                  }
                >
                  <span>{item.name}</span>
                  {selectedFloor === item.floor && (
                    <span className="bg-primary text-primary-foreground px-2 py-1 rounded-md">
                      קומה {item.floor}
                    </span>
                  )}
                </Button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-muted-foreground">לא נמצאו תוצאות</p>
        )}
      </div>
    </div>
  );
}
