import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgIconsModule} from "@ng-icons/core";
import {
  heroCheckCircleSolid,
  heroChevronDownSolid,
  heroChevronLeftSolid,
  heroChevronRightSolid,
  heroChevronUpSolid,
  heroClipboardSolid,
  heroExclamationTriangleSolid,
  heroEyeSolid,
  heroHomeSolid,
  heroMagnifyingGlassSolid,
  heroSquares2x2Solid,
  heroStarSolid,
  heroUserCircleSolid,
  heroUserGroupSolid,
  heroXCircleSolid,
  heroXMarkSolid
} from "@ng-icons/heroicons/solid";
import {
  heroArrowRightEndOnRectangle,
  heroCheckCircle,
  heroCog8Tooth,
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
      heroCog8Tooth,
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
      heroChevronUpSolid,
      heroUserGroupSolid,
      heroChevronRightSolid,
      heroChevronLeftSolid
    })
  ],
  exports: [NgIconsModule]
})
export class IconModule {
}
