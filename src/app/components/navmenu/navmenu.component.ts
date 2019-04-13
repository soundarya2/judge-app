
    import { Component, OnInit } from '@angular/core';

    @Component({
    selector: 'app_navmenu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
    })
    export class NavmenuComponent implements OnInit {
    menuList = [{"displayName":"Judges","url":"judges"},{"displayName":"Participants","url":"participants"}]
    constructor() { }

    ngOnInit() {
    }

    }

