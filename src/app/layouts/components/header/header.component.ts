
import { Component, OnInit } from '@angular/core';
import {faFolderOpen,faShareFromSquare, faClone} from '@fortawesome/free-regular-svg-icons'
import {} from '@fortawesome/free-brands-svg-icons'
import {faEllipsis, faBars} from '@fortawesome/free-solid-svg-icons' 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  
  faFolder = faFolderOpen;
  faClone = faClone;
  faShare = faShareFromSquare;
  faEllipsis = faEllipsis;
  faBars = faBars;

  listLang = [
    {text: 'English', flag: 'assets/images/flags/20/us.svg', lang: 'en'},
    {text: 'Spanish', flag: 'assets/images/flags/20/es.svg', lang: 'sp'},
    {text: 'German', flag: 'assets/images/flags/20/de.svg', lang: 'gr'},
    {text: 'French', flag: 'assets/images/flags/20/fr.svg', lang: 'fr'},
    {text: 'Japanese', flag: 'assets/images/flags/20/jp.svg', lang: 'jp'},
    {text: 'Chinese', flag: 'assets/images/flags/20/china.svg', lang: 'ch'},
    {text: 'Italian', flag: 'assets/images/flags/20/it.svg', lang: 'it'},
    {text: 'Russian', flag: 'assets/images/flags/20/ru.svg', lang: 'ru'},
    {text: 'Arabic', flag: 'assets/images/flags/20/ae.svg', lang: 'ar'}
  ];

  ngOnInit(): void {
  }

}
