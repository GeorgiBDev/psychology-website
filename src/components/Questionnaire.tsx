import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2 } from "lucide-react";

interface QuestionnaireProps {
  isOpen: boolean;
  onClose: () => void;
}

const Questionnaire = ({ isOpen, onClose }: QuestionnaireProps) => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    reason: "",
    emotionalState: "",
    previousTherapy: "",
    previousTherapyDetails: "",
    expectations: "",
    diagnosis: "",
    medication: "",
    stressLevel: "",
    sleepQuality: "",
    support: "",
    goals: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emailSubject = `Chestionar Inițial - ${formData.name}`;
    const emailBody = `
CHESTIONAR INIȚIAL PENTRU TERAPIE
====================================

INFORMAȚII DE CONTACT:
----------------------
Nume: ${formData.name}
Vârstă: ${formData.age}
Email: ${formData.email}
Telefon: ${formData.phone}

MOTIVUL CONSULTAȚIEI:
---------------------
${formData.reason}

STAREA EMOȚIONALĂ ACTUALĂ:
--------------------------
${formData.emotionalState}

EXPERIENȚĂ ANTERIOARĂ CU TERAPIA:
----------------------------------
A avut experiențe anterioare: ${formData.previousTherapy}
${
  formData.previousTherapyDetails
    ? `Detalii: ${formData.previousTherapyDetails}`
    : ""
}

AȘTEPTĂRI DE LA TERAPIE:
------------------------
${formData.expectations}

INFORMAȚII MEDICALE:
--------------------
Diagnostic/Condiții medicale: ${formData.diagnosis || "Nu"}
Medicație actuală: ${formData.medication || "Nu"}

EVALUARE STARE GENERALĂ:
------------------------
Nivel de stres (1-10): ${formData.stressLevel}
Calitatea somnului: ${formData.sleepQuality}
Sistem de suport social: ${formData.support}

OBIECTIVE ÎN TERAPIE:
---------------------
${formData.goals}
    `.trim();

    const mailtoLink = `mailto:georgianabaleapsihoterapeut@gmail.com?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;

    setIsSubmitted(true);

    toast({
      title: "Mulțumesc!",
      description:
        "Răspunsurile tale au fost procesate. Clientul tău de email ar trebui să se deschidă.",
    });
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      age: "",
      email: "",
      phone: "",
      reason: "",
      emotionalState: "",
      previousTherapy: "",
      previousTherapyDetails: "",
      expectations: "",
      diagnosis: "",
      medication: "",
      stressLevel: "",
      sleepQuality: "",
      support: "",
      goals: "",
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl">
            {isSubmitted ? "Mulțumesc!" : "Chestionar Inițial"}
          </DialogTitle>
          <DialogDescription>
            {isSubmitted
              ? "Răspunsurile tale m-au ajutat să te înțeleg mai bine"
              : "Aceste informații mă vor ajuta să îți ofer cea mai bună experiență terapeutică"}
          </DialogDescription>
        </DialogHeader>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6 py-4">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Informații de Contact</h3>

              <div className="space-y-2">
                <Label htmlFor="name">Nume Complet *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="age">Vârstă *</Label>
                  <Input
                    id="age"
                    type="number"
                    min="18"
                    max="100"
                    required
                    value={formData.age}
                    onChange={(e) =>
                      setFormData({ ...formData, age: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Despre Tine</h3>

              <div className="space-y-2">
                <Label htmlFor="reason">
                  Ce te-a determinat să cauți terapie? *
                </Label>
                <Textarea
                  id="reason"
                  required
                  rows={4}
                  placeholder="Descrie pe scurt ce te-a adus aici..."
                  value={formData.reason}
                  onChange={(e) =>
                    setFormData({ ...formData, reason: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="emotionalState">
                  Cum ai descrie starea ta emoțională actuală? *
                </Label>
                <Textarea
                  id="emotionalState"
                  required
                  rows={3}
                  placeholder="De exemplu: anxios, trist, confuz, copleșit..."
                  value={formData.emotionalState}
                  onChange={(e) =>
                    setFormData({ ...formData, emotionalState: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Experiență Terapeutică</h3>

              <div className="space-y-3">
                <Label>Ai mai participat la terapie în trecut? *</Label>
                <RadioGroup
                  required
                  value={formData.previousTherapy}
                  onValueChange={(value) =>
                    setFormData({ ...formData, previousTherapy: value })
                  }
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="da" id="prev-yes" />
                    <Label
                      htmlFor="prev-yes"
                      className="font-normal cursor-pointer"
                    >
                      Da
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="nu" id="prev-no" />
                    <Label
                      htmlFor="prev-no"
                      className="font-normal cursor-pointer"
                    >
                      Nu
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {formData.previousTherapy === "da" && (
                <div className="space-y-2">
                  <Label htmlFor="previousTherapyDetails">
                    Poți să-mi spui pe scurt cum a fost experiența?
                  </Label>
                  <Textarea
                    id="previousTherapyDetails"
                    rows={3}
                    placeholder="Ce a funcționat bine? Ce nu a funcționat?"
                    value={formData.previousTherapyDetails}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        previousTherapyDetails: e.target.value,
                      })
                    }
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="expectations">
                  Care sunt așteptările tale de la această terapie? *
                </Label>
                <Textarea
                  id="expectations"
                  required
                  rows={3}
                  placeholder="Ce speri să realizezi sau să schimbi?"
                  value={formData.expectations}
                  onChange={(e) =>
                    setFormData({ ...formData, expectations: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Informații Medicale</h3>

              <div className="space-y-2">
                <Label htmlFor="diagnosis">
                  Ai vreun diagnostic sau condiție medicală relevantă?
                </Label>
                <Input
                  id="diagnosis"
                  placeholder="Lasă gol dacă nu"
                  value={formData.diagnosis}
                  onChange={(e) =>
                    setFormData({ ...formData, diagnosis: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="medication">
                  Iei în prezent vreun medicament?
                </Label>
                <Input
                  id="medication"
                  placeholder="Lasă gol dacă nu"
                  value={formData.medication}
                  onChange={(e) =>
                    setFormData({ ...formData, medication: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Evaluare Generală</h3>

              <div className="space-y-2">
                <Label htmlFor="stressLevel">
                  Cum ai evalua nivelul tău de stres actual? (1-10) *
                </Label>
                <Select
                  required
                  value={formData.stressLevel}
                  onValueChange={(value) =>
                    setFormData({ ...formData, stressLevel: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selectează nivelul de stres" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num}{" "}
                        {num <= 3
                          ? "(Scăzut)"
                          : num <= 6
                          ? "(Moderat)"
                          : "(Ridicat)"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="sleepQuality">
                  Cum ai descrie calitatea somnului tău? *
                </Label>
                <Select
                  required
                  value={formData.sleepQuality}
                  onValueChange={(value) =>
                    setFormData({ ...formData, sleepQuality: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selectează calitatea somnului" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="excelent">
                      Excelent - dorm foarte bine
                    </SelectItem>
                    <SelectItem value="bun">
                      Bun - în general dorm ok
                    </SelectItem>
                    <SelectItem value="moderat">
                      Moderat - am dificultăți ocazionale
                    </SelectItem>
                    <SelectItem value="slab">
                      Slab - dorm greu frecvent
                    </SelectItem>
                    <SelectItem value="foarte-slab">
                      Foarte slab - am insomnie
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="support">
                  Ai un sistem de suport (familie, prieteni)? *
                </Label>
                <Textarea
                  id="support"
                  required
                  rows={2}
                  placeholder="Descrie pe scurt rețeaua ta de suport..."
                  value={formData.support}
                  onChange={(e) =>
                    setFormData({ ...formData, support: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Obiectivele Tale</h3>

              <div className="space-y-2">
                <Label htmlFor="goals">
                  Ce ai vrea să realizezi prin această terapie? *
                </Label>
                <Textarea
                  id="goals"
                  required
                  rows={4}
                  placeholder="Gândește-te la 2-3 obiective concrete..."
                  value={formData.goals}
                  onChange={(e) =>
                    setFormData({ ...formData, goals: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                className="flex-1"
              >
                Anulează
              </Button>
              <Button type="submit" className="flex-1">
                Trimite Răspunsurile
              </Button>
            </div>
          </form>
        ) : (
          <div className="flex flex-col items-center justify-center py-8 space-y-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle2 className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-center">
              Mulțumesc pentru răspunsuri!
            </h3>
            <p className="text-center text-muted-foreground max-w-md">
              Informațiile tale m-au ajutat să te înțeleg mai bine. Ne vedem
              curând la prima sesiune!
            </p>
            <Button onClick={handleClose} className="mt-4">
              Închide
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default Questionnaire;
