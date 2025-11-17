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
import { useLanguage } from "@/hooks/useLanguage";

const Booking = () => {
  const [date, setDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [showTimeSlotModal, setShowTimeSlotModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showSuccessStep, setShowSuccessStep] = useState(false);
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

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
        title: t.booking.weekendError.title,
        description: t.booking.weekendError.desc,
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
            {t.booking.title}
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            {t.booking.subtitle}
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
                  {t.booking.sessionTypes.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 transition-colors hover:bg-primary/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {t.booking.sessionTypes.individual}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        50 {t.booking.sessionTypes.minutes}
                      </p>
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
                        {t.booking.sessionTypes.couples}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        75 {t.booking.sessionTypes.minutes}
                      </p>
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
                  {t.booking.schedule.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>
                  <strong>{t.booking.schedule.weekdays}</strong> 9:00 - 18:00
                </p>
                <p>
                  <strong>{t.booking.schedule.friday}</strong> 9:00 - 15:00
                </p>
                <p>
                  <strong>{t.booking.schedule.weekend}</strong>{" "}
                  {t.booking.schedule.onRequest}
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-accent/30 shadow-soft">
              <CardHeader>
                <CardTitle className="font-heading text-lg">
                  {t.booking.info.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• {t.booking.info.confirmation}</li>
                  <li>• {t.booking.info.cancellation}</li>
                  <li>• {t.booking.info.firstSession}</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Dialog open={showTimeSlotModal} onOpenChange={setShowTimeSlotModal}>
        <DialogContent className="sm:max-w-[450px]">
          <DialogHeader>
            <DialogTitle className="font-heading">
              {t.booking.timeModal.title}
            </DialogTitle>
            <DialogDescription>
              {t.booking.timeModal.description}{" "}
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
              {showSuccessStep
                ? t.booking.bookingModal.titleSuccess
                : t.booking.bookingModal.titleBook}
            </DialogTitle>
            <DialogDescription>
              {showSuccessStep
                ? t.booking.bookingModal.descSuccess
                : t.booking.bookingModal.descBook}
            </DialogDescription>
          </DialogHeader>

          {!showSuccessStep ? (
            <form onSubmit={handleBooking} className="space-y-4">
              <div className="rounded-lg bg-accent/30 p-4">
                <p className="text-sm">
                  <strong>{t.booking.bookingModal.date}</strong>{" "}
                  {date?.toLocaleDateString("ro-RO")}
                </p>
                <p className="text-sm">
                  <strong>{t.booking.bookingModal.time}</strong> {selectedTime}
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">
                  {t.booking.bookingModal.fullName} *
                </Label>
                <Input id="name" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{t.booking.bookingModal.email} *</Label>
                <Input id="email" type="email" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">{t.booking.bookingModal.phone} *</Label>
                <Input id="phone" type="tel" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="sessionType">
                  {t.booking.bookingModal.sessionType} *
                </Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue
                      placeholder={t.booking.bookingModal.selectType}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="individual">
                      {t.booking.sessionTypes.individual} (150 RON)
                    </SelectItem>
                    <SelectItem value="couples">
                      {t.booking.sessionTypes.couples} (200 RON)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">{t.booking.bookingModal.notes}</Label>
                <Textarea
                  id="notes"
                  placeholder={t.booking.bookingModal.notesPlaceholder}
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
                  {t.booking.bookingModal.cancel}
                </Button>
                <Button type="submit" className="flex-1">
                  {t.booking.bookingModal.reserve}
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
                  {t.booking.bookingModal.titleSuccess}
                </h3>
                <p className="text-center text-muted-foreground mb-4">
                  {t.booking.bookingModal.confirmationEmail}
                </p>
              </div>

              <div className="rounded-lg bg-accent/30 p-4 space-y-2">
                <p className="text-sm">
                  <strong>{t.booking.bookingModal.date}</strong>{" "}
                  {date?.toLocaleDateString("ro-RO")}
                </p>
                <p className="text-sm">
                  <strong>{t.booking.bookingModal.time}</strong> {selectedTime}
                </p>
              </div>

              <div className="rounded-lg bg-primary/5 border border-primary/20 p-5">
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Info className="h-5 w-5 text-primary" />
                  {t.booking.bookingModal.knowYouBetter}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {t.booking.bookingModal.questionnaireDesc}
                </p>
                <div className="flex gap-3">
                  <Button
                    onClick={() => {
                      setShowQuestionnaire(true);
                      handleCloseBooking();
                    }}
                    className="flex-1"
                  >
                    {t.booking.bookingModal.completeQuestionnaire}
                  </Button>
                  <Button
                    onClick={handleCloseBooking}
                    variant="outline"
                    className="flex-1"
                  >
                    {t.booking.bookingModal.maybeLater}
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
