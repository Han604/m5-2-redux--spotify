export const humanizeNumber = value => {
    let magnitude = String(value).length;
    
    if (magnitude <= 3) return String(value);

    if (magnitude > 3 && magnitude <= 6) {
        return value.toString().substr(0, magnitude - 3) + 'K';
    }

    if (magnitude > 6 && magnitude <= 9) {
        return value.toString().substr(0, magnitude - 6) + 'M';
    }

    if (magnitude > 9) {
        return value.toString().substr(0, magnitude - 9) + 'B';
    }
};