import { Component, OnInit } from '@angular/core';
import { Calendar } from 'src/app/model/calendrier.model';
import { CalendrierService } from 'src/app/service/calendrier.service';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.scss'],
})
export class CalendrierComponent implements OnInit {
  annee: number = 0;
  mois: number = 0;
  calendarData: number[][] = [];
  moisInvalide: boolean = false;
  anneeValide: boolean = true;

  constructor(private calendrierService: CalendrierService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.mois === 0 || this.mois > 12) {
      this.moisInvalide = true;
      return;
    }
    if (this.annee < 1) {
      // Afficher un message d'erreur pour l'année
      this.anneeValide = false;
      return;
    }

    // Réinitialiser la variable de contrôle de l'année
    this.anneeValide = true;
    // Réinitialisez la validation si le mois est valide
    this.moisInvalide = false;
    // Appel du service pour récupérer le calendrier en fonction de l'année et du mois
    this.calendrierService
      .getCalendrier(this.annee, this.mois)
      .subscribe((data) => {
        this.calendarData = data.semaineMois;
      });
  }
}
