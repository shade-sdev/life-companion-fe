import {UUID} from "../../util/uuid";

export class TelegramFile {
  id?: UUID;
  remoteId?: string;
  fileName?: string;
  fileSize?: string;
  uploadedDate?: Date;
}
