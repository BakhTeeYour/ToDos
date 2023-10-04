export const customLocalStorage = {
    set: (key: string, value: any) => {
        localStorage.setItem(key, JSON.stringify(value))
    },
    get: (key: string): any  => {
        return JSON.parse(localStorage.getItem(key)!)
    },
    remove: (key: string) => {
        localStorage.removeItem(key)
    },
};