import storageB2 from "@/lib/storageB2";
import formidable from "formidable";
import { promises as fs } from "fs";
import { NextApiRequest, NextApiResponse } from "next";

const parseForm = (
  req: NextApiRequest
): Promise<{ fields: any; files: any }> => {
  return new Promise((resolver, reject) => {
    const form = formidable({ multiples: true });
    form.parse(req, (err, fields, files) => {
      if (err) throw new Error("was an error" + err);
      resolver({ fields, files });
    });
  });
};

const multiplesFiles = (files: any) => {
  return Object.entries(files).map((el) => el[0]);
};

const uploadToB2 = async (url: any, file: any) => {
  const data = await fs.readFile(file.filepath);
  const fileName = `image-${Date.now()}-${Math.random() * 1000}-${
    file.originalFilename
  }`;
  return storageB2.uploadFile({
    uploadUrl: url.data.uploadUrl,
    uploadAuthToken: url.data.authorizationToken,
    fileName,
    data: data,
  });
};

export const uploadImage = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    await storageB2.authorize();

    const { files } = await parseForm(req);

    const filesArray = multiplesFiles(files);

    const uploadedResponse = await Promise.all(
      Object.entries(files).map(async (file, i) => {
        const url = await storageB2.getUploadUrl({
          bucketId: process.env.BUCKET_B2_ID as string,
        });

        return await uploadToB2(url, files[filesArray[i]]);
      })
    );

    res.json({
      status: "ok",
      message: "the document was saved succesfuly",
      data: uploadedResponse.map((image) => image.data.fileName),
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "an error was ocurred in the server" + error,
    });
  }
};
