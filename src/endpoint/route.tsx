
export const USER_REGISTRATION_ENDPOINT = {
    REGISTER: '/auth/register',
    SENT_OTP:  '/auth/verify',
    VERIFY_OTP: '/auth/create'
}

export const LOGIN_ENDPOINT = {
    // VERIFY_LOGIN: '/auth/login',
    LOGIN: 'auth/login-otp'
};

export const PASSWORD_RECOVERY = {
    RECOVERY_lINK: '/user/recovery-mail',
    VERIFY_PASSWORD_RESET: '/user/verify-reset',
    RESET_PASSWORD: '/auth/reset-password',
}


