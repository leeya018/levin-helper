"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Upload, X } from "lucide-react";
import Image from "next/image";

export default function ShiftsComponent() {
  const [shiftImage, setShiftImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedImage = localStorage.getItem("shiftImage");
    if (savedImage) {
      setShiftImage(savedImage);
    }
  }, []);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setShiftImage(base64String);
        localStorage.setItem("shiftImage", base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setShiftImage(null);
    localStorage.removeItem("shiftImage");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="h-full flex flex-col p-4" dir="rtl">
      <Card>
        <CardContent className="p-4">
          <h2 className="text-2xl font-bold text-center mb-4">
            לוח משמרות שבועי
          </h2>
          <div className="flex justify-end mb-4">
            <Button onClick={triggerFileInput} variant="outline">
              <Upload className="ml-2 h-4 w-4" />
              העלה תמונה חדשה
            </Button>
          </div>
          {shiftImage ? (
            <div className="space-y-4">
              <div className="aspect-video relative">
                <Image
                  src={shiftImage}
                  alt="לוח משמרות"
                  layout="responsive"
                  width={500} // Set a reasonable width based on your layout needs
                  height={250} // Set a reasonable height based on your layout needs
                  className="w-full h-[50vh] object-contain"
                />
              </div>
              <div className="flex justify-center">
                <Button onClick={handleRemoveImage} variant="destructive">
                  <X className="ml-2 h-4 w-4" />
                  הסר תמונה
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <p className="mb-4">אין תמונת לוח משמרות. אנא העלה תמונה.</p>
            </div>
          )}
          <Input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </CardContent>
      </Card>
    </div>
  );
}
