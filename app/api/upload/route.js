import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export default async function handler(req, res) {
    const { fileName, fileType } = req.query;

    const client = new S3Client({
        region: "auto",
        endpoint: process.env.NEXT_PUBLIC_CLOUDFLARE_ENDPOINT,
        credentials: {
            accessKeyId: process.env.NEXT_PUBLIC_CLOUDFLARE_ACCESS_ID,
            secretAccessKey: process.env.NEXT_PUBLIC_CLOUDFLARE_SECRET_KEY,
        },
    });

    const command = new PutObjectCommand({
        Bucket: process.env.NEXT_PUBLIC_CLOUDFLARE_BUCKET_NAME,
        Key: fileName,
        ContentType: fileType,
    });

    const signedUrl = await getSignedUrl(client, command, { expiresIn: 3600 });
    const url = await fetch(signedUrl, {
        method: "PUT",
        headers: {
            "Content-Type": file.type,
        },
        body: file,
    });
    res.status(200).json({ url: url, success: true });
}
