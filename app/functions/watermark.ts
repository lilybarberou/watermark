import { createCanvas, loadImage } from 'canvas';
import { PDFDocument, degrees, rgb } from 'pdf-lib';

const text = 'document filligrané par le site filligrane.lilybarberou.fr ';
const watermarkText = text.toUpperCase().repeat(20);

export const addWatermarkOnImage = async (buffer: Buffer) => {
    // load img from buffer
    const image = await loadImage(buffer);

    // create canvas to edit image
    const canvas = createCanvas(image.width, image.height);
    const ctx = canvas.getContext('2d');

    // draw image on canvas
    ctx.drawImage(image, 0, 0);

    // add watermark diagonally
    const textHeight = 24;

    const widthLarger = image.width >= image.height;
    const heightLarger = image.height > image.width;
    const limit = widthLarger ? image.width : image.height;

    for (let y = -limit; y < limit; y += textHeight * 10) {
        ctx.save();
        if (widthLarger) ctx.translate(y, 0);
        if (heightLarger) ctx.translate(0, y);
        ctx.rotate(-100);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.font = '24px Arial';
        ctx.fillText(watermarkText, 0, 0);
        ctx.restore();
    }

    // convert canva to base64
    const base64 = canvas.toDataURL('image/jpeg');
    return base64;
};

export const addWatermarkOnPdf = async (buffer: Buffer) => {
    // create PDFDocument from buffer
    const pdfDoc = await PDFDocument.load(buffer);

    // get the first page of the document
    const page = pdfDoc.getPages()[0];

    // add watermark
    const font = await pdfDoc.embedFont('Helvetica');
    const size = 20;
    const color = rgb(0.7, 0.7, 0.7);
    const rotate = degrees(-50);
    const { width, height } = page.getSize();

    // right width to left (left = width right = 0)
    for (let x = 0; x < width; x += size * 8) {
        page.drawText(watermarkText, { x, y: height, size, font, color, rotate });
    }

    // top height to bottom (top = height bottom = 0)
    for (let y = height - 200; y > 0; y -= size * 8) {
        page.drawText(watermarkText, { x: 0, y, size, font, color, rotate });
    }

    // convert to buffer
    const modifiedPdfBuffer = await pdfDoc.save();
    const newBuffer = Buffer.from(modifiedPdfBuffer);
    const base64 = `data:application/pdf;base64,${newBuffer.toString('base64')}`;
    return base64;
};
