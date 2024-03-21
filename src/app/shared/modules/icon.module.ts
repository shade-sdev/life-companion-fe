import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgIconsModule} from "@ng-icons/core";
import {
  heroCheckCircleSolid,
  heroClipboardSolid,
  heroEyeSolid,
  heroHomeSolid,
  heroMagnifyingGlassSolid,
  heroStarSolid,
  heroXCircleSolid,
  heroXMarkSolid,
  heroExclamationTriangleSolid,
  heroChevronUpSolid,
  heroSquares2x2Solid,
  heroChevronDownSolid
} from "@ng-icons/heroicons/solid";
import {heroExclamationCircle, heroPencil, heroStar, heroTrash, heroUser, heroArrowRightEndOnRectangle} from "@ng-icons/heroicons/outline";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({
      heroChevronDownSolid,
      heroArrowRightEndOnRectangle,
      heroUser,
      heroSquares2x2Solid,
      heroXCircleSolid,
      heroXMarkSolid,
      heroCheckCircleSolid,
      heroHomeSolid,
      heroMagnifyingGlassSolid,
      heroPencil,
      heroTrash,
      heroStar,
      heroStarSolid,
      heroClipboardSolid,
      heroEyeSolid,
      heroExclamationTriangleSolid,
      heroExclamationCircle,
      heroChevronUpSolid
    })
  ],
  exports: [NgIconsModule]
})
export class IconModule {
}
