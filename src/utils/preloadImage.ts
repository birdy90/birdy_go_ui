export const preloadImage = async (src: string): Promise<void> => {
    await new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = resolve;
        image.onerror = reject;
        image.src = src;
    });
};
