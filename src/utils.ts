export const debouncedLocalStorageSetter = (key: string) => {
    let timerRef: NodeJS.Timeout | null = null;
    return (data: any) => {
        if (timerRef) clearTimeout(timerRef);
        timerRef = setTimeout(() => {
            console.log("Saving data to local storage", key, data);
            localStorage.setItem(key, JSON.stringify(data));
        }, 500);
    };
};
