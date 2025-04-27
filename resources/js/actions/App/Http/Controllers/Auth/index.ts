import RegisteredUserController from './RegisteredUserController'
import AuthenticatedSessionController from './AuthenticatedSessionController'
import PasswordResetLinkController from './PasswordResetLinkController'
import NewPasswordController from './NewPasswordController'
import EmailVerificationPromptController from './EmailVerificationPromptController'
import VerifyEmailController from './VerifyEmailController'
import EmailVerificationNotificationController from './EmailVerificationNotificationController'

const Auth = {
    RegisteredUserController, 
    AuthenticatedSessionController, 
    PasswordResetLinkController, 
    NewPasswordController, 
    EmailVerificationPromptController, 
    VerifyEmailController, 
    EmailVerificationNotificationController,
}

export default Auth