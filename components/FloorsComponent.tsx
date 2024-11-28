import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Mock data moved outside of the component
const mockItems = [
  { name: "טייזו", phone: "7100275", floor: 0 },
  { name: "ניהול בניין אריאל", phone: "7100275", floor: 0 },
  { name: "בית הפועלים בע״מ", phone: "7100275", floor: 4 },
  { name: "לייטסטון נכסים בע״מ", phone: "7100200", floor: 4 },
  { name: "חברת אחזקות ישיר בע״מ", phone: "7750150", floor: 5 },
  { name: "חברת אוטומיישן בעמ", floor: 5 },
  { name: "עזרא יהודה -רוזנבלום ייעוץ", floor: 5 },
  { name: "אופיר יצחק", floor: 5 },
  { name: "דוני ניסים", floor: 5 },
  { name: "קטן שעיה", floor: 5 },
  { name: "ארגון המורים", phone: "", floor: 6 },
  { name: "סאן קליניק", phone: "180321123", floor: 11 },
  { name: "ביפ אפ בעמ", phone: "180321123", floor: 11 },
  { name: "אולטרה פיננסים בע״מ", phone: "054-5723630", floor: 12 },
  { name: "ווביה בעמ", phone: "054-5723630", floor: 12 },
  { name: "אבי מונטוקיו", phone: "054-5723630", floor: 12 },
  { name: "ברוך פרל", phone: "054-5723630", floor: 12 },
  { name: "אוסלקה", phone: "054-5723630", floor: 12 },
  { name: "גיא יקוטיאל", phone: "054-5723630", floor: 12 },
  { name: "אולטרה פיננסים", phone: "054-5723630", floor: 12 },
  { name: "שאדו עו״ד קליין", phone: "5604422", floor: 13 },
  { name: "גונן קסטנבאום", phone: "5604422", floor: 13 },
  { name: "איתן ארז ושות משרד עוד", phone: "5604422", floor: 13 },
  { name: "מרווחים", phone: "5669566", floor: 14 },
  { name: "יעקובוביץ אילן", phone: "5669566", floor: 14 },
  { name: "אליהו ובר ושות", phone: "5669566", floor: 14 },
  { name: "ס.ט. סייט אבחון בנק הפועלים", phone: "054-7408363", floor: 16 },
  { name: "קרנית", phone: "71116666", floor: "16,17" },
  { name: "ווי בוקס השקעות בעמ", phone: "71116666", floor: "16,17" },
  {
    name: "ס.ט. סייט אבטחון בע״מ לוינשטיין נכסים",
    phone: "7100200",
    floor: "18,19",
  },
  { name: "הייפרווייז ונצרס בעמ", phone: "7100200", floor: 19 },
  { name: "אילן אורלי", phone: "5663313", floor: 20 },
  { name: "ערליג ניירות ערך", phone: "5663313", floor: 20 },
  { name: "אבישר יצחק עוד", phone: "5663313", floor: 20 },
  { name: "י.ו מיסים בעם", phone: "5663313", floor: 20 },
  { name: "ויטה אלגרטי", phone: "5663313", floor: 20 },
  { name: "אילן אורלי", phone: "5663313", floor: 20 },
  { name: "באבא אינטרטיינמטס בעמ", phone: "5663313", floor: 21 },
  { name: "סופרפלאי בע״מ", phone: "7104500", floor: "22,23" },
  { name: "בנק הפועלים בע״מ", phone: "7100200", floor: "30,31,32" },
  // Added floors with names from the first column
  { name: "בנק הפועלים בע״מ", phone: "", floor: "7,8,9,10" },
  { name: "בנק הפועלים בע״מ", phone: "", floor: 24 },
  { name: "ביט", phone: "", floor: 24 },
  { name: "בנק הפועלים בע״מ", phone: "", floor: 25 },
  { name: "בנק הפועלים בע״מ", phone: "", floor: 26 },
  { name: "פייאם קארד בעמ", phone: "", floor: 26 },
  { name: "פייבוקס בע״מ", phone: "", floor: 27 },
  { name: "לוינשטיין נתיב הנדסה ובניו בע״מ", phone: "", floor: 27 },
  { name: "לוינשטיין נכסים בע״מ", phone: "", floor: 28 },
  { name: "קומיוניקס בע״מ", phone: "", floor: 29 },
  { name: "משולם לוינשטיין הנדסה וקבלנות", phone: "", floor: "33,34" },
];

// Floors Component
export default function FloorsComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(mockItems);
  const [selectedFloor, setSelectedFloor] = useState<string | number | null>(
    null
  );

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
