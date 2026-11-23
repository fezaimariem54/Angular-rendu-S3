import { Component } from '@angular/core';

@Component({
  selector: 'app-list-cof',
  imports: [],
  templateUrl: './list-cof.html',
  styleUrl: './list-cof.css',
})
export class ListCof {
  list = [
    {
      picture: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600",
      title: "AI & Machine Learning",
      date: "20/12/2026",
      adress: "Tunis, Tunisie",
      available_Places: 45
    },
    {
      picture: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600",
      title: "Web Development",
      date: "25/12/2026",
      adress: "Sousse, Tunisie",
      available_Places: 30
    },
    {
      picture: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600",
      title: "Cloud Computing",
      date: "30/12/2026",
      adress: "Sfax, Tunisie",
      available_Places: 15
    }
  ];
}