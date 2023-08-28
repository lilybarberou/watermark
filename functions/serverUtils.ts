import { fileTypeFromBuffer } from 'file-type';
import path from 'path';

const maxSize = 5 * 1024 * 1024; // 10 Mo
const allowedExtensions = ['jpg', 'jpeg', 'png', 'pdf'];
const allowedMimeTypes = ['image/jpeg', 'image/png', 'application/pdf'];

export const checkFileServer = async (file: File) => {
    try {
        if (!file) throw 'Aucun fichier trouvé.';

        // CHECK FILE SIZE
        if (file.size > maxSize) throw 'Fichier trop volumineux.';

        // CHECK FILE TYPE
        const fileExtension = path.extname(file.name).slice(1).toLowerCase();
        const buffer = Buffer.from(await file.arrayBuffer());
        const type = await fileTypeFromBuffer(buffer);

        if (!type) throw 'Type de fichier non reconnu.';
        if (fileExtension !== type?.ext) throw 'Extension de fichier non valide.';
        if (!allowedExtensions.includes(type?.ext)) throw 'Extension de fichier non autorisée.';
        if (!allowedMimeTypes.includes(type?.mime)) throw 'Type MIME de fichier non autorisé.';

        return { ext: type.ext, mime: type.mime };
    } catch (err) {
        console.log(err);
        if (typeof err === 'string') return { error: err };
        return { error: 'Une erreur est survenue lors de la vérification du fichier.' };
    }
};
