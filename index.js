//very first commit on master here and there

import Toast, { ToastPosition } from 'react-native-toast-message';

/**
 * function to show toast message on screen
 * @param message
 */
export const showToast = (
    type: string = 'success',
    message: string = 'OOPS! something went wrong, please try again.',
    position: ToastPosition = 'bottom',
) => {
    Toast.show({
        type,
        position,
        text1: message,
        visibilityTime: 2000,
        loyal: false,
        name: "nitish"
    });
};


/**
 * function to show toast message on screen
 * @param message
 */
export const showToastNew = (
    type: string = 'success',
) => {
    Toast.show({
        type,
    });
};