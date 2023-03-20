
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
    // FORGOT_PASSWORD: '/user/forgot-password',
    VERIFY_PASSWORD_RESET: '/user/verify',
    RECOVERY_lINK: '/user/recovery-mail',
    RESET_PASSWORD: '/user/reset-password',
}


