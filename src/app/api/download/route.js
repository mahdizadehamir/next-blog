import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { NextResponse } from 'next/server';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
const client = new S3Client({
  region: 'default',
  endpoint: process.env.LIARA_ENDPOINT,
  credentials: {
    accessKeyId: process.env.LIARA_ACCESS_KEY,
    secretAccessKey: process.env.LIARA_SECRET_KEY,
  },
});

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('filename');

  if (!filename) {
    return NextResponse.json({ error: 'No filename provided' }, { status: 400 });
  }
  const params = {
    Bucket: process.env.LIARA_BUCKET_NAME,
    Key: filename,
  };
  try {
    const command = new GetObjectCommand(params);
    const res = await getSignedUrl(client, command);
    console.log(res);
    return NextResponse.json({ url: res, status: 'success' });
  } catch (error) {
    console.error('Error downloading image from S3:', error);
    return NextResponse.json({ error: 'Failed to download image from S3' }, { status: 500 });
  }
}
