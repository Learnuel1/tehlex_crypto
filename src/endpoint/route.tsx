
export const USER_REGISTRATION_ENDPOINT = {
    REGISTER: '/auth/register',
    SENT_OTP:  '/auth/verify',
    VERIFY_OTP: '/auth/create',
}

export const LOGIN_ENDPOINT = {
    VERIFY_LOGIN: '/auth/login',
    LOGIN: 'auth/login-otp'
};

export const PASSWORD_RECOVERY = {
    RESET_PASSWORD_OTP: 'user/reset-otp',
    VERIFY_PASSWORD_RESET: '/user/verify-reset',
    RESET_PASSWORD: '/user/reset-password',
}

