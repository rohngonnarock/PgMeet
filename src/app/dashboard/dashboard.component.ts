import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Character, CharacterService } from '../../app/models';


@Component({
    moduleId: module.id,
    selector: 'story-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnDestroy, OnInit {
    private dbResetSubscription: Subscription;

    characters: Observable<Character[]>;
    title: string;

    constructor(
        private characterService: CharacterService){}


    gotoDetail(character: Character) {
        let link = ['/characters', character.id];
        this.router.navigate(link);
    }

    ngOnDestroy() {
        this.dbResetSubscription.unsubscribe();
    }


    trackByCharacters(index: number, character: Character) {
        return character.id;
    }
}
