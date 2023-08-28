import { NextResponse } from 'next/server';
import { checkFileServer } from '@functions/serverUtils';
import { addWatermarkOnImage, addWatermarkOnPdf } from '@functions/watermark';

export async function POST(req: Request) {
    try {
        const data = await req.formData();
        const file = data.get('file') as File;

        // CHECK FILE -------------
        const checkRes = await checkFileServer(file);
        if (!checkRes || checkRes.error) return NextResponse.json({ error: checkRes.error });

        // CONVERT FILE TO BUFFER -------------
        const buffer = Buffer.from(await file.arrayBuffer());
        let base64 = '';

        // ADD WATERMARK -------------
        if (checkRes.mime === 'application/pdf') {
            base64 = await addWatermarkOnPdf(buffer);
        } else if (file.type === 'image/jpeg' || file.type === 'image/png') {
            base64 = await addWatermarkOnImage(buffer);
        }

        return NextResponse.json({ base64 });
    } catch (err) {
        console.log(err);
        return NextResponse.error();
    }
}
