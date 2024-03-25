import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgIconsModule} from "@ng-icons/core";
import {
  heroCheckCircleSolid,
  heroChevronDownSolid,
  heroChevronUpSolid,
  heroClipboardSolid,
  heroExclamationTriangleSolid,
  heroEyeSolid,
  heroHomeSolid,
  heroMagnifyingGlassSolid,
  heroSquares2x2Solid,
  heroStarSolid,
  heroUserCircleSolid,
  heroXCircleSolid,
  heroXMarkSolid,
} from "@ng-icons/heroicons/solid";
import {
  heroArrowRightEndOnRectangle,
  heroCheckCircle,
  heroExclamationCircle,
  heroPencil,
  heroStar,
  heroTrash,
  heroUser,
  heroXCircle
} from "@ng-icons/heroicons/outline";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({
      heroXCircle,
      heroCheckCircle,
      heroUserCircleSolid,
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
