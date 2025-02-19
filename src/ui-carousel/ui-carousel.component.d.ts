import { OnInit, QueryList, EventEmitter, ElementRef } from '@angular/core';
import 'rxjs/add/operator/throttleTime';
import { UICarouselItemComponent } from '../ui-carousel-item/ui-carousel-item.component';
export declare class UICarouselComponent implements OnInit {
    private el;
    private nextSubject;
    private prevSubject;
    onChange: EventEmitter<any>;
    height: string;
    width: string;
    speed: number;
    autoPlay: boolean;
    autoPlaySpeed: number;
    infinite: boolean;
    fade: boolean;
    isDotsVisible: boolean;
    isArrowsVisible: boolean;
    items: QueryList<UICarouselItemComponent>;
    private _width;
    currentItemIndex: number;
    interval: any;
    private firstItemIndex;
    private lastItemIndex;
    constructor(el: ElementRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    next(): void;
    prev(): void;
    goTo(index: number): void;
    rotateRightTo(index: number): void;
    rotateLeftTo(index: number): void;
    slideTo(index: number): void;
    slideLeft(): void;
    slideRight(): void;
    slideToPrevPosition(): void;
    disableTransition(): void;
    enableTransition(): void;
    getItemByIndex(index: number): UICarouselItemComponent;
    getIndexByItem(item: UICarouselItemComponent): number;
    rotateRightNTimes(n: number): void;
    rotateLeftNTimes(n: number): void;
    rotateRight(): void;
    rotateLeft(): void;
    fadeTo(index: number): void;
    fadeRight(): void;
    fadeLeft(): void;
    isItemFirst(index: number): boolean;
    isItemLast(index: number): boolean;
    onResize(event: any): void;
    rePosition(): void;
    ngOnDestroy(): void;
    autoPlayFunction(isAutoPlay: boolean): void;
}
