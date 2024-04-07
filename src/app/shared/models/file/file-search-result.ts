import {Pageable} from "../common/pageable";
import {TelegramFile} from "./telegram-file";

export class FileSearchResult extends Pageable {
  elements!: Array<TelegramFile>
}
