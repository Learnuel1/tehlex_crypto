
export const USER_REGISTRATION_ENDPOINT = {
    REGISTER: '/auth/register',
    SENT_OTP:  '/auth/verify',
    VERIFY_OTP: '/auth/create',
}

export const LOGIN_ENDPOINT = {
    LOGIN: '/auth/login-otp',
    VERIFY_LOGIN: '/auth/login',
};

export const PASSWORD_RECOVERY = {
    RESET_PASSWORD_OTP: '/user/reset-otp',
    VERIFY_PASSWORD_RESET: '/user/verify-reset',
    RESET_PASSWORD: '/user/reset-password',
};

// ACCOUNT SETUP
export const ACCOUNT_SETUP_TRANSACTION_PIN = {
    SET_PIN: '/account/transaction-pin',
    GET_PIN: '/account/transaction-pin',
}

