/**
 * Converts seconds to H:M:S format
 * @param seconds 
 * @returns 
 */
export const formatTime = (seconds: number): string => {
    if (seconds && seconds > 0) {
        const hours = Math.trunc((seconds / 3600));
        const mins = Math.trunc(((seconds - hours * 3600) / 60));
        const secs = Math.trunc(seconds - (hours * 3600 + mins * 60));
        return `${hours < 9 ? '0' + hours : hours}:${mins < 9 ? '0' + mins : mins}:${secs < 9 ? '0' + secs : secs}`;
    }
    return '00:00:00';
}