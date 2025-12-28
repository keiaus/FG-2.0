const rand = () => {
    return Math.random().toString(36).substring(2); // remove `0`
}

export const tokenGenerator = () => {
    return rand() + rand();
}
