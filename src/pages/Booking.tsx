import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock, Info, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Questionnaire from "@/components/Questionnaire";

const Booking = () => {
  const [date, setDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [showTimeSlotModal, setShowTimeSlotModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showSuccessStep, setShowSuccessStep] = useState(false);
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const { toast } = useToast();

  const timeSlots = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (!selectedDate) return;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) return;

    const dayOfWeek = selectedDate.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      toast({
        title: "Weekend indisponibil",
        description:
          "Programările în weekend sunt disponibile doar la cerere. Te rugăm să ne contactezi.",
        variant: "destructive",
      });
      return;
    }

    setDate(selectedDate);
    setShowTimeSlotModal(true);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setShowTimeSlotModal(false);
    setShowBookingModal(true);
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccessStep(true);
  };

  const handleCloseBooking = () => {
    setShowBookingModal(false);
    setShowSuccessStep(false);
    setSelectedTime("");
  };

  return (
    <div className="min-h-screen py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h1 className="mb-6 font-heading text-4xl font-bold text-foreground lg:text-5xl">
            Programează Sesiunea Ta
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Alege un moment convenabil pentru sesiunea ta de terapie. Aștept cu
            nerăbdare să te sprijin în călătoria ta de bunăstare.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card className="border-0 bg-white shadow-medium">
              <CardContent className="p-8">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={handleDateSelect}
                  className="w-full"
                  disabled={(date) => {
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    return date < today;
                  }}
                />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="gradient-card border-0 shadow-medium">
              <CardHeader>
                <CardTitle className="font-heading">
                  Tipuri de Sesiuni
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 transition-colors hover:bg-primary/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-foreground">
                        Terapie Individuală
                      </h4>
                      <p className="text-sm text-muted-foreground">50 minute</p>
                    </div>
                    <div className="text-lg font-semibold text-primary">
                      150 RON
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 transition-colors hover:bg-primary/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-foreground">
                        Terapie de Cuplu
                      </h4>
                      <p className="text-sm text-muted-foreground">75 minute</p>
                    </div>
                    <div className="text-lg font-semibold text-primary">
                      200 RON
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-accent/30 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-heading text-lg">
                  <Info className="h-5 w-5 text-primary" />
                  Program
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>
                  <strong>Luni - Joi:</strong> 9:00 - 18:00
                </p>
                <p>
                  <strong>Vineri:</strong> 9:00 - 15:00
                </p>
                <p>
                  <strong>Weekend:</strong> La cerere
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-accent/30 shadow-soft">
              <CardHeader>
                <CardTitle className="font-heading text-lg">
                  Informații Importante
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Confirmarea se face cu 24h înainte</li>
                  <li>• Anularea gratuită până cu 48h înainte</li>
                  <li>• Prima sesiune include evaluarea inițială</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Dialog open={showTimeSlotModal} onOpenChange={setShowTimeSlotModal}>
        <DialogContent className="sm:max-w-[450px]">
          <DialogHeader>
            <DialogTitle className="font-heading">Selectează Ora</DialogTitle>
            <DialogDescription>
              Alege un interval disponibil pentru{" "}
              {date?.toLocaleDateString("ro-RO", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-3 py-4">
            {timeSlots.map((time) => (
              <Button
                key={time}
                variant="outline"
                onClick={() => handleTimeSelect(time)}
                className="h-14 rounded-xl border-2 transition-all hover:border-primary hover:bg-primary/5"
              >
                <Clock className="mr-2 h-4 w-4" />
                {time}
              </Button>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showBookingModal} onOpenChange={handleCloseBooking}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="font-heading">
              {showSuccessStep ? "Programare Confirmată!" : "Rezervă Sesiunea"}
            </DialogTitle>
            <DialogDescription>
              {showSuccessStep
                ? "Sesiunea ta a fost programată cu succes"
                : "Completează formularul pentru a confirma programarea"}
            </DialogDescription>
          </DialogHeader>

          {!showSuccessStep ? (
            <form onSubmit={handleBooking} className="space-y-4">
              <div className="rounded-lg bg-accent/30 p-4">
                <p className="text-sm">
                  <strong>Data:</strong> {date?.toLocaleDateString("ro-RO")}
                </p>
                <p className="text-sm">
                  <strong>Ora:</strong> {selectedTime}
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">Nume Complet *</Label>
                <Input id="name" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Telefon *</Label>
                <Input id="phone" type="tel" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="sessionType">Tipul Sesiunii *</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Selectează tipul sesiunii" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="individual">
                      Terapie individuală (150 RON)
                    </SelectItem>
                    <SelectItem value="couples">
                      Terapie de cuplu (200 RON)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Observații (opțional)</Label>
                <Textarea
                  id="notes"
                  placeholder="Orice informații suplimentare pe care dorești să le împărtășești..."
                  rows={3}
                />
              </div>

              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleCloseBooking}
                  className="flex-1"
                >
                  Anulează
                </Button>
                <Button type="submit" className="flex-1">
                  Rezervă Sesiunea
                </Button>
              </div>
            </form>
          ) : (
            <div className="space-y-6">
              <div className="flex flex-col items-center justify-center py-6">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-heading font-semibold">
                  Programare Confirmată!
                </h3>
                <p className="text-center text-muted-foreground mb-4">
                  Vei primi un email de confirmare în scurt timp cu toate
                  detaliile sesiunii.
                </p>
              </div>

              <div className="rounded-lg bg-accent/30 p-4 space-y-2">
                <p className="text-sm">
                  <strong>Data:</strong> {date?.toLocaleDateString("ro-RO")}
                </p>
                <p className="text-sm">
                  <strong>Ora:</strong> {selectedTime}
                </p>
              </div>

              <div className="rounded-lg bg-primary/5 border border-primary/20 p-5">
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Info className="h-5 w-5 text-primary" />
                  Îți doresc să te cunosc mai bine
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Pentru a putea să îți ofer cea mai bună experiență
                  terapeutică, te invit să completezi un scurt chestionar. Acest
                  pas este complet opțional, dar mă va ajuta să te înțeleg mai
                  bine înainte de prima noastră întâlnire.
                </p>
                <div className="flex gap-3">
                  <Button
                    onClick={() => {
                      setShowQuestionnaire(true);
                      handleCloseBooking();
                    }}
                    className="flex-1"
                  >
                    Da, completez chestionarul
                  </Button>
                  <Button
                    onClick={handleCloseBooking}
                    variant="outline"
                    className="flex-1"
                  >
                    Poate mai târziu
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Questionnaire
        isOpen={showQuestionnaire}
        onClose={() => setShowQuestionnaire(false)}
      />
    </div>
  );
};

export default Booking;
