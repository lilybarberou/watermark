const maxSize = 5 * 1024 * 1024; // 10 Mo
const allowedExtensions = ['jpg', 'jpeg', 'png', 'pdf'];
const allowedMimeTypes = ['image/jpeg', 'image/png', 'application/pdf'];

export const checkFileClient = (file: File): string | undefined => {
    if (!file) return 'Aucun fichier trouvé.';

    // CHECK FILE SIZE
    if (file.size > maxSize) return 'Fichier trop volumineux.';

    // CHECK FILE TYPE
    const fileExtension = file.name.split('.').pop()?.toLowerCase() || '';
    if (!allowedExtensions.includes(fileExtension)) return 'Extension de fichier non autorisée.';
    if (!allowedMimeTypes.includes(file.type)) return 'Type MIME de fichier non autorisé.';
};
