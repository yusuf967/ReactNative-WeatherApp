export default function (errorCode) {
    switch (errorCode) {
        case 'auth/invalid-email':
            return 'Geçersiz e-posta adresi';
        case 'auth/email-already-exists':
            return 'Kullanıcı zaten kayıtlı';
        case 'auth/user-not-found':
            return 'Kulanıcı  bulunamadı';
        case 'auth/week-password':
            return 'Parola çok zayıf';
        case 'auth/wrong-password':
            return 'Parola geçersiz';
        case 'auth/email-already-in-use':
            return 'E-mail zaten kayıtlı.';
        default:
            return 'hata';
    }
}

