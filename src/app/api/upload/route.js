import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { NextResponse } from 'next/server';

const imgHostName = 'https://imgupload.storage.c2.liara.space';

const client = new S3Client({
  region: 'default',
  endpoint: process.env.LIARA_ENDPOINT,
  credentials: {
    accessKeyId: process.env.LIARA_ACCESS_KEY,
    secretAccessKey: process.env.LIARA_SECRET_KEY,
  },
});

export async function POST(request) {
  const { image, filename } = await request.json();
  const buffer = Buffer.from(image, 'base64');

  const params = {
    Body: buffer,
    Bucket: process.env.LIARA_BUCKET_NAME,
    Key: filename,
    ContentEncoding: 'base64',
    ContentType: 'image/jpeg',
    ACL: 'public-read',
  };

  try {
    const command = new PutObjectCommand(params);
    await client.send(command);
    return NextResponse.json({
      status: 'success',
      url: `${imgHostName}/${filename}`,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to upload image to S3' }, { status: 500 });
  }
}
