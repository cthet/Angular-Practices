import { Component, ComponentFactoryResolver, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { SocialCardType } from 'src/app/constants/social-card-type';
import { FbCardComponent } from '../fb-card/fb-card.component';
import { TwitterCardComponent } from '../twitter-card/twitter-card.component';

@Component({
  selector: 'app-social-card',
  templateUrl: './social-card.component.html',
  styleUrls: ['./social-card.component.scss']
})
export class SocialCardComponent implements OnInit, OnChanges {
  @Input() type!: SocialCardType;
  @ViewChild('vrf', { read: ViewContainerRef }) vrf!: ViewContainerRef;
  cardTypes = SocialCardType;
  
  constructor(
    //ComponentFactoryResolver is deprecated since Angular13
    //private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['type'].currentValue !== undefined) {
      this.loadDynamicComponent(changes['type'].currentValue);
    }
  }

  loadDynamicComponent(type: SocialCardType) {
    let component;
    switch (type) {
      case SocialCardType.Facebook:
        component = FbCardComponent;
        break;
      case SocialCardType.Twitter:
        component = TwitterCardComponent;
        break;
    }
    const componentFactory =
    //  ComponentFactoryResolver is deprecated since Angular13
    //  this.componentFactoryResolver.resolveComponentFactory(component);
    this.vrf.clear();
    this.vrf.createComponent(component);
  }

}
