import {Component, OnInit, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { item } from './item';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'Counter Strike Skins';

  ngOnInit(): void {
    this.refresh();
  }

  async refresh() {
    const url = "https://raw.githubusercontent.com/ByMykel/CSGO-API/main/public/api/en/skins.json"
    const ITEM_LIMIT = 6;
    let itemOutput = document.getElementById("item-list");

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json: item[] = await response.json();
      let selected = this.getRandomItems(json, ITEM_LIMIT);

      console.log(selected);

      let html = "";

      for(let i = 0; i < ITEM_LIMIT; i++)
      {
        html += `<div class='max-w-sm p-6 bg-white border-4 border-gray-200 rounded-lg shadow-sm
                           dark:bg-gray-800 dark:border-amber-300 text-white m-4'>
                    <h2 class="font-bold">${selected[i].name}</h2>
                    <img src='${selected[i].image}' alt="desc"/>
                    <p class="text-sm">${selected[i].description}</p>
                 </div>`
      }

      if(itemOutput != null){
        itemOutput.innerHTML = html;
      }

      } catch (error) {
      console.error("unable to retrieve items");
      }
    }

    //given an upper number max, and a count of ids to select, will return an array of random integers
    //numbers should not duplicate
    getRandomItems(array: item[], numItems: number): item[] {
      if (numItems > array.length) {
        throw new Error("Number of items requested exceeds array length.");
      }

      const shuffledArray = [...array].sort(() => Math.random() - 0.5);
      return shuffledArray.slice(0, numItems);
    }
}
