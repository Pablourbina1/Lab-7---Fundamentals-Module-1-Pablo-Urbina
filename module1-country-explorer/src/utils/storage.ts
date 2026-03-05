const FAVKEY = "favoriteCountries";



// Funciones

export function getFavorite(): string[]{
    const data = localStorage.getItem(FAVKEY);
    if (!data){
        return [];
    }
    return JSON.parse(data);
}

export function saveFavorite(favorites: string[]): void{
    localStorage.setItem(FAVKEY, JSON.stringify(favorites));
}

export function addFavorite(id: string): void{
    const favorito = getFavorite();
    if (!favorito.includes(id)) {
        favorito.push(id);
        saveFavorite(favorito);
    }
}

export function deleteFavorite(id: string): void{
    const favorito = getFavorite().filter(f => f !== id);
    saveFavorite(favorito);
}

export function clearFavorite(): void{
    localStorage.removeItem(FAVKEY);
}

export function isFavorite(id : string): boolean{
    return getFavorite().includes(id)
}