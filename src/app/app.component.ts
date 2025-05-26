import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { item } from './item';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'ajax-practice';

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
        html += `<div class='container'>
                    <img src='${selected[i].image}' alt="desc"/>
                    <h3>${selected[i].name}</h3>
                    <p>${selected[i].description}</p>
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
