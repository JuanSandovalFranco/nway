import B2 from "backblaze-b2";

const configB2 = new B2({
  applicationKeyId: process.env.STORAGE_BACKBLAZE_KEY_ID as string,
  applicationKey: process.env.STORAGE_BACKBLAZE_APPLICATION_KEY as string,
});

export default configB2;
