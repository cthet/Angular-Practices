import { FocusKeyManager } from '@angular/cdk/a11y';
import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  HostListener,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { AppUserCard } from 'src/interfaces/app-user-card.interface';
import { TheAmazingListItemComponent } from '../the-amazing-list-item/the-amazing-list-item.component';

@Component({
  selector: 'app-the-amazing-list',
  templateUrl: './the-amazing-list.component.html',
  styleUrls: ['./the-amazing-list.component.scss'],
  host: {
    role: 'list',
  },
})
export class TheAmazingListComponent implements OnInit, AfterViewInit {
  @Input() listItems: Partial<AppUserCard>[] | null = [];
  @ViewChildren(TheAmazingListItemComponent)
  listItemsElements!: QueryList<TheAmazingListItemComponent>;
  popoverMenuTrigger!: CdkOverlayOrigin;
  menuShown = false;
  menuPositions:     {
    offsetY: number,
    originX: "center" | "start" | "end",
    originY: "center" | "top" | "bottom",
    overlayX: "center" | "start" | "end",
    overlayY: "center" | "top" | "bottom",
  }[] = [
    {
      offsetY: 4,
      originX: 'end',
      originY: 'bottom',
      overlayX: 'end',
      overlayY: 'top',
    },
    {
      offsetY: -4,
      originX: 'end',
      originY: 'top',
      overlayX: 'end',
      overlayY: 'bottom',
    },
  ];
  menuPopoverOrigin = {
    originY: '',
  };

  private listKeyManager!: FocusKeyManager<TheAmazingListItemComponent>;

  @HostListener('window:keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    this.listKeyManager.onKeydown(event);
  }
  constructor(private cdRef: ChangeDetectorRef) {}

  popoverPositionChanged($event: { connectionPair: { originY: any; }; }, popover: { originY: any; }) {
    if (popover.originY !== $event.connectionPair.originY) {
      popover.originY = $event.connectionPair.originY;
    }
    this.cdRef.detectChanges();
  }

  ngOnInit(): void {}

  openMenu($event: { stopImmediatePropagation: () => void; }, itemTrigger: CdkOverlayOrigin) {
    if ($event) {
      $event.stopImmediatePropagation();
    }
    this.popoverMenuTrigger = itemTrigger;
    this.menuShown = true;
  }

  ngAfterViewInit() {
    this.listKeyManager = new FocusKeyManager(this.listItemsElements);
  }
}
